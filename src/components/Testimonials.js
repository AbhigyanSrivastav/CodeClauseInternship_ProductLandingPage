import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png"
import {AiFillStar} from "react-icons/ai"
const Testimonials = () => {
  return (
    <div>
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Testimonial</p>
                <h1 className="primary-heading">What They Are Saying</h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ea doloremque numquam repudiandae atque eaque nesciunt praesentium voluptate harum sunt.
                </p>
            </div>
            <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="profile" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestias rerum exercitationem ex nam modi quod facilis atque rem voluptatum possimus, porro iure est harum vel maiores sint necessitatibus? Reiciendis.
            </p>

            <div className="testimonial-stars-container">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>John Doe</h2>
            </div>
        </div>
    </div>
  )
}

export default Testimonials