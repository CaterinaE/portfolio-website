import React, { useState } from 'react';
import CaterinaPic from './Caterina_Esposito_Pic.jpeg';  // Ensure correct path

// Skill Descriptions
const skillDescriptions = {
  JavaScript: "JavaScript is a versatile, high-level programming language used to create interactive web applications.",
  Java: "Java is a robust, object-oriented programming language widely used for building enterprise-level applications.",
  Python: "Python is a high-level, interpreted language known for its simplicity and versatility.",
  SQL: "SQL is a domain-specific language used to manage and manipulate relational databases.",
  JUnit: "JUnit is a testing framework for Java programming language to write and run repeatable automated tests.",
  "Spring Boot": "Spring Boot is a framework that simplifies the development of Java-based enterprise applications.",
  Git: "Git is a version control system that helps developers track changes and collaborate on code.",
  "REST APIs": "REST APIs enable communication between systems using HTTP methods for web services.",
  Node: "Node.js is a JavaScript runtime that allows developers to build scalable server-side applications.",
  MongoDB: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.",
  Bootstrap: "Bootstrap is a popular front-end framework for building responsive websites and web applications.",
  React: "React is a JavaScript library for building user interfaces, especially for single-page applications.",
  cPanel: "cPanel is a web hosting control panel used for managing hosting servers.",
  Tableau: "Tableau is a powerful data visualization tool used in business intelligence and analytics.",
  Salesforce: "Salesforce is a customer relationship management (CRM) platform with applications for sales, customer service, and marketing.",
  "Affinity Designer": "Affinity Designer is a vector graphics editor for creating precise illustrations and designs.",
  "MS-Office": "Microsoft Office is a suite of productivity software, including Word, Excel, and PowerPoint.",
  "Apache Hadoop": "Apache Hadoop is a framework that enables the distributed processing of large data sets across clusters of computers.",
  Figma: "Figma is a cloud-based design tool for creating user interfaces and collaborative design projects.",
  "Unit Testing": "Unit testing involves testing individual components of a software application to ensure they work as intended.",
  SCRUM: "SCRUM is an Agile project management methodology that focuses on iterative progress through collaboration and feedback."
};

const Home = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill === selectedSkill ? null : skill);  // Toggle the selected skill
  };

  return (
    <section>
      <div id="home">
        <div className="home-row">
        <div className="home-column">
          <img src={CaterinaPic} alt="Caterina Esposito Pic" />
        </div>
        <div className="home-column">
          <h1>Hello, I'm Caterina Esposito</h1> 
        </div>
        </div>
        <p className="intro">Computer Science Enthusiast | Developer | Problem Solver</p>
        <button>Learn More</button>
      </div>

      <section id="skills" className='dot-background'>
        <h2>Skills</h2>

        {/* Languages */}
        <div className='skills-category'>
          <h3>Languages</h3>
          <ul>
            {["JavaScript", "Java", "Python", "SQL"].map(skill => (
              <div key={skill}>
                <li   onClick={() => handleSkillClick(skill)}  >
                  {skill}
                </li>
                {/* Show description under the clicked skill */}
                {selectedSkill === skill && (
                  <p>{skillDescriptions[skill]}</p>
                )}
              </div>
            ))}
          </ul>
        </div>

        {/* Tools & Frameworks */}
        <div className='skills-category'>
          <h3>Tools & Frameworks</h3>
          <ul>
            {["JUnit", "Spring Boot", "Git", "REST APIs", "Node", "MongoDB", "Bootstrap", "React", "cPanel", "Tableau", "Salesforce", "Affinity Designer", "MS-Office", "Apache Hadoop", "Figma"].map(skill => (
              <div key={skill}>
                <li 
                  onClick={() => handleSkillClick(skill)} 
                  style={{ cursor: 'pointer', color: selectedSkill === skill ? 'blue' : 'black' }}>
                  {skill}
                </li>
                {/* Show description under the clicked skill */}
                {selectedSkill === skill && (
                  <p>{skillDescriptions[skill]}</p>
                )}
              </div>
            ))}
          </ul>
        </div>

        {/* Methodologies */}
        <div className='skills-category'>
          <h3>Methodologies</h3>
          <ul>
            {["Unit Testing", "SCRUM"].map(skill => (
              <div key={skill}>
                <li 
                  onClick={() => handleSkillClick(skill)} 
                  style={{ cursor: 'pointer', color: selectedSkill === skill ? 'blue' : 'black' }}>
                  {skill}
                </li>
                {/* Show description under the clicked skill */}
                {selectedSkill === skill && (
                  <p>{skillDescriptions[skill]}</p>
                )}
              </div>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Home;
