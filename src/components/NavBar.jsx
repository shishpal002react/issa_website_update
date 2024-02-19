import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export const NavBar = () => {
  return (
    <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
      <Navbar
        style={{ backgroundColor: "white", color: "red" }}
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/logo.png"
              alt="logo"
              style={{ height: "50px", maxWidth: "145px", width: "auto" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            
            <Nav>
              <Nav className="me-auto">
                <NavDropdown
                  title="Support"
                  id="collapsible-nav-dropdown"
                  className="custom-dropdown-title"
                >
                  <NavDropdown.Item href="/support-faq">
                    Support FAQ
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/support-downloads">
                    Downloads
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item href="/support-notes">
                    OasisNotes Support
                  </NavDropdown.Item> */}
                  <NavDropdown.Item href="/support-account-management">
                    Account Management
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  style={{ color: "#1A9FB2", fontWeight: "600" }}
                  href="/pricing"
                >
                  Pricing
                </Nav.Link>
                <NavDropdown
                  title="About"
                  id="collapsible-nav-dropdown"
                  className="custom-dropdown-title"
                >
                  <NavDropdown.Item href="/about/clinical-advisors">
                  OasisNotes
                  </NavDropdown.Item>
                  {/* href="/about/partners" */}
                  <NavDropdown.Item >
                    Partners comming soon
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  style={{ color: "#1A9FB2", fontWeight: "600" }}
                  href="/resources"
                >
                  Resources
                </Nav.Link>
                <Nav.Link
                  style={{ color: "#1A9FB2", fontWeight: "600" }}
                  href="/contact-us"
                >
                  Contact
                </Nav.Link>

                <NavDropdown
                  title="Login"
                  id="collapsible-nav-dropdown"
                  className="custom-dropdown-title"
                >
                  <NavDropdown.Item href="https://65d33e4958414103e0e69fc2--hilarious-ganache-1743e6.netlify.app/">
                    Patient Panel
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://issa-employee-panel.vercel.app/">
                    Employee Panel
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item href="/support-notes">
                    OasisNotes Support
                  </NavDropdown.Item> */}
                  <NavDropdown.Item href="https://issa-admin-api-ravindra.vercel.app/">
                    Admin Panel
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  style={{
                    color: "white",
                    fontWeight: "500",
                    backgroundColor: "#1C5877",
                    borderRadius: "50px",
                    padding: "0.5rem 1.5rem",
                    textAlign: "center",
                  }}
                  href="/demo-request"
                >
                  Request Demo
                </Nav.Link>

              </Nav>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
