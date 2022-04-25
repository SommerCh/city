import { useState, useEffect } from "react";

export default function Attractions() {
    const [attractions, setAttractions] = useState([]);
    const [oneAttraction, setOneAttraction] = useState(''); //one more hook for storing current random post
  
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
  
    const handleClick = () => {
        const random = attractions[Math.floor(Math.random() * attractions.length)];
        setOneAttraction(random);
        console.log(random)
    };
    // console.log(attractions);


    return (
        <>
            <div className="slot-element">
                <div className="slot-img">
                    {/* <img src={oneAttraction.Files[0]} alt={oneAttraction.Name} /> */}
                </div>
                <div className="slot-details">
                    <span>{oneAttraction.Name}</span>                     
                    {/* <p>{oneAttraction.Category.Name}</p>   */}
                </div>
            </div>
            <button onClick={handleClick} className="slot-btn">Spin</button>
        </>
    );
}


