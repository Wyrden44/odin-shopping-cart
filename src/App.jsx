import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet, useLoaderData } from 'react-router-dom';
import { useProducts } from './fetcher';

const url = "https://fakestoreapi.com/products";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
	const  [products, randomProduct] = useProducts(url);

  function updateShoppingCart(productId, amount) {
    setShoppingCart([
      ...shoppingCart,
      { [productId]: amount }
    ])
  }

  console.log("CART: ", shoppingCart)

  return (
    <>
      <Nav numProducts={shoppingCart.length} />
			<section className="main">
				<Outlet context={[products, randomProduct, shoppingCart, updateShoppingCart]} />
			</section>
			<Footer />
    </>
  )
}

export default App
