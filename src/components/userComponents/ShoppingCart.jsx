import React, { useState } from "react";
import { Button, Offcanvas, Table } from "react-bootstrap";
import CartItem from "./CartItem";

const ShoppingCart = ({
  cart,
  handleIncQunatity,
  handleDecQunatity,
  handleCartDel,
}) => {
  let calculTotal = () => {
    let x = cart.map((el) => el.finalPrice).reduce((a, b) => a + b);
    return x;
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {" "}
      <Button
        variant="outline-dark"
        style={{ margin: "5px" }}
        onClick={handleShow}
      >
        Panier
      </Button>
      <Offcanvas
        placement="end"
        style={{ width: "1200px" }}
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length === 0 ? (
            <h4>Cart is empty</h4>
          ) : (
            <Table bordered={true} striped={true}>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Final Price</th>
                <th>DELETE</th>
              </tr>
              {cart.map((el) => (
                <CartItem
                  handleIncQunatity={handleIncQunatity}
                  handleDecQunatity={handleDecQunatity}
                  key={el.id}
                  el={el}
                  handleCartDel={handleCartDel}
                />
              ))}
              <tr>
                <th>Total</th>
                <th>{calculTotal()} TND</th>
              </tr>
            </Table>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default ShoppingCart;
