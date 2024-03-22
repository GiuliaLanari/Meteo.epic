import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        {/* <Routes>
          <Route>
            
          </Route>
        </Routes> */}
        <HomePage />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
