import { useState } from "react";
import Nav from "./components/Nav";
import Toggle from "./components/Toggle";

function App() {
  const data = {
    name: [
      "The WET Codebase",
      "Goodby, Clean Code",
      "My Decade In Review",
      "What Are The React Team Principles",
    ],
    time: [
      "Sunday 4th, 2020",
      "Friday 22nd 2019",
      "Saturday 11th 2018",
      "Thursday 4th 2015",
    ],
    dur: ["11", "5", "5", "5"],
    des: [
      "Come waste your time with me",
      "Let clean code guide you. Than let it go.",
      "A personal reflection",
      "",
    ],
  };

  let theme = "";

  const [themeMode, setNewThemeMode] = useState(theme);

  function onChange(themeMode) {
    setNewThemeMode(themeMode);
  }

  return (
    <div className={`mainContent ${themeMode}`}>
      <div className="content">
        <Nav onChange={onChange} />
        <Toggle
          themeChange={themeMode}
          name={data.name[0]}
          time={data.time[0]}
          dur={data.dur[0]}
          des={data.des[0]}
        />
        <Toggle
          themeChange={themeMode}
          name={data.name[1]}
          time={data.time[1]}
          dur={data.dur[1]}
          des={data.des[1]}
        />
        <Toggle
          themeChange={themeMode}
          name={data.name[2]}
          time={data.time[2]}
          dur={data.dur[2]}
          des={data.des[2]}
        />
        <Toggle
          themeChange={themeMode}
          name={data.name[3]}
          time={data.time[3]}
          dur={data.dur[3]}
          des={data.des[3]}
        />
      </div>
    </div>
  );
}

export default App;
