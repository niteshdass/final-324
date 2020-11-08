import React, { useState,useEffect } from 'react';
import { isAuthenticate } from '../auth.js';
import Layout from '../core/Layout';
import ShowImagee from './ShowImagee';
import { loadProductsById } from './ApiAdmin';
import { API } from '../config.js';

const  MyRoom =() => {

    const [product, setProduct] = useState([]);

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(true);


    const { user, token } = isAuthenticate();
    let { user: { _id } } = isAuthenticate()

    const getProducts = () => {

        loadProductsById(_id,token).then(data => {
            if (data.error) {
                setLoading(false)
                setError(data.error)

            } else {
                setLoading(false)
                console.log(data)
                setProduct(data);
            }
        });

    };

    const remove = (slug) =>{
    
        return fetch(`${API}/remove/${slug}`,{
             method:'DELETE',
             headers:{
                   Accept:'application/json',
                   'Content-Type':'application/json'
                
             },
            
        })
        .then(response =>{
              return response.json();
        }).catch( err => console.log(err))
    }



    useEffect(() => {
        getProducts();
    }, []);


    const deleteConfirm = (slug) => {
        const answer = window.confirm("Are you sure delete this category");
        if (answer) {
            removedConfirm(slug)
        }
    }

    const removedConfirm = ((slug) => {
        console.log(slug)
        remove(slug).then(data => {
            console.log(data)
            if (data.error) {
                setError(data.error)
                setLoading(false)
            } else {
                setError('')
                setLoading(false)
                setSuccess(true)
               
            }
        })
    })


    return (
        <Layout
            title="FullStack React Node MongoDB Ecommerce App"
            description="Node React E-commerce App"
            className="container-fluid"
        >
              
{loading ? <h1>Loading...</h1>:<table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Image</th>
    <th>Delete {_id}</th>
      </tr>
    </thead>
    <tbody>

    {product.map( (p,i) =>{
                  return(
                    <tr>
                    <td className="ml-2 mb-2 col-m-6">{p.name}</td>
                   <td className="col-m-4 ml-3"><ShowImagee item={p} url="product" /></td> 
                    <button onClick={() => deleteConfirm(p._id)}>Delete</button>
                  </tr>
                  )
              })}

      
    
    </tbody>

  </table>
}

       

            
        </Layout>
    )
}

export default MyRoom













