import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Endpoints from '../api/Endpoints';
import Constants from '../api/Constants';
import { useParams } from 'react-router-dom';
import SubCategory from './SubCategory';
import Product from './Product';
// const Product=React.lazy(() => import("./Product"));


const ProductList =() =>{
    const {id} =useParams()
    const [productDetail, setProductDetail]= useState([])
    const fetchData =() =>{
        axios.get(Constants.BASE_URL+id)
        .then((response)=>setProductDetail(response.data))
        .catch((error) => console.log(error))
    }
    useEffect(() =>{
        fetchData()
    },[id])
    return(
<>


<div className='container'>
           
            <div className="row">
                {
                    <Product data={productDetail} />

                    // <Suspense fallback={<div>Loading...</div>}>
                    //     <Product data={productDetail} />
                    // </Suspense>
                }
              
  
</div>
        </div>
</>
    )
}
export default ProductList