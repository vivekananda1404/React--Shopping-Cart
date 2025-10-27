import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/navbar';
import { Container } from 'react-bootstrap';
import Store from './components/pages/Store';
import Success from './components/pages/Success';
import Cancel from './components/pages/Cancel';

import CartProvider from './CartContext';

import {BrowserRouter , Routes, Route} from 'react-router-dom';
function App() {
  return (
    <CartProvider>
    <Container>
   <Navigationbar> </Navigationbar>
    <BrowserRouter>
    <Routes>
      <Route index element = {<Store/>}/>
      <Route path = "success" element = {<Success />}/>
      <Route path = "cancel" element = {<Cancel />}/>


    </Routes>
    
    </BrowserRouter>

    </Container>
    </CartProvider>
  );
}

export default App;


//localhost :3000 -> Home component
//localhost:3000/success -> success component
//This is where react router helps
// refer to react docs in google docs
// Nav bar is always there , so no need to wrap in BrowserRoute