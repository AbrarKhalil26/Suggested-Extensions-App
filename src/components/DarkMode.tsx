import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "../redux/themeSlice";

export default function DarkMode() {
  const dispatch = useDispatch();
  const mode = useSelector(selectTheme);
  console.log(mode);
  
  const toggleMode = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={toggleMode}
      className="overflow-hidden w-11 h-11 flex bg-neutral-400/30 rounded-lg cursor-pointer focus:border-2 focus:border-red-500"
    >
      <img
        src='/assets/images/icon-moon.svg'
        alt="Moon Mode"
        className={`w-5 transition duration-200 ${
          mode === "light" ? "translate-x-3" : "-translate-x-8"
        }`}
      />
      <img
        src='/assets/images/icon-sun.svg'
        alt="Sun Mode"
        className={`w-5 transition duration-200 ${
          mode === "light" ? "translate-x-8" : "-translate-x-2"
        }`}
      />
    </button>
  );
}
