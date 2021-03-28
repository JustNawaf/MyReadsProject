import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default class Search extends Component {
    render() {
        return (
            <div>
                <div className="w-full px-6 py-4">
                    <Link to="/"><FontAwesomeIcon icon={faArrowAltCircleLeft} size="3x" className="text-gray-600" /></Link>
                </div>
                <div className="w-full h-screen flex justify-center items-center text-3xl text-bold">
                    Search Page
                </div>
            </div>
        )
    }
}
