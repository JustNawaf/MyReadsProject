import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { update } from '../API/BooksAPI';
import React, { Component } from 'react'
import Loading from './Loading';

class BookShelf extends Component {

    state = {
        showModal:false,
        top:-1,
        loading:{
            type:"",
            loading:false,
        },
    };

    toggleModal = () => {

        this.setState({
            showModal:!this.state.showModal,
            bottom:this.getDocHieght()
        });
    };

    getDocHieght = () => {
        let body = document.body;
        let html = document.documentElement;

        return Math.max( body.scrollHeight, body.offsetHeight, 
                        html.clientHeight, html.scrollHeight, html.offsetHeight );

    };

    checkShelf = shelf => {
        return this.props.book.shelf === shelf;
    };

    setLoading = (shelf,loading) => this.setState({loading:{type:shelf,loading}});

    moveToShelf = shelf => {
        this.setLoading(shelf,true);
        update(this.props.book,shelf)
        .then(() => {
            this.setLoading(false);
            this.props.updateBookShelf(this.props.book,shelf)
        });
    };

    render() {
        return (
            <div>
                <div className="relative text-gray-200 text-bold text-xl col-span-1 flex justify-end items-end pr-2 text-bold">
                    <button onClick={this.toggleModal} className="z-10 focus:outline-none">...</button>
                    {
                        this.state.showModal && 
                        <div className="absolute -top-24 w-48 h-24 shadow-xl border-none rounded-md bg-gray-100 z-30">
                            <div className="flex flex-col justify-start text-sm">
                                <p className="px-2 mb-1 pt-2 text-left text-black">Move to</p>
                                <button className={`h-full px-4 text-left transition text-black duration-100 
                                 focus:outline-none ${this.checkShelf('currentlyReading') ? "bg-gray-200":"hover:bg-blue-400 hover:text-white"}`}
                                  disabled={this.checkShelf('currentlyReading')}
                                
                                 onClick={() => this.moveToShelf("currentlyReading")}>
                                    <div className="flex flex-row">
                                        {
                                            this.state.loading.type === "currentlyReading" && this.state.loading && <Loading className="w-4 h-4"/>
                                        }
                                        {
                                            this.props.book.shelf === "currentlyReading" && 
                                            <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                                        }
                                        <p>Currently Reading</p>
                                    </div>
                                    
                                    
                                </button>

                                <button className={`h-full px-4 text-left transition text-black duration-100 
                                 focus:outline-none ${this.checkShelf('wantToRead') ? "bg-gray-200":"hover:bg-blue-400 hover:text-white"}`}
                                  disabled={this.checkShelf('wantToRead')}

                                onClick={() => this.moveToShelf("wantToRead")}>
                                    <div className="flex flex-row">
                                        {
                                            this.state.loading.type === "wantToRead" && this.state.loading && <Loading className="w-4 h-4"/>
                                        }
                                        {
                                            this.props.book.shelf === "wantToRead" && 
                                            <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                                        }
                                        <p>Want To Read</p>
                                    </div>
                                    </button>

                                <button className={`h-full px-4 text-left transition text-black duration-100 
                                 focus:outline-none ${this.checkShelf('read') ? "bg-gray-200":"hover:bg-blue-400 hover:text-white"}`}
                                  disabled={this.checkShelf('read')}

                                onClick={() => this.moveToShelf("read")}>
                                    <div className="flex flex-row">
                                        {
                                            this.state.loading.type === "read" && this.state.loading && <Loading className="w-4 h-4"/>
                                        }
                                        {
                                            this.props.book.shelf === "read" && 
                                            <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                                        }
                                        <p>Read</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    }
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

BookShelf.propTypes = {
    book:PropTypes.object,
    updateBookShelf:PropTypes.func
};

export default BookShelf