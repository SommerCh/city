import { useState, useEffect } from "react";

export default function PlacesToEat() {
    const [places, setPlaces] = useState([]);
    const [onePlace, setOnePlace] = useState(''); //one more hook for storing current random post
  
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
  
    const handleClick = () => {
        const random = places[Math.floor(Math.random() * places.length)];
        setOnePlace(random);
        console.log(random)
    };
    // console.log(places);


    return (
        <>
            <div className="slot-element">
                <div className="slot-img">
                    {/* <img src={onePlace.Files[0].Uri} alt={onePlace.Name} /> */}
                </div>
                <div className="slot-details">
                    <span>{onePlace.Name}</span> 
                    {/* <p>{onePlace.Category.Name}</p>   */}
                </div>
            </div>
            <button onClick={handleClick} className="slot-btn">Spin</button>
        </>
    );
}

