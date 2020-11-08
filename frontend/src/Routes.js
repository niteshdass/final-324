import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './core/Home'
import Signin from './user/Signin'
import Signup from './user/Signup'
import 'dotenv'
import PrivateRoute from './auth.js/PrivateRoute'
import UserDashboard from './user/UserDashboard'
import AdminDashboard from './user/AdminDashboard'
import AdminRoute from './auth.js/AdminRoute'
import AddCategory from './admin/AddCategory'
import AddProduct from './admin/AddProduct'
import Shop from './core/Shop'
import AddCity from './admin/AddCity'
import MyRoom from './admin/MyRoom'
import Product from './core/Product'
import Update from './user/Update'
const Routes = () => {
      return (
            <BrowserRouter>
                  <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/signin" exact component={Signin} />
                        <Route path="/signup" exact component={Signup} />
                        <Route path="/shop" exact component={Shop} />
                        <PrivateRoute path="/user/dashboard" exact component={UserDashboard}/>
                        <PrivateRoute path="/user/add-products" exact component={AddProduct}/>
                        <PrivateRoute path="/user/my-room" exact component={MyRoom}/>
                        <PrivateRoute path="/user/profile-update/:profileId" exact component={Update}/>
                        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
                        <AdminRoute path="/create/category" exact component={AddCategory}/>
                        <AdminRoute path="/create/product" exact component={AddProduct}/>
                        <AdminRoute path="/create/city" exact component={AddCity}/>
                 
                        <Route path="/product/:productId" exact component={Product} />
                  </Switch>
            </BrowserRouter>
      )
}

export default Routes
