import React from 'react';

import './_star.scss';

export default function Star({ index, rate }) {
    return (
        <i className={`fa-solid fa-star ${index <= rate ? "star-on" : "star"}`}></i>
    )
}
