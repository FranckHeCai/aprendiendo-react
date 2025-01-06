import './App.css'
import { Router } from './Router.jsx'
import { Page404 } from './pages/Page404.jsx'
import { SearchPage } from './pages/SearchPage.jsx'
import { Route } from './Route.jsx'
import { lazy, Suspense } from 'react'

const LazyAboutPage = lazy(()=> import("./pages/About.jsx"))
const LazyHomePage = lazy(()=> import("./pages/Home.jsx"))

const routes = [
  {
    path: "/search/:query",
    Component: SearchPage
  },
  {
    path: "/:lang/about",
    Component: LazyAboutPage
  }
]

function App() {

  return (
    <>
      <main>
        <Suspense  >
          <Router routes={routes} defaultComponent={Page404}>
            <Route path="/" Component={LazyHomePage} />
            <Route path="/about" Component={LazyAboutPage} />
            <Route path="/search/:query" Component={SearchPage} />
          </Router>
        </Suspense>
      </main>
    </>
  )
}

export default App
