
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo2 from "../../Assets/logo2.jpeg";
import logo3 from "../../Assets/values.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillMail,
  AiFillFacebook,
  AiFillPhone
} from "react-icons/ai";
import "./Home2.css";
import { useState } from "react";
import { send } from 'emailjs-com';

function Home2() {

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_jkwruvw',
      'template_ckirgaj',
      toSend,
      'user_Ec4nL2YPPUe0tU8D3sXWJ'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A <span className="purple"> PROPOS </span> DE NOUS
            </h1>
            <p className="home-about-body">
            La société Mauritanienne de nettoyage et de désinfection (SMND), est la première société du genre dans le pays, parce que tous ses employés sont des ressortissants de l'institut supérieure des sciences de la mer (ISSM), spécialisé dans le domaine de nettoyage industriel, désinfection et dératisation. Ils ont également profiter des formations de soft-skills et subit une formation de base militaires. 

Notre entreprise, à débuter ces activités au début de l'année 2020 et à ce jour elle dispose d'un carnet d'adresses assez important des clients satisfaits de la qualité de nos prestations.

Nous avons participé à deux compétitions en entrepreneuriat, mauritania Innovation Challenge (MIC) au niveau national ou nous avons décroché la sixième place avec un prix de 5500 Dollar et au niíveau
international, nous avons gagné le premier prix de 5000 Dollar de Tony Alumeli Foundation (TEF-Connect).

La SMND, est une société de multiservices dans le domaine de nettoyage, désinfection, désinsectisation et de
la propreté intervient aussi bien dans tout le département, pour les particuliers, comme pour les entreprise et collectivités. 
Elle fournit flèrement des prestations efficaces et des services de nettoyage et de désinfection des immobiliers, pharmacie, cabinets, commissariats, boulangerie, banques et autres à Nouakchott, en utilisant des produits de qualité et des désinfectants homologués sanitaires, qui n'affectent ni votre santé, ni la sécurité de vos produits. 

Fort d'une équipe des personnels qualifiés, nous sommes attachés à conserver une clientèle fidèle et satisfaite de nos services d'entretien. Nous nous engageons à travailler de la manière la plus écologique qu'il soit et dans le respect de l'environnement. Les besoins, les fréquences de nettoyage et de désinfection diffèrent d'un client
à l'autre, aussi évaluons ensemble les nécessités en termes de prestations à réaliser. Notre force, c'est la planification de vos prestations de nettoyage, qu'il s'agisse de l'entretien de locaux,
d'immeubles ou de copropriétés, de lavage de parties vitrées, de traitements de sols qui fait partie de nos spécialités ou encore concernant les nettoyages de fin de chantiers. Pour nous, il est important de pouvoir apporter une pleine et entière satisfaction dans les prestations effectuées et le service rendu aux clients.
Le professionnalisme est primordial dans notre secteur d'activité car, ce qui nous caractérise le mieux, et nous permet de rester efficace dans l'ensemble des tâches à accomplir et de former continuellement nos équipes à toutes les pratiques de notre métier.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={logo2} className="img-fluid" style={{borderRadius:10}} alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> VALEURS </span>
            </h1>
            <p className="home-about-body">
            En tant que professionnel du nettoyage, nous realisons nos prestations correspondant totalement a vos attentes,
tout en respectant nos valeurs fondamentales :
<br/>
1- REACTIVITE ET PROXIMITE :
Grace a notre structure, nous intervenons sous 24 heures dans vos locaux.
<br/>
2- PERFORMANCE :
Nous nous engageons a vous proposer du personnel competent, regulierement forme, conforme a vos
exigences.
<br/>
3- ENVIRONNEMENT :
Nous nous engageons a respecter notre charte de developpement durable : engagement economique,
environnemental, social et societal.
<br/>
4- CONFIANCE ET CONTROLE :
Nos relations, que ce soit avec nos clients ou avec nos salaries. sont basees sur la confiance. La confiance
n'excluant pas le controle, notre encadrement s'engage a encadeer et controler regulierement les prestations
dont nous avons la charge.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={logo3} className="img-fluid" style={{borderRadius:10}} alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
        <div className="home-about-social">
       <h1> <strong style={{ color: '#800080'}}> Contact</strong></h1>
          <p>Vous avez une question, une remarque ou une suggestion ?</p>
            <p> N'hésitez pas à nous contacter, nous serons ravis de vous aider.</p>
          <form onSubmit={onSubmit}>
            <input
              type='text'
              name='from_name'
              placeholder='Votre Nom'
              value={toSend.from_name}
              onChange={handleChange}
              className="email"
            />
            <textarea
              type='text'
              name='message'
              placeholder='Votre message'
              value={toSend.message}
              onChange={handleChange}
              className="email"
            />
            <input
              type='text'
              name='reply_to'
              placeholder='Votre email'
              value={toSend.reply_to}
              onChange={handleChange}
              className="email"
            />
            <button type='submit'>Submit</button>
          </form>
            
        </div>
        

        <Row>
          <Col md={12} className="home-about-social">
            <h1>Trouvez nous sur</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://web.facebook.com/pages/category/Product-Service/SMND-112100200554017/?_rdc=1&_rdr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  onClick={() => {navigator.clipboard.writeText("snmd1119@gmail.com")
                                alert("l'adresse mail est bien copié")}}
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://api.whatsapp.com/send?phone=22248723296&app=facebook&entry_point=page_cta"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillPhone />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;