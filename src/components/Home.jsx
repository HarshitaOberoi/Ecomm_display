import React from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav'
import { useContext } from 'react'
import {ProductContext} from '../utils/Context'
import Details from './Details'
import Loading from './Loading'
const Home = () => {
    const [products] = useContext(ProductContext)
    console.log(products)
  return  (
   <>
        <Nav/>
        <div  className='flex flex-wrap w-full h-screen'>
        {products ? (products.map((product,i)=>(
       <Link to={`/Details/${product.id}`} key={product.id} className='flex flex-wrap h-15 w-[25%]    p-2 '>
       
        <div className=' border-2 border-zinc-100  h-[70%] w-[90%] p-4 m-2' ><img className='h-[80%] m-3 w-full  hover:scale-110' src={`${product.image}`} alt="" />
        <h2>{product.title} </h2></div>
     
       
      </Link>
        ))):(<Loading/>)}
        </div>
   
   </>
  );
}

export default Home
