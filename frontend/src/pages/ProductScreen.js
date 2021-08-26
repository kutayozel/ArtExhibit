import React from 'react'
import data from '../data'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'

export default function ProductScreen(props) {
    const item = data.products.find(x => x.id === props.match.params.id)
    if(!item) {
        return <div>Product Not Found</div>
    }
    return (
        <div>
            <Link to="/">Back to results</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={item.image} alt={item.name} />
                </div>
                <div className="col-1">
                    <ul>
                        <li>{item.name}</li>
                        <li>
                            <Rating 
                                rating={item.rating}
                                numReviews={item.numReviews}
                            ></Rating>
                        </li>
                        <li>
                            Description:
                            <p>{item.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">${item.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div className="price">
                                        {item.countInStock>0
                                        ? (<span className="success">In Stock</span>)
                                        :(<span className="error">Unavailable</span>)
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
    )
}
