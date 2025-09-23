const products = [
    {
        title: "Test",
        description: "This is a test product",
        price: "9.99$",
        image: null,
    },
    {
        title: "Another Test",
        description: null,
        price: "1000.00$",
        image: null,
    }
]

export async function loadProducts() {
    return Promise.resolve(products);
}

export function getSingleProduct() {
    return products[0];
}