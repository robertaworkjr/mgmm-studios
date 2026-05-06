export default function Slide6DocumentaryFilms() {
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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8vh" }}>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "-1vw",
              top: "1.5vh",
              width: "22vw",
              height: "3.5vh",
              backgroundColor: "#C41E3A",
              opacity: 0.2,
              zIndex: 0,
            }}
          />
          <h2
            style={{
              fontSize: "3.5vw",
              fontWeight: 900,
              color: "#F5F4F0",
              margin: 0,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              position: "relative",
              zIndex: 1,
            }}
          >
            Documentary Films
          </h2>
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", fontWeight: 500, color: "#C41E3A", letterSpacing: "0.1em" }}>
          MGMM
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "3.2vh 0",
            borderTop: "1px solid rgba(245,244,240,0.1)",
            gap: "3vw",
          }}
        >
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#C41E3A", minWidth: "5vw" }}>1980</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "2vw", fontWeight: 700, color: "#F5F4F0", letterSpacing: "-0.02em", marginBottom: "0.5vh" }}>Lennon's Last Weekend</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "rgba(245,244,240,0.4)" }}>Intimate portrait</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "3.2vh 0",
            borderTop: "1px solid rgba(245,244,240,0.1)",
            gap: "3vw",
          }}
        >
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#C41E3A", minWidth: "5vw" }}>2014</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "2vw", fontWeight: 700, color: "#F5F4F0", letterSpacing: "-0.02em", marginBottom: "0.5vh" }}>Soul Boys of the Western World</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "rgba(245,244,240,0.4)" }}>BFI London Film Festival premiere</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "3.2vh 0",
            borderTop: "1px solid rgba(245,244,240,0.1)",
            gap: "3vw",
          }}
        >
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#C41E3A", minWidth: "5vw" }}>2022</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "2vw", fontWeight: 700, color: "#F5F4F0", letterSpacing: "-0.02em", marginBottom: "0.5vh" }}>No Hamburg, No Beatles</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "rgba(245,244,240,0.4)" }}>Critical acclaim</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "3.2vh 0",
            borderTop: "1px solid rgba(245,244,240,0.1)",
            borderBottom: "1px solid rgba(245,244,240,0.1)",
            gap: "3vw",
          }}
        >
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#C41E3A", minWidth: "5vw" }}>2023</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "2vw", fontWeight: 700, color: "#F5F4F0", letterSpacing: "-0.02em", marginBottom: "0.5vh" }}>No Room for Ravers</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "rgba(245,244,240,0.4)" }}>Feature documentary</div>
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
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "rgba(245,244,240,0.3)" }}>Documentary Films / MGMM Studios</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "rgba(245,244,240,0.5)", fontWeight: 500 }}>06</div>
      </div>
    </div>
  );
}
