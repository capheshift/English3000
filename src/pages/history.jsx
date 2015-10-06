/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var RatchetLayout = React.createFactory(require('../layouts/RatchetLayout'));
var wordsList = require('english3kdata');
var lodash = require('lodash');

var HistoryPage = React.createClass({
  displayName: 'Home page',

  getDefaultProps: function() {
    return {
      layout: RatchetLayout
    };
  },

  getInitialState: function() {
    return {
      dataHistory: wordsList.getAll()
    };
  },

  render: function() {
    var listRender = this.state.dataHistory.map(function(item) {
      return (
        <li>
            <a href={'#/detail/' + (item.name)} >
              <span className='word-name'>{item.name}</span>
              <span className="example">({item.pronunciation})</span>
            </a>
        </li>
      );
    })

    return (
      <div>
      <h1>History of word has been search</h1>
      <hr/>

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