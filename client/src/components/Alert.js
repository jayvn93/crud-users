import React from "react";

const Alert = ({ message, show }) => {
  return (
    <div
      class="alert alert-success"
      role="alert"
      style={{ display: show ? "block" : "none" }}
    >
      <div>{message}</div>
    </div>
  );
};

export default Alert;
