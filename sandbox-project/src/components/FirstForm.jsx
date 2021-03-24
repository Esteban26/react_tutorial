import React, { Component } from 'react'

class Form extends Component {

    state = {
        name: 'Esteban',
        gender: 'man',
        language: 'Spanish',
        terms: false,
    };

    handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        this.setState({
            // using detructuring to indicate object key.
            [e.target.name]: e.target.value
        });
    }
    
    handleTerms = (e) => {
        this.setState({
            // using detructuring to indicate object key.
            terms: e.target.checked
        });
    }

    render() {
        return (
            <>
                <form className="form" >
                    <h1>Forms</h1>
                    <div className="form__field">
                        {/* htmlFor is used instead of for because for is a reserverd word in javascript. */}
                        <label className="form__label" htmlFor="name">Name</label>
                        <input
                            className="form__input"
                            id="name"
                            name="name"
                            type="text"
                            value={this.state.name} onChange={this.handleChange}
                        />
                    </div>
                    <div className="form__field">
                        <label className="form__label form__label--radio" htmlFor="man">Man</label>
                        {/* defaultChecked htmlFor is used instead checked. */}
                        <input
                            className="form__input"
                            defaultChecked type="radio"
                            id="man"
                            name="gender"
                            onChange={this.handleChange}
                            value="man"
                        />

                        <label className="form__label form__label--radio" htmlFor="woman">Woman</label>
                        <input
                            className="form__input"
                            id="woman"
                            name="gender"
                            onChange={this.handleChange}
                            type="radio"
                            value="woman"
                        />
                    </div>
                    <div className="form__field">
                        <label className="form__label" htmlFor="language" onChange={this.handleChange}>Language</label>
                        <select name="language" id="language" onChange={this.handleChange}>
                            <option
                                defaultChecked
                                value="Spanish"
                            >
                                Spanish
                            </option>
                            <option
                                value="English"
                            >
                                English
                            </option>
                        </select>
                    </div>
                    <div className="form__field">
                        <label className="form__label" htmlFor="terms">Terms and conditions</label>
                        <input 
                            className="form__input"
                            id="terms" 
                            name="terms"
                            defaultChecked={this.state.terms}
                            onChange={this.handleTerms}
                            type="checkbox"
                        />
                    </div>
                    <input className="form__submit" type="submit" value="send" disabled={!this.state.terms} />
                </form >
                <h2>Data</h2>
                {JSON.stringify(this.state)}
            </>
        );
    }
}

export default Form;