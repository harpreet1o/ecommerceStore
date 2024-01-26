import { LoginSignup } from "./Pages/LoginSignup";
import { Shop } from "./Pages/Shop";
import { ShopCategory } from "./Pages/ShopCategory";
import { Product } from "./Pages/Product";
import { Navbar } from "./components/Navbar/Navbar";
import { Cart } from "./Pages/Cart";
import { Footer } from "./components/Footer/Footer";
import menBanner from "./components/assets/banner_mens.png";
import WomenBanner from "./components/assets/banner_women.png";
import KidsnBanner from "./components/assets/banner_kids.png";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="font-ubuntu m-0 box-border">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/men"
              element={<ShopCategory banner={menBanner} category="men" />}
            />
            <Route
              path="/women"
              element={<ShopCategory category="women" banner={WomenBanner} />}
            />
            <Route
              path="/kids"
              element={<ShopCategory category="kid" banner={KidsnBanner} />}
            />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
