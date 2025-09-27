import DarkMode from "./DarkMode"

export default function Header() {
  return (
    <div className="bg-white dark:bg-neutral-400/20 p-4 rounded-xl flex justify-between items-center">
      <div className="flex items-center text-3xl gap-3">
        <img src="/assets/images/logo.svg" alt="logo-extensions" />
        <h1 className="font-bold">Extensions</h1>
      </div>
      <DarkMode />
    </div>
  );
}
