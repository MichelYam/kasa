import React from 'react';

// components
import ApartmentCard from '../components/Apartment/ApartmentCard';

export default function Home({ apartmentsData }) {
    return (
        <>
            <main>
                <div className='header_banner'>
                    <p>Chez vous, partout et ailleurs</p>
                </div>
                <section>
                    <div className="apartments-list">
                        {apartmentsData.map((apartment) => {
                            return <ApartmentCard key={apartment.id} apartment={apartment} />
                        })}
                    </div>
                </section>
            </main>
        </>
    )
}
