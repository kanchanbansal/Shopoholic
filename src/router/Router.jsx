import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ShopCategory from '../pages/ShopCategory'
import ProductDetail from '../pages/ProductDetail'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Auth from '../pages/admin/Auth'
import Profile from '../pages/admin/Profile'
import Products from '../pages/admin/products/Products'
import AddOrEditProduct from '../pages/admin/products/AddOrEditProduct'
import Categories from '../pages/admin/categories/Categories'
import AddOrEditCategory from '../pages/admin/categories/AddOrEditCategory'
import Users from '../pages/admin/users/Users'
import AddOrEditUser from '../pages/admin/users/AddOrEditUser'
import Orders from '../pages/admin/orders/Orders'
import OrderView from '../pages/admin/orders/OrderView'
import EditProfile from '../pages/admin/EditProfile'

export default function Router() {
  return (
    <Routes>
      {/* Home Page */}
      <Route path='/' element={<Home />} />

      {/* Shop Category Page */}
      <Route path='/shop-category' element={<ShopCategory />} />

      {/* Product Details Page */}
      <Route path='/product-detail/:id' element={<ProductDetail />} />

      {/* Card Page */}
      <Route path='/cart' element={<Cart />} />

      {/* Checkout Page */}
      <Route path='/checkout' element={<Checkout />} />

      {/* Login Page */}
      <Route path='/login' element={<Login />} />

      {/* Register Page */}
      <Route path='/register' element={<Register />} />

      <Route path='/admin' element={<Auth />}>
        {/* dashboard Page */}
        <Route path='profile' element={<Profile />} />
        <Route path='profile/edit' element={<EditProfile />} />


        {/* product page routes */}
        <Route path='products' element={<Products />} />
        <Route path='products/create' element={<AddOrEditProduct />} />
        <Route path='products/edit/:id' element={<AddOrEditProduct />} />

        {/* category page routes */}
        <Route path='category' element={<Categories />} />
        <Route path='category/create' element={<AddOrEditCategory />} />
        <Route path='category/edit/:id' element={<AddOrEditCategory />} />

        {/* users page routes */}
        <Route path='users' element={<Users />} />
        <Route path='users/create' element={<AddOrEditUser />} />
        <Route path='users/edit/:id' element={<AddOrEditUser />} />

        {/* orders page routes */}
        <Route path='orders' element={<Orders />} />
        <Route path='orders/view/:id' element={<OrderView />} />
      </Route>
    </Routes>
  )
}
