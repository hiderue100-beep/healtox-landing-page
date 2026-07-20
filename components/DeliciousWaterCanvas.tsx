"use client";

import { useEffect, useRef } from "react";

interface WaterDrop {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  speed: number;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
}

export default function DeliciousWaterCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (Math.random() < 0.2) {
        ripples.push({
          x: mouseX,
          y: mouseY,
          radius: 4,
          maxRadius: Math.random() * 70 + 40,
          alpha: 0.7,
          speed: 1.6,
        });
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const WATER_COLORS = [
      "rgba(14, 165, 233, 0.4)",  // Deep Cyan Sky Blue
      "rgba(6, 182, 212, 0.45)",  // Aqua Turquoise
      "rgba(56, 189, 248, 0.35)", // Ice Blue
      "rgba(16, 185, 129, 0.3)",  // Mint Water Accent
      "rgba(255, 255, 255, 0.6)", // White Water Sparkle
    ];

    const ripples: WaterDrop[] = [];

    for (let i = 0; i < 6; i++) {
      ripples.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 40,
        maxRadius: Math.random() * 90 + 50,
        alpha: Math.random() * 0.5 + 0.2,
        speed: Math.random() * 1.2 + 0.8,
      });
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3.5 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.5 - 0.2,
        alpha: Math.random() * 0.6 + 0.3,
        color: WATER_COLORS[Math.floor(Math.random() * WATER_COLORS.length)],
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;

      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, "#0284C7");    // Deep Sky Blue
      bgGrad.addColorStop(0.5, "#06B6D4");  // Aqua Cyan
      bgGrad.addColorStop(1, "#0D9488");    // Mint Teal

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Light Caustics Refraction
      ctx.globalCompositeOperation = "lighter";
      ctx.lineWidth = 2;

      for (let i = 0; i < 4; i++) {
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.14 - i * 0.02})`;
        ctx.beginPath();
        const yOffset = height * (0.2 + i * 0.22) + Math.sin(time + i) * 25;
        ctx.moveTo(0, yOffset);

        for (let x = 0; x <= width; x += 30) {
          const waveY = Math.sin(x * 0.005 + time * 1.2 + i) * 25 + Math.cos(x * 0.003 - time) * 15;
          ctx.lineTo(x, yOffset + waveY);
        }
        ctx.stroke();
      }

      // Water Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rip = ripples[i];
        if (!prefersReducedMotion) {
          rip.radius += rip.speed;
          rip.alpha -= 0.006;
        }

        if (rip.alpha <= 0 || rip.radius >= rip.maxRadius) {
          ripples.splice(i, 1);
          if (ripples.length < 6 && !prefersReducedMotion) {
            ripples.push({
              x: Math.random() * width,
              y: Math.random() * height,
              radius: 2,
              maxRadius: Math.random() * 80 + 40,
              alpha: 0.6,
              speed: Math.random() * 1.2 + 0.8,
            });
          }
          continue;
        }

        ctx.strokeStyle = `rgba(255, 255, 255, ${rip.alpha})`;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Micro Particles
      ctx.globalCompositeOperation = "source-over";
      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.x += p.vx + Math.sin(time + p.y * 0.01) * 0.2;
          p.y += p.vy;

          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
        }

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
