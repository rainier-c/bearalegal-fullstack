import React from 'react';

const Delete = (props) => (
  <div className="RequestList my-3 p-3 bg-white rounded box-shadow">
    <h6 className="border-bottom border-gray pb-2 mb-0">Warning!</h6>
    <div>Are you sure you want to delete {props.document.full}? Please make sure you have saved a local backup before deleting!</div>
    <button className="btn btn-sm btn-secondary" onClick={props.cancel} >Cancel</button>
    <button type="submit" className="btn btn-sm btn-danger" onClick={(e) => {
      props.handleDelete(props.document._id)
    }}>Delete this file</button>
  </div>
);




export default Delete;
