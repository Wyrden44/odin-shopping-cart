import { useNavigate } from "react-router-dom";
import { useProduct } from "../../fetcher"

export default function CartProduct({ productId, amount, onChange }) {
    const product = useProduct(productId);
    const navigate = useNavigate();
    
    if (product == null) {
        return (
            <></>
        )
    }

    return (
        <div className="cart-product">
            <div onClick={() => navigate(`../product/${product.id}`)} className="cart-product-image"><img src={product.image} alt="product image" /></div>
            <div className="cart-product-info">
                <div className="cart-product-info-header">
                    <h3>{product.title}</h3>
                    <p>{product.price}$</p>
                </div>
            </div>
            <div className="cart-product-actions">
                <input type="number" name="cart-product-amount" value={amount} onChange={(e) => onChange(e.target.value)}/>
                <button className="remove-cart-product"><img src="/images/delete.png" alt="delete" /></button>
            </div>
        </div>
    )
}