import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Login from "./pages/Login";
import Home from "./pages/Home";
import EventPage from "./pages/EventPage";
import BookingPage from "./pages/BookingPage";
import Confirmation from "./pages/Confirmation";
import MapPage from "./pages/MapPage";
import ChatPage from "./pages/ChatPage";

function App() {
  const [event, setEvent] = useState({
    eventName: "TechSpark 2026",
    departmentName: "Department of Computer Science and Engineering",
    dateTime: "15 May 2026, 10:00 AM",
    venue: "Convocation Hall, Vel Tech University",
    ticketPrice: 100,
    availableTickets: 50,
  });

  const [bookingSummary, setBookingSummary] = useState(null);

  const handleBooking = (bookingData) => {
    const bookingId = Date.now(); // ✅ ADDED (unique ID)

    setEvent({
      ...event,
      availableTickets: event.availableTickets - bookingData.tickets,
    });

    const summary = {
      id: bookingId, // ✅ ADDED
      name: bookingData.name,
      email: bookingData.email,
      department: bookingData.department,
      eventName: event.eventName,
      ticketsBooked: bookingData.tickets,
      totalAmount: bookingData.tickets * event.ticketPrice,
    };

    setBookingSummary(summary);

    // ✅ ADDED (store for QR scanning)
    localStorage.setItem(`booking_${bookingId}`, JSON.stringify(summary));
  };

  return (
    <div className="app-container"> {/* 👈 KEPT SAME */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/event" element={<EventPage event={event} />} />
          <Route
            path="/booking"
            element={<BookingPage event={event} onBooking={handleBooking} />}
          />
          <Route
            path="/confirmation"
            element={<Confirmation bookingSummary={bookingSummary} />}
          />
          <Route path="/map" element={<MapPage />} />
          <Route path="/chatbot" element={<ChatPage event={event} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;