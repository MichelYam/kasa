import React from 'react'

export default function Star({index, rate}) {
    return (
        <i className={`fa-solid fa-star ${index <= rate ? "star-on" : "star"}`}></i>
    )
}
