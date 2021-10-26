import "../toolbar.css";

const InsertTokenToolbar = () => (
  <div id="toolbar">
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <select className="ql-insertCustomTags">
      <option value="userName"></option>
      <option value="userAddress"></option>
    </select>
  </div>
);

export { InsertTokenToolbar };
