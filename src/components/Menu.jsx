import { motion } from "framer-motion";
import { FaUser, FaBullseye, FaGraduationCap, FaLaptopCode, FaAward, FaDocker, FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Menu({ setSection }) {
  const menuItems = ["about", "education", "skills", "projects", "achievements", "contact"]; // replaced "research" with "achievements"

  return (
    <div className="menu">
      <h2>SANIKA</h2>
      {menuItems.map((sec) => (
        <motion.button
          key={sec}
          onClick={() => setSection(sec)}
          whileHover={{ scale: 1.1, color: "#0ea5e9" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * menuItems.indexOf(sec) }}
        >
          {sec.charAt(0).toUpperCase() + sec.slice(1)}
        </motion.button>
      ))}
    </div>
  );
}

export default Menu;