import React from "react";

const tournaments = [
  {
    title: "VelaTournament",
    date: "Jul 12, 2025",
    teams: 8,
    status: "Registration open",
    img: "/src/assets/valorant-banner.jpg",
    logo: "/src/assets/vela-logo.png",
  }
];

function Tournament() {
  return (
    <div className="tournament-bg">
      <div className="tournament-header">
        <img src="/src/assets/valorant-banner.jpg" alt="Valorant Banner" className="tournament-banner" />
        <div className="tournament-header-content">
          <img src="/src/assets/valorant-logo.png" alt="Valorant Logo" className="tournament-game-logo" />
          <h1>VALORANT</h1>
        </div>
      </div>
      <div className="tournament-tabs">
        <button className="tab active">Overview</button>
        <button className="tab">Tournaments</button>
      </div>
      <div className="tournament-main">
        <div className="tournament-main-header">
          <h2>Open tournaments</h2>
          <button className="view-all-btn">View all</button>
        </div>
        <div className="tournament-grid">
          {tournaments.map((t, i) => (
            <div className="tournament-card" key={i}>
              <img src={t.img} alt="Tournament Banner" className="tournament-card-banner" />
              <div className="tournament-card-info">
                <img src={t.logo} alt="Logo" className="tournament-card-logo" />
                <div>
                  <div className="tournament-card-title">{t.title}</div>
                  <div className="tournament-card-date">{t.date}</div>
                  <div className="tournament-card-status">{t.status}</div>
                  <div className="tournament-card-teams">{t.teams} Teams</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tournament;