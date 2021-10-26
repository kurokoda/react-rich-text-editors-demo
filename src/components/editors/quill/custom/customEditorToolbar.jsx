import "../toolbar.css";

const CustomEditorToolbar = () => (
  <div id="toolbar">
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-image"></button>
    <select className="ql-insertCustomTags">
      <option value="userName"></option>
      <option value="userAddress"></option>
    </select>
  </div>
);

export { CustomEditorToolbar };
