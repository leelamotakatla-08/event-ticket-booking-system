import { useState } from "react";

function ChatBot({ event }) {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I am EventBot. Ask me about ticket price, venue, time, or tickets." },
  ]);

  const [input, setInput] = useState("");

  const getBotReply = (question) => {
    const q = question.toLowerCase();

    if (q.includes("price")) {
      return `Ticket price is ₹${event.ticketPrice}.`;
    }

    if (q.includes("venue") || q.includes("location")) {
      return `The event venue is ${event.venue}.`;
    }

    if (q.includes("time") || q.includes("date")) {
      return `The event is scheduled on ${event.dateTime}.`;
    }

    if (q.includes("ticket")) {
      return `Currently ${event.availableTickets} tickets are available.`;
    }

    if (q.includes("department")) {
      return `This event is organized by ${event.departmentName}.`;
    }

    return "Sorry, I can answer only about event price, venue, date, department, and tickets.";
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    const botMessage = { sender: "bot", text: getBotReply(input) };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="chatbot">
      <h2>Event Chatbot</h2>

      <div className="chat-window">
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender === "user" ? "user-msg" : "bot-msg"}>
            {msg.text}
          </p>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask about event..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default ChatBot;