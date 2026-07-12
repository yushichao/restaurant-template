import { navigationConfig, siteConfig } from "@/config";
import { Container } from "@/components/ui";
import Link from "next/link";
import { HeaderClient } from "./HeaderClient";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl"
          >
            {siteConfig.name}
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main navigation"
          >
            {navigationConfig.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <HeaderClient items={navigationConfig.main} />
        </div>
      </Container>
    </header>
  );
}
