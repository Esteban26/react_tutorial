import { React, Component } from 'react';
import EventBtn from './EventBtn';
import EventBtn2 from './EventBtn2';


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
        console.log('Synthetic Event ', e);
        console.log('Native Event ', e.nativeEvent);
    }

    handleBtn1Click(e) {
        console.log('Context -> this ', this);
        console.log('Synthetic Event ', e);
        console.log('Native Event ', e.nativeEvent);
    }

    handleBtnClickWithArgs(argument1, argument2, e) {
        console.log('Context -> this ', this);
        console.log('Synthetic Arguments ', argument1, argument2);
        console.log('Native Event ', e);
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
                <EventBtn btnText="External btn 1" onBtnClick={this.handleBtnClick}></EventBtn>
                <br />
                <EventBtn2 btnText="External btn 2"></EventBtn2>
            </>
        );
    }
}

export default MoreEvents;
