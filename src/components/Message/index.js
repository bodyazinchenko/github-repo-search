import React from 'react';
import { Alert } from 'reactstrap';

const Message = ({ type, text }) => (
  <div className="error-wrap container">
    <div className="row justify-content-center">
      <div className="col-4">
        <Alert color={type}>{text}</Alert>
      </div>
    </div>  
  </div>
);

export default Message;
