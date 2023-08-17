import React from 'react'
import DeliveryMeals from "../Assets/delivery-image.png"
import PickMeals from "../Assets/pick-meals-image.png"
import ChooseMeals from "../Assets/choose-image.png"
const Work = () => {

    const workInfoData=[

      {  
        image:DeliveryMeals,
        title:"Delivery Meals",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eos."
      },
      {  
        image:PickMeals,
        title:"Pick Meals",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eos."
      },
      {  
        image:ChooseMeals,
        title:"Choose Meals",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eos."
      }
    ]

  return (
    <div>
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Work</p>
                <h1 className="primary-heading">How It Works</h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe pariatur ea nesciunt eaque earum nostrum voluptatum suscipit labore atque dolores?
                </p>
            </div>

            <div className="work-section-bottom">
                {
                    workInfoData.map((data)=>(
                        <div className="work-section-info">
                            <div className="info-boxes-img-container">
                                <img src={data.image} alt="infoImage" />
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Work