"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDownRight, ChevronDown, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { profile, socials } from "@/lib/data";
import { ConfettiDots } from "./ConfettiDots";
import { Portrait } from "./Portrait";
import { Github, Linkedin, Telegram, XIcon } from "./BrandIcons";

function useRotatingRole(roles: readonly string[]) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && display === current) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && display === "") {
      // Advance to the next role once the current one is fully deleted.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplay((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      }, deleting ? 45 : 80);
    }
    return () => clearTimeout(timeout);
  }, [display, deleting, index, roles]);

  return display;
}

const socialItems = [
  { href: socials.github, label: "GitHub", Icon: Github },
  { href: socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: socials.twitter, label: "Twitter / X", Icon: XIcon },
  { href: socials.telegram, label: "Telegram", Icon: Telegram },
  { href: `mailto:${socials.email}`, label: "Email", Icon: Mail },
];

export function Hero() {
  const role = useRotatingRole(profile.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <ConfettiDots />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Text column */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Raymond
            <br />
            <span className="text-muted">Abiola</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 flex h-8 items-center gap-2 text-lg font-medium sm:text-2xl"
          >
            <span className="text-accent">{role}</span>
            <span className="inline-block h-6 w-[2px] animate-pulse bg-accent sm:h-7" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.tagline} Proficient in Solidity, Foundry, Hardhat &amp; TypeScript, with an
            engineer&apos;s eye for security and gas optimization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center gap-2"
          >
            {socialItems.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Portrait column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[var(--shadow-card)]">
            <Portrait src={profile.portraitLight} alt={`${profile.name} — ${profile.title}`} />
            {/* subtle gradient veil for text legibility / mood */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>

          {/* subtle ambient glow behind the portrait */}
          <div
            aria-hidden
            className="absolute -bottom-6 -left-6 -z-0 h-20 w-20 rounded-2xl bg-accent/15 blur-2xl"
          />
        </motion.div>
      </div>

      {/* scroll cue — bouncing down arrow */}
      <Link
        href="/#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-accent sm:block"
      >
        <motion.span
          className="inline-flex"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-7 w-7" />
        </motion.span>
      </Link>
    </section>
  );
}
