import Nav from "../Nav";
import { Link } from "react-router-dom";
import Head from "../Head";

export const Herbario = () => {
  return (
    <>
      <Head title="Proyectos - Herbario doméstico" />
      <Nav titulo="Herbario doméstico" link="/proyectos" />
      <section
        id="about_me"
        className="mb-5 animate__fadeInDown wow animate__animated animate__delay-0s animate__slower"
      >
        <div className="container-fluid overflow-hidden">
          <div className="row marMob">
            <h3 className="text-center text-md-start">
              <i className="bi bi-bug"></i> 35 mm revelado con menta, té y manzana
            </h3>
            <hr />
            <img
              src="../img/herbario_domestico/herbario_domestico_2.jpg"
              class="col-md-8 img-fluid"
              alt="Herbario doméstico"
            />
            <h3 className="text-end col-12 col-md-4">
              "Naturaleza no es lo que vemos <br />
              la montaña, el poniente la ardilla, <br /> el eclipse, el abejorro{" "}
              <br />
              no, naturaleza es el cielo <br />
              naturaleza es lo que oímos <br />
              el bobolink, el mar el trueno, el grillo <br />
              no, naturaleza es la armonía <br />
              naturaleza es lo que sabemos <br />
              no tenemos arte para decirlo <br />
              tan impotente es nuestra sabiduría <br />
              para tanta simplicidad” <br />
              <br />
              Emily Dickinson (1863)
            </h3>
            <img
              src="../img/herbario_domestico/herbario_domestico_12.jpg"
              className="img-fluid col-md-8"
              alt="Herbario doméstico"
            />
            <p className="col-md-4 text-md-end">
              Herbario doméstico es una serie de fotografías en blanco y negro
              que narra nuestros propios procesos de trabajo; la investigación y
              exploración del medio natural cotidiano con el que nos rodeamos y
              del que nos servimos para llevar a cabo el proceso fotográfico.
            </p>
            <img
              src="../img/herbario_domestico/herbario_domestico_4.jpg"
              class="col-md-8 img-fluid"
              alt="Herbario doméstico"
            />
            <p className="col-md-4 text-md-end">
              Este proyecto de fotografía analógica experimental está centrado
              en la naturaleza como tema y como insumo para el revelado. Nos
              interesa reemplazar los tradicionales reveladores y fijadores
              industriales por materiales orgánicos y no contaminantes. Las
              copias aquí expuestas fueron realizadas a partir de película
              fotográfica de 35 mm revelada de manera experimental con menta, té
              negro y manzana generando un escala equilibrada de grises.
            </p>
            <img
              src="../img/herbario_domestico/herbario_domestico_9.jpg"
              class="col-md-8 img-fluid"
              alt="Herbario doméstico"
            />
            <p className="col-md-4 text-md-end">
              <i>
                Fue seleccionado para ser mostrado en el CC Cine Lumiere de la
                ciudad de Rosario durante la convocatoria 2022. La{" "}
                <Link
                  to="/muestras/muestra_herbario_domestico"
                  target={"_blanck"}
                >
                  <span className="violeta">muestra</span>
                </Link>{" "}
                fue inaugurada el 18 de noviembre y estuvo expuesta hasta
                finales de diciembre.
              </i>
            </p>
            <img
              src="../img/herbario_domestico/herbario_domestico_1.jpg"
              className="img-fluid col-md-3"
              alt="Herbario doméstico"
            />
            <img
              src="../img/herbario_domestico/herbario_domestico_3.jpg"
              className="img-fluid col-md-3"
              alt="Herbario doméstico"
            />
            <img
              src="../img/herbario_domestico/herbario_domestico_15.jpg"
              class="col-md-3 img-fluid"
              alt="Herbario doméstico"
            />
            <img
              src="../img/herbario_domestico/herbario_domestico_17.jpg"
              class="col-md-3 img-fluid"
              alt="Herbario doméstico"
            />
            <img
              src="../img/herbario_domestico/herbario_domestico_6.jpg"
              class="col-md-4 img-fluid"
              alt="Herbario doméstico"
            />
            <img
              src="../img/herbario_domestico/herbario_domestico_7.jpg"
              class="col-md-4 img-fluid"
              alt="Herbario doméstico"
            />
            <img
              src="../img/herbario_domestico/herbario_domestico_8.jpg"
              class="col-md-4 img-fluid"
              alt="Herbario doméstico"
            />
            <img
              src="../img/herbario_domestico/herbario_domestico_10.jpg"
              class="col-md-4 img-fluid"
              alt="Herbario doméstico"
            />
            <img
              src="../img/herbario_domestico/herbario_domestico_11.jpg"
              class="col-md-4 img-fluid"
              alt="Herbario doméstico"
            />
            <img
              src="../img/herbario_domestico/herbario_domestico_13.jpg"
              class="col-md-4 img-fluid"
              alt="Herbario doméstico"
            />
            <img
              src="../img/herbario_domestico/herbario_domestico_14.jpg"
              class="col-md-4 img-fluid"
              alt="Herbario doméstico"
            />
            <img
              src="../img/herbario_domestico/herbario_domestico_5.jpg"
              class="col-md-4 img-fluid"
              alt="Herbario doméstico"
            />
            <img
              src="../img/herbario_domestico/herbario_domestico_16.jpg"
              class="col-12 col-md-4 img-fluid"
              alt="Herbario doméstico"
            />
          </div>
        </div>
      </section>
    </>
  );
};
