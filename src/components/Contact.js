import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import '@fortawesome/fontawesome-free/css/all.min.css';
const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
   const sendEmail = (e) => {
    e.preventDefault();
    setStatus("");
    setIsSending(true);

    emailjs
      .sendForm(
        "service_kcggq8l",
        "template_z9o72hr",
        formRef.current,
        "P3kIThK6KxmmWZEhu"
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
          setIsSending(false);
        },
        (error) => {
          console.log(error);
          setStatus("error");
          setIsSending(false);
        }
      );
  };

  return (
    <section className="dot-background">
      <h2 className="section-header">Contact Me</h2>

      <section className="about-section">
        <div id="contact">

          <div className="contact-info">
            <p><strong>Phone:</strong> <a href="tel:+16319746041">(631) 974-6041</a></p>
            <p><strong>Email:</strong> <a href="mailto:caterinaesposito702@gmail.com">caterinaesposito702@gmail.com</a></p>
            <p><strong>Location:</strong> Chevy Chase, Maryland</p>
            <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/caterina-esposito" target="_blank" rel="noopener noreferrer">linkedin.com/in/caterina-esposito</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/CaterinaE" target="_blank" rel="noopener noreferrer">github.com/CaterinaE</a></p>
          </div>

          <form className="contact-form" ref={formRef} onSubmit={sendEmail}>

            {/* IMPORTANT: names match your EmailJS template */}
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            />

            <button type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <div className="form-status success">
                <i className="fa-solid fa-circle-check"></i>
                <span>Message sent successfully.</span>
              </div>
            )}

            {status === "error" && (
              <div className="form-status error">
                <i className="fa-solid fa-circle-exclamation"></i>
                <span>We couldn’t send your message. Please try again.</span>
              </div>
            )}


          </form>
        </div>
      </section>
    </section>
  );
};

export default Contact;