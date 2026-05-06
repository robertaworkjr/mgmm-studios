const base = import.meta.env.BASE_URL;

export default function Slide1Title() {
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
      }}
    >
      <img
        src={`${base}hero-camera.png`}
        crossOrigin="anonymous"
        alt="Vintage film camera"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          opacity: 0.35,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.4) 60%, rgba(10,10,10,0.7) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "5vh",
          left: "5vw",
          right: "5vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
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
            color: "rgba(245,244,240,0.5)",
            letterSpacing: "0.05em",
          }}
        >
          EST. 1975 — LONDON
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "14vh",
          left: "5vw",
          width: "80vw",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "1vw",
            color: "#C41E3A",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "2.5vh",
          }}
        >
          MGMM Studios
        </div>

        <h1
          style={{
            fontSize: "9vw",
            fontWeight: 900,
            color: "#F5F4F0",
            margin: 0,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
          }}
        >
          The Pioneers
        </h1>
        <h1
          style={{
            fontSize: "9vw",
            fontWeight: 900,
            color: "#C41E3A",
            margin: 0,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
          }}
        >
          of Music Video
        </h1>

        <div
          style={{
            marginTop: "4vh",
            display: "flex",
            alignItems: "center",
            gap: "2vw",
          }}
        >
          <div style={{ width: "4vw", height: "1px", backgroundColor: "#C41E3A" }} />
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "1.1vw",
              color: "rgba(245,244,240,0.6)",
              margin: 0,
              letterSpacing: "0.05em",
            }}
          >
            Founded 1975 · London
          </p>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          left: "5vw",
          right: "5vw",
          borderTop: "1px solid rgba(245,244,240,0.15)",
          paddingTop: "2vh",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "rgba(245,244,240,0.3)" }}>
          mgmm.tv
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "rgba(245,244,240,0.3)" }}>
          01
        </div>
      </div>
    </div>
  );
}
