import React from 'react';
import { useState, useEffect } from "react";


export default function CategoryElements() {
    const [places, setPlaces] = useState([]);
    const [events, setEvents] = useState([]);
    const [activities, setActivities] = useState([]);
    const [attractions, setAttractions] = useState([]);
  

    // Fetch Attractions
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
  
    // Fetch Events
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


    // Fetch Places to eat
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

    // Fetch imgs
        function getImgUrl(element) {
            if (element.Files.length >= 1) {
                return element.Files[0].Uri;
            }
        }

    
    return (
        <>                
                <h1>Attractions</h1>
                <section className="category-flex-cntr" id='attractions'>          
                    {attractions.map(element => ( 
                        <div className="category-elem-box">
                            <div className="category-img">
                                <img src={getImgUrl(element)} alt={element.Name} />
                            </div>
                            <div className="category-details">
                                <h2>{element.Name}</h2>                     
                                <p>{element.MainCategory.Name}</p>  
                                <p>{element.Category.Name}</p>
                                {/* <p>{element.Descriptions[0].Text}</p>  */}
                            </div>
                        </div>
                    ))} 
                </section>


                <h1>Activities</h1>
                <section className="category-flex-cntr">          
                    {activities.map(element => ( 
                        <div className="category-elem-box">  
                            <div className="category-img">
                                <img src={getImgUrl(element)} alt={element.Name} />
                            </div>           
                            <div className="category-details">
                                <h2>{element.Name}</h2>                 
                                <p>{element.MainCategory.Name}</p>  
                                <p>{element.Category.Name}</p>
                                {/* <p className='category-desc'>{element.Descriptions[0].Text}</p>  */}
                            </div>
                        </div>
                    ))}
                </section>


                <h1>Events</h1>
                <section className="category-flex-cntr">          
                    {events.map(element => ( 
                        <div className="category-elem-box">                      
                            <div className="category-img">
                            <img src={getImgUrl(element)} alt={element.Name} />
                            </div>
                            <div className="category-details">
                                <h2>{element.Name}</h2> 
                                <p>{element.MainCategory.Name}</p>  
                                <p>{element.Category.Name}</p>
                                {/* <p>{element.Descriptions[0].Text}</p>  */}
                            </div>   
                        </div>
                    ))}
                </section>


                <h1>Places to eat</h1>
                <section className="category-flex-cntr">          
                    {places.map(element => ( 
                        <div className="category-elem-box">
                            <div className="category-img">
                                <img src={getImgUrl} alt={element.Name} />
                            </div>
                            <div className="category-details">
                                <h2>{element.Name}</h2> 
                                <p>{element.MainCategory.Name}</p>  
                                <p>{element.Category.Name}</p>
                                {/* <p>{element.Descriptions[0].Text}</p>  */}
                            </div>
                        </div>
                    ))}
                </section>

        </>
    )
};

