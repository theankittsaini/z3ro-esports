import React from "react";


function Contact() {
  return (
    <div>
      <img className="image-gradient" src="/src/assets/gradient.png" alt="gradient" />
      <div className="layer-blur"></div>
      <div className="contact-container">
        <h1>We’d love to hear from you</h1>
        <p>
          Whether you’re curious about features, a demo, or even press — we’re ready to answer any and all questions.
        </p>
        <button className="contact-demo-btn">Chat with Ai Assistant</button>
        <div className="contact-cards">
          <div className="contact-card">
            <h3>Discord</h3>
            <p>
              Join Us on Discord
            </p>
            <button className="contact-btn">Let's Chat</button>
          </div>
          <div className="contact-card">
            <h3>Instagram</h3>
            <p>
              Follow Us for Updates
            </p>
            <button className="contact-btn">Get Support</button>
          </div>
          <div className="contact-card">
            <h3>Youtube</h3>
            <p>
              Highlights, Streams, & More
            </p>
            <button className="contact-btn">Get In Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;