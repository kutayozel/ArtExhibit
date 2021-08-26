import React from 'react'
import Rating from './Rating'

export default function Cini(props) {
    const {item} = props
    return (
        <div key={item.id} className="card">
            <a href={`/product/${item.id}`}>
                <img className="medium" src={item.image} alt={item.name} />
            </a>
            <div className="card-body">
                <a href={`/product/${item.id}`}>
                    <h2>{item.name}</h2>
                </a> 
                <Rating 
                    rating={item.rating} 
                    numReviews={item.numReviews}>
                </Rating>
                <div className="price">${item.price} </div>
            </div>
        </div>
    )
}
