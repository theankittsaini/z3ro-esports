import React from "react";

function About() {
  return (
    <div>
      <img className="image-gradient" src="/src/assets/gradient.png" alt="gradient" />
      <div className="layer-blur"></div>
      <div className="about-container">
        
        <h3 className="about-section-title">🕹️ Z3RO Esports 🕹️</h3>
        <p className="about-desc">
          Welcome to Z3RO Esports – Where Gamers Become Legends
        </p>
        <p className="about-desc">
          Z3RO Esports is more than just a gaming community — it’s a hub for competitive spirit, skill growth, and unforgettable moments. We bring together passionate players, streamers, and fans from across the globe to compete, connect, and thrive in the world of esports.
        </p>
        <h3 className="about-section-title">🕹️ Valorant Tournaments🕹️</h3>
        <p className="about-desc">
          Get ready for heart-pounding action as we host regular Valorant tournaments featuring some of the best upcoming talent. Whether you’re a seasoned fragger or a rising star, Z3RO Esports offers fair, intense, and professional-grade tournaments with real prizes and live streams.
        </p>
        <h3 className="about-section-title">🔥 Why Join Z3RO Esports?</h3>
        <ul className="about-list">
          <li>• Weekly and monthly Valorant tournaments</li>
          <li>• Active and supportive gaming community</li>
          <li>• Professional hosting, fair play, and anti-cheat measures</li>
          <li>• Community events, giveaways, and shoutouts</li>
          <li>• Opportunities to grow as a player, team, or streamer</li>
        </ul>
        <p className="about-desc">
          Join the grind, show your skills, and rise through the ranks with Z3RO Esports — where zero limits mean infinite possibilities.<br />
          <span style={{ color: "#aaa" }}>get in touch.</span>
        </p>
      </div>
    </div>
  );
}

export default About;