import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hi Everyone, I am <span className="purple">Luu Ngoc Hoan </span>
            from <span className="purple"> Ha Noi, Viet Nam.</span>
            <br />
            I completed Information Technology Engineering at the Academy of
            Cryptogaphy Techniques.
            <br />
            I am currently employed as a front-end developer at VNDIRECT.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Financial Trading
            </li>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don’t compare yourself with anyone in this world. If you do so, you
            are insulting yourself."{" "}
          </p>
          <footer className="blockquote-footer">Bill Gates</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
