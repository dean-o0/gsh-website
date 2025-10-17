import { useEffect } from "react";

export default function ParticlesBackground() {
  useEffect(() => {
    // Load the particles.js script dynamically
    const script = document.createElement("script");
    script.src = "/particles.min.js";
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS.load("particles-js", "/particles.json");
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1
      }}
    />
  );
}
