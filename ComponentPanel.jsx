const dummyImages = [
  "https://via.placeholder.com/60x60?text=1",
  "https://via.placeholder.com/60x60?text=2",
  "https://via.placeholder.com/60x60?text=3",
  "https://via.placeholder.com/60x60?text=4",
  "https://via.placeholder.com/60x60?text=5"
];

export default function ComponentPanel() {
  return (
    <div style={{
      padding: 12,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
      <div style={{ fontWeight: "bold", marginBottom: 10 }}>Components</div>
      {dummyImages.map((src, i) => (
        <img key={i} src={src} alt="component" style={{ width: 60, height: 60, borderRadius: 8, border: "1px solid #ccc" }} />
      ))}
    </div>
  );
}
