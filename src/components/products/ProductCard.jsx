export default function ProductCard({ img, name, description, price }) {
    return (
        <div className="product">
            <img src={img} alt="product image" />
            <div className="info">
                <h3>{name}</h3>
                <p>{price}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}