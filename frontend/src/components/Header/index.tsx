import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <header className="app-header">
      <Navbar>
        <Container>
            <Nav>
                <Nav.Link href="home">Home</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
