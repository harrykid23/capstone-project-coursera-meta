import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBookingPage from "./pages/ConfirmedBookingPage";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Main>
          {(props) => (
            <Routes>
              <Route path="/" Component={HomePage} />
              <Route
                path="/reservations"
                element={<BookingPage {...props} />}
              />
              <Route
                path="/reservations/confirmed"
                Component={ConfirmedBookingPage}
              />
              <Route path="/about" Component={ComingSoon} />
              <Route path="/menu" Component={ComingSoon} />
              <Route path="/order-online" Component={ComingSoon} />
              <Route path="/login" Component={ComingSoon} />
            </Routes>
          )}
        </Main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
