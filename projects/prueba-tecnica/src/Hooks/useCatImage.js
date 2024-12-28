import { useState, useEffect } from "react"

export function useCatImage({fact}) {
    const [image, setImage] = useState(null)
    const firstWord = fact.split(' ', 3).join(' ')

    const fetchImage = async (firstWord) => {
        try {
            const response = await fetch(`https://cataas.com/cat/says/${firstWord}`)
            const fetchedUrl = response.url
            setImage(fetchedUrl)
        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(() => {
        if(!fact) return    

        fetchImage(firstWord)

    }, [fact])
    return {image}
}
