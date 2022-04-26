import { useState, useEffect } from "react";

export default function Events() {
    const [events, setEvents] = useState([]);
  
    useEffect(() => {
        const fetchEvents = async () => {
            try {
            const fetchingEvents = await fetch("data/events.json");
            const events = await fetchingEvents.json();
    
            setEvents(events);
            } catch (err) {
            console.log(err);
            }
        };
        fetchEvents();
    }, []);

    function getImgUrl(event) {
        if (event.Files.length >= 1) {
            return event.Files[0].Uri;
        }
    }


    return (
        <>
            {events.map(event => ( 
                <div className="category-element">                      
                    <div className="category-img">
                    <img src={getImgUrl(event)} alt={event.Name} />
                    </div>
                    <div className="category-details">
                        <h2>{event.Name}</h2> 
                        <p>{event.Category.Name}</p>  
                        <span>{event.MainCategory.Name}</span>
                    </div>   
                </div>
            ))}            

        </>
    );
}


