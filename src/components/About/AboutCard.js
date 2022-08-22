import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aditya Pandit </span>
            from <span className="purple"> Bhopal, Madhya Pradesh, India.</span>
            <br />I am pursuing my graduation in Computer Science and Engineering From Vellore Institute of Technology, Bhopal
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Let us sacrifice our today so that our children can have a better tomorrow !"{" "}
          </p>
          <footer className="blockquote-footer">APJ Abdul Kalam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
