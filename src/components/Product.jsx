import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
const Product = (props) => {
    const {id, title, price, image, rating } = props.data;

    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const addCartHandler = () => {
      setIsAddedToCart(!isAddedToCart);
      // Add your logic for handling the cart here
    };

    
    return (
        <>
        <div className="product-detail-card">
        <div className="col-sm-6">
    <div className="card" >
    <label htmlFor='image'>
                        <FiHeart fontSize={30} />
                        <input
                            name="image" id="image" style={{ display: "none" }} />
                    </label>
               
    <img src={image} className="card-img-top" alt="..." height={260}  />
    <p>${price}</p>
    
    </div>
  </div>
  <div className="card-body">
        <h5 className="card-title">Brand:- {title} {id}</h5>
      
        {/* <p>{rating.rate} stars,  reviews:-{rating.count}</p> */}
        <button
            onClick={addCartHandler}
            className="btn btn-primary btn-block"
            style={{ backgroundColor: isAddedToCart ? "red" : "" }}
          >
            {isAddedToCart ? "Remove from cart" : "Add to cart"}
          </button>
      </div>
      </div>
        </>
    )
}
export default Product;