import { useState, useEffect } from "react";


export default function SlotMachineComp() {
    const [attractions, setAttractions] = useState([]); // To fetch and set the category elements
    const [oneAttraction, setOneAttraction] = useState(''); // one more hook for storing current random category element
    const [activities, setActivities] = useState([]);
    const [oneActivity, setOneActivity] = useState('');
    const [places, setPlaces] = useState([]);
    const [onePlace, setOnePlace] = useState('');
    const [events, setEvents] = useState([]); 
    const [oneEvent, setOneEvent] = useState('');

    // FETCH ATTRACTIONS
        useEffect(() => {
            const fetchAttractions = async () => {
                try {
                const fetchingAttractions = await fetch("data/attractions.json");
                const attractions = await fetchingAttractions.json();
        
                setAttractions(attractions);
                
                } catch (error) {
                console.log(error);
                }
            };
            fetchAttractions();
        }, []);
    
        let handleSpinAttractions = () => {
            let random = attractions[Math.floor(Math.random() * attractions.length)];
            setOneAttraction(random);
            console.log(random)
        };


    // FETCH ACTIVITIES
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
      
        let handleSpinActivities = () => {
            let random = activities[Math.floor(Math.random() * activities.length)];
            setOneActivity(random);
            console.log(random)
        };


    // FETCH EVENTS
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

        let handleSpinEvents = () => {
            let random = events[Math.floor(Math.random() * events.length)];
            setOneEvent(random);
            console.log(random)
        };


    // FETCH PLACES TO EAT
        useEffect(() => {
            const fetchPlaces = async () => {
                try {
                const fetchingPlaces = await fetch("data/placesToEat.json");
                const places = await fetchingPlaces.json();
        
                setPlaces(places);
                } catch (err) {
                console.log(err);
                }
            };
            fetchPlaces();

            
        }, []);

        let handleSpinPlaces = () => {
            let random = places[Math.floor(Math.random() * places.length)];
            setOnePlace(random);
            console.log(random)
        };


    return (
        <>
            <div className="slot-machine-cntr">
                

                {/* Places To Eat */}
                <div className="slot-wheel-box">
                    <h3>Places to eat</h3>
                    <div className="slot-wheel"> 
                        <div className="slot-element">
                            <div className="slot-img">
                            {/* <img src={onePlace.Files[0].Uri} alt={onePlace.Name} /> */}
                            </div>
                            <div className="slot-details">
                                <span>{onePlace.Name}</span> 
                                {/* <p>{onePlace.Category.Name}</p>   */}
                                {/* <span>{onePlace.Descriptions[0].Text}</span>  */}
                            </div>
                        </div>
                         <button onClick={handleSpinPlaces} className="slot-btn">Spin</button>
                    </div>                          
                </div>


                <div className="slot-wheel-box">
                    <h3>Attractions</h3>
                    <div className="slot-wheel">
                        <div className="slot-element">
                            <div className="slot-img">
                                {/* <img src={getImgAtt(oneAttraction)}alt={oneAttraction.Name} /> */}
                            </div>
                            <div className="slot-details">
                                <span>{oneAttraction.Name}</span>                     
                                {/* <p>{oneAttraction.Category.Name}</p>  */}
                                {/* <p>{oneAttraction.Descriptions[0]}</p>   */}
                            </div> 
                        </div>
                        <button onClick={handleSpinAttractions} className="slot-btn">Spin</button>
                    </div>
                </div>


                <div className="slot-wheel-box">
                    <h3>Activities</h3>
                    <div className="slot-wheel">
                        <div className="slot-element">  
                            <div className="slot-img">
                                {/* <img src={getImgAct(oneActivity)} alt={oneActivity.Name} /> */}
                            </div>           
                            <div className="slot-details">
                                <span>{oneActivity.Name}</span>                 
                                {/* <p>{oneActivity.Category.Name}</p>   */}
                                {/* <span>{oneActivity.Descriptions[0].Text}</span>  */}
                            </div>
                        </div>
                        <button onClick={handleSpinActivities} className="slot-btn">Spin</button>
                    </div>
                </div>
                

                {/* Events */}
                <div className="slot-wheel-box">
                    <h3>Events</h3>
                    <div className="slot-wheel">
                        <div className="slot-element">  
                            <div className="slot-img">
                                {/* <img src={getImgEvt(oneEvent)} alt={oneEvent.Name} /> */}
                            </div>
                            <div className="slot-details">
                                <span>{oneEvent.Name}</span> 
                                {/* <p>{oneEvent.Category.Name}</p>   */}
                                {/* <span>{oneEvent.Descriptions[0].Text}</span>  */}
                            </div>               
                        </div>
                        <button onClick={handleSpinEvents} className="slot-btn">Spin</button> 
                    </div>
                </div>


            </div>
        </>
    )
}
