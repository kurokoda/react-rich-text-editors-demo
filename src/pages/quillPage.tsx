import { Tab, Tabs } from "react-bootstrap";
import { CustomEditor } from "../components/editors/quill/custom/customEditor";

const QuillPage = () => {
  return (
    <Tabs defaultActiveKey="custom" className="mb-3" id="quill-rte-examples">
       <Tab eventKey="custom" title="Custom Editor">
        <>
          <h5>Quill JS : Custom Editor</h5>
          <CustomEditor />
        </>
      </Tab>
    </Tabs>
  );
};

export { QuillPage };
