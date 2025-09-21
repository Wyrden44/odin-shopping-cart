import { useEffect, useState } from "react"
import { loadProducts } from "../mockDataLoader";
import ProductCard from "./products/ProductCard";

const url = "https://fakestoreapi.com/products";

export default function Shop() {
    const products = useProducts(url);

    return (
        <div className="shop">
            <h1>Shop</h1>
            <div className="products">
                {products.map(product =>
                    <ProductCard product={product} />
                )}
            </div>
        </div>
    )
}

function useProducts(url) {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [url]);        

    console.log(products)
    return products;
}