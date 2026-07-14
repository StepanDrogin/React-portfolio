import { useEffect, useRef } from "react";
import "./orbitalGraphic.css";

const PARTICLE_COUNT = 112;
const SPHERE_CENTER = 300;
const SPHERE_RADIUS = 222;
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

const particles = Array.from({ length: PARTICLE_COUNT }, (_, index) => {
  const verticalPosition = 1 - (index / (PARTICLE_COUNT - 1)) * 2;
  const horizontalRadius = Math.sqrt(1 - verticalPosition * verticalPosition);
  const angle = GOLDEN_ANGLE * index;
  const x = Math.cos(angle) * horizontalRadius;
  const depth = Math.sin(angle) * horizontalRadius;
  const depthRatio = (depth + 1) / 2;

  let tone = "teal";

  if (index % 19 === 0) {
    tone = "lavender";
  } else if (index % 11 === 0 || depthRatio > 0.78) {
    tone = "platinum";
  } else if (depthRatio > 0.48) {
    tone = "mist";
  }

  return {
    id: index,
    x: SPHERE_CENTER + x * SPHERE_RADIUS,
    y: SPHERE_CENTER + verticalPosition * SPHERE_RADIUS,
    radius: 0.9 + depthRatio * 2.35,
    opacity: 0.2 + depthRatio * 0.72,
    delay: -(index % 14) * 0.31,
    duration: 4.4 + (index % 7) * 0.36,
    tone,
  };
});

export default function OrbitalGraphic({ className = "" }) {
  const rootRef = useRef(null);
  const rootClassName = ["orbital-graphic", className]
    .filter(Boolean)
    .join(" ");

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return undefined;
    }

    const reduceMotion = window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;
    const finePointer = window.matchMedia
      ? window.matchMedia("(pointer: fine)").matches
      : false;
    let observer;
    let pointerFrame = 0;

    if ("IntersectionObserver" in window) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          root.classList.toggle("is-orbital-active", entry.isIntersecting);
        },
        { threshold: 0.05 }
      );
      observer.observe(root);
    } else {
      root.classList.add("is-orbital-active");
    }

    const resetPointer = () => {
      root.style.setProperty("--orbital-x", "0px");
      root.style.setProperty("--orbital-y", "0px");
      root.style.setProperty("--orbital-rotate-x", "0deg");
      root.style.setProperty("--orbital-rotate-y", "0deg");
    };

    const onPointerMove = (event) => {
      if (pointerFrame) {
        window.cancelAnimationFrame(pointerFrame);
      }

      pointerFrame = window.requestAnimationFrame(() => {
        const bounds = root.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;

        root.style.setProperty("--orbital-x", `${x * 18}px`);
        root.style.setProperty("--orbital-y", `${y * 18}px`);
        root.style.setProperty("--orbital-rotate-x", `${y * -4}deg`);
        root.style.setProperty("--orbital-rotate-y", `${x * 5}deg`);
        pointerFrame = 0;
      });
    };

    if (finePointer && !reduceMotion) {
      root.addEventListener("pointermove", onPointerMove);
      root.addEventListener("pointerleave", resetPointer);
    }

    return () => {
      observer?.disconnect();
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerleave", resetPointer);

      if (pointerFrame) {
        window.cancelAnimationFrame(pointerFrame);
      }
    };
  }, []);

  return (
    <div className={rootClassName} aria-hidden="true" ref={rootRef}>
      <div className="orbital-graphic__halo" />
      <div className="orbital-graphic__scan" />
      <svg
        className="orbital-graphic__svg"
        viewBox="0 0 600 600"
        fill="none"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="orbital-graphic__core"
          cx="300"
          cy="300"
          r="188"
        />

        <g className="orbital-graphic__rings orbital-graphic__rings--slow">
          <circle
            className="orbital-graphic__ring orbital-graphic__ring--outer"
            cx="300"
            cy="300"
            r="240"
            pathLength="100"
          />
          <ellipse
            className="orbital-graphic__ring"
            cx="300"
            cy="300"
            rx="238"
            ry="88"
            transform="rotate(-19 300 300)"
            pathLength="100"
          />
        </g>

        <g className="orbital-graphic__rings orbital-graphic__rings--reverse">
          <ellipse
            className="orbital-graphic__ring orbital-graphic__ring--muted"
            cx="300"
            cy="300"
            rx="226"
            ry="106"
            transform="rotate(53 300 300)"
            pathLength="100"
          />
          <ellipse
            className="orbital-graphic__ring orbital-graphic__ring--muted"
            cx="300"
            cy="300"
            rx="220"
            ry="65"
            transform="rotate(101 300 300)"
            pathLength="100"
          />
        </g>

        <g className="orbital-graphic__particles">
          {particles.map((particle) => (
            <circle
              className={`orbital-graphic__particle orbital-graphic__particle--${particle.tone}`}
              cx={particle.x}
              cy={particle.y}
              r={particle.radius}
              key={particle.id}
              style={{
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
                opacity: particle.opacity,
              }}
            />
          ))}
        </g>

        <g className="orbital-graphic__network">
          <path
            className="orbital-graphic__connector"
            d="M139 221L206 159L273 189"
          />
          <path
            className="orbital-graphic__connector orbital-graphic__connector--accent"
            d="M405 416L468 376L494 302"
          />
          <circle
            className="orbital-graphic__node orbital-graphic__node--mist"
            cx="139"
            cy="221"
            r="5"
          />
          <circle
            className="orbital-graphic__node"
            cx="206"
            cy="159"
            r="3.5"
          />
          <circle
            className="orbital-graphic__node orbital-graphic__node--lavender"
            cx="468"
            cy="376"
            r="5.5"
          />
          <circle
            className="orbital-graphic__node"
            cx="494"
            cy="302"
            r="3.5"
          />
        </g>
      </svg>
    </div>
  );
}
