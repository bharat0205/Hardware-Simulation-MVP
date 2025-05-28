import React, { useState } from "react";
import LogoBox from "./components/LogoBox";
import Toolbar from "./components/Toolbar";
import DesignArea from "./components/DesignArea";
import ComponentPanel from "./components/ComponentPanel";
import CodeEditor from "./components/CodeEditor";
import ResizablePanel from "./components/ResizablePanel";

const sampleCode = `// C++ code
void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
}
void loop()
{
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}`;

export default function App() {
  const [codeOpen, setCodeOpen] = useState(false);
  const [code, setCode] = useState(sampleCode);
  const [componentPanelOpen, setComponentPanelOpen] = useState(true);

  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      height: "100vh",
      background: "#f5f6fa"
    }}>
      {/* Left Sidebar */}
      <div style={{
        width: 70,
        background: "#f7f7f7",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRight: "1px solid #ddd"
      }}>
        <LogoBox />
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Toolbar onCodeClick={() => setCodeOpen(v => !v)} isCodeOpen={codeOpen} />
        <div style={{ flex: 1, display: "flex", position: "relative" }}>
          <DesignArea />
          {/* Code Editor (resizable, overlayed on right) */}
          {codeOpen && (
            <div style={{
              position: "absolute",
              top: 0, right: componentPanelOpen ? 310 : 0, height: "100%", zIndex: 1000,
              background: "#222", borderLeft: "2px solid #888", boxShadow: "-2px 0 8px #0002"
            }}>
              <ResizablePanel direction="horizontal" min={250} max={600} defaultSize={400}>
                <CodeEditor code={code} setCode={setCode} />
              </ResizablePanel>
            </div>
          )}
        </div>
      </div>

      {/* Right Component Panel (resizable) */}
      {componentPanelOpen && (
        <ResizablePanel direction="horizontal" min={200} max={400} defaultSize={300}>
          <ComponentPanel />
        </ResizablePanel>
      )}
      {/* Collapse/Expand Button */}
      <button
        onClick={() => setComponentPanelOpen(v => !v)}
        style={{
          position: "absolute",
          right: componentPanelOpen ? 310 : 0,
          top: 80,
          zIndex: 2000,
          padding: "2px 8px",
          borderRadius: 4,
          background: "#eee",
          border: "1px solid #ccc",
          cursor: "pointer"
        }}>
        {componentPanelOpen ? "⮞" : "⮜"}
      </button>
    </div>
  );
}
