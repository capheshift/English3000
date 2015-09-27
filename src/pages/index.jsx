/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var DefaultLayout = React.createFactory(require('../layouts/Default'));
var wordsList = require('english3kdata');

var HomePage = React.createClass({
  displayName: 'Home page',

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
      <h1>English3000 app - Learn English easy than ever</h1>
        <div className="search-region">
          <div className ="search-left">
            <input type="text" className="search-box"/>
          </div>
          <div className ="search-right">
            <button id="btnSearch" className="search-button" >Search</button>
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

module.exports = HomePage;
