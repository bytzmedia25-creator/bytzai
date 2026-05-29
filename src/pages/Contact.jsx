import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Calendar, MessageSquare } from "lucide-react"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { toast } from "sonner"
import Footer from "../components/landing/Footer"

// ↓ Paste your Web3Forms access key here (get one free at https://web3forms.com)
const WEB3FORMS_ACCESS_KEY = "1894ea78-1e25-4827-b899-3dce28e47612"

const CALENDLY_URL = "https://calendly.com/bytzmedia25/30min"

const contactInfo = [
  { label: "Email", value: "connect@bytzai.com", href: "mailto:connect@bytzai.com" },
  { label: "Schedule", value: "Book via Calendly ↗", href: CALENDLY_URL },
]

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" })
  const [sending, setSending] = useState(false)
  const [activeTab, setActiveTab] = useState("message")


  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New contact from ${form.name} — BytzAI`,
          name: form.name,
          email: form.email,
          company: form.company,
          service: form.service,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        toast.success("Message received. We'll respond within 24 hours.")
        setForm({ name: "", email: "", company: "", service: "", message: "" })
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
        {[1, 2, 3].map((i) => (
          <motion.div key={i}
            className="absolute top-1/2 right-1/4 rounded-full border border-border/30 pointer-events-none hidden md:block"
            style={{ width: i * 160, height: i * 160, marginTop: -(i * 80), marginLeft: -(i * 80) }}
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1 / (i * 1.5), scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 + i * 0.2 }}
          />
        ))}
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 w-full">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mb-10"
          >
            <motion.div className="accent-line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.5 }} />
            <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground font-body">Contact</span>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="font-display font-medium text-[clamp(40px,5.5vw,80px)] leading-[0.97] tracking-[-0.03em] text-foreground"
            >
              Let's Build<br /><span className="italic font-light">Faster.</span>
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#F7F5F2] border-t border-border">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="font-body text-base text-muted-foreground font-light leading-relaxed mb-12"
              >
                Tell us what you're building. We'll help you accelerate delivery with AI-powered engineering teams.
              </motion.p>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
                className="space-y-7"
              >
                {contactInfo.map((c, i) => (
                  <motion.div key={c.label} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }} className="border-b border-border pb-7"
                  >
                    <p className="font-body text-[10px] uppercase tracking-wider text-muted-foreground/50 mb-1.5">{c.label}</p>
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer"
                      className="font-body text-sm text-foreground editorial-link">
                      {c.value}
                    </a>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                className="mt-10 p-6 border border-border"
              >
                <p className="font-body text-[10px] uppercase tracking-wider text-muted-foreground/50 mb-2">Strategy Call</p>
                <p className="font-body text-sm text-foreground mb-4">Speak directly with our engineering leadership about your project.</p>
                <button
                  onClick={() => setActiveTab("calendar")}
                  className="group flex items-center gap-2 text-xs font-body text-accent hover:text-foreground transition-colors"
                >
                  Pick a Time
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }} className="lg:col-span-8"
            >
              {/* Tab switcher */}
              <div className="flex items-center gap-0 mb-8 border-b border-border">
                {[
                  { id: "message", label: "Send a Message", icon: MessageSquare },
                  { id: "calendar", label: "Book a Meeting", icon: Calendar },
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`relative flex items-center gap-2 px-5 py-3 text-[11px] font-body uppercase tracking-[0.08em] transition-colors duration-200 ${
                      activeTab === id ? "text-foreground" : "text-muted-foreground hover:text-foreground/70"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                    {activeTab === id && (
                      <motion.div
                        layoutId="contact-tab-indicator"
                        className="absolute bottom-0 left-0 right-0 h-px bg-foreground"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "message" ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required
                        className="font-body rounded-none border-border bg-transparent focus-visible:ring-0 focus-visible:border-foreground transition-colors" />
                      <Input placeholder="Email Address" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required
                        className="font-body rounded-none border-border bg-transparent focus-visible:ring-0 focus-visible:border-foreground transition-colors" />
                    </div>
                    <Input placeholder="Company Name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="font-body rounded-none border-border bg-transparent focus-visible:ring-0 focus-visible:border-foreground transition-colors" />
                    <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                      <SelectTrigger className="font-body rounded-none border-border bg-transparent focus:ring-0 focus:border-foreground">
                        <SelectValue placeholder="What do you need?" />
                      </SelectTrigger>
                      <SelectContent>
                        {["AI Software Engineering", "Custom Software Development", "Cloud Migration", "DevOps & Infrastructure", "AI-Augmented Teams", "SaaS Engineering", "Other"].map((s) => (
                          <SelectItem key={s} value={s} className="font-body">{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Describe your project or challenge..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={6} required
                      className="font-body rounded-none border-border bg-transparent focus-visible:ring-0 focus-visible:border-foreground transition-colors resize-none" />
                    <div className="flex items-center justify-between pt-2">
                      <p className="font-body text-xs text-muted-foreground">We respond within 24 hours.</p>
                      <motion.button type="submit" disabled={sending} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        className="group flex items-center gap-3 px-7 py-3.5 bg-foreground text-background text-sm font-body hover:bg-foreground/85 transition-all duration-200"
                      >
                        {sending ? (
                          <span className="flex items-center gap-2">
                            <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="inline-block w-3.5 h-3.5 border-2 border-background/30 border-t-background rounded-full"
                            />
                            Sending...
                          </span>
                        ) : (
                          <>Send Message<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" /></>
                        )}
                      </motion.button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="calendly"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <iframe
                      src={`${CALENDLY_URL}?embed_type=Inline&hide_gdpr_banner=1&background_color=F7F5F2&text_color=1a1a1a&primary_color=1a1a1a`}
                      width="100%"
                      height="700"
                      frameBorder="0"
                      title="Book a meeting with BytzAI"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
