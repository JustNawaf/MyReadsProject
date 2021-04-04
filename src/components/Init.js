import React, { Component } from 'react'

export default class Ini extends Component {

    state = {
        show:true,
    };

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                show:false
            });
        },this.props.time)
    };

    render() {
        return (
            (
                this.state.show && 
                <div className="absolute top-0 bg-black text-white flex justify-center items-center w-full h-screen font-bold text-4xl z-50">
                    I Introduce You MyReads Project
                </div>
            )
        )
    }
}
