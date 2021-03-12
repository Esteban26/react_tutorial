import { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class LifeCycle extends Component {

    constructor(props) {
        console.log('Life Cycle Component -> Constructor executed');
        super(props);
        this.state = {
            surname: 'My surname'
        }
    }

    /**
     * Starting in React version 16.3, the following component lifecycle methods are being phased out.
     * componentWillMount
     * componentWillReceiveProps
     * componentWillUpdate
     */


    /**
     * Mount
     * constructor()
     * static getDerivedStateFromProps()
     * render()
     * componentDidMount()
     * 
     * Deprecated
     * 
     * UNSAFE_componentWillMount()
     * 
     */


    /**
     * Update
     * static getDerivedStateFromProps()
     * shouldComponentUpdate()
     * render()
     * getSnapshotBeforeUpdate()
     * componentDidUpdate()
     * 
     * Deprecated
     * 
     * UNSAFE_componentWillUpdate()
     * UNSAFE_componentWillReceiveProps()
     */


    /**
     * Unmount
     * componentWillUnmount()
    */


    componentDidMount() {
        console.log('Life Cycle Component -> Component did mount');
    }

    // For this case we don't need to bind this because arrow functions use the parent context.
    handleChangeName = (evt) => {
        this.setState({
            surname: evt.target.value
        })
    }

    render() {
        console.log('Life Cycle Component -> Render executed');
        return (
            <>
                <h2>Life cycle component rendered. Open the console to check the lyfe cycle events.</h2>
                <TextField variant="outlined" value={this.state.surname} onChange={this.handleChangeName} />
            </>
        )
    }

}

export default LifeCycle;