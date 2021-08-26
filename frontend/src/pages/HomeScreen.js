import React from 'react'
import data from "../data";
import Cini from "../components/Cini";

export default function HomeScreen() {
    return (
        <div>
            <div className="row center">
                {data.products.map((item) => (
                    <Cini key={item.id} item={item}></Cini>
                ))}
            </div>
        </div>
    )
}
