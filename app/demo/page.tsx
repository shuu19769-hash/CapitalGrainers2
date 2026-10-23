import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { LandingHero } from "@/components/ui/LandingHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { demoChannelSections } from "@/data/demo-results";
import { getPageImages } from "@/lib/page-media";
import { cn } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Demo — Channel Results",
  description:
    "Sample performance snapshots for TikTok Ads, Google Ads, Meta Ads, and GoHighLevel automations from The Capital Gainers.",
  path: "/demo",
});

const channelAccent: Record<string, string> = {
  "tiktok-ads": "from-[#0f172a] to-teal-dark",
  "google-ads": "from-teal-dark to-[#1a3a4a]",
  "meta-ads": "from-[#1e2a3a] to-teal-dark",
  "ghl-automations": "from-teal-dark to-[#2a221c]",
};

export default function DemoPage() {
  const { hero } = getPageImages("demo-results", "Marketing performance and automation results");

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Demo", href: "/demo" },
        ]}
      />
      <LandingHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Demo", href: "/demo" },
        ]}
        label="Demo"
        title="Results across paid media & automation"
        subtitle="Representative outcomes from campaigns and GoHighLevel workflows we build for growth-focused brands. Figures below are illustrative samples for demo purposes—not client guarantees."
        heroImage={hero.src}
        heroImageAlt={hero.alt}
      />

      <section className="sticky top-[4.25rem] z-[90] border-b border-sand/80 bg-white/95 py-4 shadow-sm backdrop-blur-md md:top-[5.25rem]">
        <div className="container-tcg flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-bold uppercase tracking-widest text-copper">Explore channels</p>
          <nav className="flex flex-wrap gap-2" aria-label="Demo sections">
            {demoChannelSections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className="min-h-10 rounded-full border border-teal/15 bg-sand-light px-4 py-2 text-sm font-semibold text-teal transition-colors hover:border-copper hover:bg-white hover:text-copper"
              >
                {section.title}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-tcg">
          <SectionHeader
            label="Overview"
            title="Four growth levers, one measurable story"
            subtitle="Each section mirrors how we report to clients: headline metrics, what we changed, and where to go deeper on services."
            align="center"
          />
        </div>
      </section>

      {demoChannelSections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={cn(
            "section-padding scroll-mt-36 border-t border-sand/60",
            index % 2 === 0 ? "bg-sand-light" : "bg-white"
          )}
        >
          <div className="container-tcg">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start">
              <div className="min-w-0">
                <span className="inline-block rounded-full bg-copper/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-copper">
                  {section.tag}
                </span>
                <h2 className="mt-4 text-3xl font-bold text-teal md:text-4xl">{section.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-teal/75">{section.description}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={section.serviceHref}>View {section.title} service</Button>
                  {section.demoHref && (
                    <Button href={section.demoHref} variant="secondary">
                      All GHL services
                    </Button>
                  )}
                </div>
              </div>

              <div
                className={cn(
                  "overflow-hidden rounded-sm bg-gradient-to-br p-6 text-white shadow-lg sm:p-8",
                  channelAccent[section.id] ?? "from-teal-dark to-teal"
                )}
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-copper-soft">
                  Sample results
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {section.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="min-w-0 border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                    >
                      <p className="text-2xl font-bold text-white sm:text-3xl">{metric.value}</p>
                      <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white/65 sm:text-xs">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <article className="mt-10 border border-sand bg-white p-6 md:p-10">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <h3 className="text-sm font-bold uppercase tracking-widest text-teal">
                  What drove these numbers
                </h3>
                <Link
                  href={section.serviceHref}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-copper hover:text-teal"
                >
                  Service details <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              <ul className="mt-6 grid gap-4 md:grid-cols-3">
                {section.highlights.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-copper bg-sand-light p-4 text-sm leading-relaxed text-teal/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      ))}

      <section className="section-padding bg-teal text-sand">
        <div className="container-tcg max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Want results like these for your brand?</h2>
          <p className="mt-4 text-sand/80">
            Start with a growth audit or tell us which channel you want to scale—we will map a plan
            tied to your margins and funnel.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/growth-audit" className="!bg-cta !text-white hover:!bg-cta-hover">
              Get a free growth audit
            </Button>
            <Button href="/contact" variant="secondary" className="!border-sand/40 !text-sand">
              Contact the team
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
