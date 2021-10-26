import "react-quill/dist/quill.snow.css";

import { Component } from "react";
import ReactQuill from "react-quill";

const icons = ReactQuill.Quill.import("ui/icons");
icons["italic"] = '<i class="fa fa-italic" aria-hidden="true"></i>';

class EditorQuillInsertImageComponent extends Component {
  constructor(props) {
    super(props);

    this.setEditorHtml = this.setEditorHtml.bind(this);
    this.addImage = this.addImage.bind(this);
    this.getImageUrl = this.getImageUrl.bind(this);
    this.state = { editorHtml: "" };
    this.modules = {
      toolbar: {
        container: [["bold"], ["image"]],
        icons,
        handlers: {
          image: this.addImage,
        },
      },
    };
  }

  async getImageUrl(file) {
    console.log(file);
    await new Promise((res) => setTimeout(res, 2000));
    return "https://pyxis.nymag.com/v1/imgs/11f/cc2/28165a08cf31e2f49341c39aee26b6bd01-02-troll-face.2x.rhorizontal.w700.jpg";
  }

  addImage() {
    const editor = this.quill.editor;
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const range = editor.getSelection(true);

      editor.insertEmbed(
        range.index,
        "image",
        `${window.location.origin}/images/loaders/placeholder.gif`
      );
      editor.setSelection(range.index + 1);

      const imageUrl = await this.getImageUrl(file);

      editor.deleteText(range.index, 1);
      editor.insertEmbed(range.index, "image", imageUrl);
      editor.setSelection(range.index + 1);
    };
  }

  setEditorHtml(editorHtml) {
    this.setState({ editorHtml });
  }

  render() {
    return (
      <>
        <ReactQuill
          id="react-quill"
          onChange={this.setEditorHtml}
          placeholder={this.props.placeholder}
          modules={this.modules}
          ref={(ref) => {
            this.quill = ref;
          }}
        />
        <pre>{this.state.editorHtml}</pre>
      </>
    );
  }
}

export { EditorQuillInsertImageComponent };
