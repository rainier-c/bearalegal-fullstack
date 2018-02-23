import React, { Component } from 'react';

class UpdateDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.documentNameValue = this.props.document.full;
    this.state.documentShortValue = this.props.document.short.toLowerCase();
    this.state.documentTypeValue = this.props.document.type;
    this.state.documentDescriptionValue = this.props.document.description;
  }

  handleNameChange(e) {
    this.setState({documentNameValue: e.target.value});
  }

  handleShortChange(e) {
    this.setState({documentShortValue: e.target.value});
  }

  handleDescriptionChange(e) {
    this.setState({documentDescriptionValue: e.target.value});
  }

  handleTypeChange(e) {
    this.setState({documentTypeValue: e.target.value});
  }

  handleFileSelectChange(e) {
  }

  catchFormSubmit(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append('_id', this.props.document._id);
    formData.append('full', e.target.documentName.value);
    formData.append('short', e.target.shortName.value);
    formData.append('type', e.target.documentType.value.toLowerCase());
    formData.append('description', e.target.documentDescription.value);
    formData.append('selectedFile', e.target.selectedFile.files[0]);

    // reset state
    this.setState({
      documentNameValue: '',
      documentShortValue: '',
      documentTypeValue: '',
      documentDescriptionValue: ''
    });

    this.props.handleUpdate(formData);
  }

  render() {
    return (
      <form onSubmit={this.catchFormSubmit.bind(this)} encType="multipart/form-data">

        <div className="form-group">
          <label htmlFor="documentName">Document Name</label>
          <input type="text" className="form-control" id="documentName" value={this.state.documentNameValue} onChange={this.handleNameChange.bind(this)} ></input>
        </div>

        <div className="form-group">
          <label htmlFor="shortName">Short Name</label>
          <input type="text" className="form-control" id="shortName" value={this.state.documentShortValue} readonly="true"></input>
          <small id="passwordHelpBlock" className="form-text text-muted">
            Short names aren't editable.
          </small>
        </div>

        <div className="form-group">
          <label for="documentType">Document Type</label>
          <select className="form-control" id="documentType" value={this.state.documentTypeValue} onChange={this.handleTypeChange.bind(this)}>
            <option value="form">Form</option>
            <option value="policy">Policy</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="documentDescription">Description</label>
          <input type="text" className="form-control" id="documentDescription" value={this.state.documentDescriptionValue} onChange={this.handleDescriptionChange.bind(this)}></input>
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

export default UpdateDocument;
