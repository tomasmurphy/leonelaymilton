import Nav from "../Nav";
import Carousel from "../Carousel";
import Head from "../Head";

export const HerbarioMuestra = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
      <Head title="Brunch" />
      <Nav titulo="Brunch" link="/fotos" />
      <section
        id="about_me"
        className="mb-5  animate__fadeInDown wow animate__animated animate__delay-0s animate__slower"
      >
        <Carousel settings={settings}>
          <img
            src="../img/lym (33).jpg"
            className="img-fluid"
            alt=""
          />
          <div>
          <img
            src="../img/lym (32).jpg"
            className="mb-5 img-fluid"
            alt=""
          />
          <img
            src="../img/lym (34).jpg"
            className="mt-5 img-fluid"
            alt=""
          />
          </div>
          <div>
          <img
            src="../img/lym (35).jpg"
            className="mb-5 img-fluid"
            alt=""
          />
          <img
            src="../img/lym (36).jpg"
            className="mt-5 img-fluid"
            alt=""
          />
          </div>
          
          <img
            src="../img/lym (37).jpg"
            className="mb-5 img-fluid"
            alt=""
          />
          <img
            src="../img/lym (38).jpg"
            className="mb-5 img-fluid"
            alt=""
          />
          <img
            src="../img/lym (40).jpg"
            className="mb-5 img-fluid"
            alt=""
          />
          <img
            src="../img/lym (41).jpg"
            className="mb-5 img-fluid"
            alt=""
          />
          <img
            src="../img/lym (42).jpg"
            className="mb-5 img-fluid"
            alt=""
          />
          <img
            src="../img/lym (43).jpg"
            className="mb-5 img-fluid"
            alt=""
          />
          <img
            src="../img/lym (44).jpg"
            className="mb-5 img-fluid"
            alt=""
          />
          
        </Carousel>
        <div className="row marMob ">
          <div className="col-12 mt-5 col-lg-7 fondoImg text-md-start col-xl-9">
            <hr />
              <h3 className="text-center fs-6">
                Rosario, 2023 - Los Jardines
              </h3>
              <hr />
            
          </div>
        </div>
      </section>
    </>
  );
};
