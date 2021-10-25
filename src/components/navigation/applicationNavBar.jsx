import { Nav } from "react-bootstrap";

const ApplicationNavBar = () => {
  return (
    <Nav activeKey="/draft">
      <Nav.Item>
        <Nav.Link href="/draft">Draft</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/quill">Quill</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/slate">Slate</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
export { ApplicationNavBar };
