import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

interface AIChatBoxProps {
  open: boolean;
  onClose: () => void;
}

const AIChatBox: React.FC<AIChatBoxProps> = ({ onClose, open }) => {
  const [input, setInput] = useState("");
  return (
    <div
      className={`md:bottom-0 bottom-12 right-0 z-10 w-full max-w-[400px] ${
        open ? "fixed" : "hidden"
      }`}
    >
      <button onClick={onClose} className="mb-1 mx-auto block mr-20">
        <IoIosCloseCircle size={30} />
      </button>

      <div className="flex h-[600px] p-4 flex-col rounded bg-background border shadow-xl">
        <div className="h-full">Messages</div>
        {/* onSubmit={handleSubmit} */}
        <form action="" className="m-3 flex gap-1">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="ask something"
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
};

export default AIChatBox;
