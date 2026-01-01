import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Indian Railways Website"
              description="In this web application you are able to search Train Between Stations, Seat Availability and Fare Charges, PNR Status and more."
              ghLink=""
              demoLink="https://adityapandit11.github.io/railway_website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Grocery Store"
              description="Grocery & Gourmet Products: Shop for Food Products online at best prices in India. Choose from a wide range of Food Products."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Weather Forecast site"
              description="This Weather Forecast Website provides national and local weather forecast for cities, as well as UV index, wind, AQI and Humidity coverage including Latest news covering entire world."
              ghLink="https://github.com/adityapandit11/Weather_forecast_Website"
              demoLink="https://witty-moss-07ff10300.1.azurestaticapps.net"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Dr. Madicine"
              description="we had combined the OCR, NER, Web Scraping and Spell Checker model to give us a combined software system to recognise name of the medicines and gives us the correct information about the medicine as output."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Food recipie and kitchen gardening"
              description="Our Mobile application provides the right guidelines and also helps a person to understand, how to use kitchen waste as a gardening product. Besides this, our app also provides a vast range of food recipes along with the kitchen gardening methods which they can do with their recipe’s waste."
              ghLink=""
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Detection Of Online Spread of terrism (GUI implimentation)"
              description="With development in technology, internet has become a medium of spreading terrorism through speeches and videos. Terrorist organizations use the medium of the internet to harm and defame individuals and also promote terrorist activities through web pages. The basic idea is to stop or reduce spreading of terrorism is to remove all this accounts. Thus we implement this system for major causes which detects terrorist groups in internet and social media."
              ghLink="https://github.com/adityapandit11/Detection-of-Online-Spread-of-Terrorism"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
