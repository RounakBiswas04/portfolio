import "./index.css";
import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { PaletteMode, createTheme, Container } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import AnimatedSection from "../animations/AnimatedSection";
import Header from "./Header";
import Home from "./Hero";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import WorkEx from "./WorkEx";
import About from "./About";
import Footer from "./Footer";
import ResumeDownloadButton from "./ResumeDownloadButton";
import NavigateHomeButton from "./NavigateHomeButton";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showNavUpBtn, setShowNavUpBtn] = useState(false);
  const darkTheme: PaletteMode = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: darkTheme,
    },
    typography: {
      fontFamily: "monospace",
    },
    breakpoints: {
      values: {
        xs: 400,
        sm: 700,
        md: 960,
        lg: 99999999,
        xl: 99999999,
      },
    },
  });
  const handleChange = () => {
    setDarkMode((prevState) => !prevState);
  };
  const sections = [
    { component: <Home />, id: "home" },
    { component: <About />, id: "about" },
    { component: <Skills />, id: "skills" },
    { component: <Education />, id: "education" },
    { component: <WorkEx />, id: "workex" },
    { component: <Projects />, id: "projects" },
  ];

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) setShowNavUpBtn(false);
    if (!showNavUpBtn && window.scrollY !== 0) setShowNavUpBtn(true);
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header dark={darkMode} handleChange={handleChange} />
        <Container
          disableGutters
          sx={{
            maxWidth: "80%",
            minWidth: "500px",
          }}
        >
          {showNavUpBtn ? <NavigateHomeButton /> : null}
          <ResumeDownloadButton />
          {sections.map((el) => (
            <AnimatedSection key={el.id}>
              <section id={el.id}>{el.component}</section>
            </AnimatedSection>
          ))}
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;

