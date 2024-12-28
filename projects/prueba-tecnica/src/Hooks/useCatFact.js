import {useState, useEffect} from 'react'
import {fetchFact} from '../services/fetching'
export function useCatFact(){
    const [fact, setFact] = useState('')

    const refreshRandomFact = () =>{
        fetchFact().then(fact => setFact(fact))
    }

    useEffect(refreshRandomFact, [])

    return {fact, refreshRandomFact}
}