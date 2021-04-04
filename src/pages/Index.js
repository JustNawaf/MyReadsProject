import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";
import Loading from "../components/Loading";

export default class Index extends Component {
  
  getBooksBasedShelf = (shelf) => {
      return this.props.books.filter((book) => book.shelf === shelf)
  };

  componentDidMount(){
    this.props.setBooks([]);
    this.props.updateBooks();
  }
  
  render() {
    return (
      <div>
        <div className="w-full px-6 py-3 lg:px-24 lg:py-12 ">
          {/* Currently Reading */}
          <div className="w-full">
            <h1 className="text-3xl">Currently Reading</h1>
            <div className="my-6 py-4 border-none rounded-md flex flex-wrap justify-center w-full">
              <Loading show={this.props.showLoading}/>
              {this.getBooksBasedShelf("currentlyReading").map((book) => (
                <Book key={book.id} book={book} updateBookShelf={this.props.updateBookShelf}/>
              ))}
              {
                this.getBooksBasedShelf("currentlyReading").length === 0 && !this.props.showLoading &&
                <h1 className="text-lg">No Books Currently Reading</h1>
              }
            </div>
            <div className="w-full h-1 bg-gray-200 my-4"></div>
          </div>

          {/* Want to read */}
          <div className="w-full">
            <h1 className="text-3xl">Want To Read </h1>
            <div className="my-6 py-4 border-none rounded-md flex flex-wrap justify-center w-full">
              <Loading show={this.props.showLoading}/>
              {this.getBooksBasedShelf("wantToRead").map((book) => (
                <Book key={book.id} book={book} updateBookShelf={this.props.updateBookShelf}/>
              ))}
              {
                this.getBooksBasedShelf("wantToRead").length === 0 && !this.props.showLoading &&
                <h1 className="text-lg">No Books Want To Read</h1>
              }
            </div>
            <div className="w-full h-1 bg-gray-200 my-4"></div>
          </div>

          {/* Read */}
          <div className="w-full">
            <h1 className="text-3xl">Read</h1>
            <div className="my-6 py-4 border-none rounded-md flex flex-wrap justify-center w-full">
              <Loading show={this.props.showLoading}/>
              {this.getBooksBasedShelf("read").map((book) => (
                <Book key={book.id} book={book} updateBookShelf={this.props.updateBookShelf}/>
              ))}
              {
                this.getBooksBasedShelf("read").length === 0 && !this.props.showLoading &&
                <h1 className="text-lg">No Books Read</h1>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
