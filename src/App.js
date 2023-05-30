import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import ElectronicsList from './components/ElectronicsList';
import MenClothList from './components/MensClothList';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import SubCategoryList from './components/SubCategoryList';
import WomenClothList from './components/WomensCLothList';
import CartPage from './pages/CartPage';
import FavouritePage from './pages/FavouritePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<HomePage/> } />
    <Route path='/subCat' element={<SubCategoryList/> } />
    <Route path='/products/:id' element={<ProductList/> } />
    <Route path='/login' element={<LoginPage/> } />
    <Route path='/signup' element={<SignUpPage/> } />
    <Route path='/mencloth' element={<MenClothList/> } />
    <Route path='/womencloth' element={<WomenClothList/> } />
    <Route path='/electronics' element={<ElectronicsList/> } />
    <Route path='/cart' element={<CartPage/> } />
    <Route path='/favourite' element={<FavouritePage/> } />
    </Routes>
    </BrowserRouter>
    </>
 
  );
}

export default App;
