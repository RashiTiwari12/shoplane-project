import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { RiHeartsFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from "../redux/cartSlice";
import { addFav, removeFav } from "../redux/favouriteSlice";
import { toggleCart } from "../redux/productSlice";


const SubCategory = ({ data }) => {
  const { id, title, price, image, rating } = data;

  const dispatch = useDispatch();

  const myCart = useSelector(state => state.myCart)
  const myFavouritePage = useSelector(state => state.myFavouritePage)
  console.log(myCart, myFavouritePage)


  const isFavorite = (productId) => {
    return myFavouritePage.some(product => product.id === productId);
  };
  const isAddedToCartList = (productId) => {
    return myCart.some(product => product.id === productId);
  };

  const addCartHandler = () => {
    console.log(isAddedToCartList(id))
    if (isAddedToCartList(id)) { dispatch(removeItem(data)) }
    else { dispatch(addItem({ id, title, price, image, rating })) }


  };

  const addHeartHandler = () => {

    if (isFavorite(id)) { dispatch(removeFav(data)) }
    else { dispatch(addFav({ id, title, price, image, rating })) }

  }

  return (
    <>
      <div className="col-sm-3">
        <div className="card" >
          <div className="card-img-container">

            <button htmlFor='image'
              style={{ border: 'none', backgroundColor: 'transparent' }}
            >
              <FiHeart fontSize={30} onClick={addHeartHandler}
                style={{ backgroundColor: isFavorite(id) ? "red" : "" }} />

            </button>

          </div>
          <Link to={'/products/' + id} >
            <img src={image} className="card-img-top" alt="..." height={260} style={{ padding: '10px' }} />
          </Link>
          <div className="card-body">
            <h5 className="card-title" id="card-title">Brand, {title} {id}</h5>
            <p>${price}</p>
            <p>{rating.rate} stars,  reviews:-{rating.count}</p>
            <button
              onClick={addCartHandler}
              className="btn btn-primary btn-block"
              style={{ backgroundColor: isAddedToCartList(id) ? "red" : "" }}
            >
              {isAddedToCartList(id) ? "Remove from cart" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default SubCategory;