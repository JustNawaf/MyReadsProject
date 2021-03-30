import logo from "./logo.svg";
import "./css/tailwind.css";
import Init from "./components/Init";
import Index from "./pages/Index";
import { Route } from "react-router";
import Search from "./pages/Search";
import { getAll } from './API/BooksAPI.js';

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    books:[]
  };

  componentDidMount(){
    getAll().then((data)=> this.setState({
      books:data,
    }));
  }

  render() {
    return (
      <div className="App">
        {/* <Init time={5000}/> */}
        <Route exact path="/">
            <Index books={this.state.books} />
        </Route>
        <Route exact path="/Search" component={Search} />
      </div>
    );
  }
}