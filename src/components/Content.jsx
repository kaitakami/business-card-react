import React from "react";
import profilePhoto from "../assets/profile.png";

const Content = () => {
  return (
    <>
      <header className="header">
        <img src={profilePhoto} alt="profile photo" className="header-image" />
        <h1 className="header-title">Kai Takami</h1>
        <p className="header-position">Full Stack Developer</p>
        <p className="header-website"><a href="https://kaitakami.com">kaitakami.com</a></p>
        <div className="header-buttons">
          <a className="header-button email-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="button-svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>{" "}
            <p>Email</p>
          </a>

          <a className="header-button linkedin-button" href="https://www.linkedin.com/in/kaitakami/">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="button-svg"
              fill="blue"
            >
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>{" "}
            <p>LinkedIn</p>
          </a>
        </div>
      </header>
      <main>
        <h2 className="main-subtitle">About</h2>
        <p className="main-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
          maiores eaque voluptates. Aperiam, id hic corporis quasi suscipit
          numquam sed veniam consequatur! Quo voluptates voluptatem fugiat vel
          fugit at odio?
        </p>
        <h2 className="main-subtitle">Interests</h2>
        <p className="main-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
          maiores eaque voluptates. Aperiam, id hic corporis quasi suscipit
          numquam sed veniam consequatur! Quo voluptates{" "}
        </p>
      </main>
    </>
  );
};

export default Content;
