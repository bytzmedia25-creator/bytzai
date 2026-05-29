import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Footer from "../components/landing/Footer"
import FuturisticBg from "../components/landing/FuturisticBg"
import TypewriterText from "../components/landing/TypewriterText"
import SEO from "../components/SEO"

const metrics = [
  { value: "10×", label: "Faster Delivery" },
  { value: "AI", label: "Augmented Teams" },
  { value: "E2E", label: "Delivery Ownership" },
  { value: "16+", label: "Countries" },
]

const execution = ["Architecture", "Development", "Cloud", "Deployment", "DevOps", "Scaling", "Maintenance"]

const principles = [
  { num: "01", title: "AI-First Execution", body: "Every workflow is AI-accelerated. We combine large language models, code generation, and intelligent automation to deliver 10× faster without sacrificing quality." },
  { num: "02", title: "Engineering Ownership", body: "We take full responsibility for the delivery outcome — not just the code. Architecture decisions, infrastructure choices, and performance targets are on us." },
  { num: "03", title: "Embedded Partnership", body: "We operate as a true extension of your team. Transparent communication, shared goals, and a delivery model that scales exactly as your business requires." },
]

export default function About() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <div>
      <SEO
        title="About BytzAI — Our Mission, Team & Vision"
        description="Learn about BytzAI — our mission to accelerate software delivery through AI engineering, our global team, and our vision for the future of intelligent software development."
        keywords="About BytzAI, AI engineering company, software delivery company, AI transformation team, BytzAI mission"
        canonical="/about"
      />
      <section ref={heroRef} className="relative min-h-[70vh] flex flex-col justify-end pb-20 pt-36 overflow-hidden bg-[#F7F5F2]">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <FuturisticBg showParticles orbCount={2} />

        {["top-20 left-8 border-t border-l", "top-20 right-8 border-t border-r", "bottom-16 right-8 border-b border-r"].map((cls, i) => (
          <motion.div key={i} className={`absolute w-10 h-10 border-border/50 ${cls}`}
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
          />
        ))}

        <motion.div
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent pointer-events-none"
          animate={{ left: ["20%", "80%", "20%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div style={{ y }} className="max-w-[1400px] mx-auto px-8 md:px-12 w-full">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }} className="flex items-center gap-3 mb-10"
          >
            <motion.div className="accent-line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.5 }} />
            <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground font-body">About</span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1 initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="font-display font-medium text-[clamp(40px,5.5vw,80px)] leading-[0.97] tracking-[-0.03em] text-foreground"
            >
              Engineering Teams<br />
              <span className="italic font-light">Built for Speed.</span>
            </motion.h1>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
            className="mt-5 font-mono text-sm text-accent h-5"
          >
            <TypewriterText words={["Architecture to production.", "AI-accelerated workflows.", "Owned end-to-end.", "Delivered at light speed."]} speed={60} pause={2200} />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 md:py-32 bg-[#F7F5F2] border-t border-border">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-24">
            <div className="lg:col-span-5">
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="font-body text-base text-muted-foreground font-light leading-relaxed"
              >
                BytzAI combines elite software engineers with AI-accelerated workflows to deliver production-grade software at significantly faster timelines and lower operational cost.
              </motion.p>
            </div>
            <div className="lg:col-span-7">
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-body text-base text-muted-foreground font-light leading-relaxed mb-8"
              >
                We partner with startups and enterprises to own the complete execution layer — so internal teams can focus on growth, product, and business expansion.
              </motion.p>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground font-body mb-4">We own</p>
                <div className="flex flex-wrap gap-2">
                  {execution.map((item, i) => (
                    <motion.span key={item} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.25 + i * 0.06 }}
                      whileHover={{ borderColor: "hsl(var(--foreground))", color: "hsl(var(--foreground))" }}
                      className="px-3 py-1.5 border border-border text-xs font-body text-muted-foreground transition-colors duration-200 cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-border">
            {metrics.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-b md:border-b-0 border-r border-border last:border-r-0 pt-8 pb-8 px-6 first:pl-0"
              >
                <motion.div initial={{ scale: 0.7, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, type: "spring", stiffness: 200 }}
                  className="font-display font-medium text-4xl md:text-5xl tracking-[-0.04em] text-foreground mb-2"
                >
                  {m.value}
                </motion.div>
                <div className="font-body text-xs uppercase tracking-wider text-muted-foreground">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-foreground border-t border-border">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="flex items-center gap-3 mb-16"
          >
            <div className="w-8 h-px bg-accent" />
            <span className="text-[11px] uppercase tracking-[0.15em] text-background/40 font-body">How We Operate</span>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-px bg-background/10">
            {principles.map((p, i) => (
              <motion.div key={p.num} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="bg-foreground p-8 group"
              >
                <span className="font-body text-[10px] text-background/30 tracking-widest block mb-6">{p.num}</span>
                <h3 className="font-display font-medium text-xl tracking-tight text-background mb-4 group-hover:text-accent transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-background/50 font-light leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
