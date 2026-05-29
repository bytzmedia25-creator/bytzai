import React, { useRef } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowUpRight, Zap, Globe, Code2, Cpu } from "lucide-react"
import { Link } from "react-router-dom"
import Footer from "../components/landing/Footer"
import FuturisticBg from "../components/landing/FuturisticBg"
import TypewriterText from "../components/landing/TypewriterText"

const stagger = { animate: { transition: { staggerChildren: 0.11 } } }
const fadeSlide = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

const statItems = [
  { value: "10×", label: "Faster Delivery", icon: Zap },
  { value: "16+", label: "Countries", icon: Globe },
  { value: "E2E", label: "Ownership", icon: Code2 },
  { value: "AI", label: "Augmented", icon: Cpu },
]

function MagneticCard({ children, href, className }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 300, damping: 25 })
  const sy = useSpring(y, { stiffness: 300, damping: 25 })

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.08)
    y.set((e.clientY - cy) * 0.08)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      className={className}
    >
      <Link to={href} className="block h-full">{children}</Link>
    </motion.div>
  )
}

function CircuitLines() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ overflow: "visible" }}>
      {[
        { cx: "72%", cy: "20%" }, { cx: "84%", cy: "38%" },
        { cx: "70%", cy: "58%" }, { cx: "80%", cy: "75%" }, { cx: "60%", cy: "85%" },
      ].map((d, i) => (
        <React.Fragment key={i}>
          <motion.circle cx={d.cx} cy={d.cy} r="3" fill="none" stroke="hsl(var(--accent))" strokeWidth="1"
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.6, scale: 1 }}
            transition={{ delay: 1 + i * 0.18, type: "spring", stiffness: 200 }}
          />
          <motion.circle cx={d.cx} cy={d.cy} r="1.5" fill="hsl(var(--accent))"
            initial={{ opacity: 0 }} animate={{ opacity: [0, 0.8, 0.4, 0.8] }}
            transition={{ delay: 1.2 + i * 0.18, duration: 3, repeat: Infinity }}
          />
          <motion.circle cx={d.cx} cy={d.cy} r="3" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.5"
            initial={{ opacity: 0.5, scale: 1 }} animate={{ opacity: 0, scale: 4 }}
            transition={{ delay: 1.5 + i * 0.3, duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
          />
        </React.Fragment>
      ))}
      {[
        ["72%","20%","84%","38%"],["84%","38%","70%","58%"],
        ["70%","58%","80%","75%"],["80%","75%","60%","85%"],
      ].map(([x1,y1,x2,y2], i) => (
        <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="hsl(var(--accent))" strokeWidth="0.6" strokeOpacity="0.2" strokeDasharray="5 5"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.3 + i * 0.3, ease: "easeOut" }}
        />
      ))}
    </svg>
  )
}

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <div>
      <section ref={containerRef} className="relative min-h-screen flex flex-col justify-end pb-24 pt-32 overflow-hidden bg-[#F7F5F2]">
        <motion.div style={{ scale: bgScale }} className="absolute inset-0">
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        </motion.div>
        <FuturisticBg showParticles orbCount={2} />
        <CircuitLines />

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
            transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-[45vw] top-0 w-px h-full bg-border/30 origin-top"
          />
          <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
            transition={{ duration: 1.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-0 w-[44vw] h-full border-l border-border/40 origin-top"
          />
          {[
            "absolute top-16 right-10 w-14 h-14 border-t border-r border-accent/30",
            "absolute bottom-20 left-6 w-10 h-10 border-b border-l border-accent/20",
            "absolute top-16 left-10 w-8 h-8 border-t border-l border-border/30",
          ].map((cls, i) => (
            <motion.div key={i} className={cls}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 + i * 0.12, type: "spring" }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute top-24 right-10 md:right-20 hidden md:flex flex-col items-end gap-1.5"
        >
          <div className="flex items-center gap-2">
            <motion.div className="w-1.5 h-1.5 rounded-full bg-green-500"
              animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
            <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60 font-body">Systems Online</span>
          </div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/50 font-body">AI-First Engineering</p>
          <motion.div className="h-px bg-border/40 self-stretch"
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 1.5 }} />
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/40 font-body">bytzai.com</p>
        </motion.div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-[1400px] mx-auto px-8 md:px-12 w-full relative z-10"
        >
          <div className="max-w-[780px]">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }} className="flex items-center gap-3 mb-10"
            >
              <motion.div className="accent-line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.55 }} />
              <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground font-body">
                Software Engineering · Cloud · AI
              </span>
            </motion.div>

            <div className="overflow-hidden mb-5">
              <motion.div variants={stagger} initial="initial" animate="animate">
                {["Light Speed", "Software", "Delivery."].map((word, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.div variants={fadeSlide}
                      className={`font-display font-medium text-[clamp(44px,6.5vw,92px)] leading-[0.95] tracking-[-0.03em] text-foreground block ${i === 2 ? "italic font-light" : ""}`}
                    >
                      {word}
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
              className="font-body text-sm text-accent tracking-wide mb-3 h-5"
            >
              <TypewriterText
                words={["Build 10× faster.", "Ship to production daily.", "Scale without limits.", "AI-powered from day one."]}
                className="font-mono"
                speed={55}
                pause={2000}
              />
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-[480px] mb-12 font-light"
            >
              AI-augmented engineering teams helping startups and enterprises build, migrate, and scale software faster with lower operational overhead.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05 }} className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link to="/contact"
                className="group relative flex items-center gap-3 px-7 py-3.5 bg-foreground text-background text-sm font-body overflow-hidden"
              >
                <motion.div className="absolute inset-0 bg-accent/20"
                  initial={{ x: "-100%" }} whileHover={{ x: "0%" }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                />
                <span className="relative">Book a Strategy Call</span>
                <ArrowRight className="relative w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link to="/services"
                className="group flex items-center gap-3 px-7 py-3.5 border border-border text-foreground text-sm font-body hover:border-accent hover:text-accent transition-all duration-300"
              >
                View Services
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-20 pt-6 border-t border-border/50 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {statItems.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.08 }}
                className="flex items-center gap-3 group"
              >
                <s.icon className="w-3.5 h-3.5 text-accent/60 flex-shrink-0" />
                <div>
                  <span className="font-display font-semibold text-lg tracking-tight text-foreground">{s.value}</span>
                  <span className="font-body text-[10px] uppercase tracking-wider text-muted-foreground ml-2">{s.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="border-t border-border bg-[#F7F5F2] py-20 relative overflow-hidden">
        <FuturisticBg showParticles={false} orbCount={1} />
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <div className="accent-line" />
            <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-body">Explore</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {[
              { label: "Services", title: "What We Deliver", href: "/services", desc: "7 core engineering capabilities built for speed and scale.", num: "07" },
              { label: "Why BytzAI", title: "The Difference", href: "/why", desc: "Traditional hiring vs the BytzAI model — side by side.", num: "8×" },
              { label: "Global", title: "Worldwide Reach", href: "/global", desc: "Engineering delivery across 16+ countries and regions.", num: "16+" },
            ].map((item, i) => (
              <MagneticCard key={item.label} href={item.href} className="bg-[#F7F5F2]">
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="group p-8 hover:bg-secondary/50 transition-colors duration-300 h-full relative overflow-hidden"
                >
                  <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "radial-gradient(circle at 50% 50%, rgba(100,120,240,0.06) 0%, transparent 70%)" }} />
                  <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/50 font-body mb-3">{item.label}</p>
                  <div className="font-display font-medium text-5xl tracking-[-0.04em] text-foreground/10 mb-2 select-none">{item.num}</div>
                  <h3 className="font-display font-medium text-2xl tracking-tight text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground font-light mb-6">{item.desc}</p>
                  <div className="flex items-center gap-2 text-xs font-body text-muted-foreground group-hover:text-foreground transition-colors">
                    <span>Explore</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.div>
              </MagneticCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
