import React from 'react';
 
const Contact = () => {
  return (
         <section className='dot-background'>
 
         <h2 id="about-header">Contact Me</h2>



         <div  className='about-section'>

<section id="contact">
<h2>Contact Me</h2>

      <p><strong>Phone:</strong> <a href="tel:+16319746041">(631) 974-6041</a></p>
      <p><strong>Email:</strong> <a href="mailto:caterinaesposito702@gmail.com">caterinaesposito702@gmail.com</a></p>
      <p><strong>Location:</strong> Chevy Chase, Maryland</p>
      <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/caterina-esposito/" target="_blank" rel="noopener noreferrer">linkedin.com/in/caterina-esposito/</a></p>
      <p><strong>GitHub:</strong> <a href="https://github.com/CaterinaE" target="_blank" rel="noopener noreferrer">github.com/CaterinaE</a></p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea rows="5" placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
      
      </section>
      </div>
    </section>
  );
};

export default Contact;
