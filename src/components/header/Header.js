import React from "react";
import "./Header.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../pic/Layer_1.png";
import { LinearGradient } from "react-text-gradients";
import { SlSocialGoogle } from "react-icons/sl";
import { LiaFacebook } from "react-icons/lia";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BsArrowRight } from "react-icons/bs";
import Mouse from "../../pic/mouse_5114825 1.png";

const Header = () => {
  return (
    <div className="first-sec">
      {/********* Start NavBar ************* */}
      <Navbar expand="lg" className="sec-navbar">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="logo" className="fluid logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#Plugins">Plugins</Nav.Link>
              <Nav.Link href="#Aboutus">About us</Nav.Link>
              <Nav.Link href="#Contact">Contact us</Nav.Link>
              <Nav.Link href="#Packages">Packages</Nav.Link>
            </Nav>
            <div className="d-flex">
              <button className="btn-header">
                <LinearGradient gradient={["to left", "#35A29F , #9A417a"]}>
                  START NOW
                </LinearGradient>
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/*********End NavBar ************* */}

      {/*********Start Header section ******/}
      <header className="sec-header">
        <Container>
          <div className="header-info">
            <h1>ALL IN ONE</h1>
            <h2>plugins upsell sales</h2>
            <h2>we develop plugins.</h2>
          </div>
          <div className="header-icons">
            <SlSocialGoogle />
            <LiaFacebook />
            <PiWhatsappLogoThin />
            <TiSocialLinkedinCircular />
          </div>
          <div>
            <button className="btn-header">
              <LinearGradient gradient={["to left", "#35A29F , #9A417a"]}>
                START NOW <BsArrowRight />
              </LinearGradient>
            </button>
          </div>
          <div className="explore-sec">
            <img src={Mouse} alt="explore" className="fluid" />
            <h2>Explore More</h2>
          </div>
        </Container>
      </header>
      {/*********End Header section ******/}
    </div>
  );
};

export default Header;
