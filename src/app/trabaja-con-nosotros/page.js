import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import Home from "./components/Home";
import How from "./components/How";
import FrecuentQuestions from "../../sections-landing/FrecuentQuestions";
import Contact from "../../sections-landing/Contact";
import FisioterapReq from "./components/FisioterapReq";
import AplicateFis from "./components/AplicateFis";
import MasoterapReq from "./components/MasoterapReq";
import AplicateMas from "./components/AplicateMaso";
import Beneficios from "./components/Beneficios";

const page = () => {
  return (
    <div>
      <Header />
      {/*--------------------------------------*/}
      <section>
        <div
          style={{
            background:
              "linear-gradient(0deg, #F3FFFF 0%, rgba(243, 255, 255, 0.00) 100%)",
          }}
          className="pb-32"
        >
          <Home />
          <How />
        </div>
      </section>
      {/*--------------------------------------*/}
      <section>
        <FisioterapReq />
      </section>
      {/*--------------------------------------*/}
      <section>
        <AplicateFis />
      </section>
      {/*--------------------------------------*/}
      <section>
        <MasoterapReq />
      </section>
      {/*--------------------------------------*/}
      <section>
        <AplicateMas />
      </section>
      {/*--------------------------------------*/}
      <section>
        <Beneficios />
      </section>
      {/*--------------------------------------*/}
      <section>
        <FrecuentQuestions />
      </section>
      {/*--------------------------------------*/}
      <section>
        <Contact />
      </section>
      {/*--------------------------------------*/}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default page;
