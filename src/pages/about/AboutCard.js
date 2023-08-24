import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ajay Rawat </span>
            from <span className="purple"> Uttrakhand, India.</span>
            <br /> I have done B.Sc Computer Science from Himalayan University.
            <br />
            Additionally,  I am Self-taught Frontend
            engineer with a passion for creating user-friendly and visually
            appealing websites.
            <br />
            <br />
            Some of my hobbies are
          </p>
          <ul>
            <li className="about-activity ">
              <ImPointRight /> Playing online Games
            </li>
            <li className="about-activity">
              <ImPointRight />
              Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
