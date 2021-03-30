import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft , faSearch} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { search } from '../API/BooksAPI';
import Book from '../components/Book';
export default class Search extends Component {
    state = {
        search:'',
        books:[],
    };


    search = (event) => {
        event.preventDefault();
        console.log(this.state.search)
        search(this.state.search,10).then((data) => {
            console.log(data)
            // this.setState({
            //     books:data
            // });
        });
    }

    onChange = (event) => {
        let name = event.target.name;
        this.setState({
            [name]:event.target.value,
        });
    };

    render() {
        return (
            <div>
                <div className="w-full px-6 py-4">
                    <Link to="/"><FontAwesomeIcon icon={faArrowAltCircleLeft} size="3x" className="text-gray-600" /></Link>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <div className="w-2/3 h-full">
                        <h1 className="text-center text-3xl mb-12">Search</h1>
                        <div className="w-full">
                        <form className="w-full grid grid-cols-10" onSubmit={this.search}>
                            <div className="col-span-9 flex justify-center items-center"> 
                                    <input type="text" name="search" value={this.state.search} onChange={this.onChange}
                                    className="w-full h-full px-4 py-2 bg-gray-200 border border-gray-300 focus:outline-none"/>
                            </div>
                            <div className="col-span-1 flex justify-center items-center">
                                <button type="submit" className="focus:outline-none">
                                    <FontAwesomeIcon icon={faSearch} size="2x"
                                     className="border-none rounded-md transition duration-200 text-gray-600 bg-gray-200 p-1 hover:bg-gray-300 hover:text-gray-700" />
                                </button>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="w-2/3 my-8">
                        <div className="w-full h-1 bg-gray-200 my-4"></div>
                        <h1 className="text-left text-2xl">Books</h1>
                        <div className="w-full h-full flex flex-wrap justify-center items-center">
                            {
                                this.state.books.map((book) => <Book book={book}/>)
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
