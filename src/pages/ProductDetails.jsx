import { getProduct } from "../data/products";
import { useNavigate, useParams } from "react-router";

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = getProduct(Number(id));

    if (!product) {
        return (
            <div
                className="details-card text-center mx-auto p-5"
                style={{
                    maxWidth: 500,
                    border: "1px solid #e0e0e0",
                    borderRadius: 12,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    backgroundColor: "#fff",
                }}
            >
                <img
                    src="https://cdn-icons-png.flaticon.com/512/463/463612.png"
                    alt="Not Found"
                    style={{ width: 80, marginBottom: 20 }}
                />
                <h3 className="text-danger fw-bold mb-3">Oops! Product Not Found</h3>
                <p className="text-muted mb-4">
                    We couldn’t find the product you’re looking for. It might have been removed or the ID is incorrect.
                </p>
                <button
                    className="btn btn-brand"
                    onClick={() => navigate("/products")}
                >
                    Browse All Products
                </button>
            </div>
        );
    }


    return (
        <div className="details-card mx-auto" style={{ maxWidth: 700 }}>
            <div className="d-flex flex-column gap-3">

                <div className="details-category">
                    {product.category}
                </div>

                <div className="details-title">
                    {product.name}
                </div>

                <div className="details-price">
                    €{product.price}
                </div>

                <p className="text-muted mt-2" style={{ lineHeight: 1.8 }}>
                    {product.description}
                </p>

                <div className="d-flex gap-3 mt-4">
                    <button
                        className="btn btn-outline-brand"
                        onClick={() => navigate(-1)}
                    >
                        ← Back
                    </button>

                    <button
                        className="btn btn-brand"
                        onClick={() => navigate("/products")}
                    >
                        All Products
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ProductDetails;
