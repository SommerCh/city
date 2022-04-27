import React from 'react';
import { useState, useEffect } from "react";


export default function RandomPlaceToEat() {
    const [places, setPlaces] = useState([]);
    const [onePlace, setOnePlace] = useState([]);


    // Fetch Events
        useEffect(() => {
            async function getData() {
                const response = await fetch("/data/placesToEat.json");
                const data = await response.json();
                setPlaces(data);
                console.log(data);
            }
            getData();
        }, [])

    // Place random from fetch
        const handleSpinPlaces = () => {
            let random = places[Math.floor(Math.random() * places.length)];
            setOnePlace(random);
            console.log(random)
        };

            
    // Fetch imgs
        function getImgPla(onePlace) {
            if (onePlace.Files?.length >= 1) {
                return onePlace.Files[0]?.Uri;
            }
        }

    

    return (
        <>                
            <div className='slot-wheel'>                        
                <div className="slot-element">  
                    <div className="slot-img">
                        <img src={onePlace.Files?.lenght ? onePlace?.Files[0]?.Uri : getImgPla(onePlace)} alt={onePlace.Name} /> 
                    </div>           
                    <div className="slot-details">
                        <div className="slot-title"> <h2>{onePlace?.Name}</h2> </div>                                        
                        <div className="slot-cat"> <p>{onePlace.Category?.Name}</p> </div>
                        {/* <div className="slot-desc"> <p>{onePlace.Descriptions[0]?.Text}</p> </div>            */}
                    </div>
                </div> 
                <button onClick={handleSpinPlaces} className="slot-btn">Spin</button>
            </div>
        </>
    )
};

