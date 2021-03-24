import { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

class LifeCycle extends Component {

    constructor(props) {
        console.log('Life Cycle Component -> Constructor executed');
        super(props);
        this.state = {
            postId: 1,
            surname: 'My surname',
            post: {},
        }
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
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

    async componentDidMount() {
        console.log('Life Cycle Component -> Component did mount');
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.postId}`)
        const post = await response.json();
        // executed only the first time
        this.setState({
            post: post
        });
    }

    /*shouldComponentUpdate(nextProps, nextState) {
        console.log('Life Cycle Component -> Should component update', nextProps, nextState, nextProps.surname !== this.state.surname);
        return nextProps.postId !== this.state.postId;
    }*/

    async componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Life Cycle Component -> Did update', prevState.postId);
        if (prevState.postId === this.state.postId) {
            return;
        }
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.postId}`)
        const post = await response.json();
        // executed only the first time
        this.setState({
            post: post
        });
    }

    componentWillUnmount() {
        // Finish this case
    }

    // For this case we don't need to bind this because arrow functions use the parent context.
    handleChangeName = (evt) => {
        this.setState({
            surname: evt.target.value
        })
    }

    handlePrev = function (evt) {
        this.setState({
            postId: this.state.postId - 1,
        })
    }

    handleNext = function (evt) {
        this.setState({
            postId: this.state.postId + 1,
        })
    }

    render() {
        console.log('Life Cycle Component -> Render executed');
        return (
            <>
                <h2>{this.props.title}</h2>
                <TextField variant="outlined" value={this.state.surname} onChange={this.handleChangeName} />
                <Button color="primary" onClick={this.handlePrev}>Prev</Button>
                <Button color="primary" onClick={this.handleNext}>Next</Button>

                <Button></Button>
                <ul>
                    {JSON.stringify(this.state.post)}
                </ul>
            </>
        )
    }

}

// default title used when value is not passed through the props object.
LifeCycle.defaultProps = {
    title: 'Life cycle component rendered. Open the console to check the lyfe cycle events.'
};

export default LifeCycle;