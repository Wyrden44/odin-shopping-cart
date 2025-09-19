import { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';


function App() {
  const [shoppingCart, setShoppingCart] = useState({}); // id: {amount}
	const [products, setProducts] = useState({}); // id: {info}

  return (
    <>
      <Nav />
			<section className="main">
				<Outlet />
			</section>
			<Footer />
    </>
  )
}

export default App
