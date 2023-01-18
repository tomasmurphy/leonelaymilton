import Nav from "./Nav";
import { AnimateHome } from "./AnimateHome";
import Loader from "./Loader";
import { useState } from "react";
import Head from "./Head";

const Home = () => {
  window.scrollTo(0, 0);
  const [isLoading, setIsLoading] = useState(true);
  const onLoad = () => {
    setIsLoading(false);
  };
  setTimeout(() => {
    onLoad();
  }, 3000);
  return (
    <>
      <Head title="Casamiento Leonela y Milton" />
      <Nav titulo="Casamiento" link="/" />
      {isLoading ? <Loader></Loader> : ""}
      <section id="experiencias">
        <div className="row marMob">
          <div className="cajaDeCajas">
            <AnimateHome />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
