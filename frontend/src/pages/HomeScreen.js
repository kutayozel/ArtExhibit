import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cini from "../components/Cini";
import Loading from '../components/Loading';
import MessageBox from '../components/MessageBox';
import { useSelector,useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';


export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const {loading, error, products} = productList;

    useEffect(() =>{
        dispatch(listProducts());
    }, [dispatch])
    return (
        <div>
            {loading ? (<Loading></Loading>)
            :error ? (<MessageBox variant="danger">{error}</MessageBox>)
            :(
            <div className="row center">
                {products.map((product) => (
                    <Cini key={product._id} product={product}></Cini>
                ))}
            </div>
            )}
        </div>
    )
}
