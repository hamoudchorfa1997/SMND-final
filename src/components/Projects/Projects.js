import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import pr1 from "../../Assets/pr1.jpeg";
import pr2 from "../../Assets/pr2.jpeg";
import pr3 from "../../Assets/pr3.png";
import boul from "../../Assets/boul.jpeg";
import Savia from "../../Assets/Savia.jpeg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projets <strong className="purple">Realisés </strong>
        </h1>
        <p style={{ color: "white" }}>
          Qui témoigne la qualité de nos services
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={boul}
              isBlog={false}
              title="Nettoyage et de désinfection de la boulangerie LaMiDoRe. "
              description="Cliquez sur le lien ci-dessous pour plus d'information"
              link="https://www.facebook.com/112100200554017/videos/317374969394896/?vh=e"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Savia}
              isBlog={false}
              title="Nettoyage, dépossièrage, et de désinsectisation du centre d'activités pour jeunes filles (centre SAFIA) "
              description="Cliquez sur le lien ci-dessous pour plus d'information"
              link="https://fb.watch/7vTSfDlS0F/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pr1}
              isBlog={false}
              title="Nettoyage et désinsectisation des locaux"
              description="Cliquez sur le lien ci-dessous pour plus d'information"
              link="https://fb.watch/7vU3aIarp1/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
