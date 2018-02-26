import React, { Component } from 'react';
import '../styles/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar navbar navbar-expand-md static-top navbar-dark">
        <a className="navbar-brand" href="#">Bearalegal</a>

      <div className="navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className={ this.props.currentView === 'dashboard' ? `nav-item active` : `nav-item`}>
            <a className="nav-link" href="#" onClick={(e) => {
              this.props.handleSelection('dashboard');

            }}>Dashboard <span className="sr-only">(current)</span></a>
          </li>
          <li className={ this.props.currentView === 'manage' ? `nav-item active` : `nav-item`}>
            <a className="nav-link" href="#" onClick={(e) => {
              this.props.handleSelection('manage');

            }}>Manage Bearalegal</a>
          </li>
          <li className={ this.props.currentView === 'adddocument' ? `nav-item active` : `nav-item`}>
            <a className="nav-link" href="#" onClick={(e) => {
              this.props.handleSelection('adddocument');

            }}>Add Document</a>
          </li>
        </ul>
      </div>
    </nav>
    );
  }
}

export default Navbar;
