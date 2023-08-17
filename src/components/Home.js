import React from 'react'
import Navbar from './Navbar'
import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from "../Assets/home-banner-image.png"
import { FiArrowRight } from "react-icons/fi"
const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <div className="home-banner-container">
        <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="BannerBackground"/>
        </div>
        <div className="home-text-section">  
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
          The checkbox is the primary action and the state indicator for the list item. The comment button is a secondary action and a separate target.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight/>
          </button>
        </div>
        <div className="home-image-container">
          <img src={BannerImage} alt="BannerImage"/>
        </div>
        </div>
    </div>
  )
}

export default Home