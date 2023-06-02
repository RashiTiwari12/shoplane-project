import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeItem } from "../redux/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch()
  const myCart = useSelector(state => state.myCart)
  // { console.log(myCart) }

  if (myCart.length === 0) {
    return "Your cart Page is empty!!"
  } else {

    return (
      <>
        {myCart.map(item => (

          <div className="col-sm-6">
            <div className="card" style={{ width: '100%', padding: '18px' }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <Link to={'/products/' + item.id}>
                    <img src={item.image} className="card-img" alt="..." style={{ width: '100%' }} />
                  </Link>
                </div>
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column justify-content-center">
                    <h5 className="card-title">Brand: {item.title}</h5>
                    <button style={{ border: 'none', backgroundColor: 'transparent' }}
                      onClick={() => dispatch(removeItem(item))}

                    >
                      <FontAwesomeIcon icon={faTrash} style={{ marginRight: '5px' }} />

                    </button>
                    <br />
                    <p>${item.price}</p>
                  </div>

                </div>
              </div>

            </div>
          </div>




        ))}

      </>
    )

  }


}

export default CartPage