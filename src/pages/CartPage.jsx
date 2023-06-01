import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const CartPage = () => {
  const myCart = useSelector(state=> state.myCart)
  {console.log(myCart)}
  if(myCart.length==0){
    return "Your cart Page is empty!!"
   }else{

    return (
      <>  
                 {myCart.map(item=>(
                  
                  <div className="col-sm-3">
                  <div className="card" >
                    <div>
                    <Link to={'/products/' + item.id} >
                      <img src={item.image} className="card-img-top" alt="..." style={{padding:'50px'}} />
                    </Link>
                    </div>
  
                   <div className="card-body">
                   <h5 className="card-title">Brand:- {item.title} </h5>
                   <p>${item.price}</p>
                  
                  
                 </div>
                 </div>
                 </div>
                
                 ))}
                     
      </>
    )

   }

  
}

export default CartPage