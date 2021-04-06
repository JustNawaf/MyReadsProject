import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { search } from '../API/BooksAPI';
import Book from '../components/Book';
import Loading from '../components/Loading';
import PropTypes from 'prop-types';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Search extends Component {
    state = {
        search:'',
        books:[],
        showLoading:false,
    };

    setLoading = (loading) => {
        this.setState({
          showLoading:loading,
        });
      };

    setBooks = (books) => {
        this.setState({
            books
        });
    }

    search = (event) => {
        event.preventDefault();
        this.setLoading(true);
        this.setBooks([]);

        search(this.state.search,10).then((data) => {
            if('error' in data){
                return;
            }

            let books = data.map((dt) => {
                let book = this.props.books.find((book) => book.id === dt.id);
                if(book){
                    dt.shelf = book.shelf;
                    return dt;
                }
                return dt;
            })
            this.setBooks(books);

        }).then(() => this.setLoading(false));
    }

    onChange = (event) => {
        let name = event.target.name;
        this.setState({
            [name]:event.target.value,
        });
    };

    updateBookShelf = (book,shelf) => {
        let books = this.state.books.map((bk) => {
          if(bk.id === book.id){
            bk.shelf = shelf;
            return bk;
          }
          return bk;
        });
    
        this.setState({books});
          
      };

    render() {
        return (
            <div className="mt-6">
                {/* <div className="w-full px-6 py-4">
                    <Link to="/"><FontAwesomeIcon icon={faArrowAltCircleLeft} size="3x" className="text-gray-600" /></Link>
                </div> */}
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <div className="w-full px-2 lg:px-0 lg:w-2/3 h-full">
                        <h1 className="text-center text-3xl mb-12">Search</h1>
                        <div className="w-full">
                        <form className="w-full" onSubmit={this.search}>
                            <div className="relative flex justify-center items-center"> 
                                    <input type="text" name="search" value={this.state.search} onChange={this.onChange}
                                    className="w-full h-full px-4 py-2 bg-gray-100 border border-gray-300 focus:outline-none shadow-inner"/>

                                    <button type="submit" className="absolute right-0 px-2 py-1 border rounded-l-md shadow-lg bg-gray-200 hover:bg-gray-300
                                    transition duration-150 focus:outline-none">
                                        <FontAwesomeIcon icon={faSearch} size="lg" className=" text-gray-600" />
                                            
                                    </button>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="w-full px-2 lg:px-0 lg:w-2/3 my-8">
                        <div className="w-full h-1 bg-gray-200 my-4"></div>
                        <h1 className="text-left text-2xl">Books</h1>
                        <div className="w-full h-full flex justify-center items-center">
                            {
                                this.state.showLoading && <Loading/>
                            }
                        </div>

                        {
                            this.state.books.length > 0 && 
                            <div className="w-full h-full flex flex-wrap justify-center items-center">
                                {
                                    this.state.books.map((book) => <Book key={book.id} book={book} updateBookShelf={this.updateBookShelf}/>)
                                }
                            </div>
                        }
                        {
                            this.state.books.length === 0 && !this.state.showLoading &&
                            <div className="w-full h-full flex flex-wrap justify-center items-center">
                                There is not any book
                            </div>
                        }
                    </div>
                </div>

            </div>
        )
    }
}

Search.propTypes = {
    books:PropTypes.array,
};

export default Search;