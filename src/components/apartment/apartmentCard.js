import React from 'react'
import { Link } from 'react-router-dom'

export default function apartmentCard({ apartment }) {
    return (
        <Link className="apartment-card" to={`/apartment/${apartment.id}`} key={apartment.id} apartment={apartment} >
            <img src={apartment.cover} alt='photo de la location' />
            < p > {apartment.title}</p >
        </Link >
    )
}
