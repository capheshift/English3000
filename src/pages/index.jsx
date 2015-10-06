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
      wordSearch : ""
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
    });
    if(event.target.value == ""){
      this.setState({dataContext: this.randomWord()});
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
            <input type="text" className="search-box" placeholder="Fill your word ..." value={this.state.wordSearch} onChange={this.onChange}/>
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