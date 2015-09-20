/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var DefaultLayout = React.createFactory(require('../layouts/Default'));

var DetailPage = React.createClass({
  displayName: 'Detail page',

  getDefaultProps: function() {
    return {
      layout: DefaultLayout
    };
  },

  getInitialState: function() {
    return {
      dataContext: ['mean1', 'mean2', 'mean3', 'mean4']
    };
  },

  render: function() {

    var listMean = this.state.dataContext.map(function(item) {
      return (
        <li>
            <p className="mean-word">{item}</p>
            <p className="mean-example">example</p>
        </li>
      );
    })

    return (
      <div>
        <p className="word">word</p>
        <ul className="list-mean">
          {listMean}
        </ul>
      </div>
    );
  }
});

module.exports = DetailPage;
