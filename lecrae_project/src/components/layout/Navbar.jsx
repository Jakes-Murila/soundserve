import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md text-white z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold tracking-widest">
          LECRAE CLONE
        </h1>

        <ul className="flex gap-6 text-sm">
          <li>Home</li>
          <li>Music</li>
          <li>Tour</li>
          <li>Store</li>
        </ul>
      </div>
    </motion.nav>
  );
}