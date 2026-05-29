import React from "react"
import { Link } from "react-router-dom"

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why BytzAI", href: "/why" },
  { label: "Global", href: "/global" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
]

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "GitHub", href: "#" },
]

export default function Footer() {
  return (
    <footer className="bg-[#F7F5F2] border-t border-border py-12">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <div>
            <Link to="/">
              <p className="font-display font-semibold text-base tracking-tight text-foreground mb-1">
                Bytz<span className="text-accent">AI</span>
              </p>
            </Link>
            <p className="font-body text-xs text-muted-foreground">AI + Humans Delivering Software at Light Speed.</p>
          </div>

          <div className="flex flex-wrap items-center gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="font-body text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors editorial-link">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="line-divider mb-6" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="font-body text-[11px] text-muted-foreground/60">
            © {new Date().getFullYear()} BytzAI. All rights reserved. bytzai.com
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-[11px] text-muted-foreground/60 hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="font-body text-[11px] text-muted-foreground/60 hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
