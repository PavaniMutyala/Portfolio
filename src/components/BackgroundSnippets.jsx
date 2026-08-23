import { useMemo } from "react";

const SMALL_TAGS = [
  "</>", "<div />", "<section />", "<span />", "<App />", "<main />", "<Route />", 
  "<Link />", "<img />", "<nav />", "<p />", "<ul />", "<li />", "<header />", 
  "<footer />", "<Hero />", "<Projects />", "<Skills />", "<Experience />", 
  "<Contact />", "<MERN />", "<Portfolio />", "<Code />", "<Style />", 
  "<Web />", "<Dev />", "<State />", "<Effect />", "</>", "<React />", 
  "<Github />", "<Linkedin />"
];

const SPARK_COLORS = [
  "rgba(212, 175, 55, 0.85)",  // Indigo
  "rgba(184, 134, 11, 0.85)",  // Violet
  "rgba(6, 182, 212, 0.85)",   // Cyan
  "rgba(16, 185, 129, 0.75)",  // Emerald
  "rgba(212, 175, 55, 0.75)",  // Golden Amber
  "rgba(244, 63, 94, 0.85)",   // Rose
  "rgba(255, 255, 255, 0.85)"  // Pure White
];

export default function BackgroundSnippets() {
  const { snippets, sparks } = useMemo(() => {
    // Generate small code tags
    const generatedSnippets = Array.from({ length: 16 }).map((_, idx) => {
      const text = SMALL_TAGS[idx % SMALL_TAGS.length];
      const top = `${10 + Math.floor(Math.random() * 80)}%`;
      const left = `${5 + Math.floor(Math.random() * 90)}%`;
      const delay = `${(Math.random() * 8).toFixed(1)}s`;
      const duration = `${(22 + Math.random() * 12).toFixed(1)}s`;
      const fontSize = `${(8 + Math.random() * 3).toFixed(1)}px`; // 8px to 11px - super elegant and tiny
      
      return { id: `snippet-${idx}`, text, top, left, delay, duration, fontSize };
    });

    // Generate glittering sparks (dots and star sparkles)
    const generatedSparks = Array.from({ length: 35 }).map((_, idx) => {
      const type = Math.random() > 0.4 ? "dot" : "star";
      const top = `${3 + Math.floor(Math.random() * 94)}%`;
      const left = `${3 + Math.floor(Math.random() * 94)}%`;
      const color = SPARK_COLORS[idx % SPARK_COLORS.length];
      
      // Sizes
      const size = type === "dot" 
        ? `${(2 + Math.random() * 3).toFixed(1)}px` 
        : `${(8 + Math.random() * 6).toFixed(1)}px`;
        
      const delay = `${(Math.random() * 10).toFixed(1)}s`;
      const duration = `${(4 + Math.random() * 5).toFixed(1)}s`;
      const driftDuration = `${(15 + Math.random() * 15).toFixed(1)}s`;
      
      // Decide animation style
      const rand = Math.random();
      const animationType = rand < 0.33 ? "twinkle" : rand < 0.66 ? "drift" : "both";
      
      return { 
        id: `spark-${idx}`, 
        type, 
        top, 
        left, 
        size, 
        color, 
        delay, 
        duration, 
        driftDuration, 
        animationType 
      };
    });

    return { snippets: generatedSnippets, sparks: generatedSparks };
  }, []);

  return (
    <div 
      className="bg-code-snippets" 
      style={{ 
        position: "absolute", 
        inset: 0, 
        pointerEvents: "none", 
        zIndex: 0, 
        overflow: "hidden" 
      }}
    >
      {/* 1. Floating Code Tags */}
      {snippets.map((snippet) => (
        <span
          key={snippet.id}
          className="code-snippet"
          style={{
            position: "absolute",
            top: snippet.top,
            left: snippet.left,
            fontSize: snippet.fontSize,
            animationDelay: snippet.delay,
            animationDuration: snippet.duration,
            pointerEvents: "auto", // Allow hover effects on cursor overlap!
          }}
        >
          {snippet.text}
        </span>
      ))}

      {/* 2. Sparkling, Shimmering Glow particles / Sparks */}
      {sparks.map((spark) => {
        const isDot = spark.type === "dot";
        
        return (
          <div
            key={spark.id}
            className={`bg-sparkle ${spark.animationType}`}
            style={{
              position: "absolute",
              top: spark.top,
              left: spark.left,
              animationDelay: spark.delay,
              animationDuration: spark.animationType === "both" 
                ? `${spark.duration}, ${spark.driftDuration}` 
                : spark.animationType === "drift" 
                  ? spark.driftDuration 
                  : spark.duration,
            }}
          >
            {isDot ? (
              <div
                style={{
                  width: spark.size,
                  height: spark.size,
                  borderRadius: "50%",
                  backgroundColor: spark.color,
                  boxShadow: `0 0 8px ${spark.color}, 0 0 16px ${spark.color}`,
                }}
              />
            ) : (
              <svg 
                width={spark.size} 
                height={spark.size} 
                viewBox="0 0 12 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                style={{ 
                  color: spark.color,
                  filter: `drop-shadow(0 0 5px ${spark.color})`
                }}
              >
                <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="currentColor" />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
}
