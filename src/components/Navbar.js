import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends Component {

    render() {
        console.log()
        return (
            <div className="w-full h-full">
                <div className="w-full flex justify-between items-center px-4 py-2 bg-gray-200 shadow-lg">
                    <h1 className="text-2xl px-4 py-2">MyReadsProject</h1>
                    {
                        this.props.location.pathname !== "/Search" && 
                        <Link to="/Search" className="px-4 py-2 bg-gray-400 text-white border border-gray-500 rounded-md 
                        transition duration-150 hover:bg-gray-600 hover:border-gray-700">Search</Link>
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
