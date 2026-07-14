import { useEffect } from "react";

const revealSelector = "[data-reveal]";

export default function useMotionSystem() {
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const revealNodes = Array.from(document.querySelectorAll(revealSelector));
    const counterNodes = Array.from(document.querySelectorAll("[data-counter]"));
    const ambientNodes = Array.from(document.querySelectorAll("[data-ambient]"));
    const scrollShiftNodes = Array.from(
      document.querySelectorAll("[data-scroll-shift]")
    );
    const prefersReducedMotion = window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : { matches: false };
    const hasIntersectionObserver = "IntersectionObserver" in window;
    const animationFrames = new Set();
    let revealObserver;
    let counterObserver;
    let ambientObserver;
    let scrollFrame = 0;
    let pointerFrame = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;

    const markVisible = (node) => node.classList.add("is-visible");

    const revealPassedNodes = () => {
      if (prefersReducedMotion.matches) {
        return;
      }

      const revealLine = window.innerHeight * 0.9;

      revealNodes.forEach((node) => {
        if (
          !node.classList.contains("is-visible") &&
          node.getBoundingClientRect().top <= revealLine
        ) {
          markVisible(node);
          revealObserver?.unobserve(node);
        }
      });
    };

    if (!prefersReducedMotion.matches && hasIntersectionObserver) {
      root.classList.add("motion-ready");
      revealObserver = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            markVisible(entry.target);
            revealObserver.unobserve(entry.target);
          });
        },
        {
          rootMargin: "0px 0px -10% 0px",
          threshold: 0.08,
        }
      );

      revealNodes.forEach((node) => revealObserver.observe(node));
    } else {
      revealNodes.forEach(markVisible);
    }

    if (!prefersReducedMotion.matches && hasIntersectionObserver) {
      ambientObserver = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle(
              "is-ambient-active",
              entry.isIntersecting
            );
          });
        },
        { rootMargin: "18% 0px", threshold: 0.01 }
      );

      ambientNodes.forEach((node) => ambientObserver.observe(node));
    } else {
      ambientNodes.forEach((node) => node.classList.add("is-ambient-active"));
    }

    const animateCounter = (node) => {
      if (node.dataset.counterAnimated === "true") {
        return;
      }

      const target = Number(node.dataset.counter);
      const prefix = node.dataset.prefix || "";
      const suffix = node.dataset.suffix || "";

      if (!Number.isFinite(target)) {
        return;
      }

      node.dataset.counterAnimated = "true";
      node.textContent = `${prefix}0${suffix}`;
      const start = performance.now();
      const duration = Math.min(1550, 900 + target * 1.2);

      const update = (time) => {
        const progress = Math.min((time - start) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(target * easedProgress);

        const numberLocale = document.documentElement.lang === "en"
          ? "en-US"
          : "ru-RU";

        node.textContent = `${prefix}${currentValue.toLocaleString(numberLocale)}${suffix}`;

        if (progress < 1) {
          const frame = window.requestAnimationFrame(update);
          animationFrames.add(frame);
        }
      };

      const frame = window.requestAnimationFrame(update);
      animationFrames.add(frame);
    };

    if (!prefersReducedMotion.matches && hasIntersectionObserver) {
      counterObserver = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.65 }
      );

      counterNodes.forEach((node) => counterObserver.observe(node));
    }

    const updateScrollState = () => {
      const availableScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const progress = Math.min(Math.max(window.scrollY / availableScroll, 0), 1);

      root.style.setProperty("--scroll-progress", progress.toFixed(4));
      body.classList.toggle("has-scrolled", window.scrollY > 24);

      if (!prefersReducedMotion.matches) {
        scrollShiftNodes.forEach((node) => {
          const bounds = node.getBoundingClientRect();
          const localProgress = Math.min(
            Math.max(
              (window.innerHeight - bounds.top) /
                (window.innerHeight + bounds.height),
              0
            ),
            1
          );
          const direction = Number(node.dataset.scrollShift) || 1;
          const shiftRange = window.innerWidth <= 640
            ? Math.min(18, window.innerWidth * 0.045)
            : Math.min(72, window.innerWidth * 0.06);
          const shift = (localProgress - 0.5) * direction * shiftRange;

          node.style.setProperty("--scroll-shift", `${shift.toFixed(2)}px`);
          node.style.setProperty(
            "--scroll-gradient-position",
            `${(localProgress * 100).toFixed(2)}%`
          );
        });

        revealPassedNodes();
      }

      scrollFrame = 0;
    };

    const onScroll = () => {
      if (!scrollFrame) {
        scrollFrame = window.requestAnimationFrame(updateScrollState);
      }
    };

    const supportsFinePointer = window.matchMedia
      ? window.matchMedia("(pointer: fine)").matches
      : false;

    const updatePointer = () => {
      root.style.setProperty("--pointer-x", `${pointerX}px`);
      root.style.setProperty("--pointer-y", `${pointerY}px`);
      pointerFrame = 0;
    };

    const onPointerMove = (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;

      if (!pointerFrame) {
        pointerFrame = window.requestAnimationFrame(updatePointer);
      }
    };

    const onVisibilityChange = () => {
      body.classList.toggle("motion-paused", document.hidden);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    if (supportsFinePointer && !prefersReducedMotion.matches) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }

    updateScrollState();
    const enterTimer = window.setTimeout(() => {
      body.classList.add("page-entered");
    }, prefersReducedMotion.matches ? 0 : 520);

    return () => {
      revealObserver?.disconnect();
      counterObserver?.disconnect();
      ambientObserver?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.clearTimeout(enterTimer);
      animationFrames.forEach((frame) => window.cancelAnimationFrame(frame));

      if (scrollFrame) {
        window.cancelAnimationFrame(scrollFrame);
      }

      if (pointerFrame) {
        window.cancelAnimationFrame(pointerFrame);
      }

      root.classList.remove("motion-ready");
      body.classList.remove("page-entered", "has-scrolled", "motion-paused");
    };
  }, []);
}
