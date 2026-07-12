import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Welcome
            </p>

            <h1 className="text-5xl font-bold">
              {siteConfig.name}
            </h1>

            <p className="max-w-xl text-lg text-neutral-600">
              厳選した食材と伝統の技で仕上げた、
              本場四川の「麻・辣・鮮・香」を味わえる本格四川料理をぜひご堪能ください。
            </p>

            <div className="flex gap-4">
              <Link
                href="https://tabelog.com/kanagawa/A1405/A140501/14102963/?cid=google_yoyaku"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  Reserve a Table
                </Button>
              </Link>

              <Button variant="secondary">
                View Menu
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/hero.png"
              alt={siteConfig.name}
              width={700}
              height={800}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}