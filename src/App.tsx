import { useEffect } from "react";
import "./App.css";
import ExtensionsList from "./components/ExtensionsList";
import Header from "./components/Header";

function App() {
  useEffect(() => {
    const storedTheme = localStorage.getItem("Theme");

    if (storedTheme === "dark" || !storedTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("Theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-app">
      <div className="container mx-auto py-15 px-5">
        <Header />
        <ExtensionsList />
      </div>
    </div>
  );
}

export default App;
