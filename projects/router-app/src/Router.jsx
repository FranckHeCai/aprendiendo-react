import { EVENTS } from "./consts.js"
import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { match } from "path-to-regexp"
  
export function Router ({routes =[] , defaultComponent: DefaultComponent = () => <h1>404</h1>}) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
    useEffect(()=>{
      const onLocationChange = () => {
        setCurrentPath(window.location.pathname)
      }
  
      window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
  
      return () => {
        window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.addEventListener(EVENTS.POPSTATE, onLocationChange)
      }
    }, [])
  
    
    let routeParams = {}
    
    const Page = routes.find( ({path}) => {
       if(path === currentPath) return true

    const matcherUrl = match(path, {decode : decodeURIComponent})
    const matched = matcherUrl(currentPath)
    if(!matched) return false

    routeParams = matched.params
    return true

    })?.Component

    return Page
    ? <Page routeParams={routeParams}  /> 
    : <DefaultComponent routeParams={routeParams} />

  }

Router.propTypes = {
    routes: PropTypes.array,
}