import React from "react";
import Navbar from "./../components/Navbar";
import "../src/app/globals.css";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
    
      <Navbar />
      
      <div className="min-h-screen  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-8">
        {/* <h2 className="text-4xl font-bold text-center text-gray-800">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto mt-6 text-gray-600 space-y-4">
          <p>
            As a dedicated Software Engineer with a strong foundation in Java, I
            bring a deep technical expertise to every project. My work
            emphasizes creating efficient, scalable, and robust solutions that
            address real-world challenges.
          </p>
          <p>
            My skill set extends to Python, where I specialize in advanced data
            structures and problem-solving techniques. Currently, I am expanding
            my knowledge in the field of Generative AI through an intensive
            program at GIAC, developing innovative solutions that drive value in
            dynamic environments.
          </p>
          <p>
            I’m passionate about continuous learning and collaborating with
            forward-thinking teams to create impactful projects. I look forward
            to connecting and discussing how my expertise can contribute to
            ambitious projects.
          </p>
        </div> */}


<section className="text-gray-100 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img
      className=" brightness-90 rounded-full lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center shadow-2xl opacity-80 hover:brightness-110  backdrop-blur-md"
      alt="hero"
      src="/aboutImage.jpg"
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
        About Me
      </h1>
      <p className="mb-8 leading-relaxed animate-slideInLeft">
      
            As a dedicated Software Engineer with a strong foundation in Java, I
            bring a deep technical expertise to every project. My work
            emphasizes creating efficient, scalable, and robust solutions that
            address real-world challenges.
          </p>
          <p className="mb-8 leading-relaxed animate-slideInRight">
            My skill set extends to Python, where I specialize in advanced data
            structures and problem-solving techniques. Currently, I am expanding
            my knowledge in the field of Generative AI through an intensive
            program at GIAC, developing innovative solutions that drive value in
            dynamic environments.
          </p>
          <p className="mb-8 leading-relaxed animate-slideInLeft">
            I’m passionate about continuous learning and collaborating with
            forward-thinking teams to create impactful projects. I look forward
            to connecting and discussing how my expertise can contribute to
            ambitious projects.
          </p>
     
    </div>
  </div>
</section>

      </div>
      
    <Footer/>
    </>
  );
};

export default About;
