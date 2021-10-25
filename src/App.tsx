import { Nav } from "react-bootstrap";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import { DraftPage } from "./pages/draftPage";
import { QuillPage } from "./pages/quillPage";
import { SlatePage } from "./pages/slatePage";
import { ApplicationContainer } from "./styledComponents/applicationContainer";

function App() {
  return (
    <ApplicationContainer>
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
      <BrowserRouter>
        <Switch>
          <Route path="/draft">
            <DraftPage />
          </Route>
          <Route path="/quill">
            <QuillPage />
          </Route>
          <Route path="/slate">
            <SlatePage />
          </Route>
          <Route path="/">
            <Redirect to="/draft" />
          </Route>
        </Switch>
      </BrowserRouter>
    </ApplicationContainer>
  );
}

export default App;
