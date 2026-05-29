import React, { useState } from "react"

// ↓ Paste your Web3Forms access key here (get one free at https://web3forms.com)
const WEB3FORMS_ACCESS_KEY = "1894ea78-1e25-4827-b899-3dce28e47612"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { toast } from "sonner"
import Footer from "../components/landing/Footer"

const partnerTypes = ["Consulting Firm", "Agency", "System Integrator", "Technology Provider", "Startup Ecosystem", "Enterprise Transformation Partner"]

const benefits = [
  { num: "01", title: "Revenue-Sharing", body: "Structured co-delivery and referral programmes with competitive revenue sharing." },
  { num: "02", title: "White-Label Delivery", body: "Deliver world-class engineering under your brand, powered by BytzAI teams." },
  { num: "03", title: "Faster Client Execution", body: "Compressed delivery timelines through AI-augmented engineering workflows." },
  { num: "04", title: "AI Development Support", body: "Access our proprietary AI-assisted development tooling and methodologies." },
  { num: "05", title: "Dedicated Teams", body: "Named engineering teams embedded within your client engagements." },
  { num: "06", title: "Global Capabilities", body: "Deliver across 16+ geographies with timezone-aligned engineering capacity." },
]

export default function Partners() {
  const [form, setForm] = useState({ name: "", email: "", company: "", type: "", message: "" })
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Partnership inquiry from ${form.name} — BytzAI`,
          name: form.name,
          email: form.email,
          company: form.company,
          partnership_type: form.type,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        toast.success("Inquiry received. We'll be in touch shortly.")
        setForm({ name: "", email: "", company: "", type: "", message: "" })
      } else {
        toast.error("Something went wrong. Please try again.")
      }
    } catch {
      toast.error("Failed to send. Please check your connection.")
    }
    setSending(false)
  }

  return (
    <div>
      <section className="relative min-h-[60vh] flex flex-col justify-end pb-20 pt-36 overflow-hidden bg-[#F7F5F2]">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        {[
          { cls: "top-20 left-8 border-t border-l", delay: 0.4 },
          { cls: "top-20 right-8 border-t border-r", delay: 0.5 },
          { cls: "bottom-16 left-8 border-b border-l", delay: 0.6 },
          { cls: "bottom-16 right-8 border-b border-r", delay: 0.7 },
        ].map((b, i) => (
          <motion.div key={i} className={`absolute w-8 h-8 border-border/40 ${b.cls}`}
            initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: b.delay }}
          />
        ))}
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 w-full">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mb-10"
          >
            <motion.div className="accent-line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.5 }} />
            <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground font-body">Strategic Partnerships</span>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="font-display font-medium text-[clamp(40px,5.5vw,80px)] leading-[0.97] tracking-[-0.03em] text-foreground"
            >
              Partner With<br /><span className="italic font-light">BytzAI.</span>
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F5F2] border-t border-border">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-body text-base text-muted-foreground font-light leading-relaxed max-w-xl mb-16"
          >
            We collaborate with consulting firms, agencies, system integrators, and enterprise transformation partners to expand delivery capabilities using AI-powered engineering teams.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {benefits.map((b, i) => (
              <motion.div key={b.num} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="bg-[#F7F5F2] p-8 group hover:bg-secondary/40 transition-colors duration-300"
              >
                <span className="font-body text-[10px] text-muted-foreground/40 tracking-widest block mb-5">{b.num}</span>
                <h3 className="font-display font-medium text-xl tracking-tight text-foreground mb-3 group-hover:text-accent transition-colors duration-300">{b.title}</h3>
                <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">{b.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-foreground border-t border-border">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-8 h-px bg-accent" />
                <span className="text-[11px] uppercase tracking-[0.15em] text-background/40 font-body">Inquire</span>
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="font-display font-medium text-3xl md:text-4xl tracking-tight text-background leading-tight mb-6"
              >
                Partnership<br /><span className="italic font-light text-background/50">Inquiry</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
                className="font-body text-sm text-background/40 font-light"
              >
                Tell us about your firm and we'll schedule a discovery call.
              </motion.p>
            </div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }} className="lg:col-span-8"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required
                    className="font-body rounded-none border-background/20 bg-background/5 text-background placeholder:text-background/30 focus-visible:ring-0 focus-visible:border-background/50 transition-colors" />
                  <Input placeholder="Email Address" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required
                    className="font-body rounded-none border-background/20 bg-background/5 text-background placeholder:text-background/30 focus-visible:ring-0 focus-visible:border-background/50 transition-colors" />
                </div>
                <Input placeholder="Company Name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} required
                  className="font-body rounded-none border-background/20 bg-background/5 text-background placeholder:text-background/30 focus-visible:ring-0 focus-visible:border-background/50 transition-colors" />
                <Select value={form.type} onValueChange={(v) => setForm({ ...form, type: v })}>
                  <SelectTrigger className="font-body rounded-none border-background/20 bg-background/5 text-background focus:ring-0 focus:border-background/50 [&>span]:text-background/50">
                    <SelectValue placeholder="Partnership Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {partnerTypes.map((t) => (
                      <SelectItem key={t} value={t} className="font-body">{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Textarea placeholder="Tell us about your partnership interests..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4}
                  className="font-body rounded-none border-background/20 bg-background/5 text-background placeholder:text-background/30 focus-visible:ring-0 focus-visible:border-background/50 transition-colors resize-none" />
                <div className="pt-2">
                  <button type="submit" disabled={sending}
                    className="group flex items-center gap-3 px-7 py-3.5 border border-background/30 text-background text-sm font-body hover:bg-background hover:text-foreground transition-all duration-300"
                  >
                    {sending ? "Submitting..." : "Submit Inquiry"}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
