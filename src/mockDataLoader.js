const products = [
    {
        name: "Test",
        description: "This is a test product",
        price: "9.99$",
        img: null,
    },
    {
        name: "Another Test",
        description: null,
        price: "1000.00$",
        img: null,
    }
]

export async function loadProducts() {
    return Promise.resolve(products);
}