import React from 'react';

const Contact = () => {
  return (
    <section className="dot-background">
      <h2 className="section-header">Contact Me</h2>

      <section className="about-section">
        <div id="contact">

          <div className="contact-info">
            <p><strong>Phone:</strong> <a href="tel:+16319746041">(631) 974-6041</a></p>
            <p><strong>Email:</strong> <a href="mailto:caterinaesposito702@gmail.com">caterinaesposito702@gmail.com</a></p>
            <p><strong>Location:</strong> Chevy Chase, Maryland</p>
            <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/caterina-esposito/" target="_blank" rel="noopener noreferrer">linkedin.com/in/caterina-esposito/</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/CaterinaE" target="_blank" rel="noopener noreferrer">github.com/CaterinaE</a></p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>

        </div>
      </section>
    </section>
  );
};

export default Contact;