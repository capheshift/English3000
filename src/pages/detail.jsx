/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var RatchetLayout = React.createFactory(require('../layouts/RatchetLayout'));
var wordsList = require('english3kdata');
var lodash = require('lodash');

var DetailPage = React.createClass({
  displayName: 'Home page',

  getDefaultProps: function() {
    return {
      layout: RatchetLayout
    };
  },

  getInitialState: function() {
    var wordDetail = this.props.uri[1];
    console.log('getInitialState', wordDetail);
    return {
      dataContext: wordsList.find({name: wordDetail})
    };
  },

  render: function() {

    var listMean = this.state.dataContext.map(function(item) {
      return (
        <li>
            <div>
              <p className="name">{item.name}</p><hr/>
              <p className="pronunciation">{item.pronunciation}</p><hr/>
            </div>
            <p className="title-word">{item.data[0].title}</p><hr/>
            <p className="definition">{item.data[0].definition}</p><hr/>
        </li>
      );
    })

    return (
      <div>
        <ul className="list-mean">
          {listMean}
        </ul>
      </div>
    );
  }
});

module.exports = DetailPage;