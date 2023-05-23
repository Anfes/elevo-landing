"use client";

import { useEffect, useState } from "react";

const Nosotros = () => {
  const [ancho, setAncho] = useState(0);

  useEffect(() => {
    setAncho(window.innerWidth);
  }, []);

  return (
    <div
      style={{
        backgroundImage: " url(/assets/images/home/nosotros.png)",
        backgroundSize: "50% 100%",
        backgroundRepeat: "no-repeat",
        height: `${(432 * ancho/2) / 452}px`,
      }}
      className="w-full"
    >
      <div className="container mx-auto">

      </div>
    </div>
  );
};

export default Nosotros;
