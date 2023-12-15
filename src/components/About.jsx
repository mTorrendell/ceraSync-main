import React, { useState } from "react";
import "./styles/About.css";
import { Link } from "react-router-dom";
import Modal from "./menu/Modal";
import HeaderHome from "../components/common/HeaderHome.jsx";

function About() {
  return (
    <div>
      <HeaderHome />
      <img
        className="about_background"
        src={process.env.PUBLIC_URL + "/potterypic.jpg"}
        alt="aboutImage"
      />
      <div className="initial-container">
        <hr className="lin" />
        <h2 className="short center mt-5 mb-5">About us</h2>
        <hr className="lin" />
        <Modal />
      </div>
      <div className="meet-team">
        <h2 className="center meet2 mt-5 mb-5">Meet our team</h2>
        <div className="row justify-content-center">
          <div className="profile col-md-4">
            <div className="profileImgContainer">
              <a
                href="https://www.linkedin.com/in/nikita-vladimirov-9b30b0252/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="profileimg"
                  src={require("./img/nikita.jpeg")}
                  alt="profile"
                />
              </a>
            </div>
            <h5>Nikita Vladimirov</h5>
          </div>
          <div className="profile col-md-4">
            <div className="profileImgContainer">
              <a
                href="https://www.linkedin.com/in/tatenda-mudavanhu-85b09a1b1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="profileimg"
                  src={require("./img/tatenda.jpeg")}
                  alt="profile"
                />
              </a>
            </div>
            <h5>Tatenda Mudavanhu</h5>
          </div>
          <div className="profile col-md-4">
            <div className="profileImgContainer">
              <a
                href="https://www.linkedin.com/in/lilly-maria-wallawitsch-733893245/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="profileimg"
                  src={require("./img/lilly.jpeg")}
                  alt="profile"
                />
              </a>
            </div>
            <h5>Lilly Wallawitsch</h5>
          </div>

          <div className="profile col-md-4 justify-content-center">
            <div className="profileImgContainer">
              <a
                href="https://www.linkedin.com/in/ava-hurst-86b459250/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="profileimg"
                  src={require("./img/ava.jpeg")}
                  alt="profile"
                />
              </a>
            </div>
            <h5>Ava Hurst</h5>
          </div>
          <div className="profile col-md-4">
            <div className="profileImgContainer">
              <a
                href="https://www.linkedin.com/in/mercedes-torrendell-748826236/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="profileimg"
                  src={require("./img/mercedes.jpg")}
                  alt="profile"
                />
              </a>
            </div>
            <h5>Mercedes Torrendell</h5>
          </div>
        </div>
      </div>
      <div className="info">
        <p className="paragraph">
          As the CeraSync team, our passion lies in power of human connection
          and the timeless artistry of ceramics. <br /> <br />
          Coming from Berlin's CODE University of Applied Sciences, we, a group
          of five students, delved into the world of ceramics, creating
          CeraSync. <br /> This Ceramic Event Platform was born from our
          exploration of the beautiful and diverse ceramics community, with the
          intent of providing a space for all individuals to come together,
          fostering connections and discovering like- mided spirits. <br />{" "}
          <br /> The contact to the soil of ceramics has not only therapeutic
          effect, the shared journey of creation and artistic expression, in our
          view, creates the most beautiful form of connection. <br /> <br /> We
          invite you to use our platform to not only share your knowledge but
          also to participate in the crafting of beautiful gatherings. Let's
          celebrate the art of ceramics, build meaningful connections, and
          invent shared experiences, all grounded in the down-to-earth beauty of
          this ancient tradition of ceramics.
        </p>
      </div>
    </div>
  );
}

export default About;
