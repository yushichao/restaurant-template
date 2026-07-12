import { cn } from "@/lib/utils/cn";
import type { ComponentPropsWithoutRef, ElementType } from "react";

type HeadingLevel = 1 | 2 | 3 | 4;

type HeadingProps = ComponentPropsWithoutRef<"h1"> & {
  as?: `h${HeadingLevel}`;
  size?: "xl" | "lg" | "md" | "sm";
};

const sizeClasses: Record<NonNullable<HeadingProps["size"]>, string> = {
  xl: "text-4xl md:text-5xl lg:text-6xl",
  lg: "text-3xl md:text-4xl",
  md: "text-2xl md:text-3xl",
  sm: "text-xl md:text-2xl",
};

export function Heading({
  as: Tag = "h2",
  size = "lg",
  className,
  children,
  ...props
}: HeadingProps) {
  const Component = Tag as ElementType;

  return (
    <Component
      className={cn(
        "font-heading font-semibold tracking-tight text-foreground",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
