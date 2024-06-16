import React, { useEffect, useState } from "react";
import { axiosInstance } from "../api/axios";
import "./Home.css";
import NewCard from "./NewCard";
import Loader from "../component/Loader";
const Service = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [filterCat, setFilterCat] = useState([])
  const [loader, setLoader] = useState(false)
  // getting all data from api
  useEffect(() => {
    setLoader(true);
    axiosInstance
      .get("/products")
      .then((response) => {
        setLoader(false);
        setData(response.data);
        setNewData(response.data)
        setAllData(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //Searching code
  const hangleSearch = (e) => {
    const targetValue = e.target.value;
    const res = newData.filter((item) => item.title.toLowerCase().includes(targetValue.toLowerCase()))
    setData(res)
  }
  //  filter category code
  useEffect(() => {
    axiosInstance.get("/products/categories").then((response) => {
      setFilterCat(response.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  // all filter data

  const allFilterData = (e) => {
       if(e.target.value=='All'){
          setData(allData)
       }
  }

  // filter code
  const filterData = (e) => {
    let selectData = e.target.value;
    setLoader(true);
    if (selectData == 'All') {
      setData(allData)
      setLoader(false);
    }
    else {
      setLoader(true);
      axiosInstance.get(`products/category/${selectData}`).then((response) => {
        setData(response.data)
        setNewData(response.data)
        setLoader(false);

      })
    }
  }

  //  filter Order
  const filterOrder = (e) => {
    setLoader(true);
    let targetData = e.target.value;
    const temp = [...data];
    if (targetData == 'Low') {
      temp.sort((a, b) => a.price - b.price)
      setData(temp)
      setLoader(false);
    }
    else {
      setLoader(true);
      temp.sort((a, b) => b.price - a.price)
      setData(temp)
      setLoader(false);
    }
  }




  if (loader) return <Loader />
  return (
    <div className="page-wrapper">
      {/* {
        loader && <Loader />
      } */}
      <div className="wrap">
      <button className="btn" value='All' onClick={allFilterData}>All</button>

        {
          
          filterCat.map((item) => {
            return (
              <>
                <button className="btn" value={item} onClick={filterData}>{item}</button>
              </>
            )
          })
        }
        {/* <select className="filter-select" onChange={filterData}>
          <option value='All'>All</option>
          {
            filterCat.map((item) => {
              return (
                <option value={item}>{item}</option>)
            })
          }
        </select> */}
        <input type="text" className="search" onChange={hangleSearch}></input>
        <div className="sorting-box">
          <select onClick={filterOrder}>
            <option value="Sorting">Sorting</option>
            <option value="High">High To Low</option>
            <option value="Low">Low To High</option>
          </select>
        </div>
      </div>
      {data.length > 0 ? (
        <div className="details-wrap">
          {data.map((item, index) => {
            return <NewCard key={index} data={item} />;
          })}
        </div>
      ) : (
        <h2>data Not Found</h2>
      )}
    </div>
  );
};
export default Service;
