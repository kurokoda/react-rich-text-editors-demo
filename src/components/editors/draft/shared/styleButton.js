const StyleButton = ({ active, label, onToggle, style }) => {
  let className = "RichEditor-styleButton";
  if (active) {
    className += " RichEditor-activeButton";
  }

  const onToggleLocal = (event) => {
    event.preventDefault();
    onToggle(style);
  };

  return (
    <span className={className} onMouseDown={onToggleLocal}>
      {label}
    </span>
  );
};

export { StyleButton };
