import React, { Component } from 'react'
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
class Book extends Component {

    getClassTextSize = () => {
        let name = this.props.book.title;

        if(name.length > 25)
            return "text-xs";
        
        return "text-sm";
    };

    render() {
        return (
            <div className="w-52 h-72 border-none rounded-md mx-4 my-2 bg-gray-600 shadow-lg" style={{ minWidth:'13rem' }}>
                <img className="w-52 h-56 border-none rounded-t-md" src={this.props.book.imageLinks.thumbnail} />
                <div className="w-full h-16 text-center  grid grid-cols-1 grid-rows-2">
                    <h2 className="" className={[`text-md col-span-3 flex justify-center items-center text-gray-200 text-bold row-span-2 my-6 ${this.getClassTextSize()}`]}>{this.props.book.title}</h2>
                    <BookShelf book={this.props.book} moveToShelf={this.moveToShelf} updateBookShelf={this.props.updateBookShelf}/>
                </div>
            </div>
        )
    }
}

Book.propTypes = {
    book:PropTypes.object,
    updateBookShelf:PropTypes.func,
};


export default Book;