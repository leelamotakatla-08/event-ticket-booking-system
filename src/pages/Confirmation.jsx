import Navbar from "../components/Navbar";
import TicketQR from "../components/TicketQR";

function Confirmation({ bookingSummary }) {
  return (
    <>
      <Navbar />

      <div className="page-center">
        {!bookingSummary ? (
          <div className="summary">
            <h2>No Booking Found</h2>
            <p>Please book a ticket first.</p>
          </div>
        ) : (
          <div className="summary">
            <h2>Booking Successful</h2>

            <p><b>Name:</b> {bookingSummary.name}</p>
            <p><b>Email:</b> {bookingSummary.email}</p>
            <p><b>Department:</b> {bookingSummary.department}</p>
            <p><b>Event:</b> {bookingSummary.eventName}</p>
            <p><b>Tickets:</b> {bookingSummary.ticketsBooked}</p>
            <p><b>Total:</b> ₹{bookingSummary.totalAmount}</p>

            <TicketQR bookingSummary={bookingSummary} />
          </div>
        )}
      </div>
    </>
  );
}

export default Confirmation;