import './App.css'
import HomePage from "./pages/Home.jsx"
import AboutPage from './pages/About.jsx'
import { Router } from './Router.jsx'
import { Page404 } from './pages/Page404.jsx'
import { SearchPage } from './pages/SearchPage.jsx'

const routes = [
  {
    path: "/",
    Component: HomePage
  },
  {
    path: "/about",
    Component: AboutPage
  },
  {
    path: "/search/:query",
    Component: SearchPage
  }
]

function App() {

  return (
    <>
      <main>
        <Router routes={routes} defaultComponent={Page404}/>
      </main>
    </>
  )
}

export default App
