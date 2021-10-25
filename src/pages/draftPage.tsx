import { Tab, Tabs } from "react-bootstrap";

import { DraftRichTextEditor } from "../components/draft";
import { DraftTokenExample } from "../components/draft/tokenExample";

const DraftPage = () => {
  return (
    <Tabs defaultActiveKey="simple" id="draft-rte-examples" className="mb-3">
      <Tab eventKey="simple" title="Simple">
        <h3>Draft JS : Simple editor</h3>
        <DraftRichTextEditor />
      </Tab>
      <Tab eventKey="token" title="Token">
        <h3>Draft JS : Token functionality</h3>
        <DraftTokenExample />
      </Tab>
    </Tabs>
  );
};

export { DraftPage };
