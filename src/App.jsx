import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
import Home from './components/Home';
import Events from './components/events/Events';
import Movies from './components/movies/Movies';
import Travel from './components/travel/Travel';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import BookingConfirmation from './components/booking/BookingConfirmation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container d-flex flex-column min-vh-100">
        <Navigation />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/booking/confirmation/:id" element={<BookingConfirmation />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;