import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div 
      className="mb-12 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        className="mb-4 text-4xl font-bold md:text-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Set up your chatbot
      </motion.h1>
      <motion.p 
        className="mb-8 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Train your chatbot with data, use our ready-to-use templates or start from scratch.
      </motion.p>
    </motion.div>
  );
}