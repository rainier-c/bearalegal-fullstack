import React, { Component } from "react";
import Navbar from "./Navbar";
import DocumentList from "./DocumentList";
import RequestList from "./RequestList";
import RequestListAll from "./RequestListAll";
import UpdateDocument from "./UpdateDocument";
import BearMessage from "./BearMessage";
import AddDocument from "./AddDocument";
import Delete from "./Delete";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.bearMessages = {
      dashboard: "Here are some stats about what your team is asking for.",
      manage:
        "Below are the forms and policies I can share with folks in your organization.",
      delete: "Please be careful!",
      update: "You can update this document below.",
      adddocument: `You can add a document here! All fields are required, and don't forget to select the file!`,
      signin: "Welcome back! Please sign in below."
    };
    this.state.forms = [];
    this.state.policies = [];
    this.state.statistics = [];
    this.state.requests = [];
    this.state.showSignIn = false;
    this.state.viewSelection = "dashboard";
    this.state.itemSelection = null;
    this.state.requestData = null;
  }

  cancel() {
    this.setState({
      viewSelection: "manage"
    });
  }

  getDocuments() {
    fetch("/api/documents")
      .then(res => {
        console.log('this was called');
        
        return res.json();
      })
      .then(resJSON => {
        this.setState({
          forms: resJSON.filter(item => {
            return item.type === "form";
          }),
          policies: resJSON.filter(item => {
            return item.type === "policy";
          })
        });
      })
      .catch(err => {
        console.log('errors');
        throw err;
      });
  }

  getRequests() {
    let app = this;

    fetch("/api/requests")
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(resJSON => {
        this.setState({
          requests: resJSON
        });
      })
      .catch(err => {
        throw err;
      });
  }

  handleAddDocument(formData) {
    fetch("/api/documents", {
      method: "POST",
      body: formData
    })
      .then(res => {
        this.setState({
          viewSelection: "manage"
        });
        return res.json();
      })
      .then(resJSON => {
        this.getDocuments();
      })
      .catch(err => {
        throw err;
      });
  }

  handleUpdateDocument(formData) {
    fetch("/api/documents", {
      method: "PUT",
      body: formData
    })
      .then(res => {
        this.setState({
          viewSelection: "manage"
        });

        this.getDocuments();
        return res.json();
      })
      .then(resJSON => {})
      .catch(err => {
        throw err;
      });
  }

  handleDeleteDocument(id) {
    fetch(`/api/documents/${id}`, {
      method: "DELETE"
    })
      .then(res => {
        this.setState({
          viewSelection: "manage"
        });
        this.getDocuments();

        return res.json();
      })
      .then(resJSON => {})
      .catch(err => {
        throw err;
      });
  }

  // renderSignIn() {
  //   if (this.state.showSignIn) {
  //     return <SignIn />;
  //   } else {
  //     return <div />;
  //   }
  // }

  handleSelection(view, item) {
    this.setState({
      viewSelection: view,
      itemSelection: item || null
    });
  }

  renderNavbar() {
    if (!this.state.showSignIn) {
      return (
        <Navbar
          currentView={this.state.viewSelection}
          handleSelection={this.handleSelection.bind(this)}
        />
      );
    } else {
      return <div />;
    }
  }

  renderRequests() {
    if (this.state.viewSelection === "allrequests") {
      return (
        <RequestListAll
          title="All Requests"
          requests={this.state.requests}
          handleSelection={this.handleSelection.bind(this)}
        />
      );
    } else {
      return <div />;
    }
  }

  renderDashboardComponents() {
    if (!this.state.showSignIn && this.state.viewSelection === "dashboard") {
      return (
        <div className="dashBoardComponents">
          <div className="d-flex align-items-center p-3 my-3" />

          <RequestList
            title="Recent Requests"
            requests={this.state.requests}
            handleSelection={this.handleSelection.bind(this)}
          />
        </div>
      );
    } else {
      return <div />;
    }
  }

  renderDocumentComponents() {
    if (!this.state.showSignIn && this.state.viewSelection === "manage") {
      return (
        <div className="documentComponents">
          <div className="d-flex align-items-center p-3 my-3" />
          <DocumentList
            title="Forms"
            documents={this.state.forms}
            handleSelection={this.handleSelection.bind(this)}
          />
          <DocumentList
            title="Policies"
            documents={this.state.policies}
            handleSelection={this.handleSelection.bind(this)}
          />
        </div>
      );
    } else {
      return <div />;
    }
  }

  renderAdd() {
    if (this.state.viewSelection === "adddocument") {
      return (
        <AddDocument
          handleAdd={this.handleAddDocument.bind(this)}
          cancel={this.cancel.bind(this)}
        />
      );
    } else {
      return <div />;
    }
  }

  renderUpdate() {
    if (this.state.viewSelection === "update") {
      return (
        <UpdateDocument
          handleUpdate={this.handleUpdateDocument.bind(this)}
          document={this.state.itemSelection}
          cancel={this.cancel.bind(this)}
        />
      );
    } else {
      return <div />;
    }
  }

  renderDelete() {
    if (this.state.viewSelection === "delete") {
      return (
        <Delete
          handleDelete={this.handleDeleteDocument.bind(this)}
          document={this.state.itemSelection}
          cancel={this.cancel.bind(this)}
        />
      );
    } else {
      return <div />;
    }
  }

  componentDidMount() {
    this.getDocuments();
    this.getRequests();
  }

  render() {
    return (
      <div className="App">
        {this.renderNavbar()}
        <main role="main" className="container">
          <BearMessage
            message={this.state.bearMessages[this.state.viewSelection]}
          />
          {this.renderRequests()}
          {this.renderUpdate()}
          {this.renderDelete()}
          {this.renderAdd()}
          {this.renderDashboardComponents()}
          {this.renderDocumentComponents()}
        </main>
      </div>
    );
  }
}

export default App;
