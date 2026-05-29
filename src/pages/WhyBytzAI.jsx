import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Footer from "../components/landing/Footer"
import SEO from "../components/SEO"
import FuturisticBg from "../components/landing/FuturisticBg"

const comparison = [
  { traditional: "Slow hiring cycles (3–6 months)", bytzai: "Ready AI-assisted engineering teams in days" },
  { traditional: "High operational costs", bytzai: "Significantly optimised development costs" },
  { traditional: "Long delivery timelines", bytzai: "10× faster software delivery" },
  { traditional: "Multiple vendor dependencies", bytzai: "Single partner, end-to-end ownership" },
  { traditional: "Scaling challenges", bytzai: "Rapid scalable engineering capacity" },
  { traditional: "Manual development workflows", bytzai: "AI-accelerated execution throughout" },
  { traditional: "Infrastructure complexity", bytzai: "Fully managed cloud operations" },
  { traditional: "Large internal headcount overhead", bytzai: "Lean and efficient delivery model" },
]

const advantages = [
  { value: "10×", label: "Faster time to market", sub: "vs. traditional hiring" },
  { value: "60%", label: "Lower operational cost", sub: "on average" },
  { value: "100%", label: "Delivery ownership", sub: "architecture to production" },
  { value: "24h", label: "Response time", sub: "global coverage" },
]

export default function WhyBytzAI() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <div>
      <SEO
        title="Why BytzAI — The Case for AI-Augmented Engineering"
        description="Discover why leading organizations choose BytzAI to accelerate delivery. We combine human expertise with AI to ship software faster, reduce risk, and drive measurable business outcomes."
        keywords="why BytzAI, AI-augmented engineering, faster software delivery, AI development advantage, software delivery acceleration, reduce engineering costs"
        canonical="/why"
      />
      <section ref={heroRef} className="relative min-h-[65vh] flex flex-col justify-end pb-20 pt-36 overflow-hidden bg-[#F7F5F2]">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <FuturisticBg showParticles orbCount={2} />
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
          {[0, 1, 2].map((i) => (
            <motion.line key={i} x1={`${60 + i * 10}%`} y1="0%" x2={`${40 + i * 10}%`} y2="100%"
              stroke="hsl(30, 10%, 86%)" strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, delay: 0.4 + i * 0.2 }}
            />
          ))}
        </svg>
        <motion.div style={{ y }} className="max-w-[1400px] mx-auto px-8 md:px-12 w-full">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mb-10"
          >
            <motion.div className="accent-line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.5 }} />
            <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground font-body">The Difference</span>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div className="overflow-hidden">
              <motion.h1 initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="font-display font-medium text-[clamp(36px,5vw,72px)] leading-[0.97] tracking-[-0.03em] text-foreground"
              >
                You Build the Business.<br />
                <span className="italic font-light">We Build the Technology.</span>
              </motion.h1>
            </div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.65 }}
              className="font-body text-base text-muted-foreground font-light leading-relaxed max-w-md"
            >
              BytzAI takes ownership of the full engineering execution layer so your team can focus on product strategy, growth, customers, and revenue.
            </motion.p>
          </div>
        </motion.div>
      </section>

      <section className="border-t border-border bg-[#F7F5F2]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {advantages.map((a, i) => (
              <motion.div key={a.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }} className="py-12 px-6 first:pl-0"
              >
                <motion.div initial={{ scale: 0.6 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 180, delay: 0.2 + i * 0.1 }}
                  className="font-display font-medium text-4xl md:text-5xl tracking-[-0.04em] text-foreground mb-1"
                >
                  {a.value}
                </motion.div>
                <p className="font-body text-sm text-foreground mb-0.5">{a.label}</p>
                <p className="font-body text-xs text-muted-foreground">{a.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#F7F5F2] border-t border-border">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="grid grid-cols-2 border-b border-border pb-4 mb-0"
          >
            <span className="font-body text-[10px] uppercase tracking-[0.14em] text-muted-foreground/50">Traditional Hiring Model</span>
            <motion.span initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-[10px] uppercase tracking-[0.14em] text-accent pl-8"
            >
              BytzAI Delivery Model
            </motion.span>
          </motion.div>

          {comparison.map((row, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }} transition={{ duration: 0.45, delay: i * 0.06 }}
              className="grid grid-cols-2 border-b border-border/50 group"
            >
              <div className="py-4 pr-8">
                <p className="font-body text-sm text-muted-foreground/50 font-light line-through decoration-muted-foreground/25">{row.traditional}</p>
              </div>
              <div className="py-4 pl-8 border-l border-border/50 relative overflow-hidden">
                <motion.div className="absolute inset-0 bg-secondary/30" initial={{ scaleX: 0, originX: 0 }} whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <p className="relative font-body text-sm text-foreground font-medium group-hover:text-accent transition-colors duration-200">{row.bytzai}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-foreground">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display font-medium text-3xl md:text-4xl tracking-tight text-background leading-tight"
          >
            Ready to ship faster?<br /><span className="italic font-light text-background/50">Let's talk.</span>
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <Link to="/contact"
              className="group flex items-center gap-3 px-7 py-3.5 border border-background/30 text-background text-sm font-body hover:bg-background hover:text-foreground transition-all duration-300"
            >
              Start a Conversation
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
