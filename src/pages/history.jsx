/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var DefaultLayout = React.createFactory(require('../layouts/Default'));

var HistoryPage = React.createClass({
  displayName: 'History page',

  getDefaultProps: function() {
    return {
      layout: DefaultLayout
    };
  },

  render: function() {
    return (
      <div>
<nav className="bar bar-tab">
  <a className="tab-item active" href="#">
    <span className="icon icon-home"></span>
    <span className="tab-label">Home</span>
  </a>
  <a className="tab-item" href="#">
    <span className="icon icon-person"></span>
    <span className="tab-label">Profile</span>
  </a>
  <a className="tab-item" href="#">
    <span className="icon icon-star-filled"></span>
    <span className="tab-label">Favorites</span>
    </a>
</nav>
      </div>
    );
  }
});

module.exports = HistoryPage;
