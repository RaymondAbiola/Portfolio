import type { Project } from "./data";

// Maps a project's accent key to the matching CSS custom property.
export const accentVar: Record<Project["accent"], string> = {
  lime: "var(--c-lime)",
  pink: "var(--c-pink)",
  blue: "var(--c-blue)",
  purple: "var(--c-purple)",
  amber: "var(--c-amber)",
};
