import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const url = "https://fakestoreapi.com/products";

function App() {
  const [shoppingCart, setShoppingCart] = useState({}); // id: {amount}
	const products = useProducts(url);
  const randomProduct = useState(products[Math.floor(Math.random()*products.length)]);

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

function useProducts(url) {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [url]);        

    console.log("P", products);
    return products;
}

export default App
