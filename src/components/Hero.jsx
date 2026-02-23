import { useState, useEffect } from "react";

function Hero() {
  const headingTexts = [
    "Fresh Coffee.",
    "Premium Taste.",
    "Good Vibes.",
    "Cozy Moments."
  ];

  const paragraphTexts = [
    "Experience the rich aroma of perfectly brewed coffee made from hand-selected beans.",
    "Crafted with passion using premium ingredients to deliver unforgettable flavor.",
    "Where every sip feels warm, comforting, and beautifully balanced.",
    "Your daily dose of happiness starts here — fresh, bold, and inspiring."
  ];

  const [index, setIndex] = useState(0);
  const [displayH, setDisplayH] = useState("");
  const [displayP, setDisplayP] = useState("");
  const [phase, setPhase] = useState("typingH");

  useEffect(() => {
    const currentH = headingTexts[index];
    const currentP = paragraphTexts[index];

    let timeout;

    // 1️⃣ Type Heading
    if (phase === "typingH") {
      timeout = setTimeout(() => {
        setDisplayH(currentH.slice(0, displayH.length + 1));

        if (displayH.length === currentH.length) {
          setPhase("typingP");
        }
      }, 60);
    }

    // 2️⃣ Type Paragraph
    else if (phase === "typingP") {
      timeout = setTimeout(() => {
        setDisplayP(currentP.slice(0, displayP.length + 1));

        if (displayP.length === currentP.length) {
          setPhase("waiting");
        }
      }, 30);
    }

    // 3️⃣ Wait
    else if (phase === "waiting") {
      timeout = setTimeout(() => {
        // Instantly clear
        setDisplayH("");
        setDisplayP("");
        setIndex((prev) => (prev + 1) % headingTexts.length);
        setPhase("typingH");
      }, 2000);
    }

    return () => clearTimeout(timeout);

  }, [displayH, displayP, phase, index]);

  return (
    <div className="space-y-4">
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-amber-400 min-h-[80px] md:min-h-[100px]">
        {displayH}
      </h1>

      <p className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed min-h-[110px] md:min-h-[120px]">
        {displayP}
      </p>
    </div>
  );
}

export default Hero;