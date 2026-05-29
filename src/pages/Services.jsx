import React, { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import Footer from "../components/landing/Footer"
import SEO from "../components/SEO"
import FuturisticBg from "../components/landing/FuturisticBg"

const services = [
  { index: "01", title: "AI Software Engineering", copy: "Custom AI-powered applications, agents, copilots, automation platforms, and enterprise AI systems built for production.", tags: ["LLMs", "Agents", "Automation"] },
  { index: "02", title: "Cloud Migration", copy: "Migrate legacy infrastructure and applications to modern cloud-native platforms with zero disruption to operations.", tags: ["AWS", "GCP", "Azure"] },
  { index: "03", title: "Enterprise Product Engineering", copy: "Large-scale application development, modernization, and platform architecture for complex enterprise environments.", tags: ["Architecture", "Modernisation"] },
  { index: "04", title: "DevOps & Infrastructure", copy: "CI/CD pipelines, Kubernetes orchestration, monitoring, automation, and full infrastructure lifecycle management.", tags: ["Kubernetes", "CI/CD", "IaC"] },
  { index: "05", title: "SaaS Engineering", copy: "Launch scalable, multi-tenant SaaS platforms with AI-assisted development acceleration and best-in-class architecture.", tags: ["Multi-tenant", "Scalable"] },
  { index: "06", title: "Managed Hosting & Operations", copy: "Deployment, hosting, monitoring, uptime guarantees, scaling, and ongoing maintenance — fully managed.", tags: ["24/7 Ops", "SLAs"] },
  { index: "07", title: "AI-Augmented Teams", copy: "Dedicated engineers using AI-assisted workflows operating as a seamless extension of your internal team.", tags: ["Dedicated", "AI-Powered"] },
]

function ServiceRow({ service, i }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.55, delay: i * 0.07, ease: [0.4, 0, 0.2, 1] }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      className="group grid grid-cols-12 items-center py-6 border-t border-border transition-all duration-300 cursor-default relative overflow-hidden"
    >
      <motion.div className="absolute inset-0 bg-secondary/50"
        initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      />
      <div className="col-span-1 relative z-10">
        <span className="font-body text-[10px] uppercase tracking-wider text-muted-foreground/50">{service.index}</span>
      </div>
      <div className="col-span-5 md:col-span-4 relative z-10">
        <h3 className="font-display font-medium text-lg md:text-xl tracking-[-0.02em] text-foreground">{service.title}</h3>
      </div>
      <div className="hidden md:flex col-span-3 items-center gap-2 relative z-10">
        <AnimatePresence>
          {hovered && service.tags.map((tag, ti) => (
            <motion.span key={tag} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15, delay: ti * 0.05 }}
              className="px-2 py-0.5 border border-accent/30 text-[10px] text-accent font-body tracking-wide"
            >
              {tag}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
      <div className="col-span-6 md:col-span-4 flex items-center justify-end gap-4 relative z-10">
        <AnimatePresence>
          {hovered && (
            <motion.p initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block font-body text-sm text-muted-foreground leading-relaxed font-light max-w-[260px] text-right"
            >
              {service.copy}
            </motion.p>
          )}
        </AnimatePresence>
        <motion.div animate={{ rotate: hovered ? 45 : 0 }} transition={{ duration: 0.2 }}>
          <ArrowUpRight className={`w-4 h-4 flex-shrink-0 transition-colors duration-200 ${hovered ? "text-foreground" : "text-border"}`} />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <div>
      <SEO
        title="Services — AI Software Engineering, Cloud & DevOps"
        description="Explore BytzAI's full service portfolio: AI Software Engineering, IT Transformation, Cloud Migration, Enterprise Product Engineering, DevOps, SaaS Development, and AI-Augmented Teams."
        keywords="AI Software Engineering services, Cloud Migration services, DevOps consulting, SaaS development company, enterprise product engineering, IT transformation, AI-augmented teams"
        canonical="/services"
      />
      <section ref={heroRef} className="relative min-h-[65vh] flex flex-col justify-end pb-20 pt-36 overflow-hidden bg-[#F7F5F2]">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <FuturisticBg showParticles orbCount={2} />
        {[25, 50, 75].map((pos, i) => (
          <motion.div key={i} className="absolute top-0 bottom-0 w-px bg-border/20 pointer-events-none"
            style={{ left: `${pos}%` }} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
        <motion.div style={{ y }} className="max-w-[1400px] mx-auto px-8 md:px-12 w-full">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }} className="flex items-center gap-3 mb-10"
          >
            <motion.div className="accent-line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.5 }} />
            <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground font-body">Services</span>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div className="overflow-hidden">
              <motion.h1 initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="font-display font-medium text-[clamp(40px,5.5vw,80px)] leading-[0.97] tracking-[-0.03em] text-foreground"
              >
                What We<br /><span className="italic font-light">Deliver.</span>
              </motion.h1>
            </div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.65 }}
              className="font-body text-base text-muted-foreground font-light leading-relaxed max-w-md"
            >
              End-to-end engineering capabilities, from first line of code to production infrastructure — delivered with AI-assisted precision.
            </motion.p>
          </div>
        </motion.div>
      </section>

      <section className="py-16 md:py-24 bg-[#F7F5F2] border-t border-border relative overflow-hidden">
        <FuturisticBg showParticles={false} orbCount={1} />
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          {services.map((s, i) => <ServiceRow key={s.index} service={s} i={i} />)}
          <div className="border-b border-border" />
        </div>
      </section>

      <section className="py-20 bg-foreground border-t border-border">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="font-body text-[11px] uppercase tracking-wider text-background/40 mb-2">Ready to start?</p>
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight text-background leading-tight">
              Let's build something<br /><span className="italic font-light text-background/60">exceptional.</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <Link to="/contact"
              className="group flex items-center gap-3 px-7 py-3.5 border border-background/30 text-background text-sm font-body hover:bg-background hover:text-foreground transition-all duration-300"
            >
              Start a Project
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
