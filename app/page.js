import Image from "next/image";
import FragranceHero from "./(routes)/home/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-[100px] min-h-screen">
      {/* <div className="relative flex items-center justify-center w-full h-[80vh] min-h-[600px] overflow-hidden rounded-lg shadow-lg"> */}
      <FragranceHero />
      {/* </div> */}
      {/* <h1 className="font-playfair text-5xl">Hanafe</h1>
      <h2 className="font-poppins">Hanafe</h2>
      <h3 className="font-montserrat">Hanafe</h3> */}
    </div>
  );
}
