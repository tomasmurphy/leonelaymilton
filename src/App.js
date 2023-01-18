import Main from './components/Main';
import NavMenu from './components/NavMenu';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Tarjeta from './components/Tarjeta';
const App = () => {
    const helmetContext = {};
    return (
        <HelmetProvider context={helmetContext}>
            <BrowserRouter>
            <Tarjeta />
                <NavMenu />
                <Main />
            </BrowserRouter>
        </HelmetProvider>
    );
};


export default App;