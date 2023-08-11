import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
