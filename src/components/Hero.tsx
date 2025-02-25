import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  TestTube2,
  Cog,
  ChevronDown,
} from "lucide-react";

export default function Hero() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 -z-5">
        <motion.div
          animate={{
            y: [-10, 10],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4"
        >
          <Code2 className="w-8 h-8 text-primary/20" />
        </motion.div>
        <motion.div
          animate={{
            y: [10, -10],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute top-1/3 left-1/4"
        >
          <TestTube2 className="w-8 h-8 text-secondary/20" />
        </motion.div>
        <motion.div
          animate={{
            y: [-15, 15],
            rotate: 360,
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="absolute bottom-1/3 right-1/3"
        >
          <Cog className="w-8 h-8 text-primary/20" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
              Hi, I'm{" "}
              <span className="text-primary">
                <TypeAnimation
                  sequence={[
                    "Yashodip Jadhav",
                    2000,
                    "a Developer",
                    2000,
                    "an Automation Tester",
                    2000,
                    "a QA Engineer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              "Turning Ideas into Innovation through code and creativity"
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              "Dynamic Automation Engineer with expertise in Selenium, JMeter,
              Virtuoso, Regression Testing, and CI/CD pipelines. Passionate
              about creating efficient, scalable automation solutions that
              enhance the performance and quality of Enterprise Applications"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center space-y-6"
          >
            <div className="flex justify-center space-x-6">
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/Meyashjadhav"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#24292e] hover:bg-[#2b3137] text-white transition-colors z-10"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/yashodipjadhav"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#0077b5] hover:bg-[#006396] text-white transition-colors z-10"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:yashodip.yj@gmail.com"
                className="p-3 rounded-full bg-[#ea4335] hover:bg-[#d33426] text-white transition-colors z-10"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>

            <motion.button
              whileHover={{ y: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToNextSection}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors animate-bounce"
            >
              <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
