import React from 'react';
import { useState, useEffect } from "react";
import { IoHeartSharp } from "react-icons/io5";


export default function RandomActivity() {
    const [activities, setActivities] = useState([]);
    const [oneActivity, setOneActivity] = useState([]);


    // Fetch Activities
        useEffect(() => {
            async function getData() {
                const response = await fetch("/data/activities.json");
                const data = await response.json();
                setActivities(data);
                console.log(data);
            }
            getData();
        }, [])
    
    // Place random from fetch    
        const handleSpinActivities = () => {
            let random = activities[Math.floor(Math.random() * activities.length)];
            setOneActivity(random);
            console.log(random)
        };

            
    // Fetch imgs
        function getImgAct(oneActivity) {
            if (oneActivity.Files?.length >= 1) {
                return oneActivity.Files[0]?.Uri;
            }
        }

    // Save to local storage
        // function saveToLocal() {
        //     window.localStorage.setItem("oneActivity", JSON.stringify(oneActivity));

        //     let thisActivity = window.localStorage.getItem("oneActivity");
        //     console.log(JSON.parse(thisActivity));
        // }


    return (
        <>                
            <div className='slot-wheel'>                        
                <div className="slot-element">  
                    <div className="slot-img">
                    <img src={oneActivity.Files?.lenght ? oneActivity?.Files[0]?.Uri : getImgAct(oneActivity)} alt={oneActivity.Name} /> 
                    </div>           
                    <div className="slot-details">
                        <div className='slot-details-txt'>
                        <div className="slot-title"> <h2>{oneActivity?.Name}</h2> </div>                                        
                        <div className="slot-cat"> <p>{oneActivity.Category?.Name}</p> </div>
                        </div>
                        <button className="save-btn"> <IoHeartSharp /> </button>    
                        {/* <div className="slot-desc"> <p>{oneActivity.Descriptions[0].Text}</p> </div>         */}
                    </div>
                </div> 
                <div className='btn-cntr'>
                    <button onClick={handleSpinActivities} className="slot-btn">Spin</button>
                </div>
            </div>
        </>
    )
};

