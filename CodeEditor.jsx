import Editor from "@monaco-editor/react";

export default function CodeEditor({ code, setCode }) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Editor
        height="100%"
        defaultLanguage="cpp"
        value={code}
        onChange={setCode}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          automaticLayout: true
        }}
      />
    </div>
  );
}
