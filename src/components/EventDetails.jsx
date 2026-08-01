function EventDetails({ event }) {
  return (
    <div className="card">
      <h2>Event Details</h2>

      <p><b>Event Name:</b> {event.eventName}</p>
      <p><b>Department:</b> {event.departmentName}</p>
      <p><b>Date & Time:</b> {event.dateTime}</p>
      <p><b>Venue:</b> {event.venue}</p>
      <p><b>Ticket Price:</b> ₹{event.ticketPrice}</p>
      <p><b>Available Tickets:</b> {event.availableTickets}</p>
    </div>
  );
}

export default EventDetails;