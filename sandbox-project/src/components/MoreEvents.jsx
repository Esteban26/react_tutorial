import { React, Component } from 'react';
import EventBtn from './EventBtn';


class MoreEvents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleBtnClickWithArgs = this.handleBtnClickWithArgs.bind(this);
    }

    handleBtnClick(e) {
        console.log('Context -> this ', this);
        console.log('Event ', e);
    }

    handleBtn1Click(e) {
        console.log('Context -> this ', this);
        console.log('Event ', e);
    }

    handleBtnClickWithArgs(argument1, argument2, e) {
        console.log('Context -> this ', this);
        console.log('Arguments ', argument1, argument2);
        console.log('Event ', e);
    }


    render() {
        const { buttonTitle } = this.props;
        return (
            <>
                <h1>Counter: {this.state.counter}</h1>
                <button value={1} onClick={this.handleBtnClick}>{`${buttonTitle} - Function context binded in constructor`}</button>
                <br />
                <button value={1} onClick={this.handleBtn1Click.bind(this)}>{`${buttonTitle} - Function context binded in button`}</button>
                <br />
                <button value={1} onClick={(e) => { this.handleBtnClickWithArgs('Arg value 1', 'Arg value 1', e); }}>{`${buttonTitle} - Arguments passed through an arrow function.`}</button>
                <br />
                <button value={1} onClick={function (e) { this.handleBtnClickWithArgs('Arg value 1', 'Arg value 1', e); }.bind(this)}>{`${buttonTitle} - Arguments passed through a none function.`}</button>
                <br />
                <button value={1} onClick={function (e) { this.handleBtnClickWithArgs('Arg value 1', 'Arg value 1', e); }.bind(this)}>{`${buttonTitle} - Arguments passed through a none function.`}</button>
                <br />
                <EventBtn btnText="External btn" onBtnClick={this.handleBtnClick}></EventBtn>
            </>
        );
    }
}

export default MoreEvents;
