import React from 'react';
import { useState, useEffect } from "react";


export default function RandomAttraction() {
    const [attractions, setAttractions] = useState([]);
    const [oneAttraction, setOneAttraction] = useState([]);


    // Fetch Activities
        useEffect(() => {
            const fetchAttractions = async () => {
                try {
                const fetchingAttractions = await fetch("data/attractions.json");
                const attractions = await fetchingAttractions.json();

                setAttractions(attractions);
                } catch (err) {
                console.log(err);
                }
            };
            fetchAttractions();
        }, []);
  
    
            const handleSpinAttractions = () => {
                let random = attractions[Math.floor(Math.random() * attractions.length)];
                setOneAttraction(random);
                console.log(random)
            };

            
            // Fetch imgs
                function getImgAtt(oneAttraction) {
                    if (oneAttraction.Files.length >= 1) {
                        return oneAttraction.Files[0].Uri;
                    }
                    
                }

    
    return (
        <>                
            <div className='slot-wheel'>                        
                <div className="slot-element">  
                    <div className="slot-img">
                        {/* <img src={getImgAtt(oneAttraction)} alt={oneAttraction.Name} />  */}
                    </div>           
                <div className="slot-details">
                    <h2>{oneAttraction.Name}</h2>                 
                        {/* <p>{oneAttraction.MainCategory.Name}</p>   
                        <p>{oneAttraction.Category.Name}</p>  */}
                        {/* <p className='category-desc'>{oneActivity.Descriptions[0].Text}</p>  */}
                </div>
                </div> 
                <button onClick={handleSpinAttractions} className="slot-btn">Spin</button>
                            
            </div>
        </>
    )
};

