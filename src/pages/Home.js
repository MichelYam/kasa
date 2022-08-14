import React, { useEffect, useState } from 'react';

// components
import ApartmentCard from '../components/Apartment/ApartmentCard';
import { getAllApartement } from '../service/apartment';
export default function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        const getAllApparts = async () => {
            const apartment = await getAllApartement();
            setData(apartment)
        }
        getAllApparts()
    }, [])

    return (
        <main>
            <div className='header_banner'>
                <p>Chez vous, partout et ailleurs</p>
            </div>
            <section>
                <div className="apartments-list">
                    {data.map((apartment) => {
                        return <ApartmentCard key={apartment.id} apartment={apartment} />
                    })}
                </div>
            </section>
        </main>
    )
}
