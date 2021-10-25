import { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const icons = ReactQuill.Quill.import("ui/icons");
icons["italic"] = '<i class="fa fa-italic" aria-hidden="true"></i>';
icons["token"] = '<i class="fa fa-link" aria-hidden="true">token</i>';

class QuillRichTextEditor extends Component {
  constructor(props) {
    super(props);

    this.setEditorHtml = this.setEditorHtml.bind(this);
    this.state = { editorHtml: "" };
    this.modules = {
      toolbar: {
        container: [
          [
            { header: "1" },
            { header: "2" },
            { header: [3, 4, 5, 6] },
            { font: [] },
          ],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image", "video"],
          ["token"],
          ["clean"],
          ["code-block"],
        ],
        handlers: {
          image: this.addImage,
          token: this.addTokenString,
        },
      },
    };
  }

  addImage() {
    const editor = this.quill;
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = () => {
      const file = input.files[0];
      console.log("editor", editor);
      // replace this with an async/await call to an image uploader that returns a URL
      const imageUrl =
        "https://pyxis.nymag.com/v1/imgs/11f/cc2/28165a08cf31e2f49341c39aee26b6bd01-02-troll-face.2x.rhorizontal.w700.jpg";
      const range = editor.getSelection(true);

      editor.insertEmbed(
        range.index,
        "image",
        `${window.location.origin}/images/loaders/placeholder.gif`
      );

      editor.setSelection(range.index + 1);

      editor.deleteText(range.index, 1);

      editor.insertEmbed(range.index, "image", imageUrl);
    };
  }

  addTokenString() {
    console.log("Adding token");
  }

  setEditorHtml(editorHtml) {
    this.setState({ editorHtml });
  }

  render() {
    return (
      <>
        <h3>Quill Rich Text Editor</h3>
        <div className="text-editor">
          {this.state.editorHtml}
          <ReactQuill
            id="react-quill"
            onChange={this.setEditorHtml}
            placeholder={this.props.placeholder}
            modules={this.modules}
            ref={(ref) => {
              this.quill = ref;
            }}
          />
        </div>
      </>
    );
  }
}

export { QuillRichTextEditor };
