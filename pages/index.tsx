import Image from "next/image"
import gradient from "../public/gradient.png"
import Header from "../components/Header"
const Home = () => {
  return (
    <>
    <Header/>
      <div className="container mx-auto">
       <section id="hero" className="flex flex-col justify-center items-center text-center"> 
       
     <div className="z-[1]">

     <h1 className="text-4xl font-extrabold pt-12">The future of hosting</h1>
        <p className="pt-1 text-white/70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium porta elementum. Mauris posuere nisi ex, nec </p>
      
        <div className="flex gap-6 pt-5 justify-center">
          <button className="bg-white text-black h-10 rounded px-10 border border-white hover:text-white hover:bg-transparent transition-colors duration-300 font-bold">Login</button>
          <button className="h-10 rounded px-10 border border-cg-blue hover:bg-cg-blue transition-colors duration-300">Register</button>
        </div>
        
     </div>

        <article className="absolute z-[0] mr-24">
          <Image src={gradient} alt="gradient"/>
        </article>

        </section>
      </div></>
  )
}; 

export default Home
