import { useState, useEffect } from "react";

export function useProducts(url) {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [url]);        

    return [products, products[Math.floor(Math.random()*products.length)]];
}

export function useProduct(productId) {
    const [product, setProduct] = useState(null);
    
    useEffect(() => {
        getProduct(productId).then((data) => setProduct(data));
    }, [productId]);

    return product; 
}

export async function getProduct(productId) {
    return fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => res.json())
        .then((data) => data);
}
