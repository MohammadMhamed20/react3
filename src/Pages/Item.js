import React, { useState } from "react";
import "./Item.css";
import { DeleteItem } from "../firebase_functions/handleDeleteItem";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal({ show, onHide, data }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <h5>{data.data().name}</h5>
      <img src={data.data().imgUrl} />
      <h6>price: {data.data().price}</h6>
      <h6>category: {data.data().category}</h6>
      <h6>IsIn: {data.data().inventory}</h6>
    </Modal>
  );
}

function Item({ data }) {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="item__container">
      <h5>{data.data().name}</h5>
      <img src={data.data().imgUrl} />
      <h6>price: {data.data().price}</h6>
      <h6>category: {data.data().category}</h6>
      <h6>IsIn: {data.data().inventory}</h6>
      <div className="action__buttons">
        <button
          className="action__buton"
          onClick={() => {
            DeleteItem(data);
          }}
        >
          delete
        </button>
        <button
          className="action__buton"
          onClick={() => {
            navigate("/updateitem", {
              state: {
                data: data.data(),
                id: data.id,
              },
            });
          }}
        >
          Update
        </button>
        <button
          className="action__buton"
          onClick={() => {
            setModalShow(true);
          }}
        >
          View Item
        </button>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={data}
      />
    </div>
  );
}

export default Item;
