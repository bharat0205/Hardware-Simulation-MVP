export default function Toolbar({ onCodeClick, isCodeOpen }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: "#f3f3f3",
      padding: "10px 20px",
      borderRadius: 8,
      margin: "10px 0"
    }}>
      <button title="Undo">⟲</button>
      <button title="Redo">⟳</button>
      <button title="Copy">⧉</button>
      <button title="Delete">🗑️</button>
      <button onClick={onCodeClick} style={{ marginLeft: 20, background: isCodeOpen ? "#cce" : "#eee" }}>
        code&lt;&gt;
      </button>
      <button style={{ marginLeft: 10 }}>Start Simulation</button>
    </div>
  );
}
