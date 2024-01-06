import { LoginSignup } from "./Pages/LoginSignup";
import { Shop } from "./Pages/Shop";
import { ShopCategory } from "./Pages/ShopCategory";
import { Product } from "./Pages/Product";
import { Navbar } from "./components/Navbar/Navbar";
import { Cart } from "./Pages/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="font-ubuntu m-0">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/men" element={<ShopCategory category="men" />} />
            <Route path="/women" element={<ShopCategory category="women" />} />
            <Route path="/kids" element={<ShopCategory category="kids" />} />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
