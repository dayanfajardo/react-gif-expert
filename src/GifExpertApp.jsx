import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    //Para mantener el estado en el HTML: inicializa categories en el estado []
    const [categories, setCategories] = useState( ['One Punch'] );
    


    const OnAddCategory = ( newCategory ) => {   

        if( categories.includes( newCategory ) ) return;
        
        // console.log(newCategory)
            // Con el operador spread hago una copia de todo lo que tengo en categories y al final agrego el nuevo elemento
            setCategories( [newCategory, ...categories ] );
        }

    return (
        <>  
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            
            {/* Input o entrada */}

            <AddCategory 
                
                //onNewCategory es una propiedad
                onNewCategory={ value => OnAddCategory( value ) }
                
            />
            
            {/* Listado de Gif */}


        
            { 
                categories.map(category => 
                        (
                        <GifGrid 
                            key={ category } 
                            category={ category }/>
                         ))
            }
            
        </>
    );

}    


