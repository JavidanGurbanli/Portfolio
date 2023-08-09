import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav/>
      <About/>
    </div>
  );
}

export default App;
