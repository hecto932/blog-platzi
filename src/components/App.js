import React from "react";

const App = props => {
  const createRows = () => [
    <tr>
      <td>Hector</td>
      <td>hecto932@gmail.com</td>
      <td>
        <a href="https://github.com/hecto932">hectorLink</a>
      </td>
    </tr>,
    <tr>
      <td>Hector</td>
      <td>hecto932@gmail.com</td>
      <td>
        <a href="https://github.com/hecto932">hectorLink</a>
      </td>
    </tr>
  ];
  return (
    <div className="margin">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {createRows()}
        </tbody>
      </table>
    </div>
  );
};

export default App;
