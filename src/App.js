import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/reservations" Component={BookingPage} />
          </Routes>
        </Main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
