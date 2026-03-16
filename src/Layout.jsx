import React from "react";
import Spline from "@splinetool/react-spline";

function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <img className="image-gradient" src="/src/assets/gradient.png" alt="gradient" />
      <div className="layer-blur"></div>
      <div className="container">
        <main>
          <div className="content-wrapper">
            <div className="content">{children}</div>
            <Spline
              className="robot-3d"
              scene="https://prod.spline.design/9TLfqRX91iuVprKS/scene.splinecode"
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;