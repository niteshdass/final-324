import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticate } from '../auth.js'
import Layout from '../core/Layout'
import { createCategory } from './apiCity'

const AddCity = () => {

      const [name,setName] = useState('')
      const [error,setError] = useState(false)
      const [success,setSuccess] = useState(false)
      

      const {user,token} = isAuthenticate()

      const handleChange = (e) =>{
            setError('')
            setName(e.target.value)
      }

      const clickSubmit = (e) =>{

            e.preventDefault();
            setError('');
            setSuccess(false)

            console.log("name",name)

            createCategory(user._id,token,{name}).then( data =>{

                  if(data.error){
                        setSuccess(false)
                        setError(true)
                  }else{
                        setError(false)
                        setSuccess(true)
                     
                  }

            })

      }

      const showError = () => (
            <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
                Category Must be Uniquie
            </div>
        );
    
        const showSuccess = () => (
            <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
                {name} category create success
            </div>
        );

        const goBack = () => (
            <div className="text-primary mt-5">
                <Link to="/admin/dashboard">GoToBackDashBoard</Link>
            </div>
        );
    

      const addCategoryForm = () =>{
            return (
            <form>
                  <div className="form-group">
                  <label className="text-muted">Name</label>
                  <input onChange={handleChange} type="text" className="form-control" value={name} />
              </div>
              <button onClick={clickSubmit} className="btn btn-primary">
                  Submit
              </button> 
              </form>
            )
      }

  


      return (
            <Layout title="User Dashboard" description="User Dashboard Node react E-comerce App"
                  className="container-fluid"
            >
                  <div className="row">
                        <div className="col-md-8 offset-mb-2">
                              {showError()}
                              {showSuccess()}
                              {addCategoryForm()}
                              {goBack()}
                        </div>
                        
                  </div>

                  
            </Layout>
      )
}

export default AddCity