import {Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
    return (
    <Container className="">
        <Navbar bg="dark" variant="dark fixed-bottom p-1 d-flex">
            <p className="col-md-4 mb-0 text-muted">&copy; TU PC - Rio Tercero - Córdoba</p>
            <Link href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none">
            </Link>
            <Nav className="justify-content-end fs-6">
                <Link className='nav-link' to="articulos">Articulos</Link>
                <Link className='nav-link' to="recomendado">Recomendado</Link>
                <Link className='nav-link' to="formulario">Formulario</Link>
            </Nav>
            
        </Navbar>
    </Container>
    );
}

export default Footer;
