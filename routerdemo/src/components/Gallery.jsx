import React, { useEffect, useState } from 'react'
import './components.css'

const Gallery = () => {
    const [plantsData, setPlantsData] = useState([]);
    
    useEffect( () => {
        const fetchPlantsData = async() => {
            try {
                let response = await fetch("https://api.npoint.io/90ab236225149463608c")

                if(!response) throw new Error("Something went wrong..");
                const data = await response.json();
                setPlantsData(data);
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchPlantsData();
    })

    return (
        <>
            <div className='cards-container'>
                {plantsData.map((p) => {
                    return (
                      <>
                        <div className="plant_cards">
                          <h3>{p.plant_name}</h3>
                          <div>
                            <img
                              className="plant_img"
                              src={p.imageUrl}
                              alt={p.plant_name}
                            />
                          </div>
                          <p className="card_desc">{p.description}</p>
                          <p className="card_care">{p.careInstructions}</p>
                          <span className="card_price">
                            Price: ₹{Math.floor(p.price * 7)}
                          </span>
                          <br />
                        </div>
                      </>
                    );
                })}
            </div>
        </>
    )
}

export default Gallery