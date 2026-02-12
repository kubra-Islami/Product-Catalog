import { products } from "../data/products";
import { Link } from "react-router";

function ProductList() {
    return (
        <div>
            <h2 className="fw-bold mb-1">Our Products</h2>
            <p className="text-muted mb-4">
                Discover quality items carefully selected for you
            </p>

            <div className="row g-4">
                {products.map((product) => (
                    <div key={product.id} className="col-12 col-sm-6 col-lg-4">
                        <div className="card product-card h-100 p-3">
                            <div className="card-body d-flex flex-column">

                                <div className="category-badge mb-2">
                                    {product.category}
                                </div>

                                <h5 className="fw-bold">{product.name}</h5>

                                <p className="price mt-1">€{product.price}</p>

                                <p className="text-muted small flex-grow-1 mt-2">
                                    {product.description.slice(0, 70)}...
                                </p>

                                <Link
                                    to={`/products/${product.id}`}
                                    className="btn btn-brand mt-3"
                                >
                                    View Details
                                </Link>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
