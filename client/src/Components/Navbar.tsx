import { Navbar, Nav } from "react-bootstrap";
import { isAuthenticated } from "../Pages/Auth/APIs/APIs";
const NavbarLayout = () => {
  const { token, user } = isAuthenticated();
  return (
    <div className="row">
      <div className="col-12 ">
        <Navbar
          collapseOnSelect
          className="px-4"
          expand="lg"
          style={{
            backgroundColor: "#0D0D0D",
            borderBottom: "1px solid #eeee",
          }}
        >
          <Navbar.Brand href="/" style={{ color: "black" }}>
            <span style={{ color: "#00AA45", borderRight: "2px solid white" }}>
              <b>PE</b> <span style={{ visibility: "hidden" }}>,</span>
            </span>
            <span style={{ fontWeight: "bold", color: "white" }}>
              {`   `} <span style={{ visibility: "hidden" }}>,</span>Test
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/" style={{ color: "white", fontWeight: "bold" }}>
                Home
              </Nav.Link>
              {isAuthenticated() && (
                <Nav.Link
                  href="/admin/dashboard"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Dashboard
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};
export default NavbarLayout;
