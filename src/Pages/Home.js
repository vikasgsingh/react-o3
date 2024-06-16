import React, { useState, useEffect } from "react";
import "./Home.css";
import Card from "./Card.js";
import Loader from "../component/Loader.js";
import { axiosInstance } from "../api/axios.js";



const Home = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState({ category: "All", order: "select",  searchTerm: "" });

  // show all products
  useEffect(() => {
    setLoader(true);
    axiosInstance.get("/products").then((response) => {
      setData(response?.data);
      setLoader(false);
    }).catch((err) => {
      console.log(err);
    });
  }, []);



// show products categories
  useEffect(() => {
    setLoader(true);
    axiosInstance.get("/products/categories").then((result) => {
      setCategories(result.data);
      setLoader(false);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  // apply filter
  const applyFilters = () => {
    let filteredData = [...data];
    if (filter.category !== "All") {
      filteredData = filteredData.filter(item => item.category==filter.category);
    }
    if (filter.searchTerm !== "") {
      filteredData = filteredData.filter(item =>
        item.title.toLowerCase().includes(filter.searchTerm.toLowerCase())
      );
    }     
    if (filter.order == "High") {
      filteredData.sort((a, b) => b.price - a.price);
    } 
    else{
      filteredData.sort((a, b) => a.price - b.price);
    }
    return filteredData;
  };

  // set category
  const handleFilterChange = (e) => {
    const category =e.target.name;
    setFilter({ ...filter, [category]: e.target.value });
    
  };
  // product search
  const handleSearch = (e) => {
    setFilter({ ...filter, searchTerm: e.target.value });
  };
  // reset data
  const handleReset = () => {
    setFilter({ category: "All", order: "select", searchTerm: "" });
  };

  return (
    <div>
      {loader && <Loader />}
      <form className="wrap">
        <label>Choose category:</label>
        <select name="category" value={filter.category} onChange={handleFilterChange}>
          <option value="All">All</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          className="search"
          type="text"
          value={filter.searchTerm}
          onChange={handleSearch}
        />
        <button className="btn" type="button" onClick={handleReset}>
          Reset
        </button>
        <div className="sorting-box">
          <select name="order" value={filter.value} onChange={handleFilterChange}>
           
            <option value="select">select</option>
            <option value="High">High To Low</option>
            <option value="Low">Low To High</option>
          </select>
        </div>
      </form>
      {data.length > 0 ? (
        <div className="details-wrap">
          {applyFilters().length > 0 ? (
            applyFilters().map((item, index) => (
              <Card key={index} data={item} />
            ))
          ) : (
            <h2>No data found</h2>
          )}
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Home;
