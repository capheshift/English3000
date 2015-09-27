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
    return {
      dataContext: wordsList.getAll()
    };
  },

  render: function() {
    var listRender = this.state.dataContext.map(function(item) {
      return (
        <li>
            <a href={'#/detail/' + (item.name)} >
              <p className='word-name'>{item.name}</p>
              <p className="example">{item.pronunciation}</p>
            </a>
            <hr/>
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
