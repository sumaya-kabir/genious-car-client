import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Baner';
import ShortContact from '../Contacts/ShortContact';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ShortContact></ShortContact>
            <Team></Team>
            
        </div>
    );
};

export default Home;