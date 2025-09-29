import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet, useLoaderData } from 'react-router-dom';
import { useProducts } from './fetcher';

const url = "https://fakestoreapi.com/products";

function App() {
  const [shoppingCart, setShoppingCart] = useState({});
	const  [products, randomProduct] = useProducts(url);

  function updateShoppingCart(productId, amount) {
    setShoppingCart({
      ...shoppingCart,
      [productId]: amount,
    });
  }

  function removeFromCart(productId) {
    const cart = {...shoppingCart};
    delete cart[productId];
    setShoppingCart(cart);
  }

  return (
    <>
      <Nav numProducts={Object.keys(shoppingCart).length} />
			<section className="main">
				<Outlet context={[products, randomProduct, shoppingCart, updateShoppingCart, removeFromCart]} />
			</section>
			<Footer />
    </>
  )
}

export default App
