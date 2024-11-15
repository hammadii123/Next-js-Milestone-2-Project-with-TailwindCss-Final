import React from 'react'
import Navbar from "./../components/Navbar";
import "../src/app/globals.css";
import Link from "next/link";
import Footer from "./../components/Footer";


const projects = () => {
  return (
    <>
      <Navbar />
      {/* <div classNameName="min-h-screen bg-gray-100 p-8">
        <h2 classNameName="text-4xl font-bold text-center text-gray-800">Projects</h2>
        <div classNameName="max-w-5xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          Example project cards
          <div classNameName="bg-white shadow-lg rounded-lg p-6">
            <h3 classNameName="text-2xl font-semibold text-gray-800">Project One</h3>
            <p classNameName="text-gray-600 mt-2">
              A detailed project on web application development that involved building a scalable architecture with Java and Next.js.
            </p>
          </div>
         
          Add more projects as needed
        </div>
      </div> */}


<section className="text-gray-600 body-font  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
  <h1 className="text-white">Projects</h1>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">

      

      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg  h-64 overflow-hidden">
          <img alt="content" className="rounded object-contain object-center  h-full w-full" src="/randomPass.PNG"/>
        </div>
        <h2 className="title-font text-2xl font-medium  text-gray-100 mt-1 mb-3">Password Generator</h2>
        <p className="leading-relaxed text-base  text-gray-400">This is the random password generator App based on core JavaScript</p>
<Link href="https://random-passoword-generator.netlify.app/">
        <button className="flex mx-auto mt-6 text-white  bg-purple-900 border-0 py-2 px-5 focus:outline-none hover:bg-green-800 rounded">Check it out</button>
      </Link>
      </div>

{/* Card2 */}

      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="rounded object-contain object-center h-full w-full" src="/Technova.PNG"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-100 mt-6 mb-3">TechNova Clone </h2>
        <p className="leading-relaxed text-gray-400">This is the clone webpage and it mainly focused on the Bootstrap Functionalities</p>
        <Link href="https://technova-clone-final.netlify.app/"><button className="flex mx-auto mt-6 text-white bg-purple-900 border-0 py-2 px-5 focus:outline-none hover:bg-green-800 rounded">Check it out!</button></Link>
      </div>



{/* Card3 */}
<div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="rounded object-contain object-center h-full w-full" src="/positivus.PNG"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-100 mt-6 mb-3">Positivus Clone </h2>
        <p className="leading-relaxed text-gray-400">This is the clone webpage and it mainly focused on Html and Css</p>
        <Link href="https://positivus-clone-final.netlify.app/"><button className="flex mx-auto mt-6 text-white bg-purple-900 border-0 py-2 px-5 focus:outline-none hover:bg-green-800 rounded">Check it out!</button></Link>
      </div>

    </div>
  </div>
</section>
<Footer/>
    </>
  )
};

export default projects