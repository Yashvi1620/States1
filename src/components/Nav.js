import { useState } from "react";
const Nav = (props) => {
  const firsttheme = "light";

  const [theme, setNewTheme] = useState(firsttheme);

  const themeChanger = () => {
    if (theme === "light") {
      setNewTheme("dark");
    } else {
      setNewTheme("light");
    }
  };

  props.onChange(theme);

  return (
    <div className={`head ${theme}`}>
      <h1 className="title">Overreacted</h1>
      <button className="btn" onClick={themeChanger}>
        Toggle
      </button>
    </div>
  );
};

export default Nav;
