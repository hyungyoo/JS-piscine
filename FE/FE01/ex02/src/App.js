import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import { Nav } from "react-bootstrap";
import Header from "./components/Header";

function App() {
  return (
    <div>
       <Header />
       <Nav />

    </div>
    // <Router>
      // <Routes>
        // <Route exact path="/" element={<Home />} />
      // </Routes>
    // </Router>
  );
}

export default App;
