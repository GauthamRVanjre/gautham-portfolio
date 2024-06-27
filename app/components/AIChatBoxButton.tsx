import React, { useState } from "react";
import AIChatBox from "./AIChatBox";
import { Button } from "@/components/ui/button";

const AIChatBoxButton = () => {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setChatBoxOpen(true)}>Chat Button</Button>
      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
};

export default AIChatBoxButton;
