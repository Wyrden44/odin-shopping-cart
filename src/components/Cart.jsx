import { useOutletContext } from "react-router-dom"
import CartProduct from "./products/CartProduct";
import { useEffect, useState } from "react";
import { getProduct, useProduct } from "../fetcher";

export default function Cart() {
    const [, , shoppingCart, udpateShoppingCart, deleteFromCart] = useOutletContext();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const keys = Object.keys(shoppingCart);

        async function loader() {
            const results = await Promise.all(
                keys.map(async (id) => {
                    if (!products[id]) {
                        const p = await getProduct(id);
                        return [id, p];
                    }
                    return [id, products[id]];
                })
            );
            setProducts(Object.fromEntries(results));
        }
        
        if (keys.length > 0) {
            loader();
        }

    }, [shoppingCart]);

    if (Object.keys(shoppingCart).length == 0) {
        return (
            <>
                <div className="cart">
                    <h2 className="empty-cart-message">Cart is empty!</h2>
                </div>
            </>
        )
    }
    
    return (
        <div className="cart">
            <h1>Cart</h1>
            <div className="cart-items">
                <ul className="cart-products">
                    {Object.keys(shoppingCart).map((productId) => {
                        return <li className="list-cart-product" key={productId}>
                            <CartProduct product={products[productId]} amount={shoppingCart[productId]} onChange={(newAmount) => udpateShoppingCart(productId, newAmount)} onRemoveClick={() => deleteFromCart(productId)}/>
                        </li>
                    })}
                </ul>
                <div className="checkout">
                    <h2>Order Summary</h2>
                    <div className="pricing">
                        <div className="pricing-section">
                            <p>Total:</p>
                            <p>{Object.values(products).reduce((prev, product) => prev + Math.round(product.price * shoppingCart[product.id] * 100) / 100, 0)}$</p>
                        </div>
                        <button className="checkout-button">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}