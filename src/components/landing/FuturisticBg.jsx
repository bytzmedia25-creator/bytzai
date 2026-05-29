import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"

function ParticleCanvas({ count = 40, color = "rgba(100,120,220,0.18)" }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    let animId
    let W = canvas.offsetWidth
    let H = canvas.offsetHeight
    canvas.width = W
    canvas.height = H

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }))

    function draw() {
      ctx.clearRect(0, 0, W, H)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.beginPath()
            ctx.strokeStyle = color.replace("0.18", String(0.12 * (1 - dist / 130)))
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
        ctx.beginPath()
        ctx.arc(particles[i].x, particles[i].y, particles[i].r, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
        particles[i].x += particles[i].vx
        particles[i].y += particles[i].vy
        if (particles[i].x < 0 || particles[i].x > W) particles[i].vx *= -1
        if (particles[i].y < 0 || particles[i].y > H) particles[i].vy *= -1
      }
      animId = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W
      canvas.height = H
    }
    window.addEventListener("resize", onResize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", onResize)
    }
  }, [count, color])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}

function GlowOrb({ cx, cy, size = 300, color = "rgba(100,120,240,0.07)", delay = 0 }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: cx, top: cy,
        width: size, height: size,
        marginLeft: -size / 2, marginTop: -size / 2,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
      animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 6 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  )
}

function ScanSweep() {
  return (
    <motion.div
      className="absolute left-0 right-0 h-[1px] pointer-events-none"
      style={{ background: "linear-gradient(90deg, transparent 0%, rgba(100,120,240,0.25) 50%, transparent 100%)" }}
      animate={{ top: ["5%", "95%", "5%"] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    />
  )
}

export default function FuturisticBg({ dark = false, showParticles = true, orbCount = 2 }) {
  const orbColor = dark ? "rgba(100,120,240,0.12)" : "rgba(100,120,240,0.07)"
  const particleColor = dark ? "rgba(140,160,255,0.25)" : "rgba(100,120,220,0.16)"

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {showParticles && <ParticleCanvas count={35} color={particleColor} />}
      <GlowOrb cx="75%" cy="30%" size={500} color={orbColor} delay={0} />
      {orbCount >= 2 && <GlowOrb cx="20%" cy="70%" size={380} color={orbColor} delay={2} />}
      {orbCount >= 3 && <GlowOrb cx="50%" cy="50%" size={300} color={orbColor} delay={4} />}
      <ScanSweep />
    </div>
  )
}
