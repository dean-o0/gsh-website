import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="particles-js"  // <-- IMPORTANT: match Main.css selector
      init={particlesInit}
      style={{
        position: "relative",  // <-- change from absolute
        width: "100%",
        height: "100%",
      }}
      options={{
        fpsLimit: 60,
        background: { color: "transparent" },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",   // hover effect
            },
            onClick: {
              enable: true,
              mode: "push",      // clicking creates more particles
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },

        particles: {
          number: {
            value: 80,
            density: { enable: true, area: 800 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },

          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            outModes: { default: "out" },
          },
        },

        detectRetina: true,
      }}

    />
  );
}
