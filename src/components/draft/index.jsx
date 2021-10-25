import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from "draft-js";
import { useRef, useState } from "react";
import { BlockStyleControls } from "./shared/blockStyleControls";
import { InlineStyleControls } from "./shared/InlineStyleControls";
import "./style.css";

const DraftRichTextEditor = (props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const styleMap = {
    CODE: {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2,
    },
  };

  const editor = useRef();

  const onChange = (editorState) => {
    setEditorState(editorState);
  };

  const focus = () => {
    editor.current.focus();
  };

  const getBlockStyle = (block) => {
    switch (block.getType()) {
      case "blockquote":
        return "RichEditor-blockquote";
      default:
        return null;
    }
  };

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return true;
    }
    return false;
  };

  const mapKeyToEditorCommand = (event) => {
    if (event.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        event,
        editorState,
        4 /* maxDepth */
      );
      if (newEditorState !== editorState) {
        onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(event);
  };

  const toggleBlockType = (blockType) => {
    onChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle) => {
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  return (
    <>
      <h3>Draft Rich Text Editor</h3>
      <div className="RichEditor-root">
        <BlockStyleControls
          editorState={editorState}
          onToggle={toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={toggleInlineStyle}
        />
        <div className="RichEditor-editor" onClick={focus}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={handleKeyCommand}
            keyBindingFn={mapKeyToEditorCommand}
            onChange={onChange}
            placeholder="Tell a story..."
            ref={editor}
            spellCheck={true}
          />
        </div>
      </div>
    </>
  );
};

export { DraftRichTextEditor };
