import "./styles/App.css";
import { useState } from "react";
import BasicInfo from "./components/basic-Info.jsx";
import CV from "./components/cv.jsx";
import Graduation from "./components/graduation.jsx";
import Experience from "./components/experience.jsx";
import "../src/styles/info.css";



export default function App() {
  const [info, setInfo] = useState({
    basic: {},
    graduation: [],
    experience: [],
  });

  return (
    <>
      <div className="form-container">
        <BasicInfo info={info} setInfo={setInfo} />
        <Graduation info={info} setInfo={setInfo} />
        <Experience info={info} setInfo={setInfo} />
      </div>
      <CV info={info} />
    </>
  );
}
