import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="nav">
            <div className="logo"></div>
            <ul className="links">
                <Link to="home">Home</Link>
                <Link to="shop">Shop</Link>
            </ul>
            <div className="shopping-cart">
                <Link to="cart"><img src="../../public/images/shopping-cart.png"></img></Link>
            </div>
        </nav>
    )
}