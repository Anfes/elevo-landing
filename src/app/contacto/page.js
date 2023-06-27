import Header from "@components/Header/Header";
import React from "react";
import WorkUs from "./components/WorkUs";
import FrecuentQuestions from "../../sections-landing/FrecuentQuestions";
import Footer from "@components/Footer/Footer";
import Contact from "./components/Contact";
import Ciudades from "./components/Ciudades";

const page = () => {
  return (
    <div>
      <Header />
      {/* -------------------------------------- */}
      <section id="contacto">
        <Contact />
      </section>
      {/* -------------------------------------- */}
      <section id="ciudades">
        <Ciudades />
      </section>
      {/* -------------------------------------- */}
      <section id="trabaja-con-nosotros">
        <WorkUs />
      </section>
      {/* -------------------------------------- */}
      <section id="preguntas-frecuentes">
        <FrecuentQuestions />
      </section>
      {/* -------------------------------------- */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default page;
