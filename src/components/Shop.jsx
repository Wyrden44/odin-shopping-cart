import { useEffect, useState } from "react"
import { loadProducts } from "../mockDataLoader";
import ProductCard from "./products/ProductCard";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
    const [products, _] = useOutletContext();

    return (
        <div className="shop">
            <h1>Shop</h1>
            <div className="products">
                {products.map(product =>
                    <ProductCard product={product} key={product.id} />
                )}
            </div>
        </div>
    )
}
