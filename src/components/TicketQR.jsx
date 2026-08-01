function TicketQR({ bookingSummary }) {
  const ticketData = `Name: ${bookingSummary.name}, Event: ${bookingSummary.eventName}, Tickets: ${bookingSummary.ticketsBooked}, Amount: ${bookingSummary.totalAmount}`;

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(ticketData)}`;

  return (
    <div className="qr-box">
      <h3>Digital Ticket QR Code</h3>
      <img src={qrUrl} alt="Ticket QR Code" />
    </div>
  );
}

export default TicketQR;