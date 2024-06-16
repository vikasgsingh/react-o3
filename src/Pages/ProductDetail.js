import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../api/axios";
import Loader from "../component/Loader";

const ProductDetail = () => {


  const { id } = useParams();

  const [data, setData] = useState([]);

  const [loader, setLoader]=useState(false)

  useEffect(() => {
    setLoader(true)

    axiosInstance.get(`/products/${id}`).then((response) => {
      setData(response?.data);

      setLoader(false)

    }).catch((err)=>{
      console.log(err)
    })
  }, []);
     
   if(loader){
    return <Loader/>
   }

  return (
      <div className="product-info">
        <img src={data.image}  alt="product-img"/>
        <h2>{data.title}</h2>
        <h3>{data.price}</h3>
      </div>
  );
};

export default ProductDetail;
