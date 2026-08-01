import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="home-container">
        <div className="home-content">
          <h1>Internal Department Event Ticket Booking System</h1>

          <p>
            A React JS based web application for students and faculty to view
            event details and book tickets online.
          </p>

          <div className="home-buttons">
            <Link to="/event">View Event</Link>
            <Link to="/booking">Book Ticket</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;