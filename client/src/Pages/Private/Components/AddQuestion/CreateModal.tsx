import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import CreateForm from "./CreateForm";

const CreateModal = () => {
  const [error, setError] = useState(false);
  const [question, setQuestion] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="row">
        <div className="col-12 text-right">
          <span onClick={handleShow} className=" shadow btn btn-success">
            Add Question
          </span>
        </div>
      </div>

      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: "#353535", color: "white" }}>
          <Modal.Title>Add Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateForm />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateModal;
