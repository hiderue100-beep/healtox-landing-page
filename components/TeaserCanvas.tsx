"use client";

import { useEffect, useRef } from "react";

interface Blob {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  color: string;
  phase: number;
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

export default function TeaserCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse Parallax Physics
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    let currentMouseX = width / 2;
    let currentMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Reduced Motion Check
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Organic Vibrant Colors: Electric Blue, Aqua, Emerald Green, Fresh Lime, Subtle Purple, Soft Coral
    const COLORS = [
      "rgba(37, 99, 235, 0.45)",   // Electric Blue
      "rgba(6, 182, 212, 0.45)",   // Aqua
      "rgba(16, 185, 129, 0.4)",   // Emerald Green
      "rgba(132, 204, 22, 0.35)",  // Fresh Lime
      "rgba(139, 92, 246, 0.35)",  // Subtle Purple
      "rgba(244, 63, 94, 0.3)",    // Soft Coral
    ];

    // Initialize 6 Organic Morphing Blobs
    const blobs: Blob[] = [
      { x: width * 0.3, y: height * 0.4, radius: Math.min(width, height) * 0.38, vx: 0.25, vy: 0.18, color: COLORS[0], phase: 0, speed: 0.008 },
      { x: width * 0.7, y: height * 0.3, radius: Math.min(width, height) * 0.42, vx: -0.2, vy: 0.22, color: COLORS[1], phase: Math.PI / 3, speed: 0.006 },
      { x: width * 0.5, y: height * 0.7, radius: Math.min(width, height) * 0.35, vx: 0.18, vy: -0.25, color: COLORS[2], phase: Math.PI / 2, speed: 0.009 },
      { x: width * 0.2, y: height * 0.8, radius: Math.min(width, height) * 0.32, vx: 0.15, vy: -0.15, color: COLORS[3], phase: Math.PI, speed: 0.007 },
      { x: width * 0.8, y: height * 0.75, radius: Math.min(width, height) * 0.36, vx: -0.22, vy: -0.18, color: COLORS[4], phase: Math.PI * 1.2, speed: 0.005 },
      { x: width * 0.5, y: height * 0.25, radius: Math.min(width, height) * 0.3, vx: 0.1, vy: 0.15, color: COLORS[5], phase: Math.PI * 1.5, speed: 0.01 },
    ];

    // Initialize Floating Micro Particles
    const particleCount = prefersReducedMotion ? 0 : 55;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.5 + 0.8,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.15,
        alpha: Math.random() * 0.6 + 0.2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }

    let time = 0;

    const render = () => {
      time += 0.012;

      // Smooth mouse parallax inertia
      currentMouseX += (targetMouseX - currentMouseX) * 0.03;
      currentMouseY += (targetMouseY - currentMouseY) * 0.03;

      const mouseOffsetX = (currentMouseX - width / 2) * 0.06;
      const mouseOffsetY = (currentMouseY - height / 2) * 0.06;

      // Deep Dark Cinematic Canvas Background
      ctx.fillStyle = "#050508";
      ctx.fillRect(0, 0, width, height);

      // Blend Mode for Cinematic Fluid Gradients
      ctx.globalCompositeOperation = "screen";

      // Render Fluid Morphing Radial Gradient Blobs
      blobs.forEach((blob, idx) => {
        if (!prefersReducedMotion) {
          blob.phase += blob.speed;
          blob.x += Math.sin(blob.phase) * blob.vx * 1.5;
          blob.y += Math.cos(blob.phase) * blob.vy * 1.5;
        }

        // Apply Mouse Parallax offset proportional to depth index
        const depth = (idx + 1) * 0.15;
        const drawX = blob.x + mouseOffsetX * depth;
        const drawY = blob.y + mouseOffsetY * depth;
        const pulseRadius = blob.radius + Math.sin(blob.phase * 1.5) * 25;

        const grad = ctx.createRadialGradient(
          drawX, drawY, pulseRadius * 0.05,
          drawX, drawY, pulseRadius
        );
        grad.addColorStop(0, blob.color);
        grad.addColorStop(0.5, blob.color.replace(/[\d\.]+\)$/, "0.18)"));
        grad.addColorStop(1, "rgba(5, 5, 8, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(drawX, drawY, pulseRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render Water Refraction Caustics
      if (!prefersReducedMotion) {
        ctx.globalCompositeOperation = "lighter";
        ctx.lineWidth = 1.2;

        for (let i = 0; i < 3; i++) {
          ctx.strokeStyle = i % 2 === 0 ? "rgba(34, 211, 238, 0.07)" : "rgba(164, 244, 207, 0.06)";
          ctx.beginPath();
          const yOffset = height * 0.3 * (i + 1) + Math.sin(time + i) * 30;
          ctx.moveTo(0, yOffset);

          for (let x = 0; x <= width; x += 40) {
            const waveY = Math.sin(x * 0.004 + time + i * 1.2) * 20 + Math.cos(x * 0.008 + time * 0.8) * 15;
            ctx.lineTo(x, yOffset + waveY);
          }
          ctx.stroke();
        }
      }

      // Render Floating Particles
      ctx.globalCompositeOperation = "source-over";
      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.x += p.vx + Math.sin(time + p.y * 0.01) * 0.15;
          p.y += p.vy;

          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
        }

        ctx.fillStyle = p.color.replace(/[\d\.]+\)$/, `${p.alpha})`);
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
