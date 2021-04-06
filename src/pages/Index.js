import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";
import Loading from "../components/Loading";
import PropTypes from 'prop-types';
class Index extends Component {
  
  getBooksBasedShelf = (shelf) => {
      return this.props.books.filter((book) => book.shelf === shelf)
  };

  componentDidMount(){
    this.props.setBooks([]);
    this.props.updateBooks();
  }
  
  render() {
    return (
      <div className="w-full">
        <div className="w-full px-6 py-3 lg:px-24 lg:py-12 ">
          {/* Currently Reading */}
          <div className="w-full">
            <h1 className="text-xl lg:text-3xl">Currently Reading</h1>
            <div className="my-6 py-4 border-none rounded-md flex flex-row overflow-x-auto overscroll-auto justify-start w-full">
              {
                this.props.showLoading && <span className="w-full flex justify-center"><Loading/></span>
              }
              {this.getBooksBasedShelf("currentlyReading").map((book) => (
                <Book key={book.id} book={book} updateBookShelf={this.props.updateBookShelf}/>
              ))}
              {
                this.getBooksBasedShelf("currentlyReading").length === 0 && !this.props.showLoading &&
                <div className="w-full text-center">
                  <h1 className="text-lg">No Books Currently Reading</h1>
                </div>
              }
            </div>
            <div className="w-full h-1 bg-gray-200 my-4"></div>
          </div>

          {/* Want to read */}
          <div className="w-full">
            <h1 className="text-xl lg:text-3xl">Want To Read </h1>
            <div className="my-6 py-4 border-none rounded-md flex flex-row overflow-x-auto overscroll-auto justify-start w-full">
              {
                this.props.showLoading && <span className="w-full flex justify-center"><Loading/></span>
              }
              {this.getBooksBasedShelf("wantToRead").map((book) => (
                <Book key={book.id} book={book} updateBookShelf={this.props.updateBookShelf}/>
              ))}
              {
                this.getBooksBasedShelf("wantToRead").length === 0 && !this.props.showLoading &&
                <div className="w-full text-center">
                  <h1 className="text-lg">No Books Want To Read</h1>
                </div>
              }
            </div>
            <div className="w-full h-1 bg-gray-200 my-4"></div>
          </div>

          {/* Read */}
          <div className="w-full">
            <h1 className="text-xl lg:text-3xl">Read</h1>
            <div className="my-6 py-4 border-none rounded-md flex flex-row overflow-x-auto overscroll-auto justify-start w-full">
              {
                this.props.showLoading && <span className="w-full flex justify-center"><Loading/></span>
              }
              {this.getBooksBasedShelf("read").map((book) => (
                <Book key={book.id} book={book} updateBookShelf={this.props.updateBookShelf}/>
              ))}
              {
                this.getBooksBasedShelf("read").length === 0 && !this.props.showLoading &&
                <div className="w-full text-center">
                  <h1 className="text-lg">No Books Read</h1>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}


Index.propTypes = {
  books:PropTypes.array,
  updateBookShelf:PropTypes.func,
  updateBooks:PropTypes.func,
  showLoading:PropTypes.bool,
  setBooks:PropTypes.func
};

export default Index;