import Navbar from "../components/Navbar";
import EventDetails from "../components/EventDetails";

function EventPage({ event }) {
  return (
    <>
      <Navbar />

      <div className="page-center">
        <EventDetails event={event} />
      </div>
    </>
  );
}

export default EventPage;