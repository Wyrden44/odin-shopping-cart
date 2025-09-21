export default function ProductCard({ product }) {
    return (
        <div className="product">
            <div className="product-image"><img src={product.image} alt="product image" /></div>
            <div className="info">
                <div className="info-header">
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                </div>
                <p>{product.description}</p>
            </div>
        </div>
    )
}