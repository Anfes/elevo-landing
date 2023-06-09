import React from "react";
import Services from "../../sections-landing/Services";
import Patients from "../../sections-landing/Patients";
import FrecuentQuestions from "../../sections-landing/FrecuentQuestions";
import Contact from "../../sections-landing/Contact";
import Home from "./components/Home";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Description from "./components/Description";
import Duration from "./components/Duration";
import OtherServices from "./components/OtherService";

const MasajeRelajante = () => {
  return (
    <div>
      <Header />
      {/*--------------------------------------*/}
      <section id="inicio">
        <Home />
      </section>
      {/*--------------------------------------*/}
      <section id="descripcion">
        <Description />
      </section>
      {/*--------------------------------------*/}
      <section id="duracion">
        <Duration />
      </section>
      {/*--------------------------------------*/}
      <section id="otros-servicios">
        <OtherServices />
      </section>
      {/*--------------------------------------*/}
      <section id="pacientes">
        <Patients />
      </section>
      {/*--------------------------------------*/}
      <section id="preguntas-frecuentes">
        <FrecuentQuestions />
      </section>
      {/*--------------------------------------*/}
      <section id="contacto">
        <Contact />
      </section>
      {/*--------------------------------------*/}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MasajeRelajante;
