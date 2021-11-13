import React from 'react';
import Footer from '../../Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeOthers from '../HomeOthers/HomeOthers';
import HomeProducts from '../HomeProducts/HomeProducts';
import HomeReviews from '../HomeReviews/HomeReviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <HomeProducts></HomeProducts>
            <HomeReviews></HomeReviews>
            <HomeOthers></HomeOthers>
            <Footer></Footer>
        </div>
    );
};

export default Home;