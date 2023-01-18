import Nav from "../Nav";
import { Link } from "react-router-dom";
import Head from "../Head";

export const Fotogramas = () => {
  return (
    <>
      <Head title="Proyectos - Fotogramas botánicos" />
      <Nav titulo="Fotogramas botánicos" link="/proyectos" />
      <section
        id="about_me"
        className="mb-5 animate__fadeInDown wow animate__animated animate__delay-0s animate__slower"
      >
        <div className="container-fluid overflow-hidden">
          <div className="row marMob">
            <h3 className="text-center text-md-start fs-6">
              <i className="bi bi-flower3"></i> Revelados con romero, papa,
              orégano y tomillo
            </h3>
            <hr />
            <img
              src="../img/fotogramas/fotogramas_botanicos_1.jpg"
              className="img-fluid  col-md-6 "
              alt='Fotograma botánico'
            />
            <p className="col-md-6 ">
              Fotogramas botánicos realizados a partir de elementos naturales
              que nos rodean y revelados a través de fórmulas no contaminantes.
              Los reveladores utilizados para traer la imagen latente en el
              papel son: romero, papa, orégano y tomillo.{" "}
            </p>
          </div>
          <div className="reverse row marMob">
            <p className="col-md-8 ">
              El proceso de creación de fotogramas es una técnica fotográfica
              que consiste propiamente en colocar un material opaco o
              semitransparente sobre un soporte fotosensible, exponerlo a la
              acción de la luz y posteriormente transformarlo químicamente en un
              material permanente.{" "}
            </p>
            <img
              src="../img/fotogramas/fotogramas_botanicos_2.jpg"
              className="img-fluid col-md-4 "
              alt='Fotograma botánico'
            />
          </div>
          <div className="row marMob">
            <img
              src="../img/fotogramas/fotogramas_botanicos_3.jpg"
              className="img-fluid col-md-6 "
              alt='Fotograma botánico'
            />
            <p className="col-md-6 ">
              <i>
                *Este proyecto fue invitado para ser expuesto durante el SOPA
                2022: X congreso internacional de socialización en el medio
                rural, en el Museo de Ciencias Naturales Angel Gallardo de la
                ciudad de Rosario. La{" "}
                <Link to="/muestras/muestra_una_ramita" target={"_blanck"}>
                  <span className="violeta">muestra</span>
                </Link>{" "}
                fue inaugurada en el marco de la Noche de los Museos.
              </i>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
