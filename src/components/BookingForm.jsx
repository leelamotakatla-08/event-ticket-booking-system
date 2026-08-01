import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm({ event, onBooking }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    tickets: "",
  });

  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [otpGenerated, setOtpGenerated] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const tickets = Number(formData.tickets);

    if (!formData.name || !formData.email || !formData.department || !formData.tickets) {
      setError("All fields are mandatory.");
      return false;
    }

    if (!validateEmail(formData.email)) {
      setError("Enter a valid email.");
      return false;
    }

    if (tickets <= 0) {
      setError("Tickets must be positive.");
      return false;
    }

    if (tickets > event.availableTickets) {
      setError("Not enough tickets available.");
      return false;
    }

    setError("");
    return true;
  };

  const generateOtp = () => {
    if (!validateForm()) return;

    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setOtp(newOtp);
    setOtpGenerated(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!otpGenerated) {
      setError("Generate OTP first.");
      return;
    }

    if (enteredOtp !== otp) {
      setError("Invalid OTP.");
      return;
    }

    onBooking({
      name: formData.name,
      email: formData.email,
      department: formData.department,
      tickets: Number(formData.tickets),
    });

    navigate("/confirmation");

    setFormData({
      name: "",
      email: "",
      department: "",
      tickets: "",
    });

    setOtp("");
    setEnteredOtp("");
    setOtpGenerated(false);
  };

  return (
    <div className="card">
      <h2>Book Tickets</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input name="department" placeholder="Department" value={formData.department} onChange={handleChange} />
        <input name="tickets" type="number" placeholder="Tickets" value={formData.tickets} onChange={handleChange} />

        <button type="button" onClick={generateOtp}>Generate OTP</button>

        {otpGenerated && (
          <>
            <p>OTP: {otp}</p>
            <input placeholder="Enter OTP" value={enteredOtp} onChange={(e) => setEnteredOtp(e.target.value)} />
          </>
        )}

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;