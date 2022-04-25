import { useState, useEffect } from "react";

export default function Events() {
    const [events, setEvents] = useState([]);
    const [oneEvent, setOneEvent] = useState(''); //one more hook for storing current random post
  
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
  
    const handleClick = () => {
        const random = events[Math.floor(Math.random() * events.length)];
        setOneEvent(random);
        console.log(random)
    };
    // console.log(events);


    return (
        <>
            <div className="slot-element">  
                <div className="slot-img">
                    {/* <img src={oneEvent.Files[0]} alt={oneEvent.Name} /> */}
                </div>
                <div className="slot-details">
                    <span>{oneEvent.Name}</span> 
                    {/* <p>{oneEvent.Category.Name}</p>   */}
                    {/* <span>{oneEvent.Descriptions}</span>  */}
                </div>               
            </div>
            <button onClick={handleClick} className="slot-btn">Spin</button>     
        </>
    );
}


