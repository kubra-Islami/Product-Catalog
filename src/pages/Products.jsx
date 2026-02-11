import React from 'react';
// import {useParams} from "react-router";
import {products} from "../data/products.js"

function Products() {

    return (
        <div>
            <ul>
                {
                    products.map((product)=>{
                        return (
                            <li key={product.id}> {product.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Products;
