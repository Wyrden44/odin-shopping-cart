import { useState, useEffect } from "react";

export function useProducts(url) {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [url]);        

    console.log("P", products);
    return [products, products[Math.floor(Math.random()*products.length)]];
}

export async function getProduct(productId) {
    console.log("PID", productId)
    return fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => res.json())
        .then((data) => data);
}