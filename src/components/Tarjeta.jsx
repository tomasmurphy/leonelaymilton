import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';

function Tarjeta() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
         
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size= "md"
                centered
                closeButton
            >
                
                <Modal.Body onClick={handleClose}>
                    <img  src="./img/tarjeta.jpg" className="img-fluid" alt="" />
                    
                    <p className="text-center mb-0"><button className='botonMenu'>
                Voy!
            </button></p>     
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Tarjeta;