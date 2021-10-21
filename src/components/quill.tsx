import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuillRichTextEditor = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <section>Quill Rich Text Editor</section>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </>
  );
};

export { QuillRichTextEditor };
