import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../core/Layout';
import { signin,authenticate,isAuthenticate } from '../auth.js';

const Signup = () => {

      const {user} =isAuthenticate()

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectIs:false
    });

    const {  email, password, loading, error,redirectIs } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signin({ email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {

                  authenticate(data, ()=>{
                        setValues({
                              ...values,
                             redirectIs:true
                          });
                  })
                
            }
        });
    };

    const signUpForm = () => (
        <form>
           

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input name="email" onChange={handleChange('email')} type="email" className="form-control" value={email} />
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} type="password" className="form-control" value={password} />
            </div>
            <button onClick={clickSubmit} className="btn btn-primary">
                Submit
            </button>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: loading ? '' : 'none' }}>
            Loading....
        </div>
    );

    const redirectPath = () =>{
          if(redirectIs){

            if(user && user.role === 1){
                  return <Redirect to="/admin/dashboard"/>
            }else{
                  return <Redirect to="/user/dashboard"/>
            }

               
          }
          if(isAuthenticate()){
              return <Redirect to="/" />
          }
    }

    return (
        <Layout
            title="signin"
            description="Signin into node house rent website"
            className="container col-md-8 offset-md-2"
        >
            {showSuccess()}
            {redirectPath()}
            {showError()}
            {signUpForm()}
        </Layout>
    );
};

export default Signup;