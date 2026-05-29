import React, { useState, useEffect } from "react"
import { Link, useLocation, Outlet } from "react-router-dom"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why BytzAI", href: "/why" },
  { label: "Global", href: "/global" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
]

function CursorGlow() {
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const sx = useSpring(x, { stiffness: 120, damping: 20 })
  const sy = useSpring(y, { stiffness: 120, damping: 20 })

  useEffect(() => {
    const move = (e) => { x.set(e.clientX); y.set(e.clientY) }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] w-64 h-64 rounded-full hidden lg:block"
      style={{
        x: sx, y: sy,
        translateX: "-50%", translateY: "-50%",
        background: "radial-gradient(circle, rgba(100,120,240,0.07) 0%, transparent 70%)",
      }}
    />
  )
}

export default function Layout() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const isActive = (href) => location.pathname === href

  return (
    <div className="min-h-screen bg-[#F7F5F2] font-body">
      <CursorGlow />
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#F7F5F2]/92 backdrop-blur-md border-b border-border/60" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <motion.span
              className="font-display font-semibold text-base tracking-tight text-foreground"
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              Bytz<span className="text-accent">AI</span>
            </motion.span>
          </Link>

          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="relative text-[11px] font-body tracking-[0.08em] uppercase transition-colors duration-200"
                style={{ color: isActive(link.href) ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))' }}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/contact"
              className="text-[11px] font-body text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.08em] editorial-link"
            >
              Talk to Team
            </Link>
            <Link
              to="/contact"
              className="relative px-5 py-2 text-[11px] font-body bg-foreground text-background uppercase tracking-[0.08em] overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-accent/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              />
              <span className="relative">Book a Call</span>
            </Link>
          </div>

          <button
            className="md:hidden p-1 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="w-4 h-4" />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden bg-[#F7F5F2] border-t border-border overflow-hidden"
            >
              <div className="px-8 py-6 flex flex-col gap-5">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.04 }}
                  >
                    <Link
                      to={link.href}
                      className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
                  <Link
                    to="/contact"
                    className="inline-block mt-2 px-5 py-2.5 text-xs font-body bg-foreground text-background uppercase tracking-wider"
                    onClick={() => setMobileOpen(false)}
                  >
                    Book a Strategy Call
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
