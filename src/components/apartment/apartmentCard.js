import React from 'react'
import { Link } from 'react-router-dom'


import "./_apartmentCard.scss";

export default function ApartmentCard({ apartment }) {
    return (
        <Link className="apartment_card" to={`/apartment/${apartment.id}`} key={apartment.id} apartment={apartment} >
            <div className="apartment_card_img" style={{
                backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${apartment.cover})`
            }}></div>
            <p> {apartment.title}</p>
            <p>test</p>
        </Link >
    )
}
