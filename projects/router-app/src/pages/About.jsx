import {Link} from "../Link.jsx"
import pp from "../img/pp_franckcai.png"

export default function AboutPage() {
    return(
      <>
        <h1>About</h1>
        <div>
          <img src={pp} alt="picture of user" width="200"/>
          <p>Hi my name is Franck and I am experimenting with react router</p>
        </div>
        <Link to="/">Go back to home</Link>
      </>
    )
  }