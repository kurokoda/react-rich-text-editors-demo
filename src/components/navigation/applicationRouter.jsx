import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { DraftPage } from "../../pages/draftPage";
import { QuillPage } from "../../pages/quillPage";
import { SlatePage } from "../../pages/slatePage";

const ApplicationRouter = () => {
    return (
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
    )
}

export { ApplicationRouter }