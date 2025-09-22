import { useLoaderData } from "react-router-dom";
import { getProduct } from "../fetcher";
import ProductCard from "./products/ProductCard";

export async function loader({ params }) {
    const product = await getProduct(params.productId);
    return { product };
}

export default function ProductPage() {
    const { product } = useLoaderData();
    console.log("D", product);
    return (
        <ProductCard product={product} />
    );
}