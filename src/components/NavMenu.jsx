import { NavLink } from "react-router-dom";

function NavMenu() {
  return (
    <div className="navMenu">
      <div className="navbarContainer">
        
        <div className="botonera">
          <NavLink
            to={"/informacion"}
            className="btn wow animate__animated animate__flip animate__delay-0s"
          >
            <i
              className="bi bi-info-circle"
              data-toggle="tooltip"
              data-placement="right"
              title="info"
            >
              {" "}
            </i>
          </NavLink>
          <NavLink
            to={"/regalos"}
            className="btn wow animate__animated animate__flip animate__delay-1s"
          >
            <i className="bi bi-gift"
            data-toggle="tooltip"
            data-placement="right"
            title="regalos"> </i>
                   </NavLink>
          <NavLink
            to={"/fotos"}
            className="btn wow animate__animated animate__flip animate__delay-2s"
          >
            <i className="bi bi-images" data-toggle="tooltip"
              data-placement="right"
              title="Fotos"> </i>
            
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
