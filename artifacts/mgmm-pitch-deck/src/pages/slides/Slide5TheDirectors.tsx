export default function Slide5TheDirectors() {
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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8vh" }}>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "-1vw",
              top: "1.5vh",
              width: "18vw",
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
            The Directors
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
            padding: "4vh 3vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#C41E3A", letterSpacing: "0.15em", marginBottom: "1.5vh" }}>01</div>
            <div style={{ fontSize: "1.8vw", fontWeight: 900, color: "#F5F4F0", letterSpacing: "-0.02em", marginBottom: "1.5vh" }}>Russell Mulcahy</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.05vw", color: "rgba(245,244,240,0.55)", lineHeight: 1.6 }}>Architect of the MTV era</div>
          </div>
          <div style={{ width: "2vw", height: "2px", backgroundColor: "#C41E3A" }} />
        </div>

        <div
          style={{
            flex: 1,
            border: "1px solid #E0DED8",
            padding: "4vh 3vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#F5F4F0",
          }}
        >
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#C41E3A", letterSpacing: "0.15em", marginBottom: "1.5vh" }}>02</div>
            <div style={{ fontSize: "1.8vw", fontWeight: 900, color: "#0A0A0A", letterSpacing: "-0.02em", marginBottom: "1.5vh" }}>Julien Temple</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.05vw", color: "#6B6B6B", lineHeight: 1.6 }}>Raw, irreverent, politically charged</div>
          </div>
          <div style={{ width: "2vw", height: "2px", backgroundColor: "#E0DED8" }} />
        </div>

        <div
          style={{
            flex: 1,
            border: "1px solid #E0DED8",
            padding: "4vh 3vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#F5F4F0",
          }}
        >
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#C41E3A", letterSpacing: "0.15em", marginBottom: "1.5vh" }}>03</div>
            <div style={{ fontSize: "1.8vw", fontWeight: 900, color: "#0A0A0A", letterSpacing: "-0.02em", marginBottom: "1.5vh" }}>Godley & Creme</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.05vw", color: "#6B6B6B", lineHeight: 1.6 }}>Experimental visual pioneers</div>
          </div>
          <div style={{ width: "2vw", height: "2px", backgroundColor: "#E0DED8" }} />
        </div>

        <div
          style={{
            flex: 1,
            border: "1px solid #E0DED8",
            padding: "4vh 3vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#F5F4F0",
          }}
        >
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#C41E3A", letterSpacing: "0.15em", marginBottom: "1.5vh" }}>04</div>
            <div style={{ fontSize: "1.8vw", fontWeight: 900, color: "#0A0A0A", letterSpacing: "-0.02em", marginBottom: "1.5vh" }}>Brian Grant</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.05vw", color: "#6B6B6B", lineHeight: 1.6 }}>Cinematic warmth and emotional precision</div>
          </div>
          <div style={{ width: "2vw", height: "2px", backgroundColor: "#E0DED8" }} />
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
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#9B9B9B" }}>The Directors / MGMM Studios</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#0A0A0A", fontWeight: 500 }}>05</div>
      </div>
    </div>
  );
}
