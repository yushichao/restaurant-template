"use client";

import type { NavItem } from "@/types";
import { useState } from "react";
import { MobileNav } from "./MobileNav";

type HeaderClientProps = {
  items: NavItem[];
};

export function HeaderClient({ items }: HeaderClientProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-muted"
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
      </button>

      <MobileNav
        items={items}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
