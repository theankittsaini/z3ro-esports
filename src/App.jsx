import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Spline from "@splinetool/react-spline";
import Register from "./Register";
import Contact from "./contact";
import Header from "./Header";
import About from "./About";
import Tournament from "./Tournament";

function App() {
    React.useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/tournament" element={<Tournament />} />
            </Routes>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <img
                className="image-gradient"
                src="/src/assets/gradient.png"
                alt="gradient"
            />
            <div className="layer-blur" />

            <div className="container">
                <main>
                    <div className="content-wrapper">
                        <div className="content">
                            <h1>WELCOME TO THE ESPORTS ARENA</h1>
                            <p className="description">Play With Precision</p>

                            <div className="buttons">
                                <a href="#" className="btn-get-started">
                                    Explore&gt;
                                </a>
                                <a href="/register" className="btn-signing-main">
                                    Register&gt;
                                </a>
                            </div>
                        </div>

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

export default App;
