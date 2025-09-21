import { Link, useOutletContext } from "react-router-dom";
import ProductCard from "./products/ProductCard";

export default function Home() {
    const [_, randomProduct] = useOutletContext();
    return (
        <div className="home">
            <div className="banner">
                <div className="home-heading">
                    <h1>Everything you want</h1>
                    <h1>All in one place</h1>
                </div>
                <Link id="shop-now" to={"../shop"}>Shop Now</Link>
            </div>
            <div className="featured">
                <h1>Featured</h1>
                <ProductCard product={randomProduct} />
            </div>
        </div>
    )
}