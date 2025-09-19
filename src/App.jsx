import { useState } from 'react';
import Nav from './components/Nav';


function App() {
  const [shoppingCart, setShoppingCart] = useState({}); // id: {amount}
	const [products, setProducts] = useState({}); // id: {info}

  return (
    <>
      <Nav />
    </>
  )
}

export default App
