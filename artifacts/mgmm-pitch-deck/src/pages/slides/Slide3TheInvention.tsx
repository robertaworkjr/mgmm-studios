const base = import.meta.env.BASE_URL;

export default function Slide3TheInvention() {
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
      <img
        src={`${base}filmstrip.png`}
        crossOrigin="anonymous"
        alt="Filmstrip"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          opacity: 0.18,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(10,10,10,0.97) 50%, rgba(10,10,10,0.6) 100%)",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#C41E3A", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          MGMM
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "rgba(245,244,240,0.35)", letterSpacing: "0.05em" }}>
          1979
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "65vw" }}>
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.95vw",
            color: "#C41E3A",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "3vh",
          }}
        >
          The Invention
        </div>

        <h2
          style={{
            fontSize: "5.5vw",
            fontWeight: 900,
            color: "#F5F4F0",
            margin: "0 0 5vh 0",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
          }}
        >
          The First Music Video
          <br />
          <span style={{ color: "#C41E3A" }}>Ever Played on MTV.</span>
        </h2>

        <div style={{ width: "4vw", height: "2px", backgroundColor: "#C41E3A", marginBottom: "4vh" }} />

        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "1.3vw",
            color: "rgba(245,244,240,0.75)",
            margin: 0,
            lineHeight: 1.7,
            maxWidth: "55vw",
          }}
        >
          In 1979, MGMM produced Video Killed the Radio Star for The Buggles — the first music video ever played on MTV. That single moment defined a new art form and launched a global industry.
        </p>

        <div
          style={{
            marginTop: "6vh",
            display: "flex",
            alignItems: "center",
            gap: "3vw",
          }}
        >
          <div>
            <div style={{ fontSize: "3.5vw", fontWeight: 900, color: "#F5F4F0", letterSpacing: "-0.04em", lineHeight: 1 }}>1979</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#C41E3A", marginTop: "0.5vh", letterSpacing: "0.1em" }}>THE YEAR IT BEGAN</div>
          </div>
          <div style={{ width: "1px", height: "8vh", backgroundColor: "rgba(245,244,240,0.15)" }} />
          <div>
            <div style={{ fontSize: "3.5vw", fontWeight: 900, color: "#F5F4F0", letterSpacing: "-0.04em", lineHeight: 1 }}>#1</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#C41E3A", marginTop: "0.5vh", letterSpacing: "0.1em" }}>FIRST MTV BROADCAST</div>
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
          zIndex: 1,
        }}
      >
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "rgba(245,244,240,0.3)" }}>The Invention / MGMM Studios</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "rgba(245,244,240,0.5)", fontWeight: 500 }}>03</div>
      </div>
    </div>
  );
}
