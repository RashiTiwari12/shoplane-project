import { Link } from "react-router-dom"
import { BsCart3 } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineLogin } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux"
import { addItem } from "../redux/cartSlice";
import Select from 'react-select'

const Navbar = () => {
    const myCart = useSelector(state=> state.myCart)
    return (
        <>
            <div className="head">
                <h1 className=" text-left">Shoplane</h1>
                <div className="form-inline my-2 my-lg-0">

                    <Link to="/login" style={{ fontSize: '10px' }}><label htmlFor='image'>
                        <FaRegUserCircle fontSize={10} />
                        <input
                            type="file" name="image" id="image" style={{ display: "none" }} />
                    </label>Login</Link>


                    <label htmlFor='image'>
                        <FaRegUserCircle fontSize={30} />
                        {/* <input type="file" name="image" id="image" style={{ display: "none" }} /> */}
                        <Select placeholder="Login or Signup here">
                            <options value="rigatoni">Rigatoni</options>

                        </Select>
                    </label>


                    <Link to='/favourite'>  <span className="badge badge-light">{myCart.length}</span> <label htmlFor='image'>
                        <FiHeart fontSize={30} />
                       
                    </label></Link>

                   <Link to='/cart'> <span className="badge badge-light">{myCart.length}</span> <label htmlFor='image'>
                        <BsCart3 fontSize={40} />
                       
                  {      console.log(myCart)}
                    </label></Link> 
                    
                </div>
            </div>
            <br />
            <hr />
            <nav className="navbar navbar-expand-lg navbar-white bg-white">


                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">All <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/electronics">Electronics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/subcat">Jewelery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mencloth">Men's clothing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/womencloth">Women's clothing</Link>
                        </li>


                    </ul>



                    {/* <label htmlFor='image'>
                        <HiOutlineLogin fontSize={50} />
                        <input
                            type="file" name="image" id="image" style={{ display: "none" }} />
                    </label> */}
                </div>
            </nav>
            <hr />
        </>
    )
}
export default Navbar