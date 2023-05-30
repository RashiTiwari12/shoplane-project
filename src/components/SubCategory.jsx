import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from "../redux/cartSlice";

const SubCategory = ({ data }) => {
  const { id, title, price, image, rating } = data;
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToFav, setIsAddedToFav] = useState(false);
  const dispatch = useDispatch();

  const addCartHandler = () => {
    if (isAddedToCart) { dispatch(removeItem({ id })) }
    else { dispatch(addItem({ id })) }
    setIsAddedToCart(prev => !prev);
    console.log(data, "electronics")
  };
    // Add your logic for handling the cart here
    const addHeartHandler=()=>{
// setIsAddedToFav(prev => !prev)
// if (isAddedToFav) { dispatch(removeItem({ id })) }
// else { dispatch(addItem({ id })) }

console.log(data, "electronics")
    }
 
  return (
    <>
      <div className="col-sm-3">
        <div className="card" >
          <div className="card-img-container">

           <button onClick={addHeartHandler} htmlFor='image'
            style={{ backgroundColor: isAddedToCart ? "red" : "" , border:" none"}}>
              <FiHeart fontSize={30} />
             
            </button>
            
          </div>
          <Link to={'/products/' + id} >
            <img src={image} className="card-img-top" alt="..." height={260} />
          </Link>
          <div className="card-body">
            <h5 className="card-title" id="card-title">Brand, {title} {id}</h5>
            <p>${price}</p>
            <p>{rating.rate} stars,  reviews:-{rating.count}</p>
            <button
              onClick={addCartHandler}
              className="btn btn-primary btn-block"
              style={{ backgroundColor: isAddedToCart ? "red" : "" }}
            >
              {isAddedToCart ? "Remove from cart" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default SubCategory;