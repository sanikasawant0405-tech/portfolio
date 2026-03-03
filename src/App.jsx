import { useState } from "react";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import Content from "./components/Content";
import "./App.css";

function App() {
 const [section, setSection] = useState("about");
  return (
    <div className="container">
      <Menu setSection={setSection} />
      <Profile />
      <Content section={section} />
      <div className="particles"></div>
    </div>
  );
}

export default App;