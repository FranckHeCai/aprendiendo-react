import { Link } from "../Link.jsx"

export default function HomePage() {
  return(
    <>
      <h1>Home</h1>
      <p>single page application example</p>
      <Link to="/about">About me</Link>
    </>
  )
}