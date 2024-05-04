import React, { useEffect, useState } from "react";

const SearchEmployee = () => {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [filterParam, setFilterParam] = useState("All");

  useEffect(() => {
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
      .then((res) => res.json())
      .then((data) => setState(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const filteredResults = filter(state);
    setSearchResults(filteredResults);
  }, [search, state, filterParam]);

  const searchParam = ["name", "department", "role"];

  function filter(state) {
    return state.filter((item) => {
      if (filterParam === "All") {
        return searchParam.some((key) =>
          item[key].toString().toLowerCase().includes(search.toLowerCase())
        );
      } else {
        return (
          item.department === filterParam &&
          searchParam.some((key) =>
            item[key].toString().toLowerCase().includes(search.toLowerCase())
          )
        );
      }
    });
  }

  return (
    <div>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        name="select"
        id="select"
        value={filterParam}
        onChange={(e) => setFilterParam(e.target.value)}
      >
        <option value="All">All Departments</option>
        <option value="Management">Management</option>
        <option value="Recruitment">Recruitment</option>
        <option value="Security">Security</option>
      </select>
      {searchResults.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>
            {item.department} - {item.role}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SearchEmployee;
