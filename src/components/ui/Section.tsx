import { cn } from "@/lib/utils/cn";
import type { ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  variant?: "default" | "muted" | "primary";
};

const variantClasses = {
  default: "bg-background",
  muted: "bg-muted",
  primary: "bg-primary text-primary-foreground",
};

export function Section({
  variant = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-16 md:py-24", variantClasses[variant], className)}
      {...props}
    >
      {children}
    </section>
  );
}
