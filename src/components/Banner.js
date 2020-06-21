import React, { Component } from 'react'

export default class Banner extends Component {
    state={
        isOpen:false
    }
    handleToggle=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <div className="banner">
                <h1 className="name">Wilbert Sible</h1>
                <h2 className="description">Software Developer. Chemist. Materials Engineer.</h2>
                <h2 className="description">Teacher. Student. Philosopher.</h2>
            </div>
            
        )
    }
}