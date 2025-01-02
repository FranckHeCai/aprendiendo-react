import { Products } from "./components/Products.jsx"
import { Header } from "./components/Header.jsx"
import { Footer} from "./components/Footer.jsx"
import { products as InitialProducts} from './mocks/products.json'
import { useState } from "react"
import { useFilters } from "./hooks/useFilters.jsx"
import { CartProvider } from "./context/cart.jsx"
import './App.css'
import { Cart } from "./components/Cart.jsx"




function App() {
  const [products] = useState(InitialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <CartProvider> 
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}

export default App
