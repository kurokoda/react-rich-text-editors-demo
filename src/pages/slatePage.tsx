import { Tab, Tabs } from "react-bootstrap";

import { SlateRichTextEditor } from "../components/slate";

const SlatePage = () => {
  return (
    <Tabs defaultActiveKey="simple" id="slate-rte-examples" className="mb-3">
      <Tab eventKey="simple" title="Simple">
        <>
        <h3>Slate JS : Simple editor</h3>
          <SlateRichTextEditor />
        </>
      </Tab>
    </Tabs>
  );
};

export { SlatePage };
