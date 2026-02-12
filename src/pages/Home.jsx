import { Link } from "react-router";

function Home() {
    return (
        <div className="text-center mt-5 px-3">
            <h1 className="display-4 fw-bold mb-3">
                Welcome to Product Catalog
            </h1>

            <p className="lead text-muted mb-4">
                Browse our collection of products, explore details,
                and experience nested routing with React Router.
            </p>

            <Link
                to="/products"
                className="btn btn-lg px-4 py-2 text-white"
                style={{
                    background: "linear-gradient(90deg, #4f46e5, #6366f1)",
                    borderRadius: "8px",
                    transition: "transform 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
                View Products
            </Link>

            <div className="row mt-5 g-4">
                {[
                    {
                        title: "Dynamic Routes",
                        text: "Each product has its own details page using URL parameters.",
                        icon: "🔗"
                    },
                    {
                        title: "Nested Routes",
                        text: "Product list and details share the same layout using Outlet.",
                        icon: "📂"
                    },
                    {
                        title: "React Router v7",
                        text: "Built using modern routing techniques and best practices.",
                        icon: "⚛️"
                    }
                ].map((card, index) => (
                    <div className="col-md-4" key={index}>
                        <div
                            className="card h-100 shadow-sm text-start p-3"
                            style={{
                                borderRadius: "12px",
                                transition: "transform 0.2s, box-shadow 0.2s",
                                cursor: "pointer"
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = "translateY(-5px)";
                                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                            }}
                        >
                            <div style={{ fontSize: "1.8rem", marginBottom: "12px" }}>
                                {card.icon}
                            </div>
                            <h5 className="card-title fw-bold">{card.title}</h5>
                            <p className="card-text text-muted">{card.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
