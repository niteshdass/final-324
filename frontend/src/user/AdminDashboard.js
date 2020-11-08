import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticate } from '../auth.js'
import Layout from '../core/Layout'

const AdminDashboard = () => {

      const { user: { _id, name, email, role } } = isAuthenticate()

      const userLinks = () =>{
            return(
            <div className="card mb-5">
            <h3 className="card-header">Admin Information</h3>
            <ul className="list-group">
                  <li className="list-group-item">
                        <Link className="nav-links" to="/create/category">Category</Link>
                  </li>

                  <li className="list-group-item">
                        <Link className="nav-links" to="/create/city">City</Link>
                  </li>

                  <li className="list-group-item">
                        <Link className="nav-links" to="/create/product">Product</Link>
                  </li>
            </ul>
      </div>
            )
      }

      const userInfo = () =>{
            return (
                  <div className="card mb-5">
                        <h3 className="card-header">User Information</h3>
                        <ul className="list-group">
                              <li className="list-group-item">{name}</li>
                              <li className="list-group-item">{email}</li>
                              <li className="list-group-item">{role === 1 ? 'Admin' : 'Subscribar'}</li>
                        </ul>
                  </div>
            )
      }

  


      return (
            <Layout title="User Dashboard" description="User Dashboard Node react E-comerce App"
                  className="container-fluid"
            >
                  <div className="row">
                        <div className="col-md-3">
                              {userLinks()}
                        </div>
                        <div className="col-md-9">
                              {userInfo()}
                         
                        </div>
                  </div>

                  
            </Layout>
      )
}

export default AdminDashboard