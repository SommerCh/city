import React from "react";
import { useState, useEffect } from "react";
import CategoryElements from "../components/CategoryElements";
import PlaceToEat from "../components/PlacesToEat";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [isShow, setIsShow] = useState(true);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    async function getData() {
      const res = await fetch("data/categories.json");
      const data = await res.json();
      console.log(data);
      setCategories(data);
      console.log();
    }
    getData();
  }, []);

  return (
    <>
      <div className="page">
        {/* <h1>Categories</h1> */}
        <h1>Search attractions, restaurantes and experiences</h1>
        <h3>We have listed attractions, cafées and more right here. So you can search everything you need to plan your holiday.</h3>
        <input type="search" placeholder="Search" onkeyup="search(this.value)" />
        <section className="category-cntr">
          {categories.map((category) => (
            <article className="category-article">
              <div className="article-img">
                <img src={category.ImageUrl} alt={category.Name} />
              </div>
              <h2>{category.Name}</h2>
              {/* <p>{category.Details}</p> */}
              <button onClick={handleClick}> See All {category.Name}</button>
            </article>
          ))}
        </section>

        <section class="container">{isShow ? <></> : <PlaceToEat />}</section>

        <CategoryElements />
      </div>
    </>
  );
}
