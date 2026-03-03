import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaBullseye, FaGraduationCap, FaLaptopCode, FaDatabase, FaAward, FaDocker, FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Content({ section }) {
  const sectionVariants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 } }),
  };

  const renderContent = () => {
    switch (section) {
      case "about":
        const aboutCards = [
          {
            title: "Profile",
            desc: "Motivated Web Developer and Java Developer fresher seeking an entry-level role to apply skills in Java, Spring Boot, REST APIs, MySQL, HTML, CSS, and JavaScript.",
            icon: <FaUser />
          },
          {
            title: "Goal",
            desc: "Passionate about building efficient, scalable, and user-friendly applications with strong fundamentals in OOP, DBMS, and frontend development. Eager to contribute to real-world projects while continuously learning and growing as a full-stack developer.",
            icon: <FaBullseye />
          },
        ];

        return (
          <>
            <h3>About Me</h3>
            <div className="project-grid">
              {aboutCards.map((card, i) => (
                <motion.div
                  className="project-card"
                  key={card.title}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(56,189,248,0.6)" }}
                >
                  <div className="card-icon">{card.icon}</div>
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </>
        );

      case "education":
        const education = [
          { title: "BBA (Computer Application) 2024-2025", desc: "Savitribai Phule Pune University, Pune", additional: "CGPA: 9.24", icon: <FaGraduationCap /> },
          { title: "HSC 2021-2022", desc: "Maharashtra State Board", additional: "Percentage: 84.60%", icon: <FaGraduationCap /> },
          { title: "SSC 2019-2020", desc: "Maharashtra State Board", additional: "Percentage: 89.40%", icon: <FaGraduationCap /> },
        ];

        return (
          <>
            <h3>Education</h3>
            <div className="project-grid">
              {education.map((edu, i) => (
                <motion.div
                  className="project-card"
                  key={edu.title}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(56,189,248,0.6)" }}
                >
                  <div className="card-icon">{edu.icon}</div>
                  <h4>{edu.title}</h4>
                  <p>{edu.desc}</p>
                  <span>{edu.additional}</span>
                </motion.div>
              ))}
            </div>
          </>
        );

      case "skills":
        const skills = [
          { title: "Programming Languages", desc: "Java (OOP), C, C++, Python", icon: <FaLaptopCode /> },
          { title: "Frontend Development", desc: "HTML, CSS, JavaScript, React.js (Learning)", icon: <FaLaptopCode /> },
          { title: "Backend Development", desc: "Java SE, Java EE, JDBC, Servlet, JSP, Spring Boot, Hibernate, REST APIs", icon: <FaLaptopCode /> },
          { title: "Database", desc: "MySQL", icon: <FaDatabase /> },
          { title: "Tools & Platforms", desc: "Git, GitHub, Eclipse, VS Code, Postman, Maven", icon: <FaLaptopCode /> },
        ];

        return (
          <>
            <h3>Technical Skills</h3>
            <div className="project-grid">
              {skills.map((skill, i) => (
                <motion.div
                  className="project-card"
                  key={skill.title}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(56,189,248,0.6)" }}
                >
                  <div className="card-icon">{skill.icon}</div>
                  <h4>{skill.title}</h4>
                  <p>{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </>
        );

      case "projects":
  const projects = [
    {
      title: "Spendo – Budgeting System",
      desc: "Full-stack budgeting application built using Spring Boot & MySQL.",
      tech: "Spring Boot • MySQL • JavaScript",
      github: "https://github.com/sanikasawant0405-tech", // updated GitHub link
      live: "https://spendo-demo.netlify.app"
    },
    {
      title: "SkillSwap Platform",
      desc: "Skill exchange platform with user matching & admin panel.",
      tech: "JSP • MySQL",
      github: "https://github.com/sanikasawant0405-tech", // updated GitHub link
      live: "https://skillswap-demo.netlify.app"
    },
  ];

  return (
    <>
      <h3>Projects</h3>
      <div className="project-grid">
        {projects.map((proj, i) => (
          <motion.div
            className="project-card"
            key={proj.title}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(56,189,248,0.6)" }}
          >
            <h4>{proj.title}</h4>
            <p>{proj.desc}</p>
            <span>{proj.tech}</span>
            <div className="project-links">
              <a href={proj.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={proj.live} target="_blank" rel="noopener noreferrer">Live</a>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );

      case "achievements":
        const achievements = [
          { title: "1st Prize", desc: "Won 1st prize in Jigyasa-inter College Competition organized by IMCC College, Pune", certLink: "https://github.com/sanikasawant0405-tech", icon: <FaAward /> },
          { title: "Full Stack Java Course", desc: "Completed Full Stack Java Course from Java by Kiran Academy", certLink: "https://github.com/sanikasawant0405-tech", icon: <FaAward /> },
          { title: "Fundamentals of Docker & Kubernetes", desc: "Completed course from Scaler", certLink: "https://github.com/sanikasawant0405-tech", icon: <FaDocker /> },
        ];

        return (
          <>
            <h3>Achievements & Certifications</h3>
            <div className="project-grid">
              {achievements.map((ach, i) => (
                <motion.div
                  className="project-card"
                  key={ach.title}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(56,189,248,0.6)" }}
                >
                  <div className="card-icon">{ach.icon}</div>
                  <h4>{ach.title}</h4>
                  <p>{ach.desc}</p>
                  {ach.certLink && (
                    <div className="project-links">
                      <a href={ach.certLink} target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </>
        );

      case "contact":
        const contactInfo = [
          { title: "Phone", desc: "+91 8308718928", icon: <FaPhone /> },
          { title: "Email", desc: "sanikasawant0405@gmail.com", icon: <FaEnvelope /> },
          { title: "GitHub", desc: <a href="https://github.com/sanikasawant0405-tech" target="_blank" rel="noopener noreferrer">github.com/sanikasawant0405-tech</a>, icon: <FaGithub /> },
          { title: "LinkedIn", desc: <a href="https://linkedin.com/in/sanikasawant015" target="_blank" rel="noopener noreferrer">linkedin.com/in/sanikasawant015</a>, icon: <FaLinkedin /> },
        ];

        return (
          <>
            <h3>Contact</h3>
            <div className="project-grid">
              {contactInfo.map((contact, i) => (
                <motion.div
                  className="project-card"
                  key={contact.title}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(56,189,248,0.6)" }}
                >
                  <div className="card-icon">{contact.icon}</div>
                  <h4>{contact.title}</h4>
                  <p>{contact.desc}</p>
                </motion.div>
              ))}
            </div>
          </>
        );

      default:
        return (
          <>
            <h3>Welcome 👩‍💻</h3>
            <p>Passionate about building efficient and scalable full-stack applications.</p>
          </>
        );
    }
  };

  return (
    <div className="content">
      <div className="box">
        <AnimatePresence mode="wait">
          <motion.div
            key={section}
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ borderRadius: "15px" }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Content;