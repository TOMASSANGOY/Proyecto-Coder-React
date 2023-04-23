import { CartWidget } from "../CartWidget/CartWidget";
import logo from "../Navbar/assets/logo.png";


export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <button class="navbar-brand logo" href="#"><img src={logo} alt="logo" /></button>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor02">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <button class="nav-link active" href="#"><p>Inicio</p>
                                <span class="visually-hidden">(current)</span>
                            </button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link" href="#"><p>Nosotros</p></button>
                        </li>
                        <li class="nav-item dropdown">
                            <button class="nav-link dropdown" data-bs-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false"><p>Tienda</p></button>
                            <div class="dropdown-menu">
                                <button class="dropdown-item" href="#">Aros</button>
                                <button class="dropdown-item" href="#">Collares</button>
                                <button class="dropdown-item" href="#">Anillos</button>
                            </div>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link" href="#"><p>Contactanos</p></button>
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


