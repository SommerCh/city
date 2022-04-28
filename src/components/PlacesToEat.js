import {  useState } from "react";
import AllPlaces from "./AllPlaces";
import Cafes from "./Cafes";
import Clubs from "./Clubs";
import Restaurants from "./Restaurants";

export default function PlacesToEat() {
  const [change, setChange] = useState();

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
    }
  }

  return (
    <section className="page">
      <h1>Places To Eat</h1>

      <select value={change} onChange={test}>
        <option value="All">All</option>
        <option value="Cafés">Cafés</option>
        <option value="Nightlife and Club">Nightlife and Club</option>
        <option value="Restaurants">Restaurants</option>
      </select>

      <div id="all">
        <AllPlaces />
      </div>

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
