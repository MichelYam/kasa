import React, { useState } from 'react'

export default function Carousel({ pictures }) {

    const [currentId, setCurrentId] = useState(0);

    const previous = () => {
        if (pictures[currentId] === pictures[0]) {
            setCurrentId(pictures.length - 1);
        } else {
            setCurrentId(currentId - 1);
        }
    }

    const next = () => {
        if (pictures[currentId] === pictures[pictures.length - 1]) {
            setCurrentId(0);
        } else {
            setCurrentId(currentId + 1);
        }
    }
    return (
        <div className='carousel'>
            {pictures.length !== 1 ?
                <>
                    <i className='fa-solid fa-angle-left' onClick={previous} />
                    <i className='fa-solid fa-angle-right' onClick={next} />
                </>
                : null
            }
            <img src={pictures[currentId]} alt='gallery' />
            <div className='carousel-indicator'>{currentId + 1}/{pictures.length}</div>

        </div>
    )
}
