import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { LandingHero } from "@/components/ui/LandingHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import {
  ghlDetailServices,
  ghlHubDisplayGroups,
  ghlHubService,
} from "@/data/ghl-services";
import { getPageImages } from "@/lib/page-media";

export const metadata = createMetadata({
  title: "GoHighLevel Services",
  description: ghlHubService.shortDescription,
  path: "/services/gohighlevel",
});

const ghlValueProps = [
  { label: "22 specialized offerings", detail: "CRM through SaaS mode & support" },
  { label: "Workflow-first delivery", detail: "Tested automations with documentation" },
  { label: "Plan-aware scoping", detail: "Only what your GHL stack can support" },
];

export default function GoHighLevelHubPage() {
  const { hero } = getPageImages("gohighlevel", "GoHighLevel CRM and automation");

  const serviceBySlug = Object.fromEntries(ghlDetailServices.map((s) => [s.slug, s]));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "GoHighLevel", href: "/services/gohighlevel" },
        ]}
      />
      <LandingHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "GoHighLevel", href: "/services/gohighlevel" },
        ]}
        label="GoHighLevel"
        title={ghlHubService.title}
        subtitle={ghlHubService.description}
        heroImage={hero.src}
        heroImageAlt={hero.alt}
      />

      <section className="border-b border-sand bg-white py-8">
        <div className="container-tcg">
          <div className="grid gap-6 md:grid-cols-3">
            {ghlValueProps.map((item) => (
              <div key={item.label} className="border-l-2 border-copper bg-sand-light p-6">
                <p className="text-lg font-bold text-teal">{item.label}</p>
                <p className="mt-2 text-sm text-teal/70">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4 rounded-sm border border-sand bg-sand-light p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <p className="max-w-2xl text-sm leading-relaxed text-teal/75">
              Platform capabilities, messaging channels, AI features, and white-label options may
              require specific GHL plans, third-party providers, usage fees, consent, and regional
              availability. We scope every engagement to what your team can actually deliver.
            </p>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button href="/contact">Book a free GHL consultation</Button>
              <Button href="/contact" variant="secondary">
                Custom automation plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {ghlHubDisplayGroups.map((group, groupIndex) => (
        <section
          key={group.title}
          className={`section-padding ${groupIndex % 2 === 0 ? "bg-white" : "bg-sand-light"}`}
        >
          <div className="container-tcg">
            <SectionHeader label="GHL Services" title={group.title} subtitle={group.subtitle} />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {group.slugs.map((slug) => {
                const service = serviceBySlug[slug];
                if (!service) return null;
                return (
                  <article
                    key={service.slug}
                    className="group flex flex-col border border-sand bg-white p-6 shadow-sm transition-shadow hover:border-copper/40 hover:shadow-md md:p-8"
                  >
                    <h2 className="text-lg font-bold text-teal group-hover:text-copper">
                      {service.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-teal/75">
                      {service.shortDescription}
                    </p>
                    <ul className="mt-4 space-y-2 border-t border-sand pt-4">
                      {service.includes.slice(0, 3).map((item) => (
                        <li key={item} className="flex gap-2 text-xs text-teal/70">
                          <CheckCircle2
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-copper"
                            aria-hidden
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal transition-colors group-hover:text-copper"
                    >
                      View service <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding bg-teal text-sand">
        <div className="container-tcg">
          <SectionHeader
            light
            align="center"
            label="Included on every engagement"
            title="What you can expect from our GHL team"
            subtitle="Structured delivery whether you need a single workflow or a full sub-account rollout."
          />
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {ghlHubService.includes.map((item) => (
              <li
                key={item}
                className="flex gap-3 border border-white/10 bg-white/5 p-4 text-sm text-sand/90"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-copper-soft" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSection />
      <FinalCTA />
    </>
  );
}
