import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticate } from '../auth.js'
import Layout from '../core/Layout'

const UserDashboard = () => {

      const { user: { _id, name, email, role } } = isAuthenticate()

      const userLinks = () =>{
            return(
            <div className="card mb-5">
            <h3 className="card-header">User Information</h3>
            <ul className="list-group">
                  <li className="list-group-item">
                        <Link className="nav-links" to="/user/add-products">Add Home</Link>
                  </li>
                  <li className="list-group-item">
                        <Link className="nav-links" to="/user/my-room">My-Home</Link>
                  </li>

                  <li className="list-group-item">
                        <Link className="nav-links" to={`/user/profile-update/${_id}`}>Profile-Update</Link>
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

      const userHistory = () =>{
            return(
<div className="card mb-5">
                        <h3 className="card-header">User History</h3>
                        <ul className="list-group">
                              <li className="list-group-item">Name</li>

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
                              {userHistory()}
                        </div>
                  </div>

                  
            </Layout>
      )
}

export default UserDashboard