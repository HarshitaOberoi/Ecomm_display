import React, { useEffect, useState } from "react";
import axios from './axios'
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

const Details = (props) => {
  const [product, setproduct] = useState(null);
  const { id } = useParams();
  // useParams to retrieve the id parameter from the URL. 
  // This id parameter is likely used to identify a specific product, as seen in your Axios 
  // request where you're fetching product data from the server using this id.
  const getsingleproducts = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);

      setproduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getsingleproducts();
  }, []);
  return (
    <>
      {product ? 
       
          <div className="flex  flex-wrap justify-center align-middle gap-2">
            <img
              className="h-[40%] w-[30%] "
              src={`${product.image}`}
              alt=""
            />
            <div className="flex flex-col   gap-6 mr-20 ml-20 ">
              <h1 className="font-bold text-3xl">{product.title}</h1>
              <p className="text-zinc-400">{product.category}</p>
              <p>{product.price}</p>
              <p className="text-left mr-20">{product.description}</p>

              <div className="flex gap-2">
                <span className="h-fit w-fit p-5 bg-green-100 rounded">
                  Edit
                </span>
                <span className="h-fit w-fit p-5 bg-blue-100 rounded">
                  Delete
                </span>
              </div>
            </div>
          </div>
      
      : (
        <Loading />
      )}
    </>
  );
};

export default Details;




