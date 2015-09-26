/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var DefaultLayout = React.createFactory(require('../layouts/Default'));


var HomePage = React.createClass({
  displayName: 'Home page',

  getDefaultProps: function() {
    return {
      layout: DefaultLayout
    };
  },

  getInitialState: function() {
    return {
      dataContext:
      [
      {word:"mountain", detail:"a large steep hill."},
      {word:"tree", detail:"a woody perennial plant."},
      {word:"plant", detail:"a living organism of the kind exemplified by trees, shrubs, herbs."},
      {word:"plant", detail:"a living organism of the kind exemplified by trees, shrubs, herbs."}
      ]
    };
  },

  render: function() {
    var listRender = this.state.dataContext.map(function(item) {
      return (
        <li>
          <a href="#/detail">
            <p className="word-name">{item.word}</p>
            <p className="example">{item.detail}</p>
          </a>
        </li>
      );
    })

    return (
      <div>
        <div className="search-region">
          <div className ="search-left">
            <input type="text" className="search-box"/>
          </div>
          <div className ="search-right">
            <button id="btnSearch" className="search-button" >S</button>
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
