import React from 'react';
import { useState, useEffect } from "react";

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
    return (
        <>
            <div className='page'>
                <h1>Categories</h1>
                <section className="grid-container">          
                    {categories.map(category => ( 
                        <article className="category-article">
                            <img src={category.ImageUrl} alt={category.Name} />
                            <h2>{category.Name}</h2>
                        </article>
                    ))}
                </section>
            </div>
        </>
    )
};

