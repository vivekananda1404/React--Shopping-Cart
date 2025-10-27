import {Button , Navbar , Modal} from 'react-bootstrap'
import { useState, useContext } from 'react';
import { CartContext } from '../CartContext';

import CartProduct from './Cartproduct';

function Navigationbar () {

    const cart = useContext(CartContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const productsCount = cart.items.reduce((sum ,product) => sum +product.quantity, 0);


    return (
        <>
       <Navbar expand="sm">
        <Navbar.Brand href = "/"> 
        Ecommerce Store
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className = "justify-content-end">
         <Button onClick={handleShow}>Cart {productsCount} Items</Button>
        </Navbar.Collapse>
       </Navbar>
       <Modal show = {show} onHide = {handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Shopping cart</Modal.Title>

        </Modal.Header>
        <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            {cart.items.map( (currentProduct, idx) => (
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                            <Button variant="success">
                                Make Payment
                            </Button>
                        </>
                    :
                        <h1>There are no items in your cart!</h1>
                    }
                </Modal.Body>



       </Modal>


       </>

    )

}

export default Navigationbar;

// handleclose and handleshow are functions , which when clicked run the setShow function and handleclose and handleshow set the value for show variable

// onHide property in to close the modal by clciking anywhere rather than on modal,whereas the closeButton is for closing the modal by click the x button inside the modal