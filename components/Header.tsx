import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../public/logo_with_floppa.png";
import Button from "./core/button";
const Header = () => {
  const [bg, setBg] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY > 0) {
        setBg("bg-background-100");
      } else {
        setBg("");
      }
    });
  }, []);
  return (
    <nav
      className={`mb-4 flex items-center h-12 px-4 sticky top-0 ${bg} transition-colors duration-500`}
    >
      <section className="flex justify-between container mx-auto">
        <Link href="/">
          <span className="text-2xl font-bold">Floppa</span>
        </Link>

        <div className="flex gap-2">
          <Link href="/">
            <Button size="md">Register</Button>
          </Link>
          <Link href="/">
            <Button size="md">Login</Button>
          </Link>
        </div>
      </section>
    </nav>
  );
};
export default Header;
