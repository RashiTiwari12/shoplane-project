import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import Constants from '../api/Constants';
import { useParams } from 'react-router-dom';
import ProductDetail from './ProductDetail';



const ProductDetailList = () => {
    const { id } = useParams()
    const [productDetail, setProductDetail] = useState([])
    const fetchData = () => {
        axios.get(Constants.BASE_URL + id)
            .then((response) => setProductDetail(response.data))
            .catch((error) => console.log(error))
    }
    useEffect(() => {
        fetchData()
    }, [id])
    return (
        <>


            <div className='container'>

                <div className="row">
                    {
                        <ProductDetail data={productDetail} />

                        // <Suspense fallback={<div>Loading...</div>}>
                        //     <Product data={productDetail} />
                        // </Suspense>
                    }


                </div>
            </div>
        </>
    )
}
export default ProductDetailList