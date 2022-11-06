import Image from "next/image";
import gradient from "../public/gradient.png";
import Header from "../components/Header";
import FadeIn from "react-fade-in";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const gradient: any = document.querySelector("#gradient__mouse");
      gradient.style.left = e.pageX - 300 + "px";
      gradient.style.top = e.pageY - 300 + "px";
    });
  }, []);
  return (
    <>
      <Header />
      <FadeIn>
        <div className="container mx-auto">
          <section
            id="hero"
            className="flex flex-col justify-center items-center text-center h-[60vh]"
          >
            <div className="z-[1]">
              <h1 className="text-5xl font-bold pt-12">
                The future of hosting
              </h1>
              <p className="max-w-4xl text-center pt-1 text-2xl text-white/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                pretium porta elementum. Mauris posuere nisi ex, nec{" "}
              </p>

              <div className="flex gap-12 pt-5 justify-center">
                <button className="bg-white text-black h-10 rounded px-10 border border-white hover:text-white hover:bg-transparent transition-colors duration-300 font-bold">
                  Login
                </button>
                <button className="h-10 font-bold rounded px-10 border border-cg-blue hover:bg-cg-blue transition-colors duration-300">
                  Register
                </button>
              </div>
            </div>

            <Image
              id="gradient__mouse"
              src={gradient}
              alt="gradient"
              className="fixed z-[0]"
            />
          </section>

          <section
            id="rely"
            className="pt-32 flex flex-col justify-center items-center"
          >
            <h3 className="tracking-widest uppercase text-foreground/30">
              you can rely on us
            </h3>
            <h1 className="text-4xl font-bold">
              Why we are <span className="different__gradient">different</span>
            </h1>
            <p className="max-w-4xl text-center pt-1 text-lg text-white/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              pretium porta elementum. Mauris posuere nisi ex, nec{" "}
            </p>
          </section>
        </div>
      </FadeIn>
    </>
  );
};

export default Home;
