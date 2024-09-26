//import logo from './logo.svg';
import './App.css';

import Header from '../src/Header';
//import {Button} from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
//import { Outlet, Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Register from '../src/Register';
import ProductList from '../src/ProductList';
import Orderdisplay from '../src/Orderdisplay';
import Orderlist from '../src/Orderlist';
import bgimg from  './images/onlinebookstore.jpg';
import bookimg from  './images/Booksimage.jpg';


function App() {

  return (
      
    <div>
      <BrowserRouter>
        <Navbar style={{ paddingLeft: 20, backgroundColor: 'cyan' }}>
          <Container style={{ fontSize: 18, fontFamily: 'sans-serif' }}>
            <Navbar.Brand style={{ color: 'red', fontWeight: 'bold', fontSize: 20 }}>Online Book</Navbar.Brand>
            <Nav className="me-auto nav_bar_wrapper" >
              <Link to="/home" >Home</Link>
              <Link to="/register" >Register</Link>
              <Link to="/productlist" >Product List</Link>
              <Link to="/orderlist" >Order List</Link>
              <Link to="" ></Link>
            </Nav>
           
          </Container>
        </Navbar>
    
        <Routes>
          <Route path='' element={<Header />} />
          <Route path='home' element={<Header />} />
          <Route path='register' element={<Register />} />
          <Route path='productlist' element={<ProductList />} />
          <Route path='orderlist' element={<Orderlist />} />
          <Route path='orderdisplay' element={<Orderdisplay />} />


        </Routes>
      </BrowserRouter>
      <div>
          

    </div>
    </div>


  );
}

export default App; 
