import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Category from './Category';
import Constants from '../api/Constants';
import SubCategory from './SubCategory';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsSuccess } from '../redux/productSlice';

const AllCategories = () => {
    const [categories, setCategories] = useState([])
    const getData = () => {
        axios.get(Constants.BASE_URL)
            .then(response => {
                console.log(response.data)
                setCategories(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => {
        getData();
    }, [])

    //   const dispatch = useDispatch();

    //   const products = useSelector(state => state.products);
    // console.log(products)
    //   useEffect(() => {
    //       const fetchData = () => {
    //         axios.get(Constants.BASE_URL)
    //           .then(response => {console.log(response.data)
    //             dispatch(fetchProductsSuccess(response.data));
    //           })
    //           .catch(error => {
    //             console.log(error);
    //           });
    //       };

    //       fetchData();
    //     }, []);
    return (
        <div className='container'>
            {/* <h1>CategoryList</h1> */}
            <div className="row">
                {
                    categories.map((category) => <SubCategory data={category} />)
                }

            </div>
        </div>
    )
}
export default AllCategories;