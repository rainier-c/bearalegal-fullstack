import React from 'react';
import moment from 'moment';

const RequestEntry = (props) => (
  <div className="RequestEntry media text-muted pt-3">
    <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
      <div className="d-flex justify-content-between align-items-center w-100">
        <strong className="text-gray-dark">
        { props.request.text !== '' ?
          `${props.request.user_name} asked Bearalegal for the ${props.request.text }`
          :
          `${props.request.user_name} summoned Bearalegal without entering any commands.`
        }
        </strong>
      </div>
      <span className="d-block">{moment(props.request.created_at).calendar()}</span>
    </div>
  </div>
);

export default RequestEntry;
