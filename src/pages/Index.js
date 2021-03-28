import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";

export default class Index extends Component {
  render() {
    return (
      <div>
        <div className="w-full lg:px-24 lg:py-12 ">
          {/* Currently Reading */}
          <div className="w-full">
            <h1 className="text-3xl">Currently Reading</h1>
            <div className="my-6 py-4 border-none rounded-md flex flex-wrap justify-center w-full">
              {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
                <Book />
              ))}
            </div>
            <div className="w-full h-1 bg-gray-200 my-4"></div>
          </div>

          {/* Want to read */}
          <div className="w-full">
            <h1 className="text-3xl">Want To Read </h1>
            <div className="my-6 py-4 border-none rounded-md flex flex-wrap justify-center w-full">
              {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
                <Book />
              ))}
            </div>
            <div className="w-full h-1 bg-gray-200 my-4"></div>
          </div>

          {/* Read */}
          <div className="w-full">
            <h1 className="text-3xl">Read</h1>
            <div className="my-6 py-4 border-none rounded-md flex flex-wrap justify-center w-full">
              {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
                <Book />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
