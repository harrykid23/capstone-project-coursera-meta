import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Main}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
