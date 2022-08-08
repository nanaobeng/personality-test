import { Navbar, Nav } from "react-bootstrap";

const NavbarLayout = () => {
  return (
    <div className="row">
      <div className="col-12 ">
        <Navbar
          fixed="top"
          collapseOnSelect
          className="px-4"
          expand="lg"
          style={{
            backgroundColor: "white",
            borderBottom: "2px solid #eeee",
          }}
        >
          <Navbar.Brand href="/" style={{ color: "black" }}>
            <span style={{ color: "red", borderRight: "2px solid black" }}>
              <b>PE</b> <span style={{ visibility: "hidden" }}>,</span>
            </span>
            <span style={{ fontWeight: "bold" }}>
              {`   `} <span style={{ visibility: "hidden" }}>,</span>Test
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/" style={{ color: "black", fontWeight: "500" }}>
                HOME
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};
export default NavbarLayout;
