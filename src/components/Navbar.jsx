import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Event Booking</h2>

      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/event">Event</Link>
        <Link to="/booking">Book</Link>
        <Link to="/map">Map</Link>
        <Link to="/chatbot">Chatbot</Link>
        <Link to="/">Logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;