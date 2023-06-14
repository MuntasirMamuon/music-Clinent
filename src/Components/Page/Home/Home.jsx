import React from 'react';
import Banner from './Banner/Banner';
import PopularInstructor from './PopularInstructor/PopularInstructor';
import PopularClassesSection from './PopularClassesSection/PopularClassesSection';
import FeedBackHome from '../../FeedBackHome/FeedBackHome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClassesSection></PopularClassesSection>
            <PopularInstructor></PopularInstructor>
            <FeedBackHome></FeedBackHome>
        </div>
    );
};

export default Home;