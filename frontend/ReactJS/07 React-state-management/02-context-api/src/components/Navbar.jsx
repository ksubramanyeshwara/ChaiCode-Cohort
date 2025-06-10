import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-zinc-800 text-zinc-800 dark:text-gray-100 shadow-md transition-colors duration-300">
      <h1 className="text-2xl font-bold">Theme Switcher</h1>
      <ThemeToggleButton />
    </nav>
  );
};

export default Navbar;
