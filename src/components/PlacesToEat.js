import { useEffect, useState } from "react";
import AllPlaces from "./AllPlaces";
import imagePlaceholder from "../assets/imagePlaceholder.png";
import Cafes from "./Cafes";
import Clubs from "./Clubs";
import Restaurants from "./Restaurants";
import Search from "./Search";

export default function PlacesToEat() {
  const [change, setChange] = useState();
  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await fetch("data/placesToEat.json");
      const data = await response.json();
      setPlaces(data);
      console.log(data);
    }
    getData();
  }, []);

  function test(e) {
    setChange(e.target.value);

    const cafe = document.querySelector("#cafe");
    const club = document.querySelector("#club");
    const res = document.querySelector("#res");
    const all = document.querySelector("#all");

    if (e.target.value === "Cafés") {
      club.classList.remove("yes");
      res.classList.remove("yes");
      cafe.classList.add("yes");
      all.classList.add("no");
    } else if (e.target.value === "Nightlife and Club") {
      cafe.classList.remove("yes");
      res.classList.remove("yes");
      club.classList.add("yes");
      all.classList.add("no");
    } else if (e.target.value === "Restaurants") {
      club.classList.remove("yes");
      cafe.classList.remove("yes");
      res.classList.add("yes");
      all.classList.add("no");
    } else if (e.target.value === "All") {
      all.classList.remove("no");
      club.classList.remove("yes");
      cafe.classList.remove("yes");
    }
  }

  return (
    <section className="page">
      <h1>Places To Eat</h1>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        onkeyup="search(this.value)"
      />

<select value={change} onChange={test}>
        <option value="All">All</option>
        <option value="Cafés">Cafés</option>
        <option value="Nightlife and Club">Nightlife and Club</option>
        <option value="Restaurants">Restaurants</option>
      </select>

      <section id="all" className="grid-container">
        {places
          .filter((place) => place.Name.toLowerCase().includes(search))
          .map((place) => (
            <article key={place.Id}>
              <img src={place.Files[0] ? place.Files[0].Uri : imagePlaceholder} alt={place.Name} />
              <h2>{place.Name}</h2>
              <p>{place.Category.Name}</p>
            </article>
          ))}
      </section>

      <div className="container">
        <div id="cafe" className="no">
          <Cafes />
        </div>
        <div id="club" className="no">
          <Clubs />
        </div>
        <div id="res" className="no">
          <Restaurants />
        </div>
      </div>
    </section>
  );
}
