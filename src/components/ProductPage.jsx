import { Form, redirect, useLoaderData, useNavigate, useOutletContext } from "react-router-dom";
import { getProduct } from "../fetcher";
import ProductCard from "./products/ProductCard";
import { getSingleProduct } from "../mockDataLoader";
import { useState } from "react";

export async function loader({ params }) {
    const product = await getProduct(params.productId);
    return { product };
}

export async function addToCart({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    console.log("u2", updates)
    await addProductToCart(params.productId, updates.amount);
}

export default function ProductPage() {
    const { product } = useLoaderData();
    const [amount, setAmount] = useState(1);
    const [_, __, ___, updateShoppingCart] = useOutletContext();
    const navigate = useNavigate();

    return (
        <div className="product-page">
            <button className="back-to-shop" onClick={() => navigate(-1)}>&lt;</button>
            <div className="product-page-card">
                <div className="product-images">
                    <img src={product.image} alt="Product Image" />
                </div>
                <div className="product-info">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p id="product-price">{product.price}$</p>
                    <div className="product-actions">
                        <input onChange={(e) => setAmount(e.target.value)} min="1" max="100" type="number" name="amount" id="product-amount" value={amount} />
                        <button onClick={() => updateShoppingCart(product.id, amount)}>Put in Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}