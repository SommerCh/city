import React from 'react';
import { useState, useEffect } from "react";
import CategoryElements from '../components/CategoryElements';


export default function CategoriesPage() {
    const [categories, setCategories] = useState([]);

    useEffect (() => {
        async function getData() {
            const res = await fetch("data/categories.json");
            const data = await res.json();
            console.log(data);
            setCategories(data);
        }

        getData();
    }, []);

    // function search(value) {
    //     value = value.toLowerCase();
    //     let filteredElements = [];
    //     for (let element of elements) {
    //       let Name = element.Name.toLowerCase();
    //       if (Name.includes(value)) {
    //         filteredElements.push(element);
    //       }
    //     }
    //     appendElements(filteredElements);
    //   }

    
    return (
        <>
            <div className='page'>
                <h1>Categories</h1>
                <section className="category-cntr">          
                    {categories.map(category => ( 
                        <article className="category-article">
                            <img src={category.ImageUrl} alt={category.Name} />
                            <h2>{category.Name}</h2>
                        </article>
                    ))}
                </section>

               <CategoryElements />

            </div>
        </>
    )
};

