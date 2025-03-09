"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex justify-center items-center my-7">
      <motion.div
        className="w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
