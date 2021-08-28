import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import MessageBox from '../components/MessageBox'
import { detailsProduct } from '../actions/productActions'

export default function ProductScreen(props) {
    const dispatch = useDispatch()
    const productId = props.match.params.id
    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(detailsProduct(productId))
    }, [dispatch, productId])

    return (
        <div>
            {loading? (<Loading></Loading>)
            :error?(<MessageBox variant="danger">{error}</MessageBox>)
            :(
            <div>
                <Link to="/">Back to results</Link>
                <div className="row top">
                    <div className="col-2">
                        <img className="large" src={product.image} alt={product.name} />
                    </div>
                    <div className="col-1">
                        <ul>
                            <li>{product.name}</li>
                            <li>
                                <Rating 
                                    rating={product.rating}
                                    numReviews={product.numReviews}
                                ></Rating>
                            </li>
                            <li>
                                Description:
                                <p>{product.description}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-1">
                        <div className="card card-body">
                            <ul>
                            <li>
                                    <div className="row">
                                        <div>Price</div>
                                        <div className="price">${product.price}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Status</div>
                                        <div className="price">
                                            {product.countInStock>0
                                            ? (<span className="success">In Stock</span>)
                                            :(<span className="danger">Unavailable</span>)
                                            }
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button className="primary block">Add to Card</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
        
    )
}
