import { cn } from "@/lib/utils/cn";
import type { ComponentPropsWithoutRef } from "react";

type CardProps = ComponentPropsWithoutRef<"div">;

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-background p-6 shadow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
