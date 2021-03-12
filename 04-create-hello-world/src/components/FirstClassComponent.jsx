import { Component } from 'react';
import Button from '@material-ui/core/Button';

class FirstClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };

        this.handleIncrementEvt = this.handleIncrementEvt.bind(this);
        this.handleDecrementEvt = this.handleDecrementEvt.bind(this);

    }

    handleIncrementEvt = function (evt) {
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    handleDecrementEvt = function (evt) {
        this.setState({
            counter: this.state.counter - 1,
        });
    }

    render() {
        return (
            <>
                <Button color="primary" onClick={this.handleIncrementEvt}>Increment</Button>
                <Button color="secondary" onClick={this.handleDecrementEvt}>Decrement</Button>
                <h2>This is the counter value: {this.state.counter}</h2>
            </>

        )
    }
}

export default FirstClassComponent;
