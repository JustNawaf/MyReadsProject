import logo from "./logo.svg";
import "./css/tailwind.css";
import Init from "./components/Init";
import Index from "./pages/Index";
import { Route } from "react-router";
import Search from "./pages/Search";
import { getAll } from './API/BooksAPI.js';

import React, { Component } from 'react'
import Loading from "./components/Loading";
import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";

export default class App extends Component {
  state = {
    books:[],
    showLoading:true,
  };

  updateBookShelf = (book,shelf) => {
    // getAll().then((data)=> this.setState({
    //   books:data,
    // }));
    // return console.log(book,shelf)
    let books = this.state.books.map((bk) => {
      if(bk.id === book.id && 'shelf' in bk){
        bk.shelf = shelf;
        return bk;
      }
      return bk;
    });

    this.setState({books});
      
  };

  setBooks = (books) => {
      this.setState({
          books
      });
  };

  componentDidMount(){
    this.setBooks([]);
    this.updateBooks();
  };

  setLoading = (loading) => {
    this.setState({
      showLoading:loading,
    });
  };

  updateBooks = () => {
    this.setLoading(true);
    getAll()
    .then((data)=> {
      this.setLoading(false);
      this.setState({
        books:data,
      })
    });
    ;
  };

  render() {
    return (
      <div className="App">
        {/* <Init time={5000}/> */}
        <Route exact path="/">
            <Index books={this.state.books} updateBookShelf={this.updateBookShelf} updateBooks={this.updateBooks} showLoading={this.state.showLoading} setBooks={this.setBooks}/>
        </Route>
        <Route exact path="/Search">
          <Search books={this.state.books} />
        </Route>
      </div>
    );
  }
}