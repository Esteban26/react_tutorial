import React from 'react';

const EventBtn2 = ({ btnText }) => {
    // handle click
    const handleClick = (e) => {
        console.log('Synthetic evt:', e);
        console.log(this);
    }
    return (
        <button onClick={handleClick}>
            {btnText}
        </button>
    );
}

export default EventBtn2;
