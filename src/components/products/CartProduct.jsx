import { useNavigate } from "react-router-dom";
import { useProduct } from "../../fetcher"

export default function CartProduct({ product, amount, onChange, onRemoveClick }) {
    const navigate = useNavigate();
    
    if (product == null) {
        return (
            <></>
        )
    }

    return (
        <div className="cart-product">
            <img src={product.image} alt="product image" onClick={() => navigate(`../product/${product.id}`)} className="cart-product-image" />
            <div className="cart-product-info">
                    <h3>{product.title}</h3>
                    <p>{product.price}$</p>
            </div>
            <div className="cart-product-actions">
                <input type="number" name="cart-product-amount" value={amount} onChange={(e) => onChange(e.target.value)}/>
                <button className="remove-cart-product" onClick={onRemoveClick}><img src="/images/delete.png" alt="delete" /></button>
            </div>
        </div>
    )
}