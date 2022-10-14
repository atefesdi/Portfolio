import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Experience from "../components/experience/Experience";
import Header from "../components/Header";
import Hero from "../components/hero/Hero";
import Skills from "../components/skills/Skills";

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-x-hidden bg-[rgb(36,36,36)] text-white snap-y snap-mandatory 
    z-0 overflow-scroll  ">
      <Head>
        <title>Ati's Portfolio</title>
      </Head>

      {/*Header */}
      <Header/>

      {/*Hero */}
      <section id="hero"  className=" snap-start ">
        <Hero />
      </section>

      {/*About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      
      {/*Experience*/}
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      
      {/*Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      
      {/*Projects*/}

      {/* Contact Me */}
      <section id="contact" className="snap-center" >
      <Contact   />
      </section>
      

    </div>
  );
};

export default Home;
