import React, { Component } from 'react'
import SearchResult from './searchResult';
import { connect } from 'react-redux'
import { debounce } from '../util/func'

@connect(state => ({
  questions: state.get('question').get('allQuestions')
}))
export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchkey: '',
      searchResult: []
    }
    this.lastSearch = 0
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handlerSearch = debounce(500, this.handlerSearch);
  }

  handleTextChange(e) {
    const value = e.target.value.trim();
    this.setState({
      [e.target.name]: value
    });
    if (value) {
      this.lastSearch = this.handlerSearch();
    } else {
      clearTimeout(this.lastSearch)
      this.setState({
        searchResult: []
      })
    }
  }

  handlerSearch() {
    const reg = new RegExp(this.state.searchkey, 'ig');
    const _result = this.props.questions.filter(el => reg.test(el.get('title')));
    this.setState({
      searchResult: _result
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.handleTextChange} type="text" name="searchkey" placeholder="搜索你感兴趣的内容" value={this.state.searchkey} />
        <div style={{ display: this.state.searchResult ? 'block' : 'none' }}>
          <SearchResult searchResult={this.state.searchResult} />
        </div>
      </div>
    )
  }
}

