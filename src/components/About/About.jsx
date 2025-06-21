import React from "react";
import "./About.css";
import authorImg from "../../assets/author.jpg"; // Change to your image path

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
          <div className="about__links">
            <a
              href="https://github.com/YOUR_GITHUB"
              className="about__icon-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              {/* Replace with your GitHub SVG or icon */}
              <svg
                height="24"
                width="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.746.082-.73.082-.73 1.205.084 1.84 1.237 1.84 1.237 1.072 1.836 2.813 1.306 3.504.998.107-.776.418-1.306.762-1.606-2.665-.3-5.467-1.333-5.467-5.932 0-1.31.469-2.382 1.236-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.984-.399 3.003-.404 1.019.005 2.043.137 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.629-5.479 5.926.429.37.823 1.102.823 2.222v3.293c0 .32.19.694.8.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              className="about__icon-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              {/* Replace with your LinkedIn SVG or icon */}
              <svg
                height="24"
                width="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.87 20.5h-2.13v-8.5h2.13v8.5zm-1.07-9.74c-.68 0-1.23-.55-1.23-1.23 0-.68.55-1.23 1.23-1.23s1.23.55 1.23 1.23c0 .68-.55 1.23-1.23 1.23zm16.07 9.74h-2.13v-4.29c0-1.02-.02-2.34-1.42-2.34-1.42 0-1.64 1.11-1.64 2.27v4.36h-2.13v-8.5h2.04v1.16h.03c.28-.53.97-1.09 2-1.09 2.14 0 2.54 1.41 2.54 3.25v5.18z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
