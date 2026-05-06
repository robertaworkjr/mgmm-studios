export default function Slide4TheArchive() {
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
            The Archive
          </h2>
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", fontWeight: 500, color: "#0A0A0A", letterSpacing: "0.1em" }}>
          MGMM
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: "0" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "2.2vh 0",
            borderTop: "1px solid #E0DED8",
          }}
        >
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#C41E3A", minWidth: "6vw" }}>1978</div>
          <div style={{ fontSize: "1.7vw", fontWeight: 700, color: "#0A0A0A", letterSpacing: "-0.02em", flex: 1 }}>Roxanne</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.05vw", color: "#6B6B6B", minWidth: "18vw" }}>The Police</div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "2.2vh 0",
            borderTop: "1px solid #E0DED8",
          }}
        >
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#C41E3A", minWidth: "6vw" }}>1982</div>
          <div style={{ fontSize: "1.7vw", fontWeight: 700, color: "#0A0A0A", letterSpacing: "-0.02em", flex: 1 }}>Hungry Like the Wolf</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.05vw", color: "#6B6B6B", minWidth: "18vw" }}>Duran Duran</div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "2.2vh 0",
            borderTop: "1px solid #E0DED8",
          }}
        >
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#C41E3A", minWidth: "6vw" }}>1982</div>
          <div style={{ fontSize: "1.7vw", fontWeight: 700, color: "#0A0A0A", letterSpacing: "-0.02em", flex: 1 }}>Do You Really Want to Hurt Me</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.05vw", color: "#6B6B6B", minWidth: "18vw" }}>Culture Club</div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "2.2vh 0",
            borderTop: "1px solid #E0DED8",
          }}
        >
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#C41E3A", minWidth: "6vw" }}>1982</div>
          <div style={{ fontSize: "1.7vw", fontWeight: 700, color: "#0A0A0A", letterSpacing: "-0.02em", flex: 1 }}>Rio</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.05vw", color: "#6B6B6B", minWidth: "18vw" }}>Duran Duran</div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "2.2vh 0",
            borderTop: "1px solid #E0DED8",
          }}
        >
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#C41E3A", minWidth: "6vw" }}>1983</div>
          <div style={{ fontSize: "1.7vw", fontWeight: 700, color: "#0A0A0A", letterSpacing: "-0.02em", flex: 1 }}>Every Breath You Take</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.05vw", color: "#6B6B6B", minWidth: "18vw" }}>The Police</div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "2.2vh 0",
            borderTop: "1px solid #E0DED8",
            borderBottom: "1px solid #E0DED8",
          }}
        >
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#C41E3A", minWidth: "6vw" }}>1985</div>
          <div style={{ fontSize: "1.7vw", fontWeight: 700, color: "#0A0A0A", letterSpacing: "-0.02em", flex: 1 }}>Take On Me</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.05vw", color: "#6B6B6B", minWidth: "18vw" }}>A-Ha</div>
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
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#9B9B9B" }}>The Archive / MGMM Studios</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#0A0A0A", fontWeight: 500 }}>04</div>
      </div>
    </div>
  );
}
