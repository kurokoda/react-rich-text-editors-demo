import { useState } from "react";

import { EditorState, Modifier, Entity } from "draft-js";

import { Editor, createPlugin, pluginUtils } from "draft-extend";

import { convertToHTML, convertFromHTML } from "draft-convert";

const { entityStrategy } = pluginUtils;

const TOKEN_TYPE = "token";

const TokenDecorator = {
  strategy: entityStrategy(TOKEN_TYPE),
  component: ({children}) => {
    return (
      <span
        style={{
          background: "#de6262",
          borderRadius: "2px",
          color: "white",
          padding: "2px",
        }}
      >
        {children}
      </span>
    );
  },
};

const entityToHTML = (entity, originalText) => {
  if (entity.type === TOKEN_TYPE) {
    return `{{ ${entity.data.value} }}`;
  }
  return originalText;
};

const textToEntity = (text) => {
  const results = [];
  const pattern = /\{\{\s?(\w+)\s?\}\}/gi;
  text.replace(pattern, (match, value, offset) => {
    results.push({
      offset,
      length: match.length,
      entity: Entity.create(TOKEN_TYPE, "IMMUTABLE", { value }),
      result: value,
    });
  });

  return results;
};

const TokenButton = ({ editorState, onChange }) => {
  const insertToken = () => {
    const contentState = Modifier.insertText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      "Token Label",
      null,
      Entity.create(TOKEN_TYPE, "IMMUTABLE", {
        value: "token",
      })
    );

    onChange(EditorState.push(editorState, contentState, "insert-characters"));
  };

  return <button onClick={insertToken}>Insert Token</button>;
};

const plugin = createPlugin({
  decorators: [TokenDecorator],
  entityToHTML,
  textToEntity,
});

const RichTextEditor = plugin(Editor);
const toHTML = plugin(convertToHTML);
const fromHTML = plugin(convertFromHTML);

const DraftTokenExample = () => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(fromHTML("<div>Token example</div>"))
  );

  const onChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <>
      <TokenButton editorState={editorState} onChange={onChange} />
      <RichTextEditor editorState={editorState} onChange={onChange} />
      <pre>{toHTML(editorState.getCurrentContent())}</pre>
    </>
  );
};

export { DraftTokenExample };
