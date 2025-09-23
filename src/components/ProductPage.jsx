import { useLoaderData } from "react-router-dom";
import { getProduct } from "../fetcher";
import ProductCard from "./products/ProductCard";
import { getSingleProduct } from "../mockDataLoader";

export async function loader({ params }) {
    const product = await getProduct(params.productId);
    return { product };
}

export default function ProductPage() {
    const { product } = useLoaderData();

    return (
        <div className="product-page">
            <button className="back-to-shop">&lt;</button>
            <div className="product-page-card">
                <div className="product-images">
                    <img src={product.image} alt="Product Image" />
                </div>
                <div className="product-info">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p id="product-price">{product.price}$</p>
                    <div className="product-actions">
                        <input type="number" name="amount" id="product-amount" value={1} />
                        <button>Put in Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}