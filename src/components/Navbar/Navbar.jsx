import { CartWidget } from "../CartWidget/CartWidget";
import logo from "../Navbar/assets/logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <button class="navbar-brand logo"><Link to={"/"}><img src={logo} alt="logo"/></Link></button>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor02">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <button class="nav-link"><Link to={"/"}>Inicio</Link>
                                <span class="visually-hidden">(current)</span>
                            </button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link"><Link>Nosotros</Link></button>
                        </li>
                        <li class="nav-item dropdown">
                            <button class="nav-link dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><Link>Tienda</Link></button>
                            <div class="dropdown-menu">
                                <button class="dropdown-item"><Link to={"/category/1"}>Collares</Link></button>
                                <button class="dropdown-item"><Link to={"/category/2"}>Aritos</Link></button>
                                <button class="dropdown-item"><Link to={"/category/3"}>Anillos</Link></button>
                            </div>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link"><Link>Contactanos</Link></button>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-sm-2" type="search" placeholder="Search" />
                        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}


