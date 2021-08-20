import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./AboutCard";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import tem1 from "../../Assets/tem1.png";
import tem2 from "../../Assets/p1.png";
import tem3 from "../../Assets/p2.png";

function About() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Des Clients <strong className="purple">Satisfaits </strong>
        </h1>
        <p style={{ color: "white" }}>
          Témoignages de nos clients
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <AboutCard
              imgPath={tem1}
              isBlog={false}
              title="Jeyid Yacoub El Moubarrack"
              description="SMND est une entreprise jeune dirigée par un jeune motivé et marqué par sa gentillesse inédite. Le groupe de travail est aussi aimable que possible. Ils sont très professionnels et leur travail est trop apprécié et marqué par la qualité qui se voit clairement par la brillante du lieu après leur intervention. Nous leur souhaitons beaucoup de succès dans l’avenir."
              link="https://github.com/soumyajit4419/Chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <AboutCard
              imgPath={tem2}
              isBlog={false}
              title="Khadjetou El Atigh"
              description="Je suis ravi et content de voir une société local et des fils du pays nous rendre une telle service de Nettoyage et désinfection si professionnel et d’une qualité de travail si apprécié . Je recommande solennellement à tous les entreprises ,société et villas cette bijou si rare la SMND ( société Mauritanienne de nettoyage et de Désinfection) . Si vous un travail bien fait , et une nettoyage propre sans commentaire n’exister pas à appeler ces jeunes professionnels."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <AboutCard
              imgPath={tem3}
              isBlog={false}
              title="Moulay Zein Beuwe"
              description="Nous sommes très satisfaits du travail effectué par la SMND, La qualité des prestations est toujours constante.C'est une entreprise de confiance, Personnel ponctuel, Tout se passe très bien , c'est propre quand on vient, rien à dire. Je recommande sans problème."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
