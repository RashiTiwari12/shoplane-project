import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addItem, removeItem } from "../redux/cartSlice";
import { useState } from "react";

const  FavouritePage = () => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const dispatch = useDispatch();
  const myFavouritePage = useSelector(state=> state.myFavouritePage)
  const myCart = useSelector(state => state.myCart)

  const addCartHandler = () => {
    if (isAddedToCart) { dispatch(removeItem({ myCart })) }
    else { dispatch(addItem({ myCart })) }
  
    setIsAddedToCart(prev => !prev);
    
  };
  if(myFavouritePage.length==0){
    return "Your Favourite Page is empty!!"
   }else{

    return (
      <>
         {myFavouritePage.map(item=>(
                  
                  <div className="col-sm-4">
                  <div className="card" >
                    <div>
                    <Link to={'/products/' + item.id} >
                      <img src={item.image} className="card-img-top" alt="..." style={{padding:'50px'}} />
                    </Link>
                    </div>
  
                   <div className="card-body">
                   <h5 className="card-title">Brand:- {item.title} </h5>
                   <p>${item.price}</p>
                   {/* <p>{item.rating.rate} stars,  reviews:-{item.rating.count}</p> */}
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
                
                 ))}
                     
      </>
    )


   }
       

}

export default FavouritePage