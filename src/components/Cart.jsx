import { useOutletContext } from "react-router-dom"
import CartProduct from "./products/CartProduct";

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
        </div>
    );
}