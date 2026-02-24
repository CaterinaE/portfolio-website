import React from "react";

const About = () => {
  return (
    <section className="dot-background">
      <h2 className="section-header">About Me</h2>

      <div className="about-section">
        <div className="about-card">
          <p className="about-lead">
            I’m a Computer Science graduate from the
            University of St Andrews with a background in business from American University’s Kogod School of Business. 
            I build clean, scalable web applications and integrate AI-powered features into modern web platforms. </p>
        </div>

        <h3 className="about-subtitle">Technical Skills</h3>

        <div className="about-card">
          <ul className="skills-list">
            <li>
              <strong>Languages:</strong> Java, JavaScript, Python, SQL
            </li>
            <li>
              <strong>Frontend:</strong> React, Bootstrap
            </li>
            <li>
              <strong>Backend:</strong> Node.js, REST APIs
            </li>
            <li>
              <strong>AI & Automation:</strong> OpenAI API Integration, LLM-based Feature Development, Prompt Engineering
            </li>
            <li>
              <strong>Tools:</strong> Git, Spring Boot, JUnit, Tableau, Salesforce
            </li>
            <li>
              <strong>Deployment:</strong> cPanel, FileZilla
            </li>
          </ul>
        </div>

        <div className="about-card">
          <p className="about-note">
            I translate business requirements into clear technical solutions,
            collaborate closely with stakeholders, and deliver polished, user-focused applications. I’m particularly interested in building intelligent, scalable systems that combine strong engineering foundations with modern AI capabilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;