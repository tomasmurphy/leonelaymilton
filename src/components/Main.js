import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nosotras from './nosotras/Nosotras';
import Home from './Home'
import Proyectos from './proyectos/Proyectos';
import Residencias from './residencias/Residencias';
import Muestras from './muestras/Muestras';
import Bios from './nosotras/Bios';
import Proyecto from './nosotras/Proyecto';
import Contacto from './nosotras/Contacto';
import Gracias from './nosotras/Gracias';
import { Fotogramas } from './proyectos/Fotogramas';
import { Jacinto } from './proyectos/Jacinto';
import { Herbario } from './proyectos/Herbario';
import { RamitaMuestra } from './muestras/RamitaMuestra';
import { LaboratorioAmbulante } from './muestras/LaboratorioAmbulante';
import { HerbarioMuestra } from './muestras/HerbarioMuestra';
import { EspacioAnalogico } from './residencias/EspacioAnalogico';
import { Rio } from './residencias/Rio';
import {Mudar} from './residencias/Mudar';

const Main = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/informacion' element={<Proyectos />} />
                <Route path='/regalos' element={<Residencias />} />
                <Route path='/fotos' element={<Muestras />} />
                <Route path='/nosotras' element={<Nosotras />} />
                <Route path='nosotras/biografias' element={<Bios />} />
                <Route path='nosotras/proyecto' element={<Proyecto />}/>
                <Route path='nosotras/contacto' element={<Contacto />}/>
                <Route path='nosotras/contacto/mensaje_enviado' element={<Gracias />}/>
                <Route path='proyectos/fotogramas_botanicos' element={<Fotogramas />} />
                <Route path='proyectos/jacinto' element={<Jacinto />}/>
                <Route path='proyectos/herbario_domestico' element={<Herbario />}/>
                <Route path='fotos/civil' element={<RamitaMuestra />} />
                <Route path='fotos/iglesia' element={<LaboratorioAmbulante />} />
                <Route path='fotos/brunch' element={<HerbarioMuestra />} />
                <Route path='residencias/mudar' element={<Mudar />} />
                <Route path='residencias/espacio_analogico' element={<EspacioAnalogico />} />
                <Route path='residencias/ir_al_rio' element={<Rio />} />
            </Routes>
        </>
    );
};

export default Main;
