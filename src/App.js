import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AddItem from "./Pages/AddItem";
import HomePage from "./Pages/HomePage";
import Category from "./Pages/Category";
import ProductPage from "./Pages/ProductPage";
import UpdateItem from "./Pages/UpdateItem";
import AllProducts from "./Pages/AllProducts";
function HomePag() {
  return (
    <div>
      <HomePage />
      <ProductPage />
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePag />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/category/:type" element={<Category />} />
        <Route path="/updateitem" element={<UpdateItem />} />
        <Route path="/getall" element={<AllProducts />} />
      </Routes>
      <footer>welcom to Mohamad store</footer>
    </div>
  );
}
export default App;
