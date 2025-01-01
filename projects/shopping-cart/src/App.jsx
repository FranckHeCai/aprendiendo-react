import { Products } from "./components/Products.jsx"
import { Header } from "./components/Header.jsx"
import { Footer} from "./components/Footer.jsx"
import { products as InitialProducts} from './mocks/products.json'
import { useState } from "react"
import { useFilters } from "./hooks/useFilters.jsx"
import './App.css'




function App() {
  const [products] = useState(InitialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
