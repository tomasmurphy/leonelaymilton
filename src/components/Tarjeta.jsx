import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Cuenta from './Cuenta'
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
            >
                <Modal.Header closeButton>
                    <Modal.Title className="invitacion">
                       <b>Invitacion</b> 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src="./img/tarjeta.jpg" className="img-fluid" alt="" />
                    <p className="text-center mt-3"><Cuenta className ="mx-0"></Cuenta></p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Tarjeta;