import { useState, useEffect } from "react";

const Header = () => {
  const links = [
    { name: "Home", path: "#home" },
    { name: "Projects", path: "#projects" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
  ];

  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleHashChange = () => setCurrentHash(window.location.hash);

      setCurrentHash(window.location.hash);

      window.addEventListener("hashchange", handleHashChange);

      return () => {
        window.removeEventListener("hashchange", handleHashChange);
      };
    }
  }, []);

  return (
    <header className="sticky top-0.5 sm:max-w-96 md:max-w-[26rem] lg:max-w-[35rem] mx-auto flex justify-center bg-gray-600/50 border border-white/25 rounded-full select-none p-0.5 md:p-1 lg:p-1.5 backdrop-blur z-10">
      <ul className="w-full flex justify-between">
        {links.map((link) => (
          <li
            key={link.name}
            className={`${
              currentHash === link.path
                ? "bg-white text-black hover:bg-white/75"
                : "text-gray-300 hover:text-white hover:bg-gray-500/50"
            } rounded-full py-1.5 lg:py-2 md:text-xl lg:text-3xl focus-within:outline outline-black transition-colors`}
          >
            <a className="font-semibold px-4 outline-none" href={link.path}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};
export default Header