import { cn } from "@/lib/utils/cn";
import type { ComponentPropsWithoutRef } from "react";

type BadgeVariant = "default" | "accent" | "outline";

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-muted text-muted-foreground",
  accent: "bg-accent text-accent-foreground",
  outline: "border border-border bg-transparent text-foreground",
};

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
