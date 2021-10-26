import "react-quill/dist/quill.snow.css";

import React from "react";
import ReactQuill from "react-quill";
import { CustomEditorToolbar } from "./customEditorToolbar";

const icons = ReactQuill.Quill.import("ui/icons");
icons["italic"] = '<i class="fa fa-italic" aria-hidden="true"></i>';

async function getImageUrl(file) {
  console.log(file);
  await new Promise((res) => setTimeout(res, 2000));
  return "https://pyxis.nymag.com/v1/imgs/11f/cc2/28165a08cf31e2f49341c39aee26b6bd01-02-troll-face.2x.rhorizontal.w700.jpg";
}

function addImage() {
  const input = document.createElement("input");

  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  input.onchange = async () => {
    const file = input.files[0];
    const range = this.quill.getSelection(true);

    this.quill.insertEmbed(
      range.index,
      "image",
      `${window.location.origin}/images/loaders/placeholder.gif`
    );
    this.quill.setSelection(range.index + 1);

    const imageUrl = await getImageUrl(file);

    this.quill.deleteText(range.index, 1);
    this.quill.insertEmbed(range.index, "image", imageUrl);
    this.quill.setSelection(range.index + 1);
  };
}

function addToken(token) {
  const wrappedToken = `{{${token}}}`;

  const cursorPosition = this.quill.getSelection().index;
  this.quill.insertText(cursorPosition, wrappedToken);
  this.quill.setSelection(cursorPosition + wrappedToken.length);
}

class CustomEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: "" };
    this.onChange = this.onChange.bind(this);
    this.modules = {
      toolbar: {
        container: "#toolbar",
        icons,
        handlers: {
          image: addImage,
          token: addToken,
        },
      },
    };
  }

  onChange(html) {
    this.setState({ editorHtml: html });
  }

  render() {
    return (
      <>
        <CustomEditorToolbar />
        <ReactQuill
          onChange={this.onChange}
          placeholder="Enter your text"
          modules={this.modules}
        />
        <pre>{this.state.editorHtml}</pre>
      </>
    );
  }
}

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
CustomEditor.formats = [
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

export { CustomEditor };
