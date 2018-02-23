import React, { Component } from 'react';

class AddDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.documentNameValue = '';
    this.state.documentShortValue = '';
    this.state.documentDescriptionValue = '';
    this.state.documentTypeValue = '';
  }

  catchFormSubmit(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append('full', e.target.documentName.value);
    formData.append('short', e.target.shortName.value.toLowerCase());
    formData.append('type', e.target.documentType.value.toLowerCase());
    formData.append('description', e.target.documentDescription.value);
    formData.append('selectedFile', e.target.selectedFile.files[0]);

    e.target.reset();

    this.props.handleAdd(formData);
  }

  render() {
    return (
      <form onSubmit={this.catchFormSubmit.bind(this)} encType="multipart/form-data">

        <div className="form-group">
          <label htmlFor="documentName">Document Name</label>
          <input type="text" className="form-control" id="documentName" ></input>
        </div>

        <div className="form-group">
          <label htmlFor="shortName">Short Name</label>
          <input type="text" className="form-control" id="shortName" ></input>
          <small id="passwordHelpBlock" className="form-text text-muted">
            Please enter a one-word, short name for this document (e.g., Shareholder Rights Agreement can be <strong>shareholders</strong>). <strong>Important: you can not edit short names once you've created a document</strong> (though documents can be deleted and re-created with a new short name).
          </small>
        </div>

        <div className="form-group">
          <label for="documentType">Document Type</label>
          <select className="form-control" id="documentType">
            <option>Form</option>
            <option>Policy</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="documentDescription">Description</label>
          <input type="text" className="form-control" id="documentDescription"></input>
        </div>

        <div className="form-group">
          <label for="selectedFile">Upload new file</label>
          <input type="file" className="form-control-file" id="selectedFile" ></input>
        </div>

        <button type="submit" className="btn btn-sm btn-primary">Submit</button>
        <button className="btn btn-sm btn-secondary" onClick={this.props.cancel} >Cancel</button>

      </form>
    );
  }
}

export default AddDocument;
