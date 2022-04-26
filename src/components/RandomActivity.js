import React from 'react';
import { useState, useEffect } from "react";


export default function RandomActivity() {
    const [activities, setActivities] = useState([]);
    const [oneActivity, setOneActivity] = useState([]);


    // Fetch Activities
        useEffect(() => {
            const fetchActivities = async () => {
                try {
                const fetchingActivities = await fetch("data/activities.json");
                const activities = await fetchingActivities.json();

                setActivities(activities);
                } catch (err) {
                console.log(err);
                }
            };
            fetchActivities();
        }, []);
  
    
            const handleSpinActivities = () => {
                let random = activities[Math.floor(Math.random() * activities.length)];
                setOneActivity(random);
                console.log(random)
            };

            
            // Fetch imgs
                function getImgAct(oneActivity) {
                    if (oneActivity.Files.length >= 1) {
                        return oneActivity.Files[0].Uri;
                    }
                    
                }

    
    return (
        <>                
            <div className='slot-wheel'>                        
                <div className="slot-element">  
                    <div className="slot-img">
                        {/* <img src={getImgAct(oneActivity)} alt={oneActivity.Name} />  */}
                    </div>           
                    <div className="slot-details">
                        <h2>{oneActivity.Name}</h2>                 
                        {/* <p>{oneActivity.MainCategory.Name}</p>   
                        <p>{oneActivity.Category.Name}</p>  */}
                        {/* <p className='category-desc'>{oneActivity.Descriptions[0].Text}</p>  */}           
                    </div>
                </div> 
                <button onClick={handleSpinActivities} className="slot-btn">Spin</button>                
            </div>
        </>
    )
};

