import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cini from "../components/Cini";
import Loading from '../components/Loading';
import MessageBox from '../components/MessageBox';


export default function HomeScreen() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() =>{
        const fetchData = async () => {
            try{
                setLoading(true);
                const {data} = await axios.get('/api/products');
                setLoading(false);
                setProducts(data);
            } catch(err){
                setError(err.message);
                setLoading(false);
            }
        
        }
        fetchData();
    }, [])
    return (
        <div>
            {loading? (<Loading></Loading>)
            :error?(<MessageBox variant="danger">{error}</MessageBox>)
            :(
            <div className="row center">
                {products.map((item) => (
                    <Cini key={item.id} item={item}></Cini>
                ))}
            </div>
            )}
        </div>
    )
}
