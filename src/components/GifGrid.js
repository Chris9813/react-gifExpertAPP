import React from 'react'
import { useFetchGifs } from './hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'
//import { getGifs } from './helpers/getGifs'


export const GifGrid = ({category}) => {
    /*const [images, setimages] = useState([])
    useEffect(() => getGifs(category)
    .then(x => setimages(x)),[category])*/
    
    const {data:images, loading} = useFetchGifs(category)
    return (
        <>
        <h3>{category}</h3>
        {loading && <p>Loading</p>}
        <div className="card-grid animate__heartBeat">
                { 
                images.map((x) =>
                <GifGridItem 
                key = {x.id}
                {...x}
                />
                ) 
                }
                
            
        </div>
        </>
    )
}

//[ ][ ][ ]

