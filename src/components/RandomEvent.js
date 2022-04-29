import React from 'react';
import { useState, useEffect } from "react";
// import { IoLockClosed } from "react-icons/io5";


export default function RandomEvent() {
    const [events, setEvents] = useState([]);
    const [oneEvent, setOneEvent] = useState([]);


    // Fetch Activities
        useEffect(() => {
            async function getData() {
                const response = await fetch("/data/events.json");
                const data = await response.json();
                setEvents(data);
                console.log(data);
            }
            getData();
        }, [])  

    // Place random from fetch
        const handleSpinEvents = () => {
            let random = events[Math.floor(Math.random() * events.length)];
            setOneEvent(random);
            console.log(random)
        };

            
    // Fetch imgs
        function getImgEvt(oneEvent) {
            if (oneEvent.Files?.length >= 1) {
                return oneEvent.Files[0]?.Uri;
            }
        }

    // Save to local storage
        // function saveToLocal() {
        // window.localStorage.setItem("oneEvent", JSON.stringify(oneEvent));

        // let thisEvent = window.localStorage.getItem("oneEvent");
        // console.log(JSON.parse(thisEvent));
        // }

    

    return (
        <>                
            <div className='slot-wheel'>                        
                <div className="slot-element">  
                    <div className="slot-img">
                    <img src={oneEvent.Files?.lenght ? oneEvent?.Files[0]?.Uri : getImgEvt(oneEvent)} alt={oneEvent.Name} /> 
                    </div>           
                    <div className="slot-details">
                        <div className="slot-title"> <h2>{oneEvent?.Name}</h2> </div>                                        
                        <div className="slot-cat"> <p>{oneEvent.Category?.Name}</p> </div>
                        {/* <div className="slot-desc"> <p>{oneEvent.Descriptions[0].Text}</p> </div>  */}
                    </div>
                </div> 
                <div className='btn-cntr'>
                    <button onClick={handleSpinEvents} className="slot-btn">Spin</button>
                </div>
                {/* <button onClick={saveToLocal} className="save-btn"> <IoLockClosed />Save </button>               */}
            </div>
        </>
    )
};

