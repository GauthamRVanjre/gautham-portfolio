import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";

interface AIChatBoxProps {
  open: boolean;
  onClose: () => void;
}

const AIChatBox: React.FC<AIChatBoxProps> = ({ onClose, open }) => {
  const [input, setInput] = useState("");
  const [messages, setMessage] = useState<{ role: string; text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const getModelResponse = async () => {
    setLoading(true);
    const response = await fetch("/api/aiChatBot", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });
    const data = await response.json();

    setMessage([
      ...messages,
      { role: "user", text: input },
      { role: "model", text: data },
    ]);
    setInput("");
    setLoading(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // adding input text to messages state
    setMessage([...messages, { role: "user", text: input }]);

    await getModelResponse();
  };

  return (
    <div
      className={`md:bottom-0 bottom-12 right-0 z-10 w-full max-w-[500px] ${
        open ? "fixed" : "hidden"
      }`}
    >
      <button onClick={onClose} className="mb-1 mx-auto block mr-4">
        <IoIosCloseCircle size={30} />
      </button>

      <div className="flex h-[600px] p-4 flex-col rounded bg-background border shadow-xl">
        <div className="h-full overflow-y-scroll">
          {messages &&
            messages.map((message, index) => (
              <div className="chat-container" key={index}>
                {message.role === "user" ? (
                  <p className="user-message">{message.text}</p>
                ) : (
                  <p className="model-message">{message.text}</p>
                )}
              </div>
            ))}
          {loading && (
            <div>
              <FiLoader />
            </div>
          )}
        </div>
        {/* onSubmit={handleSubmit} */}
        <form onSubmit={handleSubmit} className="m-3 flex gap-1">
          <Input
            value={input}
            disabled={loading}
            onChange={(e) => setInput(e.target.value)}
            placeholder="ask something"
            className="w-[350px]"
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
};

export default AIChatBox;
