import React from 'react';

const EventBtn = ({ btnText, onBtnClick }) => {
    console.log(btnText, onBtnClick);
    return (
        <button onClick={onBtnClick}>{btnText}</button>
    );
}

export default EventBtn;
