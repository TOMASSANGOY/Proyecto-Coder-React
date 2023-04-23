import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
//Consulto a mis productos de mi base de datos y se los envio a ItemLIts

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    /* useEffect(() => {
        const promesa = () => new Promise((resolve, reject) =>  {
            if(true) {
                resolve(BBD)
            }
                reject ("No posee los permisos necesarios");
        })

        promesa()
        .then(productos => {
            const items = <ItemList productos={productos} /> //Envio los productos consultadps
            setProductos(items)
        })
        .catch(error => console.log(error))
    }, []) */

    useEffect(() => {
        fetch('./json/productos.json')
            .then(response => response.json())
            .then(productos => {
                const productosFiltrados = productos.filter(prod => prod.stock > 0)
                setProductos(productosFiltrados)
            })

    }, [])

    return (
        <div class="row">
            {<ItemList productos={productos} />}
        </div>
    );
}

