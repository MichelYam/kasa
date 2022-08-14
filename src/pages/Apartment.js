import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// components
import Collapse from '../components/Collapse/Collapse';
import Caroussel from '../components/Carrousel/Carousel';
import Star from '../components/Star/Star';
import Tag from '../components/Tag/Tag';
import { getApartmentByID } from '../service/apartment';

export default function Apartment() {

  const { id } = useParams(); //get id form url
  const navigate = useNavigate()
  const [apartment, setApartment] = useState({ pictures: [], host: { "name": '', "picture": '' }, rating: '', location: '', equipments: [], tags: [] });

  useEffect(() => {
    const getAllApparts = async () => {
      const apartmentData = await getApartmentByID(id);
      if (apartmentData === null) {
        navigate("/error");
      } else {
        setApartment(apartmentData.apartmentData)
      }
    }
    console.log("useEffect runs")
    getAllApparts()
  }, [id])

  console.log("component rendered")

  // redirect user if apartment not found
  return (
    <>
      {/* <Header /> */}
      <Caroussel pictures={apartment.pictures} />
      <div className='flex apartment'>
        <div className='apartment-location'>
          <h2>{apartment.title}</h2>
          <p>{apartment.location}</p>
          <div className='apartment-tags'>
            {apartment.tags.map((tag) => {
              return <Tag key={tag} label={tag} />
            })}
          </div>
        </div>
        <div className='user'>
          <div className='flex user-avatar'>
            <p>{apartment.host.name}</p>
            <img src={apartment.host.picture} alt='cover du propriétaire' />
          </div>
          <div className='user-star'>
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (<Star key={index} index={index} rate={apartment.rating} />);
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
      {/* <Footer /> */}
    </>
  )
}
