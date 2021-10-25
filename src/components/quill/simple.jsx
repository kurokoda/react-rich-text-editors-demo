import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const imageUrl =
      "https://pyxis.nymag.com/v1/imgs/11f/cc2/28165a08cf31e2f49341c39aee26b6bd01-02-troll-face.2x.rhorizontal.w700.jpg";

const placeHolderUrl = `${window.location.origin}/images/loaders/placeholder.gif`;

const icons = ReactQuill.Quill.import("ui/icons");
icons["asyncImage"] = '<span aria-hidden="true">async</span>';

const QuillRichTextEditor = () => {
  const [editorHtml, setEditorHtml] = useState(null);

  const quill = useRef(null);

  const getImageUrlAsync = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return imageUrl;
  };

  const addImageAsync = async () => {
    const editor = quill.current.editor;
    const range = editor.getSelection(true);

    editor.insertEmbed(range.index, "image", placeHolderUrl);

    const imageUrl = await getImageUrlAsync();

    // editor.deleteText(range.index, 1);
    editor.insertEmbed(range.index, "image", imageUrl);
    editor.setSelection(range.index + 1);
  };

  const modules = {
    toolbar: {
      container: [["asyncImage"]],
      handlers: {
        asyncImage: addImageAsync,
      },
    },
  };

  return (
    <>
      <ReactQuill
        modules={modules}
        onChange={setEditorHtml}
        ref={quill}
        theme="snow"
        value={editorHtml}
      />
      <button onClick={addImageAsync}>Async</button>
    </>
  );
};

export { QuillRichTextEditor };
