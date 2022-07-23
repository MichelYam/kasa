import React from 'react'
import { useParams } from 'react-router-dom'

// components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Collapse from '../components/Collapse';
import Caroussel from '../components/Carousel';

export default function Apartment({ apartmentsData }) {
  const { id } = useParams();
  const apartment = apartmentsData.find((ele) => ele.id === id);

  return (
    <>
      <Header />
      <Caroussel pictures={apartment.pictures} />
      <div className='flex apartment'>
        <div className='apartment-location'>
          <h2>{apartment.title}</h2>
          <p>{apartment.location}</p>
          <div className='apartment-tags'>
            {apartment.tags.map((tag) => {
              return <div key={tag} className='tag'>{tag}</div>
            })}
          </div>
        </div>
        <div className='user'>
          <div className='flex user-avatar'>
            <p>{apartment.host.name}</p>
            <img src={apartment.host.picture} alt='photo du propriétaire' />
          </div>
          <div className='user-star'>
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (<i key={index} className={`fa-solid fa-star ${index <= apartment.rating ? "star-on" : "star"}`}></i>);
            })}
          </div>
        </div>
      </div>
      <div className='collapse-container'>
        <Collapse label="Description">
          <p>{apartment.description}</p>
        </Collapse>
        <Collapse label="Équipements">
          <ul>
            {apartment.equipments.map((equipment) => {
              return <li key={equipment}>{equipment}</li>
            })}
          </ul>
        </Collapse>
      </div>
      <Footer />
    </>
  )
}
