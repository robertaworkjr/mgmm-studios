export default function Slide8Closing() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0A0A0A",
        fontFamily: "'Barlow', sans-serif",
        position: "relative",
        boxSizing: "border-box",
        padding: "5vh 5vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10vh" }}>
        <div
          style={{
            fontSize: "1.3vw",
            fontWeight: 900,
            color: "#F5F4F0",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          MGMM
        </div>
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.9vw",
            color: "rgba(245,244,240,0.35)",
            letterSpacing: "0.05em",
          }}
        >
          EST. 1975
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
        <div style={{ position: "relative", marginBottom: "4vh" }}>
          <div
            style={{
              position: "absolute",
              left: "-2vw",
              top: "3vh",
              width: "30vw",
              height: "6vh",
              backgroundColor: "#C41E3A",
              opacity: 0.15,
              zIndex: 0,
            }}
          />
          <h2
            style={{
              fontSize: "7vw",
              fontWeight: 900,
              color: "#F5F4F0",
              margin: 0,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              position: "relative",
              zIndex: 1,
            }}
          >
            MGMM Studios
          </h2>
        </div>

        <div style={{ width: "5vw", height: "2px", backgroundColor: "#C41E3A", marginBottom: "4vh" }} />

        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "1.3vw",
            color: "rgba(245,244,240,0.55)",
            margin: "0 0 6vh 0",
            lineHeight: 1.6,
            maxWidth: "45vw",
          }}
        >
          For licensing, commissioning and press enquiries
        </p>

        <div style={{ display: "flex", gap: "5vw", alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#C41E3A", letterSpacing: "0.15em", marginBottom: "1vh", textTransform: "uppercase" }}>Web</div>
            <div style={{ fontSize: "1.8vw", fontWeight: 700, color: "#F5F4F0", letterSpacing: "-0.02em" }}>mgmm.tv</div>
          </div>
          <div style={{ width: "1px", height: "7vh", backgroundColor: "rgba(245,244,240,0.15)" }} />
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#C41E3A", letterSpacing: "0.15em", marginBottom: "1vh", textTransform: "uppercase" }}>Based</div>
            <div style={{ fontSize: "1.8vw", fontWeight: 700, color: "#F5F4F0", letterSpacing: "-0.02em" }}>London, UK</div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          left: "5vw",
          right: "5vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(245,244,240,0.12)",
          paddingTop: "2vh",
        }}
      >
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "rgba(245,244,240,0.3)" }}>The Pioneers of Music Video</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "rgba(245,244,240,0.5)", fontWeight: 500 }}>08</div>
      </div>
    </div>
  );
}
