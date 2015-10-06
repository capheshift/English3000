/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var RatchetLayout = React.createFactory(require('../layouts/RatchetLayout'));
var wordsList = require('english3kdata');
var lodash = require('lodash');

var HomePage = React.createClass({
  displayName: 'Home page',

  getDefaultProps: function() {
    return {
      layout: RatchetLayout
    };
  },

  getInitialState: function() {
    return {
      dataContext: this.randomWord(),
      wordSearch : "",
      header: "Your world you need learn today"
    };
  },

  removeNullWord: function(){

  },

  filterList: function(wordSearch){
    return lodash.filter(wordsList.getAll(),function(word){
    if(word.name == undefined){
      return false;
    }else{
      if(word.name.indexOf(wordSearch) == -1){

      }else{
        return true;
      }
    }
  });
  },

  onChange: function(event){
    this.setState({
      wordSearch: event.target.value,
      dataContext: this.filterList(event.target.value),
      header: ""
    });
    if(event.target.value == ""){
      this.setState({dataContext: this.randomWord(),
        header: "Your world you need learn today"
      });
    }
  },

  randomWord: function(){
      var randomWord = wordsList.getAll()[Math.floor(Math.random()*wordsList.getAll().length)];
      if(randomWord.name == undefined){
        return;
      }
      return [randomWord];
  },

  render: function() {
    var listRender = this.state.dataContext.map(function(item) {
      return (
        <li>
            <a href={'#/detail/' + (item.name)} >
              <span className='word-name'>{item.name}</span>
              <span className="example">({item.pronunciation})</span>
              <p>{item.data[0].definition}</p>
            </a>
        </li>
      );
    })

    return (
      <div>
        <div className="search-region">
            <input type="text" className="search-box" placeholder="Fill your word ..." value={this.state.wordSearch} onChange={this.onChange}/>
        </div>
          <span className="header-index">{this.state.header}</span>
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