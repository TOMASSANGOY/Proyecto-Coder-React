import { CartWidget } from "../CartWidget/CartWidget";

export const Navbar = () => {
    return (
        <div>
            <h2>Ecommerce</h2>
            <div>
                <button>Aros</button>
                <button>Pulseras</button>
                <button>Collares</button>
            </div>
            <CartWidget/>
        </div>
    );
}


