import { useEffect, useState } from "react"
import { loadProducts } from "../mockDataLoader";
import ProductCard from "./products/ProductCard";

export default function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function load() {
            try {
                const loadedProducts = await loadProducts();
                console.log(loadedProducts)
                setProducts(loadedProducts);   
            } catch (error) {
                console.log("Error in data loading:", error);
            }
        }
        load();
    }, []);


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