import Navbar from "../components/Navbar";
import ChatBot from "../components/ChatBot";

function ChatPage({ event }) {
  return (
    <>
      <Navbar />
      <ChatBot event={event} />
    </>
  );
}

export default ChatPage;