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
        },2000)
    };

    render() {
        return (
            (
                this.state.show && 
                <div className="bg-black text-white flex justify-center items-center h-screen font-bold text-4xl">
                    I Introduce MyReads Project
                </div>
            )
        )
    }
}
