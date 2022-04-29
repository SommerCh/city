import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import imagePlaceholder from "../assets/imagePlaceholder.png";

export default function Clubs() {
  const [places, setPlaces] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const response = await fetch("data/placesToEat.json");
      const items = await response.json();
      const results = items.filter((item) => item.Category.Name === "Nightlife and Clubs");
      console.log(results);
      setPlaces(results);
    }
    getData();
  }, []);

  return (
    <section className="page">
      <h2>Nightlife and Clubs</h2>
      <section className="grid-container">
        {places.map((place) => (
          <article key={place.Id} onClick={() => navigate(`/places-to-eat/${place.Id}`)}>
            <img src={place.Files[0] ? place.Files[0].Uri : imagePlaceholder} alt={place.Name} />
            <h2>{place.Name}</h2>
            <p>{place.Category.Name}</p>
          </article>
        ))}
      </section>
    </section>
  );
}
