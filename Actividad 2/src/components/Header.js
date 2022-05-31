import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap'; 

function Header() {
    const jsx = (
        <div className="contenedor-header">
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="https://www.mercadolibre.com.ar/">Sitio de promocion de Mercado Libre</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    ); 
    return jsx;
}
export default Header; 