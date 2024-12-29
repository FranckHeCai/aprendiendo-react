import { useState, useEffect, useRef } from "react"
export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(()=>{

    if(isFirstInput.current){
        isFirstInput.current = search === ''
        return
    }
    if(search === ''){
      setError('Cannot search for empty string')
      return
    }

    if(search.match(/^\d+$/)){
      setError('Cannot search for numbers')
      return
    }
    setError(null)
  },[search])

  
  return {search, updateSearch, error}
}