import React from 'react';
import RequestEntry from './RequestEntry';

const RequestList = (props) => (
  <div className="RequestList my-3 p-3 bg-white rounded box-shadow">
    <h6 className="border-bottom border-gray pb-2 mb-0">{props.title}</h6>
    {props.requests.map((request, index) => {
      if (index < 10) {
        return <RequestEntry request={request} />
      }
    })}
    <div className="text-right padding-small p-3">
      <button className="btn btn-sm btn-secondary" onClick={(e) => {
        props.handleSelection('allrequests');
      }} >View all requests</button>

    </div>
  </div>
);


export default RequestList;
