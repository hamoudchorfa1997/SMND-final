import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillMail,
  AiFillFacebook,
  AiFillPhone
} from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AH</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://web.facebook.com/pages/category/Product-Service/SMND-112100200554017/?_rdc=1&_rdr"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {navigator.clipboard.writeText("smnd1119@gmail.com")
                           alert("l'adresse mail est bien copié")}}
              >
                <AiFillMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://api.whatsapp.com/send?phone=22248723296&app=facebook&entry_point=page_cta"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillPhone />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
