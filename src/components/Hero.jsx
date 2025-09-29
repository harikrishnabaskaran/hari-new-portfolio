import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0f1117] px-8">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-center gap-12">
        
        {/* Left Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }} // smoother, slower transition
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Hi, I’m <span className="text-blue-500">Your Name</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Full Stack Developer | Building modern & scalable web apps
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg transition">
            View My Work
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 100, opacity: 0, scale: 0.9 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }} // smooth, slightly scaled in
          className="flex-1 flex justify-center"
        >
          <img
            src="../../src/assets/profile.jpeg"   // move image to /public folder
            alt="Profile"
            className="w-72 h-72 rounded-full object-cover shadow-xl border-4 border-gray-800"
          />
        </motion.div>
      </div>
    </section>
  );
}
