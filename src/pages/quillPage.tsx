import { Tab, Tabs } from "react-bootstrap";

import { QuillRichTextEditor } from "../components/editors/quill/simple";

const QuillPage = () => {
  return (
    <Tabs defaultActiveKey="simple" className="mb-3" id="quill-rte-examples">
      <Tab eventKey="simple" title="Simple">
        <>
          <h3>Quill JS : Simple editor</h3>
          <QuillRichTextEditor />
        </>
      </Tab>
    </Tabs>
  );
};

export { QuillPage };
