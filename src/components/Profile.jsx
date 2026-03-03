import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaBullseye, FaGraduationCap, FaLaptopCode, FaAward, FaDocker, FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Profile() {
  const [typedText, setTypedText] = useState("");
  const text = "Java | Spring Boot | Full Stack Developer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="profile">
        <motion.img
          src="/profile2.jpeg"
          alt="Sanika"
          className="profile-img"
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px #38bdf8, 0 0 50px #0ea5e9" }}
        />
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          Sanika Sawant
        </motion.h1>
        <motion.p className="typing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          {typedText}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Profile;