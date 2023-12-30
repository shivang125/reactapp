import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartItemsProvider from "./Context/CartItemsProvider";
import SearchProvider from "./Context/SearchProvider";
import WishItemProvider from "./Context/WishItemsProvider";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminRoutes from "./components/AuthRoute/AdminRoutes";
// import AddBrand from "./components/Admin/Categories/AddBrand";
import AddCategory from "./components/Admin/Categories/AddCategory";
// import AddColor from "./components/Admin/Categories/AddColor";
// import BrandsColorsList from "./components/Admin/Categories/BrandsColorsList";
import ManageCategories from "./components/Admin/Categories/ManageCategories";
import UpdateCategory from "./components/Admin/Categories/UpdateCategory";
import AddCoupon from "./components/Admin/Coupons/AddCoupon";
import ManageCoupons from "./components/Admin/Coupons/ManageCoupons";
import UpdateCoupon from "./components/Admin/Coupons/UpdateCoupon";
import Customers from "./components/Admin/Orders/Customers";
import ManageOrders from "./components/Admin/Orders/ManageOrders";
import OrdersList from "./components/Admin/Orders/OdersList";
import AddProduct from "./components/Admin/Products/AddProduct";
import ManageStocks from "./components/Admin/Products/ManageStocks";
import UpdateProduct from "./components/Admin/Products/UpdateProduct";
import Cart from "./components/Cart/cart";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Shop from './components/Shop/Shop';
import ForgotPasswordPage from "./components/Users/Forms/ForgotPasswordPage";
import Login from "./components/Users/Forms/Login";
import RegisterForm from "./components/Users/Forms/RegisterForm";
import OrderPayment from "./components/Users/Products/OrderPayment";
import ProductsFilters from "./components/Users/Products/ProductsFilters";
import CustomerProfile from "./components/Users/Profile/CustomerProfile";
import AddReview from "./components/Users/Reviews/AddReview";
import Wishlist from "./components/Wishlist/WishList";
import CategoryView from "./routes/CategoryView";
import Home from "./routes/Home";
import ItemView from "./routes/ItemView";
import SearchView from "./routes/Search";
import ProductUpdate from "./components/Admin/Products/ProuductUpdate";
import UpdateOrders from "./components/Admin/Orders/UpdateOrders";
const App = () => {
  return (
    <BrowserRouter>
      <CartItemsProvider>
      <WishItemProvider>
      <SearchProvider>
      <Header />
      {/* hide navbarCartItemsProvider if admin */}
      <Routes>
        {/* admin route */}
        <Route
          path="admin"
          element={
            <AdminRoutes>
              <AdminDashboard />
            </AdminRoutes>
          }
        >
          {/* products */}
          <Route
            path=""
            element={
              <AdminRoutes>
                <OrdersList />
              </AdminRoutes>
            }
          />
          <Route
            path="add-product"
            element={
              <AdminRoutes>
                <AddProduct />
              </AdminRoutes>
            }
          />
          <Route
            path="manage-products"
            element={
              <AdminRoutes>
                <ManageStocks />
              </AdminRoutes>
            }
          />
          <Route
            path="products/edit/:id"
            element={
              <AdminRoutes>
                <ProductUpdate/>
              </AdminRoutes>
            }
          />
          {/* coupons */}
          <Route
            path="add-coupon"
            element={
              <AdminRoutes>
                <AddCoupon />
              </AdminRoutes>
            }
          />
          <Route path="manage-coupon" element={<ManageCoupons />} />
          <Route
            path="manage-coupon/edit/:code"
            element={
              <AdminRoutes>
                <UpdateCoupon />
              </AdminRoutes>
            }
          />
          <Route path="add-category" element={<AddCategory />} />
          <Route
            path="manage-category"
            element={
              <AdminRoutes>
                <ManageCategories />
              </AdminRoutes>
            }
          />
          <Route
            path="edit-category/:id"
            element={
              <AdminRoutes>
                <UpdateCategory />
              </AdminRoutes>
            }
          />
          {/* Orders */}
          <Route path="manage-orders" element={<ManageOrders />} />
          <Route
            path="orders/:id"
            element={
              <AdminRoutes>
                <UpdateOrders/>
              </AdminRoutes>
            }
          />
          <Route
            path="customers"
            element={
              <AdminRoutes>
                <Customers />
              </AdminRoutes>
            }
          />
          
        </Route>
        {/* public links */}
        {/* Products */}
        <Route path="/" element={<Home />} />
        <Route path="/products-filters" element={<ProductsFilters />} />
        <Route path="/shop" element={<Shop />}/>
              <Route path="/category">
                <Route path=":id" element={<CategoryView />}/>
              </Route>
              <Route path="/item">
                <Route path="/item/jewelry">
                  <Route path=":id" element={<ItemView />}/>
                </Route>
                <Route path="/item/perls">
                  <Route path=":id" element={<ItemView />}/>
                </Route>
                <Route path="/item/featured">
                  <Route path=":id" element={<ItemView />}/>
                </Route>
              </Route>
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/search/*" element={<SearchView />} />
        {/* review */}
        <Route path="/add-review/:id" element={<AddReview />} />

        {/* shopping cart */}
        <Route
          path="/cart"
          element={
            
              <Cart />
            
          }
        >
        </Route>
        <Route path="/checkout" element={<OrderPayment />} />
        {/* users */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/customer-profile" element={<CustomerProfile />} />
        
      </Routes>
      <Footer />
      </SearchProvider>
      </WishItemProvider>
      </CartItemsProvider>
    </BrowserRouter>
  );
};

export default App;
