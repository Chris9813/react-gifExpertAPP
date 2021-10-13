import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    //const categorias = ["breaking bad","dragon ball", "weed" ]
    const [categories, setCategories] = useState(["breaking bad"])
    /*const handleAdd = () => {
        setCategories((x) => x.concat("Neas"))
    }*/

    return(
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories = {setCategories}/>
        <hr/>
        
        {
            <ol>
                {categories.map((category) =>

                <GifGrid 
                key = { category }
                category = { category }
                />
                ) 
                }
            </ol>
        }
        </>
    )
}
export default GifExpertApp;