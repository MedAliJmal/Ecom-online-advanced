import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import ShoppingCart from "../userComponents/ShoppingCart";

const Entete = ({
  user,
  handleRole,
  cart,
  handleIncQunatity,
  handleCartDel,
  handleDecQunatity,
  search,
  handleSearch,
}) => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">ECOM-ONLINE</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>

            <Form.Select
              style={{ width: "200px", margin: "5px" }}
              value={user.role}
              onChange={(e) => handleRole(e.target.value)}
            >
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </Form.Select>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            {user.role === "User" ? (
              <ShoppingCart
                cart={cart}
                handleIncQunatity={handleIncQunatity}
                handleDecQunatity={handleDecQunatity}
                handleCartDel={handleCartDel}
              />
            ) : null}

            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={user.imgUrl} alt="profpic" height={"35px"} />
              <h4>{user.name}</h4>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Entete;
