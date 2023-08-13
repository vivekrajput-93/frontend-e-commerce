import React from 'react'
import Navbar from '../components/Navbar';
import Announce from '../components/Announce';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Category from '../components/Category';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  return (
    <div>
        <Announce />
        <Navbar />
        <Slider />
        <Category />
        <Products />
        <NewsLetter />
        <Footer />
    </div>
  )
}

export default Home;