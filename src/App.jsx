import { useState } from 'react'

function App() {
  const [shoppingCart, setShoppingCart] = useState({}); // id: {amount}
	const [products, setProducts] = useState({}); // id: {info}

  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}

export default App
