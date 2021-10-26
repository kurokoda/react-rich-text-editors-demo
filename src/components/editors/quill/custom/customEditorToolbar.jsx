import "../toolbar.css";

const CustomEditorToolbar = () => (
  <div id="toolbar">
    <select className="ql-header">
      <option value="1"></option>
      <option value="2"></option>
      <option value="3"></option>
      <option value="4"></option>
      <option value="5"></option>
      <option value="6"></option>
    </select>
    <button className="ql-list" value="ordered"></button>
    <button className="ql-list" value="bullet"></button>
    <button className="ql-indent" value="-1"></button>
    <button className="ql-indent" value="+1"></button>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-image"></button>
    <select className="ql-token">
      <option value="userName"></option>
      <option value="userAddress"></option>
    </select>
  </div>
);

export { CustomEditorToolbar };
