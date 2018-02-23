import React from 'react';
import RequestEntry from './RequestEntry';

const RequestList = (props) => (
  <div className="RequestList my-3 p-3 bg-white rounded box-shadow">
    <h6 className="border-bottom border-gray pb-2 mb-0">{props.title}</h6>
    {props.requests.map((request) => {
      return <RequestEntry request={request} />
    })}
  </div>
);




export default RequestList;
