import React from "react";

const RowDetails = ({ Email, Lastname, Firstname, Age, Id, OnDelete }) => {
  return (
    <tr>
      <th>{Email}</th>
      <td>{Lastname}</td>
      <td>{Firstname}</td>
      <td>{Age}</td>
      <td className="gap__actions">
        <span className="badge bg-info">
          <a href={`/${Id}`} className="text-white">
            <i className="fas fa-edit"></i>
          </a>
        </span>
        <span className="badge bg-danger" onClick={() => OnDelete(Id)}>
          <i className="fas fa-trash-alt"></i>
        </span>
      </td>
    </tr>
  );
};

export default RowDetails;
