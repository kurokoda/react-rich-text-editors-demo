import { Tab, Tabs } from "react-bootstrap";

import { EditorQuillInsertImageComponent } from "../components/editors/quill/insertImage/insertImageEditor";
import { EditorQuillInsertTokenComponent } from "../components/editors/quill/insertToken/insertTokenEditor";

const QuillPage = () => {
  return (
    <Tabs defaultActiveKey="insertImageComponent" className="mb-3" id="quill-rte-examples">
      <Tab eventKey="insertImageComponent" title="Insert Image (C)">
        <>
          <h5>Quill JS : Insert Image (React Component)</h5>
          <EditorQuillInsertImageComponent />
        </>
      </Tab>
      <Tab eventKey="insertToken" title="Insert Token">
        <>
          <h5>Quill JS : Insert Token (React Component)</h5>
          <EditorQuillInsertTokenComponent />
        </>
      </Tab>
    </Tabs>
  );
};

export { QuillPage };
