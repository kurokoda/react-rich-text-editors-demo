import React from "react";
import { DraftJSRichTextEditor } from "./components/draftJS";
import { QuillRichTextEditor } from "./components/quill";
import { SlateRichTextEditor } from "./components/slate";

function App() {
  return (
    <>
      <DraftJSRichTextEditor />
      <QuillRichTextEditor />
      <SlateRichTextEditor />
    </>
  );
}

export default App;
