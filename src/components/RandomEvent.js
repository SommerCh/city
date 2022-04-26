import React from 'react';
import { useState, useEffect } from "react";


export default function RandomEvent() {
    const [events, setEvents] = useState([]);
    const [oneEvent, setOneEvent] = useState([]);


    // Fetch Activities
        useEffect(() => {
            const fetchEvents = async () => {
                try {
                const fetchingEvents = await fetch("data/Events.json");
                const events = await fetchingEvents.json();

                setEvents(events);
                } catch (err) {
                console.log(err);
                }
            };
            fetchEvents();
        }, []);
  
    
            const handleSpinEvents = () => {
                let random = events[Math.floor(Math.random() * events.length)];
                setOneEvent(random);
                console.log(random)
            };

            
            // Fetch imgs
                function getImgEvt(oneEvent) {
                    if (oneEvent.Files.length >= 1) {
                        return oneEvent.Files[0].Uri;
                    }
                    
                }

    
    return (
        <>                
            <div className='slot-wheel'>                        
                <div className="slot-element">  
                    <div className="slot-img">
                        {/* <img src={getImgAtt(oneEvent)} alt={oneEvent.Name} />  */}
                    </div>           
                    <div className="slot-details">
                        <h2>{oneEvent.Name}</h2>                 
                        {/* <p>{oneEvent.MainCategory.Name}</p>   
                        <p>{oneEvent.Category.Name}</p>  */}
                        {/* <p className='category-desc'>{oneEvent.Descriptions[0].Text}</p>  */}  
                    </div>
                </div> 
                <button onClick={handleSpinEvents} className="slot-btn">Spin</button>                
            </div>
        </>
    )
};

