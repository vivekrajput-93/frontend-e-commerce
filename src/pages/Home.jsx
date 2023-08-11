import React from 'react'
import Navbar from '../components/Navbar';
import Announce from '../components/Announce';
import Slider from '../components/Slider';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <Announce />
        <Navbar />
        <Slider />
        <Footer />
    </div>
  )
}

export default Home;