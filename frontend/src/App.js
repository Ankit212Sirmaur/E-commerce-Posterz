import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Categories from './pages/categories/Categories'
import ProductDetail from './pages/productDetails/ProductDetails'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'


function App() {
  return <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Categories />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
    </Routes>
    <Footer />
  </div>;
}

export default App;
