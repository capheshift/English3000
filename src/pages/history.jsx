/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var DefaultLayout = React.createFactory(require('../layouts/Default'));
var wordsList = require('3000-words-list');

var HistoryPage = React.createClass({
  displayName: 'History page',
  getInitialState: function(){
    return null;
  },

  getDefaultProps: function() {
    return {
      layout: DefaultLayout
    };
  },

  render: function() {
    return (
      <div>
      <div className="row">
            <h1 className="text-center">History</h1>
      </div>
        <form>
          <input type="search" placeholder="Search" />
          <button className="btn btn-primary">
            <span className="icon icon-search"></span>
              Search
          </button>
        </form>
                  <button className="btn btn-primary">
            <span className="icon icon-close"></span>
              Clear
          </button>


      </div>
    );
  }
});

module.exports = HistoryPage;
