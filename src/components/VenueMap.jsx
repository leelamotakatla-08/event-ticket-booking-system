function VenueMap() {
  return (
    <div className="map-section">
      <h2>Venue Location Map</h2>

      <iframe
        title="Venue Map"
        src="https://www.google.com/maps?q=Vel%20Tech%20University%20Chennai&output=embed"
        width="100%"
        height="300"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default VenueMap;