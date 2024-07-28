import React,{createContext,useEffect,useState} from 'react'
import axios from 'axios'
import instance from '../components/axios';

export const ProductContext=createContext()
const Context = (props) => {
 const [products,setproducts]=useState(null)
 
 const getproducts=async()=>{
    try{
const {data}=await instance.get(`/products`)

console.log(data)
   setproducts(data)

}catch(error){
console.log(error);
    }
 }
 useEffect(()=>{
    getproducts();
 },[])
//  react khud calll kre get products ko using useEffect
    return (
   
        <ProductContext.Provider value={[products,setproducts]}>
            {props.children}
        </ProductContext.Provider>
      
   
  )
}

export default Context
