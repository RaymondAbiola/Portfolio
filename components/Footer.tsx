import Link from "next/link";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 sm:flex-row sm:px-8">
        <Link href="/#home" className="font-display text-base font-bold">
          {profile.name}
        </Link>
        <p className="text-sm text-muted">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
