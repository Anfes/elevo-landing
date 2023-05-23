import Header from "@components/Header";
import HomeLanding from "./sections-landing/HomeLanding";
import Ciudades from "./sections-landing/Ciudades";
import Services from "./sections-landing/Services";
import Share from "./sections-landing/Share";
import Nosotros from "./sections-landing/Nosotros";

export default function Home() {
  return (
    <div>
      <Header />
      <section>
        <HomeLanding />
      </section>
      <section>
        <Ciudades />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Share />
      </section>
      <section>
        <Nosotros />
      </section>
    </div>
  );
}
