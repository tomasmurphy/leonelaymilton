import { Link } from "react-router-dom";
import Nav from "../Nav";
import Head from "../Head";

const Muestras = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Head title="Fotos" />
      <Nav titulo="Fotos" link="/" />
      <section
        id="menu"
        className="animate__fadeInDown wow animate__animated animate__delay-0s animate__slower"
      >
        <div className="cardMenu">
          <img src="./img/lym (10).jpg" alt="Muestras" />
          <Link to={"./civil"} className="boton">
            Civil
          </Link>
        </div>
        <div className="cardMenu">
          <img
            src="./img/lym (30).jpg"
            alt="Muestras"
          />
          <Link to={"./iglesia"} className="boton">
            Iglesia
          </Link>
        </div>
        <div className="cardMenu">
          <img src="./img/lym (44).jpg" alt="Muestras" />
          <Link to={"./brunch"} className="boton">
            Brunch
          </Link>
        </div>
        
      </section>
      
    </>
  );
};

export default Muestras;
