import React from 'react';

const DocumentEntry = (props) => (
  <div className="DocumentEntry media text-muted pt-3">
    <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
      <div className="d-flex justify-content-between align-items-center w-100">
        <strong className="text-gray-dark">{props.document.full}</strong>
          <div class="btn-group" role="group" aria-label="Basic example">
            <a class="btn btn-secondary btn-sm" href={`/api/documents/${props.document.short}`}>Download</a>
            <a class="btn btn-secondary btn-sm" href="#" onClick={(e) => {
              props.handleSelection('update', props.document);
            }}>Update</a>
            <a class="btn btn-danger btn-sm" href="#" onClick={(e) => {
              props.handleSelection('delete', props.document);
            }}>Delete</a>
          </div>
      </div>
      <span className="d-block">{props.document.description}</span>
      <span className="d-block">&nbsp;</span>
      <span className="d-block">To access in Slack: <code>/legal {props.document.short }</code></span>
    </div>
  </div>
);

export default DocumentEntry;
