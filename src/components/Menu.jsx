import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';

function Menu() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
         <button className='botonMenu'  onClick={handleShow}>
                Ver menú
            </button>
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
                       <b>Menú</b> 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src="./img/menu.jpg" className="img-fluid" alt="" />
                   
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Menu;