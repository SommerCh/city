import React, { useState, useEffect } from "react";

 const Search = ({ setSearchResults }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    const filterDataByText = (data, term) => {
      const filtered = data.filter((item) => {
        return item.name.toLowerCase().includes(term.toLowerCase());
      });
      setSearchResults(filtered);
    };

    const debouncer = setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => filterDataByText(data, text));
    }, 1000);

    return () => clearTimeout(debouncer);
  }, [text, setSearchResults]);

  return <input onChange={(e) => setText(e.target.value)} value={text} type="input" />;
};

export default Search;
