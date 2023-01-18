import Nav from "../Nav";
import Carousel from "../Carousel";
import Head from "../Head";

export const LaboratorioAmbulante = () => {
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
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <Head title="Iglesia" />
      <Nav titulo="Iglesia" link="/fotos" />
      <section
        id="about_me"
        className="mb-5  animate__fadeInDown wow animate__animated animate__delay-0s animate__slower"
      >
        <Carousel settings={settings}>
          <img
            src="../img/lym (28).jpg"
            className="img-fluid"
            alt=""
          />
          <img
            src="../img/lym (29).jpg"
            className="img-fluid"
            alt=""
          />
          <img
            src="../img/lym (30).jpg"
            className="img-fluid"
            alt=""
          />
          <img
            src="../img/lym (31).jpg"
            className="img-fluid"
            alt=""
          />
          
        </Carousel>
        <div className="row marMob ">
          <div className="col-12 mt-5 col-lg-7 fondoImg text-md-start col-xl-9">
            <hr />
              <h3 className="text-center fs-6">
                Rosario, 2023 - Iglesia Evangélica Misionera Argentina
              </h3>
              <hr />
            
          </div>
        </div>
      </section>
    </>
  );
};
