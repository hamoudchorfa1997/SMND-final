import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import team0 from "../../Assets/team0.jpeg";
import team3 from "../../Assets/tem3.png";
import team4 from "../../Assets/team4.png";
import team5 from "../../Assets/project1.jpeg";
import team6 from "../../Assets/tem2.png";

function Team() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Notre <strong className="purple"> Équipe </strong>
        </h1>
        {/* <p style={{ color: "white" }}>
          Qui témoigne de la qualité de nos services
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={team0}
              isBlog={false}
              
              title="Gérant et fondateur"

              description=" Abdel Ghader Mohamed Abderrahmane, Jeune entrepreneur, lauréat de deux compétitions entrepreneuriales (Mauritania Innovation Challenge et Tony Alumelu Foundation-PNUD). Sortant de l'institut supérieur des sciences de la mer, spécialisée en nettoyage industriels, désinfection et dératisation. Titulaire
              d'un baccalauréat, séries mathématiques, ayant suivie une année de licence en Mathématiques, Physiques et informatiques à la faculté des sciences et technologies. Membre actif du réseau national des associations des
              jeunes (RENAJ) ; chargé de la programmation des activités au niveau du centre SAFIA. Il a effectué des formations en soft-soft skills et une formation militaire pour quarante-cinq jours. Il est chargé de la gestion, commercialisation, partenariats et suivi clientèles de la SMND"
            link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={team3}
              isBlog={false}
              title="Chargé du volet logistique et suivi des travaux avec supervision des équipes."
              description="Lekhal Sidi Abdella, titulaire de deux licences l'une en physiques fondamental et l'autre en mécaniques des fluides et énergie, bachelier en mathématiques et sciences, il a subi une formation d'un an en économie et gestion; en plus, c'est un technicien de surface à corniche palace hôtel, serveur et nettoyeur, membre de l'équipe de nettoyage et de plonge, serveur et caissier avec plus de 5 ans d'expérience dans diverses situations."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={team6}
              isBlog={false}
              title="Assistant multi-tâche & Responsable de communication "
              description="El Hadj Malick El Hassane M'Bodj, titulaire d'une licence en physiques fondamentale, avec un stage d'exploitation de l'Usine, au sein de la direction du chemin de Fer & Port (SNIM). Titulaire d'un baccalauréat mathématique, Il a reçu un ensemble des formations sur la gestion, le développement des projets, la gouvernance et la comptabilité. Il a une expérience importante dans le milieu associatif avec une compétence avérée en gestion et supervision des projets.
              Il est l'assistant-multitâche avec une mission d'appui du DG sur le volet communication et ressources humaines."
              link="#"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={team4}
              isBlog={false}
              title="Responsable administratif et financière"
              description="Sokhna Yahya Diallo. Jeune entrepreneur, Sortante du faculté des sciences juridiques et économique de Nouakchott, spécialisée en économie et techniques de gestion des projets. Titulaire
              d'un baccalauréat scientifique, ayant suivie des formations sur les droits de l’homme et montage des projets. Elle a effectué des formations en soft-skills avec l’association YALI des alumni de Mauritanie. Réceptionniste, caissière et assistante administratif à CBP (Cap Blanc Pélagique)."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={team5}
              isBlog={false}
              title="Agents de la SMND"
              description="Les agents de SMND, ont subi une formation professionnelle dans le domaine de nettoyage industrielle, désinfection et dératisation, ensuite ils ont profité d'une formation militaire de quarante-cinq jours, en fin une formation sur le développement personnel, leadership, prosociale et pensé critique créative. Ces agents de l'équipe de nettoyage travailleront à l'exécution du plan de prestation des services de nettoyage de qualité définis par la Direction Générale de l'entreprise selon les cahiers de charges."
              link="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Team;
