import React from "react";
import ReactQuill from "react-quill";

import { InsertTokenToolbar } from "./insertTokenToolbar";

function insertCustomTags(token) {
  const wrappedToken = `{{${token}}}`;

  const cursorPosition = this.quill.getSelection().index;
  this.quill.insertText(cursorPosition, wrappedToken);
  this.quill.setSelection(cursorPosition + wrappedToken.length);
}

/*
 * Editor component with custom toolbar and content containers
 */
class EditorQuillInsertTokenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  render() {
    return (
      <div className="text-editor">
        <InsertTokenToolbar />
        <ReactQuill
          onChange={this.handleChange}
          placeholder="Enter your text"
          modules={EditorQuillInsertTokenComponent.modules}
        />
        <pre>{this.state.editorHtml}</pre>
      </div>
    );
  }
}

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
EditorQuillInsertTokenComponent.modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      insertCustomTags: insertCustomTags,
    },
  },
};

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
EditorQuillInsertTokenComponent.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
];

export { EditorQuillInsertTokenComponent };
