import React, { useRef, useState } from "react";

export default function ResizablePanel({ direction = "horizontal", min = 200, max = 500, children, defaultSize = 300 }) {
  const [size, setSize] = useState(defaultSize);
  const dragging = useRef(false);

  const onMouseDown = () => {
    dragging.current = true;
    document.body.style.cursor = direction === "horizontal" ? "ew-resize" : "ns-resize";
  };

  const onMouseMove = (e) => {
    if (!dragging.current) return;
    if (direction === "horizontal") {
      let newSize = window.innerWidth - e.clientX;
      if (newSize < min) newSize = min;
      if (newSize > max) newSize = max;
      setSize(newSize);
    } else {
      let newSize = window.innerHeight - e.clientY;
      if (newSize < min) newSize = min;
      if (newSize > max) newSize = max;
      setSize(newSize);
    }
  };

  const onMouseUp = () => {
    dragging.current = false;
    document.body.style.cursor = "default";
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  });

  return (
    <div style={{
      width: direction === "horizontal" ? size : "100%",
      height: direction === "vertical" ? size : "100%",
      position: "relative",
      background: "#f7f7f7",
      borderLeft: direction === "horizontal" ? "1px solid #ccc" : undefined,
      borderTop: direction === "vertical" ? "1px solid #ccc" : undefined,
      transition: "background 0.2s"
    }}>
      {children}
      <div
        style={{
          position: "absolute",
          top: direction === "horizontal" ? 0 : undefined,
          right: direction === "horizontal" ? 0 : undefined,
          left: direction === "vertical" ? 0 : undefined,
          bottom: direction === "vertical" ? 0 : undefined,
          width: direction === "horizontal" ? 6 : "100%",
          height: direction === "vertical" ? 6 : "100%",
          cursor: direction === "horizontal" ? "ew-resize" : "ns-resize",
          background: "#e0e0e0",
          zIndex: 10,
        }}
        onMouseDown={onMouseDown}
      />
    </div>
  );
}
