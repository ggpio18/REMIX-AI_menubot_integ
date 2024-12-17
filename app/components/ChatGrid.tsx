import ChatCard from "./ChatCard";
import { chatbotTypes } from "~/data/chatbotTypes";

export default function ChatGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {chatbotTypes.map((bot, index) => (
        <ChatCard
          key={bot.title}
          {...bot}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}