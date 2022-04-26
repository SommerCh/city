import { useState, useEffect } from "react";

export default function Attractions() {
    const [attractions, setAttractions] = useState([]);
  
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

    function getImgUrl(attraction) {
        if (attraction.Files.length >= 1) {
            return attraction.Files[0].Uri;
        }
    }


    return (
        <>
            {attractions.map(attraction => ( 
                <div className="category-element">
                    <div className="category-img">
                        <img src={getImgUrl(attraction)} alt={attraction.Name} />
                    </div>
                    <div className="category-details">
                        <h2>{attraction.Name}</h2>                     
                        <p>{attraction.Category.Name}</p>  
                        <span>{attraction.MainCategory.Name}</span>
                    </div>
                </div>
            ))} 
        </>
    );
}