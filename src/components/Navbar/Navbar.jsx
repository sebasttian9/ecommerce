import Carro from '../Global/carro';

function Navbar(imagen){

    return(

        // navbar-dark bg-dark
        <>
            <nav className="navbar navbar-expand-lg navbar-light navbar-fondo"> 
                {/* Content */}
                <a className="navbar-brand" href="#"><img src={imagen.src} alt="ImagenPrincipal"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    {/* <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li> */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Categorias
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Acc. Portalones</a>
                        <a className="dropdown-item" href="#">Accesorios</a>
                        <a className="dropdown-item" href="#">Amortiguadores</a>
                        <a className="dropdown-item" href="#">Axial</a>
                        {/* <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a> */}
                        </div>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li> */}
                    </ul>
                    <Carro/>
                    {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>                
            </nav>
        </>


    );


}


export default Navbar;