import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AdminAddProduct = ({ handleAddProduct }) => {
  // form states
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [remise, setRemise] = useState(0);
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [img5, setImg5] = useState("");
  const [img6, setImg6] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Math.random(),
      name: name,
      price: price,
      remise: remise,
      likes: 0,
      finPrice: price - (price * remise) / 100,
      prodIMG: [img1, img2, img3, img4, img5, img6].filter((el) => el !== ""),
      prodDescriptions: desc,
    };
    handleAddProduct(newProduct);
    handleClose();
  };
  // ---------------------------
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" onSubmit={handleSubmit}>
            <hr />
            <h2>Product Descriptions</h2>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="initial price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="remise"
              value={remise}
              onChange={(e) => setRemise(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="prix final"
              value={price - (price * remise) / 100}
            />

            <hr />
            <h2>Images Section</h2>
            <input
              type="url"
              value={img1}
              onChange={(e) => setImg1(e.target.value)}
              placeholder="image number 1"
              required
            />
            <input
              type="url"
              placeholder="image number 2"
              value={img2}
              onChange={(e) => setImg2(e.target.value)}
            />
            <input
              type="url"
              placeholder="image number 3"
              value={img3}
              onChange={(e) => setImg3(e.target.value)}
            />
            <input
              type="url"
              placeholder="image number 4"
              value={img4}
              onChange={(e) => setImg4(e.target.value)}
            />
            <input
              type="url"
              placeholder="image number 5"
              value={img5}
              onChange={(e) => setImg5(e.target.value)}
            />
            <input
              type="url"
              placeholder="image number 6"
              value={img6}
              onChange={(e) => setImg6(e.target.value)}
            />
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminAddProduct;
