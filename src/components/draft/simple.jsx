import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from "draft-js";
import React from "react";
import { BlockStyleControls } from "./shared/blockStyleControls";
import { InlineStyleControls } from "./shared/InlineStyleControls";
import "./style.css";

class DraftRichTextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };

    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({ editorState });

    this.getBlockStyle = this.getBlockStyle.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.mapKeyToEditorCommand = this.mapKeyToEditorCommand.bind(this);
    this.toggleBlockType = this.toggleBlockType.bind(this);
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);

    this.styleMap = {
      CODE: {
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
      },
    };
  }

  getBlockStyle(block) {
    switch (block.getType()) {
      case "blockquote":
        return "RichEditor-blockquote";
      default:
        return null;
    }
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  mapKeyToEditorCommand(event) {
    if (event.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        event,
        this.state.editorState,
        4 /* maxDepth */
      );
      if (newEditorState !== this.state.editorState) {
        this.onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(event);
  }

  toggleBlockType(blockType) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  }

  toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  }

  render() {
    return (
      <>
        <h3>Draft Rich Text Editor</h3>
        <div className="RichEditor-root">
          <BlockStyleControls
            editorState={this.state.editorState}
            onToggle={this.toggleBlockType}
          />
          <InlineStyleControls
            editorState={this.state.editorState}
            onToggle={this.toggleInlineStyle}
          />
          {/* <CustomStyleControls
            editorState={this.state.editorState}
            onToggle={this.toggleCustomStyle}
          /> */}
          <div className="RichEditor-editor" onClick={this.focus}>
            <Editor
              blockStyleFn={this.getBlockStyle}
              customStyleMap={this.styleMap}
              editorState={this.state.editorState}
              handleKeyCommand={this.handleKeyCommand}
              keyBindingFn={this.mapKeyToEditorCommand}
              onChange={this.onChange}
              placeholder="Tell a story..."
              ref="editor"
              spellCheck={true}
            />
          </div>
        </div>
      </>
    );
  }
}

export { DraftRichTextEditor };
