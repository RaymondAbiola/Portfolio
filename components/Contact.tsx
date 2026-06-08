import { Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { profile, socials } from "@/lib/data";
import { ConfettiDots } from "./ConfettiDots";
import { Github, Linkedin, Telegram, XIcon } from "./BrandIcons";

const channels = [
  { href: socials.github, label: "GitHub", value: "@RaymondAbiola", Icon: Github },
  { href: socials.linkedin, label: "LinkedIn", value: "raymondabiola", Icon: Linkedin },
  { href: socials.twitter, label: "Twitter / X", value: "@raymondintell", Icon: XIcon },
  { href: socials.telegram, label: "Telegram", value: "@raymondintell", Icon: Telegram },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <ConfettiDots />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-mono text-sm text-accent">06 — Contact</p>
          <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s build something great.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I&apos;m {profile.availability.toLowerCase()}. If you&apos;re hiring for a
            blockchain team that values thoughtful engineering, I&apos;d love to talk.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${socials.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-contrast transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Email me
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-7 py-3.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Download Résumé
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
            {channels.map(({ href, label, value, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left transition-colors hover:border-accent/50"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors group-hover:border-accent group-hover:text-accent">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wide text-muted">{label}</span>
                  <span className="block truncate text-sm font-medium">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
