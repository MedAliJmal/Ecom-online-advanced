import React, { useState } from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import AdminEditProduct from "./AdminEditProduct";

const AdminProductCard = ({ el, handleDelete, handleEditProd }) => {
  const [more, setMore] = useState(false);
  return (
    <div>
      <div style={{ margin: "15px" }}>
        <Card style={{ width: "18rem" }}>
          <Carousel controls={false} indicators={false} interval={2000}>
            {el.prodIMG.map((link, index) => (
              <Carousel.Item>
                <img width={"100%"} src={link} alt={index} key={index} />
              </Carousel.Item>
            ))}
          </Carousel>
          <Card.Body>
            <Card.Title style={{ height: "120px" }}>{el.name}</Card.Title>
            <div>
              <Card.Text style={{ minHeight: "80px" }}>
                {more
                  ? el.prodDescriptions
                  : el.prodDescriptions.slice(0, 100) + "..."}
              </Card.Text>
              <h6
                onClick={() => setMore(!more)}
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                {more ? "Show less" : "Show more"}
              </h6>
            </div>
            <Card.Text style={{ height: "35px" }}>
              Previous price : {el.price} TND
            </Card.Text>
            <Card.Text style={{ color: "red", height: "35px" }}>
              Discount : {el.remise} %
            </Card.Text>
            <Card.Text style={{ color: "green", height: "35px" }}>
              {el.finPrice} TND
            </Card.Text>

            <Button variant="danger" onClick={() => handleDelete(el.id)}>
              DELETE
            </Button>
            <AdminEditProduct el={el} handleEditProd={handleEditProd} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AdminProductCard;
