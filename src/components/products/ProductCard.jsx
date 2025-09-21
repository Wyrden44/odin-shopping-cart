export default function ProductCard({ product }) {
    return (
        <div className="product">
            <img src={product.img} alt="product image" />
            <div className="info">
                <div className="info-header">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                </div>
                <p>{product.description}</p>
            </div>
        </div>
    )
}