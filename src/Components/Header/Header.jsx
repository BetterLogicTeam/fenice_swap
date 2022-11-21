import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoIosArrowDown } from 'react-icons/io';
import logo from '../../Assets/logo.png';
import meta_mask from '../../Assets/meta_mask.png';
import trust_wallet from '../../Assets/trust_wallet.png';
import math_wallet from '../../Assets/math_wallet.png';
import connect_wallet from '../../Assets/connect_wallet.png';
import safepal_wallet from '../../Assets/safepal_wallet.png';
import "./Header.css";
import { FaWallet } from 'react-icons/fa';
import { BsQuestionCircle } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaTelegram } from 'react-icons/fa';
import { TfiYoutube } from 'react-icons/tfi';
import { ImFacebook } from 'react-icons/im';
import { Link } from 'react-router-dom';
import Connect_wallet from './Connect_wallet';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Connect to a Wallet
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Connect_wallet />
      </Modal.Body>
    </Modal>
  );
}


function Header() {
  const [modalShow, setModalShow] = React.useState(false);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='navv_main'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="naaav_container">
      <Link to="/"><Navbar.Brand className='header_img' href="#home"><img  src={logo} alt="" /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link to="/"><Nav.Link href="#features">Swap</Nav.Link></Link>
            
            <NavDropdown title="Pool" id="collasible-nav-dropdown">
             <Link to="/Browse"> <NavDropdown.Item href="#action/3.2">
                Browse
              </NavDropdown.Item></Link>
              <Link to="/Import"><NavDropdown.Item href="#action/3.3">Import</NavDropdown.Item></Link>
              <Link to="/Migrate"><NavDropdown.Item href="#action/3.3">Migrate</NavDropdown.Item></Link>
            </NavDropdown>

            <NavDropdown title="Trade" id="collasible-nav-dropdown">
              <Link to="/"><NavDropdown.Item href="#action/3.1">Exchange</NavDropdown.Item></Link>
              <Link to="/Liquidity"><NavDropdown.Item href="#action/3.2">
                Liquidity
              </NavDropdown.Item></Link>
            </NavDropdown>

            <NavDropdown title="Game" id="collasible-nav-dropdown">
            <Link to="/"><NavDropdown.Item href="#action/3.1">Game</NavDropdown.Item></Link>
            <Link to="/"><NavDropdown.Item href="#action/3.2">
              Game 2
              </NavDropdown.Item></Link>
            </NavDropdown>

            <NavDropdown title="Farm" id="collasible-nav-dropdown">
              <Link to="/Your_forms"><NavDropdown.Item href="#action/3.1">Your Farms</NavDropdown.Item></Link>
              <Link to="/All_forms"><NavDropdown.Item href="#action/3.2">
                All Farms
              </NavDropdown.Item></Link>
            </NavDropdown>

            <Link to="/All_forms"><Nav.Link href="#pricing">NFT</Nav.Link></Link>

            <NavDropdown title="NFT Marketplace" id="collasible-nav-dropdown">
              <Link to="/Explore"><NavDropdown.Item href="#action/3.2">
              Explore
              </NavDropdown.Item></Link>
              <Link to="/Open_market"><NavDropdown.Item href="#action/3.3">Open Market</NavDropdown.Item></Link>
              <Link to="/Game_assets"><NavDropdown.Item href="#action/3.3">Game Assets</NavDropdown.Item></Link>
            </NavDropdown>

            <Link to="/Launchpad"><Nav.Link href="#pricing">Launchpad</Nav.Link></Link>

            <NavDropdown title="Contact" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://twitter.com/wonder_swap" target="_blank">
              <BsTwitter /> Twitter
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.facebook.com/profile.php?id=100083933690337" target="_blank"><ImFacebook /> Facebook</NavDropdown.Item>
              <NavDropdown.Item href="https://www.instagram.com/wonderswap/" target="_blank"><BsInstagram /> Instagram</NavDropdown.Item>
              <NavDropdown.Item href="https://t.me/wonderswap_official" target="_blank"><FaTelegram /> Telegram</NavDropdown.Item>
              <NavDropdown.Item href="https://www.youtube.com/channel/UChsKP3LJAlSKOR8QY54kRcg" target="_blank"><TfiYoutube /> Youtube</NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Nav>
            <Nav.Link href="#deets">

            <Button variant="" className="btn button btn-success d-inline-block ml-auto contact" onClick={() => setModalShow(true)}>
            <FaWallet /> Connect wallet
      </Button>

            <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header