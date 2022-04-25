import { useState, useEffect } from "react";

export default function Activities() {
    const [activities, setActivities] = useState([]);
    const [oneActivity, setOneActivity] = useState(''); //one more hook for storing current random post
  
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
  
    const handleClick = () => {
        const random = activities[Math.floor(Math.random() * activities.length)];
        setOneActivity(random);
        console.log(random)
    };
    // console.log(activities);


    return (
        <>
            <div className="slot-element">  
                <div className="slot-img">
                    {/* <img src={oneActivity.Files[0]} alt={oneActivity.Name} /> */}
                </div>           
                <div className="slot-details">
                    <span>{oneActivity.Name}</span>                 
                    {/* <h3>{oneActivity.MainCategory.Name}</h3> */}
                    {/* <p>{oneActivity.Category.Name}</p>   */}
                </div>
            </div>
            <button onClick={handleClick} className="slot-btn">Spin</button>
        </>
    );
}


