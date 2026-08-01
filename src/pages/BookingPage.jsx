import Navbar from "../components/Navbar";
import BookingForm from "../components/BookingForm";

function BookingPage({ event, onBooking }) {
  return (
    <>
      <Navbar />

      <div className="page-center">
        <BookingForm event={event} onBooking={onBooking} />
      </div>
    </>
  );
}

export default BookingPage; 