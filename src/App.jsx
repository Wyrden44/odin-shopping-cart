import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { useProducts } from './fetcher';

const url = "https://fakestoreapi.com/products";

function App() {
  const [shoppingCart, setShoppingCart] = useState({}); // id: {amount}
	const  [products, randomProduct] = useProducts(url);

  return (
    <>
      <Nav />
			<section className="main">
				<Outlet context={[products, randomProduct]} />
			</section>
			<Footer />
    </>
  )
}

export default App
