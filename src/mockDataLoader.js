const products = {
    0: {
        name: "Test",
        description: "This is a test product",
        price: "9.99$",
        img: null,
    },
    1: {
        name: "Another Test",
        description: null,
        price: "1000.00$",
        img: null,
    }
}

export async function loadProducts() {
    setTimeout(() => {
        return new Promise.resolve(products);
    }, 500);
}