import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {
    
    const [state, setstate] = useState({
        data: [],
        loading: true
    })
    
    useEffect(() => {
        getGifs(category)
        .then(x => setstate({
            data: x,
            loading: false
        }))
    }, [category])
    return state
}
