export default function Slide2TheStudio() {
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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10vh" }}>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "-1vw",
              top: "1.5vh",
              width: "14vw",
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
            The Studio
          </h2>
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", fontWeight: 500, color: "#0A0A0A", letterSpacing: "0.1em" }}>
          MGMM
        </div>
      </div>

      <div style={{ display: "flex", gap: "6vw", flex: 1 }}>
        <div style={{ flex: 1.2, display: "flex", flexDirection: "column", justifyContent: "center", gap: "5vh" }}>
          <div style={{ display: "flex", gap: "2.5vw", alignItems: "flex-start" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#C41E3A", fontWeight: 500, paddingTop: "0.3vh", minWidth: "2.5vw" }}>01</div>
            <div>
              <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#0A0A0A", marginBottom: "0.8vh", letterSpacing: "-0.02em" }}>Founded in London, 1975</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.1vw", color: "#6B6B6B", lineHeight: 1.5 }}>Half a century of unbroken production.</div>
            </div>
          </div>

          <div style={{ width: "100%", height: "1px", backgroundColor: "#E0DED8" }} />

          <div style={{ display: "flex", gap: "2.5vw", alignItems: "flex-start" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#C41E3A", fontWeight: 500, paddingTop: "0.3vh", minWidth: "2.5vw" }}>02</div>
            <div>
              <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#0A0A0A", marginBottom: "0.8vh", letterSpacing: "-0.02em" }}>Over 500 music videos produced</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.1vw", color: "#6B6B6B", lineHeight: 1.5 }}>Six decades of continuous production.</div>
            </div>
          </div>

          <div style={{ width: "100%", height: "1px", backgroundColor: "#E0DED8" }} />

          <div style={{ display: "flex", gap: "2.5vw", alignItems: "flex-start" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#C41E3A", fontWeight: 500, paddingTop: "0.3vh", minWidth: "2.5vw" }}>03</div>
            <div>
              <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#0A0A0A", marginBottom: "0.8vh", letterSpacing: "-0.02em" }}>Worked with 200+ artists</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.1vw", color: "#6B6B6B", lineHeight: 1.5 }}>Across every major genre of popular music.</div>
            </div>
          </div>
        </div>

        <div
          style={{
            flex: 0.8,
            backgroundColor: "#0A0A0A",
            padding: "5vh 3.5vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "5vh",
          }}
        >
          <div>
            <div style={{ fontSize: "6vw", fontWeight: 900, color: "#F5F4F0", lineHeight: 1, letterSpacing: "-0.04em" }}>500+</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#C41E3A", marginTop: "1vh", letterSpacing: "0.1em", textTransform: "uppercase" }}>Music Videos</div>
          </div>
          <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(245,244,240,0.1)" }} />
          <div>
            <div style={{ fontSize: "6vw", fontWeight: 900, color: "#F5F4F0", lineHeight: 1, letterSpacing: "-0.04em" }}>200+</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#C41E3A", marginTop: "1vh", letterSpacing: "0.1em", textTransform: "uppercase" }}>Artists</div>
          </div>
          <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(245,244,240,0.1)" }} />
          <div>
            <div style={{ fontSize: "6vw", fontWeight: 900, color: "#F5F4F0", lineHeight: 1, letterSpacing: "-0.04em" }}>50+</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#C41E3A", marginTop: "1vh", letterSpacing: "0.1em", textTransform: "uppercase" }}>Years Active</div>
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
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#9B9B9B" }}>The Studio / MGMM Studios</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#0A0A0A", fontWeight: 500 }}>02</div>
      </div>
    </div>
  );
}
