import React from "react";
import "./About.css";
import authorImg from "../../assets/author.jpg";

function About() {
  return (
    <section className="about">
      <div className="container about__container">
        <img
          src={authorImg}
          alt="Luis Arturo Segura"
          className="about__photo"
        />
        <div className="about__info">
          <h2 className="about__title">About the author</h2>
          <p className="about__text">
            Hi! I’m Luis Arturo Segura, currently based in Alabama. With a
            master’s degree in mathematics, I teach high school math and also
            coach soccer at my school.
          </p>
          <p className="about__text">
            I’ve always had a love for technology and computer science—even as a
            college freshman, I knew I wanted to build things that matter. My
            passion for web development is fueled by the excitement of seeing
            code come to life and creating great user experiences. I enjoy
            front-end development and turning ideas and designs into
            interactive, beautiful apps.
          </p>
          <p className="about__text">
            Throughout my journey with TripleTen, I strengthened my skills in
            React, Node.js, JavaScript, CSS, HTML, Git, and working with APIs.
            The biggest challenge was balancing time and not sweating the small
            stuff—but I enjoyed every bit of the learning process!
          </p>
          <p className="about__text">
            Outside of coding, you’ll find me coaching soccer, working out,
            running, or enjoying music. Soccer is a big part of my life—I won a
            state championship in 2013, coached at Nashville SC’s academy, and
            this year was an assistant coach for my school’s varsity boys team,
            where we took home another state championship.
          </p>
          <p className="about__text">
            My dream is to work for a sports-related tech company, especially
            one that values creativity, teamwork, and a fun, hybrid or remote
            culture.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
