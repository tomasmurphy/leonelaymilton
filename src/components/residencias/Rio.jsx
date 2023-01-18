import Nav from "../Nav";
import Carousel from "../Carousel";
import Head from "../Head";

export const Rio = () => {
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
      <Head title="Residencias - Ir al río" />
      <Nav titulo="Ir al río 2023" link="/residencias" />
      <section
        id="about_me"
        className="mb-5  animate__fadeInDown wow animate__animated animate__delay-0s animate__slower"
      >
        <Carousel settings={settings}></Carousel>
        <div className="row marMob ">
          <div className="col-12 mt-5 col-lg-7 fondoImg text-md-start col-xl-9">
            <hr />
            <h3 className="text-center fs-6">
              Muy prontito! <br />
              <br />
              Proyecto de residencia y experiencia con revelados orgánicos
              seleccionada por el FNA en su beca de formadores 2022. Delta del
              Tigre, Buenos Aires, marzo 2023.
            </h3>
            <hr />
          </div>
        </div>
      </section>
    </>
  );
};
