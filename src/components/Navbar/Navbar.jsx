import { CartWidget } from "../CartWidget/CartWidget";
import logo from "../Navbar/assets/logo.png";


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-light">
            <div className="container-fluid">
                <a className="navbar-brand logo" href="lol"><img src={logo} alt="logo" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 letras">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="./index.html">INICIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./Paginas/Medida_anillo.html">MEDIDA ANILLOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./Paginas/Tienda.html">TIENDA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./Paginas/Como_comprar.html">COMO COMPRAR</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./Paginas/Contactanos.html">CONTACTO</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}


