import { useOutletContext } from "react-router-dom"
import CartProduct from "./products/CartProduct";
import { useEffect } from "react";

export default function Cart() {
    const [, , shoppingCart, udpateShoppingCart] = useOutletContext();
    
    return (
        <div className="cart">
            <h1>Cart</h1>
            <ul className="cart-products">
                {Object.keys(shoppingCart).map((productId) => {
                    return <li className="list-cart-product" key={productId}>
                        <CartProduct productId={productId} amount={shoppingCart[productId]} onChange={(newAmount) => udpateShoppingCart(productId, newAmount)} />
                    </li>
                })}
            </ul>
            <div className="checkout">
                <h2>Checkout</h2>
                <div className="pricing">
                    <div className="pricing-section">
                        <p>Total:</p>
                        <p>{Object.values(shoppingCart).reduce((prev, curr) => prev + curr, 0)}</p>
                    </div>
                    <button className="checkout">Checkout</button>
                </div>
            </div>
        </div>
    );
}