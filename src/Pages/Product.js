
import React, { useState, useEffect } from "react";
import "./Home.css";
import { axiosInstance } from "../api/axios.js";
import ProductCard from "./ProductCard.js";
const Product = () => {
    const [data, setData] = useState([])
    const [category, setCategories] = useState([])
    const [allData, setAllData] = useState([])
    const [filter, setFilter] = useState({ category: "All", orderList: "select", searchKey: "" });

    // All product 
    useEffect(() => {
        axiosInstance.get('/products').then((response) => {
            setData(response?.data)
            setAllData(response?.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])


    // product category
    useEffect(() => {
        axiosInstance.get('/products/categories').then((response) => {
            setCategories(response?.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    
    // set category
    const handleFilterChange = (e) => {
        const category = e.target.name;
        setFilter({ ...filter, [category]: e.target.value });
    };
    //  search data
    const handleSearch = (e) => {
        setFilter({ ...filter, searchKey: e.target.value });
    };
    // show data Accordion to filter
    useEffect(() => {
        let filteredData = [...allData];
        if (filter.category != 'All') {
            filteredData = filteredData.filter((item) => item.category == filter.category)
        }

        if (filter.searchKey !== "") {
            filteredData = filteredData.filter((item) => 
            item.title.toLowerCase().includes(filter.searchKey.toLowerCase()))
        }
        if (filter.orderList == "High") {
            filteredData.sort((a, b) => b.price - a.price);
        }
        else {
            filteredData.sort((a, b) => a.price - b.price);
        }

        setData(filteredData)

    }, [filter])
    // Reset data
    const handleReset = () => {
        axiosInstance.get('/products').then((response) => {
            setData(response?.data)
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            <h1>This is product page</h1>
            <form className="wrap">
                <label>Choose category:</label>
                <select name="category" onChange={handleFilterChange}>
                    <option value="All">All</option>
                    {
                        category.map((cat) => {
                            return (
                                <>
                                    <option>{cat}</option>
                                </>
                            )
                        })
                    }
                </select>
                <input
                    className="search"
                    type="text"
                    onChange={handleSearch}
                />
                <button className="btn" type="reset" onClick={handleReset}>
                    Reset
                </button>
                <div className="sorting-box">
                    <select name="orderList" onChange={handleFilterChange}>
                        <option value="select">select</option>
                        <option value="High">High To Low</option>
                        <option value="Low">Low To High</option>
                    </select>
                </div>
            </form>
            <div className="details-wrapper">
                {
                    data.length > 0 ? <h2 className="details-wrap">{
                        data.map((item, index) => {
                            return (
                                <>
                                    <ProductCard key={index} data={item} />
                                </>
                            )
                        })

                    } </h2> : <h2>not found</h2>
                }
            </div>
        </>

    );
}
export default Product;