/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var RatchetLayout = React.createClass({
  getDefaultProps: function() {
    return {};
  },

  isActive: function(target) {
    var uri = this.props.uri[0];
    if (uri === target) {
      return 'active';
    } else {
      return '';
    }
  },

  render: function() {
    return (
      <div>
        <header className="bar bar-nav">
          <h1 className="title">{ this.props.title || 'English 3000 - Production by CaPheShift' }</h1>
          <a className="btn btn-link btn-nav pull-left" href="#">
            <span className="icon icon-left-nav"></span>
          </a>
        </header>

        <div className="container-ratchet">
          {this.props.children}
        </div>

        <nav className="bar bar-tab">
          <a className={ "tab-item " + this.isActive('')} href="#/">
            <span className="icon icon-home"></span>
            <span className="tab-label">Home</span>
          </a>
          <a className={ "tab-item " + this.isActive('history')} href="#/history">
            <span className="icon icon-star-filled"></span>
            <span className="tab-label">Favorites</span>
          </a>
        </nav>
      </div>
    );
  }
});

module.exports = RatchetLayout;
