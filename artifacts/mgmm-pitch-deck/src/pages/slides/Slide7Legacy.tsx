export default function Slide7Legacy() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F4F0",
        fontFamily: "'Barlow', sans-serif",
        position: "relative",
        boxSizing: "border-box",
        padding: "5vh 5vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "7vh" }}>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "-1vw",
              top: "1.5vh",
              width: "10vw",
              height: "3.5vh",
              backgroundColor: "#C41E3A",
              opacity: 0.12,
              zIndex: 0,
            }}
          />
          <h2
            style={{
              fontSize: "3.5vw",
              fontWeight: 900,
              color: "#0A0A0A",
              margin: 0,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              position: "relative",
              zIndex: 1,
            }}
          >
            Legacy
          </h2>
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", fontWeight: 500, color: "#0A0A0A", letterSpacing: "0.1em" }}>
          MGMM
        </div>
      </div>

      <div style={{ display: "flex", gap: "2vw", flex: 1 }}>
        <div
          style={{
            flex: 1,
            backgroundColor: "#0A0A0A",
            padding: "5vh 3.5vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "4vh",
          }}
        >
          <div>
            <div style={{ fontSize: "7vw", fontWeight: 900, color: "#F5F4F0", lineHeight: 1, letterSpacing: "-0.04em" }}>500+</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#C41E3A", marginTop: "0.8vh", letterSpacing: "0.1em", textTransform: "uppercase" }}>Music Videos Produced</div>
          </div>
          <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(245,244,240,0.1)" }} />
          <div>
            <div style={{ fontSize: "7vw", fontWeight: 900, color: "#F5F4F0", lineHeight: 1, letterSpacing: "-0.04em" }}>60</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#C41E3A", marginTop: "0.8vh", letterSpacing: "0.1em", textTransform: "uppercase" }}>Years of Production</div>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div
            style={{
              flex: 1,
              border: "1px solid #E0DED8",
              padding: "3.5vh 3vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: "5vw", fontWeight: 900, color: "#0A0A0A", lineHeight: 1, letterSpacing: "-0.04em" }}>200+</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#C41E3A", marginTop: "0.8vh", letterSpacing: "0.1em", textTransform: "uppercase" }}>Artists</div>
          </div>
          <div
            style={{
              flex: 1,
              border: "1px solid #E0DED8",
              padding: "3.5vh 3vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: "5vw", fontWeight: 900, color: "#0A0A0A", lineHeight: 1, letterSpacing: "-0.04em" }}>4</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#C41E3A", marginTop: "0.8vh", letterSpacing: "0.1em", textTransform: "uppercase" }}>Decades of Chart-Toppers</div>
          </div>
          <div
            style={{
              padding: "2.5vh 3vw",
              backgroundColor: "#C41E3A",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.05vw", color: "#F5F4F0", lineHeight: 1.6 }}>
              Archive digitised and restored in 2024
            </div>
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
          borderTop: "1px solid #E0DED8",
          paddingTop: "2vh",
        }}
      >
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#9B9B9B" }}>Legacy / MGMM Studios</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#0A0A0A", fontWeight: 500 }}>07</div>
      </div>
    </div>
  );
}
