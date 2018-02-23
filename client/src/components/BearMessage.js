import React from 'react';

const BearMessage = (props) => (
  <div className="BearMessage my-3 p-3 bg-white rounded box-shadow">
    <span className="avatar"></span>{props.message}
  </div>
);

export default BearMessage;
