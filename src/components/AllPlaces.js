import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import imagePlaceholder from "../assets/imagePlaceholder.png";

export default function AllPlaces() {
  const [places, setPlaces] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const response = await fetch("data/placesToEat.json");
      const data = await response.json();
      setPlaces(data);
      console.log(data);
    }
    getData();
  }, []);

  return (
    <section className="page">
      <h2>All Places To Eat</h2>
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
