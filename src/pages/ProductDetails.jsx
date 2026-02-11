import React from 'react';
import {getProduct} from "../data/products";
import {useNavigate, useParams} from "react-router";

function ProductDetails() {
    const {id} = useParams();
    const navigate = useNavigate();
    const product = getProduct(Number(id));

    if (!product) {
        return(
            <div className="card card-body ">
                <h2 className="card-text text-center text-danger">product not found</h2>
                <button className="btn btn-sm btn-link w-25 mx-auto" onClick={()=>{navigate("/products")}}>
                    Back to Products
                </button>
            </div>
        )
    }

    return (
        <div className="card card-body w-75 mx-auto">
            <h2 className="card-text text-center">{product.name}</h2>
            <p className="card-text text-center">{product.price}</p>
            <p  className="card-text text-center">Category : {product.category}</p>
            <p  className="card-text text-center">{product.description}</p>
            <button className="btn btn-link" onClick={()=>{navigate(-1)}}>Back</button>
        </div>
    );
}

export default ProductDetails;
