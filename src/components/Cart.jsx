import { useOutletContext } from "react-router-dom"
import CartProduct from "./products/CartProduct";

export default function Cart() {
    const [, , shoppingCart, udpateShoppingCart] = useOutletContext();

    console.log("CART:", shoppingCart);
    
    return (
        <div className="cart">
            {Object.keys(shoppingCart).map((productId) => {
                return <CartProduct productId={productId} amount={shoppingCart[productId]} onChange={(newAmount) => udpateShoppingCart(productId, newAmount)} key={productId} />
            })}
        </div>
    );
}