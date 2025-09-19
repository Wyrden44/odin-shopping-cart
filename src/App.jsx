import { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
  const [shoppingCart, setShoppingCart] = useState({}); // id: {amount}
	const [products, setProducts] = useState({}); // id: {info}

  return (
    <>
      <Nav />
			<Footer />
    </>
  )
}

export default App
