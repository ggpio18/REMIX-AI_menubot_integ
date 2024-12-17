import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import ChatGrid from "~/components/ChatGrid";

export const meta: MetaFunction = () => {
  return [
    { title: "Chatbot Setup" },
    { name: "description", content: "Set up your custom chatbot" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-16">
        <Header />
        <ChatGrid />
      </div>
    </div>
  );
}