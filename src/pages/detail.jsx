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
    return {
      dataContext: wordsList.find({name: wordDetail})
    };
  },

  render: function() {

    var listMean = this.state.dataContext.map(function(item) {
      return (
        <div>
            <span className="name">{item.name}</span><br/>
            <span className="title-word">({item.data[0].title})</span>
            <span className="pronunciation">{item.pronunciation}</span>
            <p className="definition">{item.data[0].definition}</p>
        </div>
      );
    })

    return (
      <div>
        <div className="word-detail">
          {listMean}
          <button> <span className="icon icon-star"></span> Save word</button>
        </div>

      </div>
    );
  }
});

module.exports = DetailPage;