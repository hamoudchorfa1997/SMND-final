import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import pr1 from "../../Assets/pr1.jpeg";
import pr2 from "../../Assets/pr2.jpeg";
import pr3 from "../../Assets/pr3.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projets <strong className="purple">Realisés </strong>
        </h1>
        <p style={{ color: "white" }}>
          Qui témoigne de la qualité de nos services
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pr1}
              isBlog={false}
              title="Premier Projet"
              description="Cliquez sur le lien ci-dessous pour plus d'information"
              link="https://web.facebook.com/112100200554017/photos/a.122564512840919/147171597046877/?type=3&_rdc=1&_rdr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pr2}
              isBlog={false}
              title="Deuxieme Projet"
              description="Cliquez sur le lien ci-dessous pour plus d'information"
              link="https://fb.watch/7rJRAtZzGY/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pr3}
              isBlog={false}
              title="Nettoyage des murs"
              description="Cliquez sur le lien ci-dessous pour plus d'information"
              link="https://www.facebook.com/112100200554017/posts/258566892574013/?d=n"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
