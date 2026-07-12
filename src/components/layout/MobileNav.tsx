"use client";

import { cn } from "@/lib/utils/cn";
import type { NavItem } from "@/types";
import Link from "next/link";
import { useEffect } from "react";

type MobileNavProps = {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
};

export function MobileNav({ items, isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      <nav
        id="mobile-nav"
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col bg-background shadow-xl transition-transform duration-300 lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <span className="text-sm font-medium text-muted-foreground">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-muted"
            aria-label="Close menu"
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col gap-1 px-4 py-6">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-muted"
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
