import { Link } from "react-router-dom";

export default function Nav({ numProducts }) {
    return (
        <nav className="nav">
            <div className="logo"></div>
            <ul className="links">
                <li><Link to="home">Home</Link></li>
                <li><Link to="shop">Shop</Link></li>
            </ul>
            <div className="shopping-cart">
                <Link to="cart">
                    <img id="cart-img" src="/images/shopping-cart.png"></img>
                    {(numProducts > 0) ? <span className="num-cart-products">{numProducts}</span> : null}
                </Link>
            </div>
        </nav>
    )
}