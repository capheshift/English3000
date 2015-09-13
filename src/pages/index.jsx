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
      dataContext: ['list1', 'list2', 'list3']
    };
  },

  render: function() {
    var listRender = this.state.dataContext.map(function(item) {
      return (
        <li>
          <a href="#">item one</a>
          <p>{item}</p>
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
            <button id="btnSearch" className="search-button">sss</button>
          </div>
        </div>

        <div className="list-word">
          <ul>
            {listRender}
            <li>
              <a href="#">item one</a>
              <p> detail</p>
            </li>
            <li>
              <a href="#">item one</a>
              <p> detail</p>
            </li>
            <li>
              <a href="#">item one</a>
              <p> detail</p>
            </li>
            <li>
              <a href="#">item one</a>
              <p> detail</p>
            </li>
            <li>
              <a href="#">item one</a>
              <p> detail</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = HomePage;
