import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Briefcase,
  Code,
  TestTube,
  Bot,
  Coffee,
  Cpu,
  GitBranch,
  Server,
  Gauge,
  Rocket,
  Webhook,
  Cloud,
} from "lucide-react";

export default function About() {
  const skills = [
    {
      category: "Automation",
      items: [
        { name: "Selenium", icon: TestTube },
        { name: "Virtuoso", icon: Bot },
        { name: "Java", icon: Coffee },
        { name: "Cucumber", icon: Cpu },
        { name: "Regression Testing", icon: Bot },
      ],
    },
    {
      category: "Performance Testing",
      items: [
        { name: "JMeter", icon: Gauge },
        { name: "BlazeMeter", icon: Rocket },
        { name: "Load Testing", icon: Server },
        { name: "Stress Testing", icon: Server },
      ],
    },
    {
      category: "Tools & CI/CD",
      items: [
        { name: "Jenkins", icon: Webhook },
        { name: "Git/GitHub", icon: GitBranch },
        { name: "API Testing", icon: Server },
        { name: "Postman", icon: Webhook },
        { name: "AWS", icon: Cloud },
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <BookOpen className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Education
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bachelor's in Computer Engineering
                  <br />
                  Savitribai Phule Pune University (SPPU)
                  <br />
                  2024 Graduate with A+ Grade (First Class Distinction)
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Briefcase className="w-12 h-12 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      CentraLogic (2025 - Present)
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Automation Software Engineer
                      <br />
                      Developing and maintaining robust test automation
                      frameworks using Selenium and JMeter. Implementing CI/CD
                      pipelines and improving test coverage.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Winjit (2024)
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Android Developer Apprentice
                      <br />
                      6-month training in Java, Android Studio, and XML
                      development. Gained hands-on experience in mobile app
                      development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <Code className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Technical Skills
                </h3>
                <div className="space-y-4 mt-4">
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {skillGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => {
                          const Icon = skill.icon;
                          return (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm flex items-center gap-2"
                            >
                              <Icon className="w-4 h-4" />
                              {skill.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Award className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Achievements
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mt-2">
                  <li>First Class Distinction in B.E. Computer Engineering</li>
                  <li>
                    Completed multiple certification courses in Test Automation
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
