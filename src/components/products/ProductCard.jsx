import { useNavigate } from "react-router-dom"

export default function ProductCard({ product }) {
    const navigate = useNavigate();
    
    if (product == null) {
        return (
            <></>
        )
    }
    return (
        <div onClick={() => navigate(`../product/${product.id}`)} className="product">
            <div className="product-image"><img src={product.image} alt="product image" /></div>
            <div className="info">
                <div className="info-header">
                    <h3>{product.title}</h3>
                    <p>{product.price}$</p>
                </div>
            </div>
        </div>
    )
}