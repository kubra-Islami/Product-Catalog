import React from 'react';
import {products} from "../data/products";
import {Link} from "react-router";

function ProductList() {
    return (
        <>
            <h1>Products</h1>
            <p>Browse our collection of products</p>
            <div className="d-flex gap-2">
                {
                    products.map(product => (
                        <div key={product.id} className="card card-body">
                            <h3 className="card-text">{product.name}</h3>
                            <p>{product.price}</p>
                            <Link to={`/products/${product.id}`}>View Details</Link>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default ProductList;