import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts, listRelated, read } from './apiCore';
import Card from './Card';

const Product = (props) =>{
      const [product,setProduct] = useState({})
      const [relatedProduct,setRelatedProduct] = useState([])
      const [error,setError] = useState(false)
      console.log(props)
      const loadSingleProduct = productId =>{
            read(productId).then(data =>{
                  if(data.error){
                        setError(data.error)
                  }else{
                        setProduct(data)

                        listRelated(data._id).then( data =>{
                              if(data.error){
                                    setError(data.error)
                              }else{
                                    setRelatedProduct(data)
                              }
                        })

                  }
            })
      }

      useEffect( () =>{
            const productId = props.match.params.productId
            loadSingleProduct(productId)
      },[props])


      return (
            <Layout title={product && product.name}
            description={product && product.description &&
            product.description.substring(0,100)}
            className="container-fluid">
                 <h2 className="mb-4">Single Product</h2>
                 <div className="row">
                       <div className="col-8">
                       {product && product.description &&
                        
                        <Card product={product} showViewProductButton={false} />
                        
                        }
                       </div>
                       <div className="col-4">
                       <h2 className="mb-4">Related Product</h2>
                             {relatedProduct && 
                             
                             relatedProduct.map( (p,i) =>(
                                    <div key={i} className="mb-3">
                                          <Card product={p}/>
                                    </div>

                             ))

                             }
                       </div>
                 </div>
            </Layout>
      )
}

export default Product