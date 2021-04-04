import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import { update } from '../API/BooksAPI';
export default class Book extends Component {
    state = {
        showModal:false,
        top:-1,
    };

    getDocHieght = () => {
        let body = document.body;
        let html = document.documentElement;

        return Math.max( body.scrollHeight, body.offsetHeight, 
                        html.clientHeight, html.scrollHeight, html.offsetHeight );

    };

    getClassTextSize = () => {
        let name = this.props.book.title;

        if(name.length > 25)
            return "text-xs";
        
        return "text-sm";
    };

    toggleModal = () => {

        this.setState({
            showModal:!this.state.showModal,
            bottom:this.getDocHieght()
        });
    };

    moveToShelf = (shelf) => {
        update(this.props.book,shelf)
        .then(() => this.props.updateBookShelf(this.props.book,shelf));
    };

    render() {
        return (
            <div className="w-52 h-72 border-none rounded-md mx-4 my-2 bg-gray-700 shadow-2xl">
                <img className="w-52 h-56 border-none rounded-t-md" src={this.props.book.imageLinks.thumbnail} />
                <div className="w-full h-16 text-center  grid grid-cols-3 grid-rows-2">
                    <h2 className="" className={[`text-md col-span-3 flex justify-center items-center text-gray-200 text-bold row-span-2 my-6 ${this.getClassTextSize()}`]}>{this.props.book.title}</h2>
                    <h2 className="text-sm text-gray-200 text-bold col-span-2 text-left flex items-end pl-2" title={this.props.book.authors}>Authors</h2>
                    <h2 onClick={this.toggleModal} className="relative text-gray-200 text-bold text-xl col-span-1 flex justify-end items-end pr-2 text-bold">
                        <button className="z-10 focus:outline-none">...</button>
                        {
                            this.state.showModal && 
                            <div className="absolute -top-20 -right-10 w-48 h-24 shadow-xl border-none rounded-md bg-gray-100 z-30">
                                <div className="flex flex-col justify-start text-sm">
                                    <p className="px-2 mb-1 pt-2 text-left text-black">Move to</p>
                                    <button className="h-full px-4 text-left text-justify transition text-black
                                    duration-100 hover:bg-blue-400 hover:text-white focus:outline-none" onClick={() => this.moveToShelf("currentlyReading")}>
                                        {
                                            this.props.book.shelf === "currentlyReading" && 
                                            <FontAwesomeIcon icon={faCheck} className="mr-2" />
                                        }
                                        Currently Reading
                                    </button>

                                    <button className="h-full px-4 text-left text-justify transition text-black
                                    duration-100 hover:bg-blue-400 hover:text-white focus:outline-none" onClick={() => this.moveToShelf("wantToRead")}>
                                        {
                                            this.props.book.shelf === "wantToRead" && 
                                            <FontAwesomeIcon icon={faCheck} className="mr-2" />
                                        }
                                        Want To Read
                                        </button>

                                    <button className="h-full px-4 text-left text-justify transition text-black
                                    duration-100 hover:bg-blue-400 hover:text-white focus:outline-none" onClick={() => this.moveToShelf("read")}>
                                        {
                                            this.props.book.shelf === "read" && 
                                            <FontAwesomeIcon icon={faCheck} className="mr-2" />
                                        }
                                        Read
                                    </button>
                                </div>
                            </div>
                        }
                    </h2>
                </div>
                {
                    this.state.showModal && 
                    <div onClick={this.toggleModal} className="absolute top-0 left-0 w-full bg-black opacity-10 z-20" style={{ height:this.state.bottom }}>
                        
                    </div>
                }
            </div>
        )
    }
}
