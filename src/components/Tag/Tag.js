import React from 'react';

import "./_tag.scss";

export default function Tag({ label }) {
    return (
        <div className='tag'><span>{label}</span></div>
    )
}
