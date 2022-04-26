import React from 'react';
import { useState, useEffect } from "react";


export default function RandomPlaceToEat() {
    const [places, setPlaces] = useState([]);
    const [onePlace, setOnePlace] = useState([]);


    // Fetch 
        useEffect(() => {
            const fetchPlaces = async () => {
                try {
                const fetchingPlaces = await fetch("data/placesToEat.json");
                const places = await fetchingPlaces.json();

                setPlaces(places);
                } catch (err) {
                console.log(err);
                }
            };
            fetchPlaces();
        }, []);
  
    
            const handleSpinPlaces = () => {
                let random = places[Math.floor(Math.random() * places.length)];
                setOnePlace(random);
                console.log(random)
            };

            
            // Fetch imgs
                function getImgPla(onePlace) {
                    if (onePlace.Files.length >= 1) {
                        return onePlace.Files[0].Uri;
                    }
                    
                }

    
    return (
        <>                
            <div className='slot-wheel'>                        
                <div className="slot-element">  
                    <div className="slot-img">
                        {/* <img src={getImgPla(onePlace)} alt={onePlace.Name} />  */}
                    </div>           
                    <div className="slot-details">
                        <h2>{onePlace.Name}</h2>                 
                        {/* <p>{onePlace.MainCategory.Name}</p>   
                        <p>{onePlace.Category.Name}</p>  */}
                        {/* <p className='category-desc'>{onePlace.Descriptions[0].Text}</p>  */}           
                    </div>
                </div> 
                <button onClick={handleSpinPlaces} className="slot-btn">Spin</button>
            </div>
        </>
    )
};

