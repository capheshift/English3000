/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var DefaultLayout = React.createFactory(require('../layouts/Default'));
var wordsList = require('english3kdata');

var HistoryPage = React.createClass({
  displayName: 'History page',

  getDefaultProps: function() {
    return {
      layout: DefaultLayout
    };
  },

  getInitialState: function() {
    console.log('wordsList', wordsList.getAll());
    return {
      dataContext: wordsList.getAll()
    }
    },

  render: function() {
    var listRender = this.state.dataContext.map(function(item) {
      return (
        <li>
          <a href="#">
            <p className="word-name">{item.name}</p>
            <p className="example">{item.define} meaning</p>
          </a>
        </li>
      );
    })

    return (
      <div>
      <h1>History</h1>
        <div className="search-region">
          <div className ="search-left">
            <input type="text" className="search-box"/>
          </div>
          <div className ="search-right">
            <button id="btnSearch" className="search-button">Search History</button>
          </div>
        </div>

        <div className="list-word">
          <ul>
            {listRender}
          </ul>
        </div>

      </div>
    );
  }
});

module.exports = HistoryPage;
