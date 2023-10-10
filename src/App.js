import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experiences/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import { useState , useEffect } from "react";
import svg from '../src/img/hi.svg'
import Loading from "./Components/Loading/Loading";
import { Analytics } from '@vercel/analytics/react';

import "./App.css";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#0a192f" : "",
        color: darkMode ? "white" : "",
      }}
    >
      {loading && <Loading />}
      <Analytics />
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
