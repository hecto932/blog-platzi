import React from 'react'
import { connect } from 'react-redux'

import Spinner from '../General/Spinner'
import Fatal from '../General/Fatal'

const Comments = props => {
  console.log(props);
  if (props.error_comments) {
    return <Fatal message={props.error_comments} />
  }

  if (props.isLoadingComments && !(props.comments.length)) {
    return <Spinner />
  }

  const renderComments = () => (
    props.comments.map((comment) => (
      <li key={comment.id}>
        <b>
          <u>
            { comment.email }
          </u>
        </b>
        <br />
        {comment.body}
      </li>
    ))
  )
  return (
    <ul>
      {renderComments()}
    </ul>
  )
}

const mapStateToProps = ({ publicationsReducer }) => publicationsReducer

export default connect(mapStateToProps)(Comments)