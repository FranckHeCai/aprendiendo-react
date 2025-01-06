import { useState } from "react"
import { Link } from "../Link.jsx"
import "./Home.css"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleChange = (event) =>{
    setSearchQuery(event.target.value)
  }

  return(
    <div className="home">
      <h1>Home</h1>
      <p>single page application example</p>
      <Link to="/about">About me</Link>
      <input style={{display: "block", "margin-top" : 15}} type="text" value={searchQuery} onChange={handleChange} />
      <Link className="button" to={`/search/${searchQuery}`} >Search</Link>
    </div>
  )
}