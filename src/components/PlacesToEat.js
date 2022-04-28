import { useState, useEffect } from "react";

export default function PlacesToEat() {
    const [places, setPlaces] = useState([]);
  
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

    function getImgUrl(place) {
        if (place.Files.length >= 1) {
            return place.Files[0].Uri;
        }
    }


    return (
        <>
            {places.map(place => ( 
                <div className="category-element">
                    <div className="category-img">
                        <img src={getImgUrl} alt={place.Name} />
                    </div>
                    <div className="category-details">
                        <h2>{place.Name}</h2> 
                        <p>{place.Category.Name}</p>  
                        <span>{place.MainCategory.Name}</span>
                    </div>
                </div>
            ))}
        </>
    );
}

