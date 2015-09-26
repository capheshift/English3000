/**
 * @jsx React.DOM
 */
'use strict';

var DEBUG = false;
var _name = 'Navbar.jsx';
var React = require('react');
var Link = React.createFactory(require('./Link'));

var Navbar = React.createClass({

  displayName: _name,

  render() {
    return (
        <nav class="bar-tab">
          <a class="tab-item" href="#">
            <span class="icon icon-home"></span>
            <span class="tab-label">Historys</span>
          </a>
          <a class="tab-item" href="#">
            <span class="icon icon-person"></span>
            <span class="tab-label">Favorites</span>
          </a>
          <a class="tab-item" href="#">
            <span class="icon icon-gear"></span>
            <span class="tab-label">Search</span>
          </a>
        </nav>
    );
  },

  /**
   * Internal Methods
   */
  _checkUri: function(uriCompare) {
    var _uri = this.props.uri[0];
    if (DEBUG) {
      console.log('[*] ' + _name + ':_checkUri ---');
      console.log(uriCompare);
      console.log(this.props.uri);
    }
    return (_uri === uriCompare) ? 'active': '';
  }

});

module.exports = Navbar;
