import Link from "next/link";
import { useState, useEffect } from "react";
const Header = () => {
  const [border, setBorder] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setBorder("border-header");
      } else {
        setBorder("");
      }
    });
  }, []);
  return (
    <nav
      className={`sticky top-0 h-14 bg-background/50 z-[10] flex items-center border-b-2 border-black ${border}`}
    >
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold hover:underline cursor-pointer">
            Floppa
          </h1>
        </Link>
        <ul className="flex items-center gap-6">
          <li className="text-foreground/60">Features</li>
          <li className="text-foreground/60">Features</li>
          <li className="text-foreground/60">Features</li>
        </ul>

        <button className="border border-cg-blue text-foreground/60 h-8 rounded px-6 hover:bg-cg-blue transition-colors duration-300 font-bold">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Header;
