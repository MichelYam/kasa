import React from 'react'
import { useParams } from 'react-router-dom'
// import Footer from '../components/Footer/Footer';

// components
import Header from '../components/Header/Header';
import Collapse from '../components/Collapse';
export default function Apartment({ apartmentsData }) {
  const { id } = useParams();
  const apartment = apartmentsData.find((ele) => ele.id === id);

  return (
    <>
      <Header />
      {/* carrousel */}
      <div className='flex apartment'>
        <div>
          <h2>{apartment.title}</h2>
          <p>{apartment.location}</p>
          <div className='apartment-tags'>
            {apartment.tags.map((tag) => {
              return <div className='tag'>{tag}</div>
            })}
          </div>
        </div>
        <div className='flex column'>
          <div className='flex apartment-avatar'>
            <p>{apartment.host.name}</p>
            <img src={apartment.host.picture} alt='photo du propriétaire' />
          </div>
          <div className='apartment-star'>
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (<i className={`fa-solid fa-star ${index <= apartment.rating ? "star-on" : "star"}`}></i>);
            })}
          </div>
        </div>
      </div>
      <div className='flex space-between'>
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
      {/* <Footer /> */}
    </>
  )
}
