"use-client"
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Footer from "../../components/Footer";



export default function Home() {
  return (
    <>
      <Navbar />
    <div className="min-h-[90vh] flex items-center justify-center  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      {/* <div className="min-h-[90vh] bg-gray-100 flex items-center justify-center"> */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-8 mt-20 mb-20">
          <div className="space-y-4 flex flex-col justify-center text-center">
            <h1 className=" text-white text-4xl font-bold animate-bounceOnce" style={{fontFamily:"Raleway"}}>Hammad Mustafa</h1>
            <h1 className="text-2xl font-semibold text-yellow-50 animate-fadeIn">
              🔧 Expert Java Software Engineer | Python Developer | Generative AI Enthusiast 🚀
            </h1>
            <p className="text-grey-900 animate-slideInLeft">
              As a dedicated Software Engineer with a focus on Java, I excel in crafting efficient, scalable, and robust software solutions...
            </p>
            <Link href={"https://www.linkedin.com/in/hammad-mustafa2/"}> <button className="btn bg-slate-800 hover:bg-blue-900 w-56 text-white animate-pulse">Connect With me</button></Link>
          </div>
          <div className="flex justify-center">
            <img src="/image.jpg" alt="Profile Image" className="rounded-full w-80 h-80 animate-fadeIn" />
            
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

