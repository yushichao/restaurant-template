import { navigationConfig, siteConfig } from "@/config";
import { Container } from "@/components/ui";
import Link from "next/link";

const dayLabels: Record<string, string> = {
  monday: "Mon",
  tuesday: "Tue",
  wednesday: "Wed",
  thursday: "Thu",
  friday: "Fri",
  saturday: "Sat",
  sunday: "Sun",
};

function formatTime(time: string): string {
  return time;
}

export function Footer() {
  const { address, openingHours, social } = siteConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-heading text-xl font-semibold text-foreground"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2">
              {navigationConfig.footer.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <address className="mt-4 space-y-2 text-sm not-italic text-muted-foreground">
              <p>
                {address.street}
                <br />
                {address.city}, {address.region} {address.postalCode}
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-foreground"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Hours
            </h3>
            <ul className="mt-4 space-y-1.5">
              {openingHours.map((schedule, idx) => {
                const daysLabel = schedule.days
                  .map((day) => dayLabels[day])
                  .join(" – ");
                return (
                  <li
                    key={idx}
                    className="flex flex-col gap-0.5 text-sm text-muted-foreground"
                  >
                    <span className="font-medium text-foreground">{daysLabel}</span>
                    {schedule.closed ? (
                      <span>Closed</span>
                    ) : (
                      <div className="space-y-0.5 pl-4">
                        {schedule.periods.map((period, idx) => (
                          <div key={idx}>
                            {formatTime(period.open)}–{formatTime(period.close)}
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          {Object.keys(social).length > 0 && (
            <ul className="flex items-center gap-4">
              {social.instagram && (
                <li>
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Instagram
                  </a>
                </li>
              )}
              {social.facebook && (
                <li>
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Facebook
                  </a>
                </li>
              )}
              {social.yelp && (
                <li>
                  <a
                    href={social.yelp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Yelp
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>
      </Container>
    </footer>
  );
}
