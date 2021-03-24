import React, { Component, createRef } from 'react'

class References extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        //  this.inputText = React.createRef();
        this.inputText = createRef();
    }

    /**
     * This is the wrong way, this function works over the DOM and since sometimes the element would not be mounted
     * the html element would not be retrieved.
     */
     handleFocusWithId = () => {
        const btn = document.getElementById('my-input');
        btn.focus();
    }

    handleFocusWithRef = () => {
        // current is null if the cmponent is not mounted.
        this.inputText.current.focus();
    }

    handleChange = () => {
        this.setState({
            name: this.inputText.current.value
        })
    }

    render() {
        return (
            <>
                <h1>References</h1>
                <h3>Name: {this.state.name}</h3>
                <input id="my-input" ref={this.inputText} onChange={this.handleChange}></input>
                <button onClick={this.handleFocusWithId}>Uses document.getElementById</button>
                <button onClick={this.handleFocusWithRef}>Uses createRef</button>
            </>
        );
    }
}

export default References;