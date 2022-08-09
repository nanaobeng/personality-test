import Modal from "react-bootstrap/Modal";
import React, { FC, useEffect, useState } from "react";
import UpdateForm from "./UpdateForm";
import { getQuestion } from "./APIs/APIs";

interface Props {
  id: number;
}
const UpdateModal: FC<Props> = ({ id }) => {
  const [error, setError] = useState(false);
  const [question, setQuestion] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const retrieveQuestion = (id: number) => {
    getQuestion(id).then((data: any) => {
      if (data.error) {
        setError(data.error);
      } else {
        setQuestion(data);
      }
    });
  };

  useEffect(() => {
    id && retrieveQuestion(id);
  }, [id]);

  return (
    <>
      <i
        onClick={handleShow}
        className="btn btn-sm btn-success icofont-edit"
      ></i>

      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: "#353535", color: "white" }}>
          <Modal.Title>Update Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>{id && <UpdateForm question={question} />}</Modal.Body>
      </Modal>
    </>
  );
};

export default UpdateModal;
