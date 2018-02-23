import React from 'react';
import DocumentEntry from './DocumentEntry';

const DocumentList = (props) => (
  <div className="DocumentList my-3 p-3 bg-white rounded box-shadow">
    <h6 className="border-bottom border-gray pb-2 mb-0">{props.title}</h6>
    {props.documents.map((document) => {
      return <DocumentEntry document={document} handleSelection={props.handleSelection} />
    })}
  </div>
);

export default DocumentList;
