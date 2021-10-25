import React from "react";
import { DraftRichTextEditor } from "./components/draft/simple";
import { QuillRichTextEditor } from "./components/quill/custom";
import { SlateRichTextEditor } from "./components/slate";
import styled from "styled-components";

const ApplicationContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: 20px 1rem;
`;

const RTEContainer = styled.section`
  margin-bottom: 10px;
`;

function App() {
  return (
    <ApplicationContainer>
      <RTEContainer>
        <DraftRichTextEditor />
      </RTEContainer>
      <RTEContainer>
        <QuillRichTextEditor />
      </RTEContainer>
      <RTEContainer>
        <SlateRichTextEditor />
      </RTEContainer>
    </ApplicationContainer>
  );
}

export default App;
