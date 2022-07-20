import React from 'react';

// components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ApartmentCard from '../components/Apartment/apartmentCard';

export default function Home({ apartmentsData }) {
    return (
        <>
            <Header />
            <main>
                <section>
                    <div className="apartments-list">
                        {apartmentsData.map((apartment) => {
                            return <ApartmentCard key={apartment.id} apartment={apartment} />
                        })}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
