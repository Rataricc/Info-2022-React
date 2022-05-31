import '../styles/CardComponent.css';
import { Card, CardGroup, Button, Form } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import imgreact1 from '../img/app_react.jpg';
import imgreact2 from '../img/app_react2.jpg';
import imgreact3 from '../img/app_react3.jpg';


function CardComponent(props) {
    //const { titulo, descripcion, img } = props
    const jsx = (
        <div className="component-card">
            <div className='component-card-group'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Buscar Articulo a producto" />
                </Form.Group>
            </Form>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={imgreact1} alt='img para blog' />
                        <Card.Body>
                            <Card.Title>Pc</Card.Title>
                            <Card.Text>
                                Pc Armada Gamer Amd Ryzen 3 4350g 8gb Ssd 240 Radeon Rx Vega
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button 
                                href='https://listado.mercadolibre.com.ar/pc#D[A:pc]' 
                                variant="success">Ir a Mercado Libre
                            </Button>{''}
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={imgreact2} alt='img para blog' />
                        <Card.Body>
                            <Card.Title>Teclado</Card.Title>
                            <Card.Text>
                                Teclado gamer Otemu Red color blanco con luz RGB
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button 
                                href='https://listado.mercadolibre.com.ar/teclados-mecanicos#D[A:teclados%20mecanicos,L:undefined]' 
                                variant="success">Ir a Mercado Libre
                            </Button>{' '}
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={imgreact3} alt='img para blog' />
                        <Card.Body>
                            <Card.Title>Monitor</Card.Title>
                            <Card.Text>
                                Monitor gamer Asus TUF Gaiming VG27AQ led 27 negro 100V/240V
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button 
                                href='https://listado.mercadolibre.com.ar/monitores#D[A:monitores%20]' 
                                variant="success">Ir a Mercado Libre
                            </Button>{' '}
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </div>
    ); 
    return jsx
}
export default CardComponent;