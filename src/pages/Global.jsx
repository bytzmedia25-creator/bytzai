import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Footer from "../components/landing/Footer"

const regions = [
  { name: "India", region: "South Asia", desc: "Primary engineering hub" },
  { name: "United States", region: "North America", desc: "Strategic delivery" },
  { name: "Germany", region: "Europe", desc: "European operations" },
  { name: "Netherlands", region: "Europe", desc: "European operations" },
  { name: "Ireland", region: "Europe", desc: "European operations" },
  { name: "Switzerland", region: "Europe", desc: "European operations" },
  { name: "Dubai", region: "Middle East", desc: "Gulf delivery hub" },
  { name: "Abu Dhabi", region: "Middle East", desc: "Gulf delivery hub" },
  { name: "Qatar", region: "Middle East", desc: "Gulf delivery hub" },
  { name: "Kuwait", region: "Middle East", desc: "Gulf delivery hub" },
  { name: "Saudi Arabia", region: "Middle East", desc: "Gulf delivery hub" },
  { name: "Singapore", region: "Southeast Asia", desc: "APAC delivery" },
  { name: "Sweden", region: "Scandinavia", desc: "Nordic operations" },
  { name: "Finland", region: "Scandinavia", desc: "Nordic operations" },
  { name: "Denmark", region: "Scandinavia", desc: "Nordic operations" },
  { name: "Norway", region: "Scandinavia", desc: "Nordic operations" },
]

const grouped = regions.reduce((acc, r) => {
  if (!acc[r.region]) acc[r.region] = []
  acc[r.region].push(r)
  return acc
}, {})

export default function Global() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <div>
      <section ref={heroRef} className="relative min-h-[65vh] flex flex-col justify-end pb-20 pt-36 overflow-hidden bg-foreground">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
            {[20, 35, 50, 65, 80].map((yPos, i) => (
              <motion.line key={`lat-${i}`} x1="0" y1={`${yPos}%`} x2="100%" y2={`${yPos}%`}
                stroke="white" strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 2, delay: 0.3 + i * 0.15 }}
              />
            ))}
            {[15, 28, 42, 55, 68, 82].map((xPos, i) => (
              <motion.line key={`lon-${i}`} x1={`${xPos}%`} y1="0" x2={`${xPos}%`} y2="100%"
                stroke="white" strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 2, delay: 0.6 + i * 0.12 }}
              />
            ))}
            {[
              { cx: "64%", cy: "38%" }, { cx: "22%", cy: "32%" },
              { cx: "50%", cy: "28%" }, { cx: "60%", cy: "44%" }, { cx: "76%", cy: "55%" },
            ].map((dot, i) => (
              <React.Fragment key={i}>
                <motion.circle cx={dot.cx} cy={dot.cy} r="3" fill="hsl(220,60%,62%)"
                  initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.2, type: "spring" }}
                />
                <motion.circle cx={dot.cx} cy={dot.cy} r="8" fill="none" stroke="hsl(220,60%,62%)" strokeWidth="0.5"
                  initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1.8, 2.5] }}
                  transition={{ delay: 1.2 + i * 0.2, duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
              </React.Fragment>
            ))}
          </motion.svg>
        </div>

        <motion.div style={{ y }} className="max-w-[1400px] mx-auto px-8 md:px-12 w-full">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-8 h-px bg-accent" />
            <span className="text-[11px] uppercase tracking-[0.16em] text-background/40 font-body">Global Presence</span>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div className="overflow-hidden">
              <motion.h1 initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="font-display font-medium text-[clamp(40px,5.5vw,80px)] leading-[0.97] tracking-[-0.03em] text-background"
              >
                Global Delivery.<br /><span className="italic font-light text-background/50">Local Understanding.</span>
              </motion.h1>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.65 }} className="space-y-4">
              <p className="font-body text-base text-background/50 font-light leading-relaxed max-w-md">
                Remote-first AI-powered software delivery supporting businesses across 16+ global markets. Timezone-aligned delivery, always.
              </p>
              <div className="flex gap-6">
                <div>
                  <div className="font-display font-medium text-3xl text-background tracking-tight">16+</div>
                  <div className="font-body text-xs text-background/40 uppercase tracking-wider">Countries</div>
                </div>
                <div>
                  <div className="font-display font-medium text-3xl text-background tracking-tight">6</div>
                  <div className="font-body text-xs text-background/40 uppercase tracking-wider">Regions</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-24 md:py-32 bg-[#F7F5F2] border-t border-border">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="flex items-center gap-3 mb-16"
          >
            <div className="accent-line" />
            <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-body">Coverage</span>
          </motion.div>

          <div className="space-y-12">
            {Object.entries(grouped).map(([regionName, countries], gi) => (
              <motion.div key={regionName} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: gi * 0.08 }}
              >
                <div className="flex items-center gap-4 border-b border-border pb-4 mb-5">
                  <span className="font-body text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60 w-32 flex-shrink-0">{regionName}</span>
                  <motion.div className="flex-1 h-px bg-border" initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: gi * 0.08 + 0.2 }}
                  />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {countries.map((c, ci) => (
                    <motion.div key={c.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }} transition={{ duration: 0.35, delay: gi * 0.05 + ci * 0.05 }}
                      whileHover={{ scale: 1.03, borderColor: "hsl(var(--foreground))" }}
                      className="border border-border px-4 py-3 transition-all duration-200 cursor-default"
                    >
                      <p className="font-body text-sm text-foreground">{c.name}</p>
                      <p className="font-body text-[10px] text-muted-foreground/60 mt-0.5">{c.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
