export default function ProductCard({ product }) {
    return (
        <div className="product">
            <img src={product.img} alt="product image" />
            <div className="info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <p>{product.description}</p>
            </div>
        </div>
    )
}