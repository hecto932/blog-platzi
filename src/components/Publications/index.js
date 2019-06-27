import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as usersActions from '../../actions/usersActions';
import * as publicationsActions from '../../actions/publicationsActions';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import Comments from './Comments'

class Publications extends Component {
  async componentDidMount() {
    const { getUsers, getPublicationsByUser } = this.props;
    const { key: userId } = this.props.match.params;
    if (!this.props.usersReducer.users.length) {
      await getUsers();
    }
    if (this.props.usersReducer.error) {
      return;
    }
    if (!('lastPublicationKey' in this.props.usersReducer.users[userId])) {
      getPublicationsByUser(userId);
    }
  }

  handleCreateUser = () => {
    const {
      usersReducer,
      match: {
        params: { key }
      }
    } = this.props;

    if (usersReducer.error) {
      return <Fatal message={usersReducer.error} />;
    }

    if (!usersReducer.users.length || usersReducer.isLoading) {
      return <Spinner />;
    }

    const { name } = usersReducer.users[key];

    return <h1>{name} publications</h1>;
  };

  handlePublications = () => {
    const {
      usersReducer,
      usersReducer: { users },
      publicationsReducer,
      publicationsReducer: { publications },
      match: {
        params: { key }
      }
    } = this.props;

    if (!users.length) {
      return;
    }

    if (usersReducer.error) {
      return;
    }

    if (publicationsReducer.isLoading) {
      return <Spinner />;
    }

    if (publicationsReducer.error) {
      return <Fatal message={publicationsReducer.error} />;
    }

    if (!publications.length) {
      return;
    }

    if (!('lastPublicationKey' in users[key])) {
      return;
    }

    const { lastPublicationKey } = users[key];

    return this.showInfo(publications[lastPublicationKey], lastPublicationKey)
  };

  showInfo = (publications, pub_key) => (
    publications.map((publication, com_key) => (
      <div
        className="pub_title"
        key={publication.id}
        onClick={() => this.showComments(pub_key, com_key, publication.comments) }
      >
        <h2>{publication.title}</h2>
        <h3>{publication.body}</h3>
        {
          (publication.open) ? <Comments comments={publication.comments}/> : ''
        }
      </div>
    ))
  )

  showComments = (pub_key, com_key, comments) => {
    this.props.openClose(pub_key, com_key)
    if (!(comments.length)) {
      this.props.getComments(pub_key, com_key)
    }
  }

  render() {
    console.log(this.props);

    return (
      <div className="margin">
        {this.handleCreateUser()}
        {this.handlePublications()}
      </div>
    );
  }
}

const mapStateToProps = ({ usersReducer, publicationsReducer }) => {
  return {
    usersReducer,
    publicationsReducer
  };
};

const mapDispatchToProps = {
  ...usersActions,
  ...publicationsActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Publications);
