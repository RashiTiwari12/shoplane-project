import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
const Category = (props) => {
    const {id, title, price, image, rating } = props.data;
    return (
        <>
        <div className="col-sm-3">
    <div className="card" > 
   
    <label htmlFor='image'>
                        <FiHeart fontSize={30} />
                        <input
                           name="image" id="image" style={{ display: "none"}} />
                    </label>
                    
                    <Link to={'/products/'+id} >
    <img src={image} className="card-img-top" alt="..." height={260}  />
    </Link>
      <div className="card-body">
        <h5 className="card-title">Brand:- {title} </h5>
        <p>${price}</p>
        <p>{rating.rate} stars,  reviews:-{rating.count}</p>
        {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
        <a href="#" className="btn btn-primary btn-block">Add to cart</a>
      </div>
    </div>
  </div>
        </>
    )
}
export default Category;