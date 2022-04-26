import { useState, useEffect } from "react";

export default function Activities() {
    const [activities, setActivities] = useState([]);
  
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

    function getImgUrl(activity) {
        if (activity.Files.length >= 1) {
            return activity.Files[0].Uri;
        }
    }


    return (
        <>
            {activities.map(activity => ( 
                <div className="category-element">  
                    <div className="category-img">
                        <img src={getImgUrl(activity)} alt={activity.Name} />
                    </div>           
                    <div className="category-details">
                        <h2>{activity.Name}</h2>                 
                        <p>{activity.Category.Name}</p>  
                        <span>{activity.MainCategory.Name}</span>
                    </div>
                </div>
            ))}
        </>
    );
}


