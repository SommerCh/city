import React from 'react';
import { useState, useEffect } from "react";
import imagePlaceholder from "../assets/imagePlaceholder.png";
import { IoChevronForward } from 'react-icons/io5';



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
                                <div className='category-title-box'>
                                    <div className='category-title'>
                                        <h2>{element.Name}</h2>  
                                    </div>
                                </div>
                            </div>
                            <div className="category-details">
                                <p>{element.MainCategory.Name}</p>  
                                <p>{element.Category.Name}</p>
                                <div className='readmore-btn attractions-btn'>
                                    <a href={element.CanonicalUrl} target="_blank" rel="noreferrer">Read more  <IoChevronForward /> </a>
                                </div>
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
                                <div className='category-title-box'>
                                    <div className='category-title'>
                                        <h2>{element.Name}</h2>  
                                    </div>
                                </div>
                            </div>           
                            <div className="category-details">
                                <p>{element.MainCategory.Name}</p>  
                                <p>{element.Category.Name}</p>
                                <div className='readmore-btn activity-btn'>
                                    <a href={element.CanonicalUrl} target="_blank" rel="noreferrer">Read more  <IoChevronForward /> </a>
                                </div>
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
                            <div className='category-title-box'>
                                    <div className='category-title'>
                                        <h2>{element.Name}</h2>  
                                    </div>
                                </div>
                            </div>
                            <div className="category-details">
                                <p>{element.MainCategory.Name}</p>  
                                <p>{element.Category.Name}</p>
                                <div className='readmore-btn event-btn'>
                                    <a href={element.CanonicalUrl} target="_blank" rel="noreferrer">Read more  <IoChevronForward /> </a>
                                </div>
                            </div>   
                        </div>
                    ))}
                </section>


                <h1>Places to eat</h1>
                <section className="category-flex-cntr">          
                    {places.map(element => ( 
                        <div className="category-elem-box">
                            <div className="category-img">
                                <img src={element.Files[0] ? element.Files[0].Uri : imagePlaceholder} alt={element.Name} />
                                <div className='category-title-box'>
                                    <div className='category-title'>
                                        <h2>{element.Name}</h2>  
                                    </div>
                                </div>
                            </div>
                            <div className="category-details">
                                <p>{element.MainCategory.Name}</p>  
                                <p>{element.Category.Name}</p>
                                <div className='readmore-btn place-btn'>
                                    <a href={element.CanonicalUrl} target="_blank" rel="noreferrer">Read more <IoChevronForward /> </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

        </>
    )
};

