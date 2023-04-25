import { Link } from "react-router-dom";
//Recibir un objeto y devolverlo en forma de componente con esta plantilla
export const Item = ({ item }) => {
    console.log(item);
    return (
        <div class="card" style={{ width: '18rem' }}>
            <img src={item.img} class="card-img-top" alt={`Imagen de ${item.nombre}`} />
            <div class="card-body">
                <h5 class="card-title">{item.nombre} {item.material}</h5>
                <p class="card-text">material: {item.material}</p>
                <p class="card-text">precio: {item.precio}</p>
                <p class="card-text">stock: {item.stock}</p>
            </div>
            <footer>
                <button><Link className="nav-link" to={`/product/${item.id}`}>Ver Producto</Link></button>
            </footer>
        </div>
    );
}

