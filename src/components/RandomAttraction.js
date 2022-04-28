import React from 'react';
import { useState, useEffect } from "react";


export default function RandomAttraction() {
    const [attractions, setAttractions] = useState([]);
    const [oneAttraction, setOneAttraction] = useState([]);


    // Fetch Activities
        useEffect(() => {
            async function getData() {
                const response = await fetch("/data/attractions.json");
                const data = await response.json();
                setAttractions(data);
                console.log(data);
            }
            getData();
        }, []) 

    // Place random from fetch
        const handleSpinAttractions = () => {
            let random = attractions[Math.floor(Math.random() * attractions.length)];
            setOneAttraction(random);
            console.log(random)
        };

            
    // Fetch imgs
        function getImgAtt(oneAttraction) {
            if (oneAttraction.Files?.length >= 1) {
                return oneAttraction.Files[0]?.Uri;
            }         
        }


        
    return (
        <>                
            <div className='slot-wheel'>                        
                <div className="slot-element">  
                    <div className="slot-img">
                    <img src={oneAttraction.Files?.lenght ? oneAttraction?.Files[0]?.Uri : getImgAtt(oneAttraction)} alt={oneAttraction.Name} /> 
                    </div>           
                    <div className="slot-details">
                        <div className="slot-title"> <h2>{oneAttraction?.Name}</h2> </div>                                        
                        <div className="slot-cat"> <p>{oneAttraction.Category?.Name}</p> </div>
                        {/* <div className="slot-desc"> <p>{oneAttraction.Descriptions[0].Text}</p> </div>      */}
                    </div>
                </div> 
                <button onClick={handleSpinAttractions} className="slot-btn">Spin</button>
                            
            </div>
        </>
    )
};

