import Header from "@components/Header";
import HomeLanding from "../sections-landing/HomeLanding";
import Ciudades from "../sections-landing/Ciudades";
import Services from "../sections-landing/Services";
import Share from "../sections-landing/Share";
import Nosotros from "../sections-landing/Nosotros";
import Patients from "../sections-landing/Patients";
import Profesionals from "../sections-landing/Profesionals";
import WorkUs from "../sections-landing/WorkUs";
import FrecuentQuestions from "../sections-landing/FrecuentQuestions";
import Contact from "../sections-landing/Contact";
import Footer from "@components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <section id="inicio">
        <HomeLanding />
      </section>

      <section id="ciudades">
        <Ciudades />
      </section>

      <section id="servicios">
        <Services />
      </section>

      <section id="compartir">
        <Share />
      </section>

      <section id="nosotros">
        <Nosotros />
      </section>

      <section id="pacientes">
        <Patients />
      </section>

      <section id="profesionales">
        <Profesionals />
      </section>

      <section id="trabaja-con-nosotros">
        <WorkUs />
      </section>

      <section id="preguntas-frecuentes">
        <FrecuentQuestions />
      </section>

      <section id="contacto">
        <Contact />
      </section>

      <footer>
        <Footer />
      </footer>

    </div>
  );
}
