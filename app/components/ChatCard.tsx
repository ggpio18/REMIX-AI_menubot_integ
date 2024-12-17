import { motion } from "framer-motion";

interface ChatCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

export default function ChatCard({ icon, title, description, delay }: ChatCardProps) {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-2xl bg-gray-800/50 p-6 backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
        <button className="rounded-lg bg-gray-700 px-4 py-1 text-sm">
          Preview
        </button>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </motion.div>
  );
}