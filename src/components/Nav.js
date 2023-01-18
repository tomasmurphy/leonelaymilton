import { Link } from 'react-router-dom';
function Nav({ titulo, link }) {

  return (

    <nav >
      <Link to={link} className="text-center">
        <h1 className="animate__fadeInDown wow animate__animated animate__delay-0s animate__slower">
          {titulo}
          <span className='violeta animate__fadeInDown wow animate__animated animate__delay-2s'>
          {(titulo==="Casamiento")? " Leonela y Milton"
          :(<i className="bi bi-x-circle"></i>)}
          </span>
          
        </h1>
        
        </Link>
        
      
    </nav>

  );
}

export default Nav;

