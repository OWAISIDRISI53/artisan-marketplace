import { useState, useEffect, useRef } from "react";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false); // State for typing indicator
  const messagesEndRef = useRef(null); // Reference for auto-scrolling

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Show typing indicator
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = {
        text: "We're working on this feature.",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
      setIsTyping(false); // Hide typing indicator
    }, 1000); // Delay of 1 second

    setInput("");
  };

  // Scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-[91vh] bg-gray-100">
      <div className="bg-blue-600 text-white p-4 text-lg font-semibold shadow-md">
        Chat with Us
      </div>
      <div className="flex-grow p-4 overflow-y-auto">
        <div className="flex flex-col space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-xs p-3 rounded-lg text-white ${
                msg.sender === "user"
                  ? "bg-blue-600 self-end"
                  : "bg-green-600 self-start"
              }`}
            >
              <strong>{msg.sender === "user" ? "You" : "Bot"}: </strong>
              <span>{msg.text}</span>
            </div>
          ))}
          {isTyping && ( // Typing indicator
            <div className="max-w-xs p-3 rounded-lg bg-gray-300 self-start text-gray-700">
              <strong>Bot is typing...</strong>
            </div>
          )}
          {/* Reference for auto-scrolling */}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="p-4 bg-white border-t fixed bottom-0 w-full">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a message..."
            className="border rounded-l-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white rounded-r-lg p-2 hover:bg-blue-500 transition duration-200"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
