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
    this.addImage = this.addImage.bind(this);
    this.addTokenString = this.addTokenString.bind(this);
    this.delay = this.delay.bind(this);
    this.state = { editorHtml: "" };
    this.modules = {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6] }, { font: [] }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image", "video"],
          [{ token: "token" }],
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

  async delay(duration) {
    await new Promise((res) => setTimeout(res, duration));
    return "Hell Yes";
  }

  addImage() {
    const editor = this.quill.editor;
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
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

      await this.delay(3000);

      editor.deleteText(range.index, 1);
      editor.insertEmbed(range.index, "image", imageUrl);
      editor.setSelection(range.index + 1);
    };
  }

  addTokenString() {
    const editor = this.quill.editor;
    const range = editor.getSelection(true);
    editor.insertText(range.index, "{{token}}");
  }

  setEditorHtml(editorHtml) {
    this.setState({ editorHtml });
  }

  render() {
    return (
      <>
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
          <button onClick={this.addImage}>Add Image</button>
        </div>
      </>
    );
  }
}

export { QuillRichTextEditor };
