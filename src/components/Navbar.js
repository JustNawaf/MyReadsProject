import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends Component {

    render() {
        console.log()
        return (
            <div className="w-full h-full">
                <div className="w-full flex justify-between items-center px-4 py-2 bg-gray-600 shadow-lg text-gray-200">

                    <h1 className="text-2xl px-4 py-2">
                        {
                            this.props.location.pathname === "/Search" && 
                            <Link to="/"><FontAwesomeIcon icon={faArrowAltCircleLeft} size="1x" className="mr-4 text-white" /></Link>
                        }
                        MyReadsProject
                    </h1>
                    {
                        this.props.location.pathname !== "/Search" && 
                        <Link to="/Search" className="px-4 py-2 border border-gray-600 rounded 
                        bg-white text-black shadow-inner transition duration-150 hover:bg-gray-200">Search</Link>
                    }
                </div>
                <div className="w-full h-full">
                    {this.props.children}
                </div>
            </div>

        )
    }
}


export default withRouter(Navbar);
