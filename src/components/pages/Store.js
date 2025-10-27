import {Row, Col} from 'react-bootstrap';
import Productcard from '../Productcard';

import { productsArray } from '../../productsArray';
function Store() {
    return (
        <>
        <h1 align="center" className='p-3'>Welcome to the Store!</h1>

        <Row xs={1} md={3} className='g-4'>
            {productsArray.map((product,idx) => (
                 <Col align="center" key={idx}>
                 <h1>{product.name}</h1>
                 <Productcard product={product}/>
                 </Col>

            ))}

           
        </Row>


        </>
    )
}

export default Store;