import { Link } from "react-router-dom";
import Nav from "../Nav";
import Head from "../Head";

const Residencias = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Head title="Nosotras" />
      <Nav titulo="Nosotras" link="/" />
      <section
        id="menu"
        className="animate__fadeInDown wow animate__animated animate__delay-0s animate__slower"
      >
        <div className="cardMenu">
          <img src="../../img/proyecto_1.jpg" alt="Nosotras" />
          <Link to={"./proyecto"} className="boton">
            Proyecto
          </Link>
        </div>
        <div className="cardMenu">
          <img src="../../img/miscelaneas_1.jpg" alt="Nosotras" />
          <Link to={"./biografias"} className="boton">
            Biografías
          </Link>
        </div>
        <div className="cardMenu">
          <img src="../../img/contacto.jpg" alt="Nosotras" />
          <Link to={"./contacto"} className="boton">
            Contacto
          </Link>
        </div>
      </section>
    </>
  );
};

export default Residencias;
