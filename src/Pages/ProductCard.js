import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({data}) => {
  return (
    <>
      <Link to={`/product/${data.id}`} className="img-wrap">
        <img src={data.image} height="300px" width="400px" alt="img"/>
        <h3> {data.title}</h3>
        <h3>price={data.price}</h3>
      </Link>
      
    </>
  )
}

export default ProductCard















// import React, { useState, useEffect } from "react";
// import "./Home.css";
// import { axiosInstance } from "../api/axios.js";
// import ProductCard from "./ProductCard.js";
// const Product = () => {
//     const [data, setData] = useState([])
//     const [category, setCategories] = useState([])
//     const [allData, setAllData] = useState([])
//     const [filter, setFilter] = useState({ category: "All", orderList: "select", searchKey: "" });
//     useEffect(() => {
//         axiosInstance.get('/products').then((response) => {
//             setData(response?.data)
//             setAllData(response?.data)
//         }).catch((err) => {
//             console.log(err)
//         })
//     }, [])

//     useEffect(() => {
//         axiosInstance.get('/products/categories').then((response) => {
//             setCategories(response?.data)
//         }).catch((err) => {
//             console.log(err)
//         })
//     }, [])





//     // set category
//     const handleFilterChange = (e) => {
//         const category = e.target.name;
//         setFilter({ ...filter, [category]: e.target.value });

//     };

//     useEffect(() => {
//         let filteredData = [...allData];
//         if (filter.category != 'All') {
//             filteredData = filteredData.filter((item) => item.category == filter.category)
//         }
//         if (filter.searchKey !== "") {
//             filteredData = filteredData.filter((item) => item.title.toLowerCase().includes(filter.searchKey.toLowerCase()))
//         }
//         if (filter.orderList == "High") {
//             filteredData.sort((a, b) => b.price - a.price);
//         }
//         else {
//             filteredData.sort((a, b) => a.price - b.price);
//         }
//         setData(filteredData)
//     }, [filter])


//     const handleSearch = (e) => {
//         setFilter({ ...filter, searchKey: e.target.value });
//     };

//     return (
//         <>
//             <h1>This is product page</h1>
//             <form className="wrap">
//                 <label>Choose category:</label>
//                 <select name="category" onChange={handleFilterChange}>
//                     <option value="All">All</option>
//                     {
//                         category.map((cat) => {
//                             return (
//                                 <>
//                                     <option>{cat}</option>
//                                 </>
//                             )
//                         })
//                     }
//                 </select>
//                 <input
//                     className="search"
//                     type="text"
//                     onChange={handleSearch}
//                 />
//                 <button className="btn" type="button">
//                     Reset
//                 </button>
//                 <div className="sorting-box">
//                     <select name="orderList" onChange={handleFilterChange}>
//                         <option value="select">select</option>
//                         <option value="High">High To Low</option>
//                         <option value="Low">Low To High</option>
//                     </select>
//                 </div>
//             </form>
//             <div className="details-wrapper">
//                 {
//                     data.length > 0 ? <h2 className="details-wrap">{
//                         data.map((item, index) => {
//                             return (
//                                 <>
//                                     <ProductCard key={index} data={item} />
//                                 </>
//                             )
//                         })

//                     }</h2> : <h2>not found</h2>
//                 }
//             </div>
//         </>

//     );
// }
// export default Product;
