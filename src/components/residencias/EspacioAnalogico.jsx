import Nav from "../Nav";
import Carousel from "../Carousel";
import Head from "../Head";

export const EspacioAnalogico = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <Head title="Residencias - Espacio analógico" />
      <Nav titulo="Espacio analógico 2022" link="/residencias" />
      <section
        id="about_me"
        className="mb-5  animate__fadeInDown wow animate__animated animate__delay-0s animate__slower"
      >
        <Carousel settings={settings}>
          <img
            src="../img/talleres/espacio_analogico (1).jpg"
            className="img-fluid"
            alt="Espacio analógico"
          />
          <img
            src="../img/talleres/espacio_analogico (2).jpg"
            className="img-fluid"
            alt="Espacio analógico"
          />
          <img
            src="../img/talleres/espacio_analogico (3).jpg"
            className="img-fluid"
            alt="Espacio analógico"
          />
          <img
            src="../img/talleres/espacio_analogico (4).jpg"
            className="img-fluid"
            alt="Espacio analógico"
          />
          <img
            src="../img/talleres/espacio_analogico (5).jpg"
            className="img-fluid"
            alt="Espacio analógico"
          />
          <img
            src="../img/talleres/espacio_analogico (6).jpg"
            className="img-fluid"
            alt="Espacio analógico"
          />
        </Carousel>
        <div className="row marMob ">
          <div className="col-12 mt-5 col-lg-7 fondoImg text-md-start col-xl-9">
            <hr />
            <h3 className="text-center fs-6">
              Durante el mes de abril de 2022 coordinamos una experiencia de
              revelados orgánicos en Espacio Analógico de la ciudad de Rosario.
              A lo largo de cuatro encuentros salimos a hacer fotos con película
              35 mm que luego revelamos con nuestras fórmulas de café y whisky y
              fijamos también de manera orgánica.
            </h3>
            <hr />
          </div>
        </div>
      </section>
    </>
  );
};
