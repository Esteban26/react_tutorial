import { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class EvtsWithArrowFn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "My name"
        };
    }
    // For this case we don't need to bind this because arrow functions use the parent context.
    handleChangeName = (evt) => {
        this.setState({
            name: evt.target.value
        })
    }
    // render method.
    render() {
        return (
            <>
                <h2>
                    Second component with events, now we listen the onchange event: <b>{this.state.name}</b>
                </h2>
                <TextField variant="outlined"  value={this.state.name} onChange={this.handleChangeName} />
            </>
        )
    }
}

export default EvtsWithArrowFn;