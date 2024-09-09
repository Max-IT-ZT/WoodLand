// App.jsx
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <HeroSection />
      <Projects />
      <ContactForm />
      <Footer />
    </Router>
  );
};

export default App;
