export type DemoResultMetric = {
  label: string;
  value: string;
};

export type DemoChannelSection = {
  id: string;
  title: string;
  tag: string;
  description: string;
  metrics: DemoResultMetric[];
  highlights: string[];
  serviceHref: string;
  demoHref?: string;
};

export const demoChannelSections: DemoChannelSection[] = [
  {
    id: "tiktok-ads",
    title: "TikTok Ads",
    tag: "Paid social",
    description:
      "Short-form creative testing, Spark Ads, and full-funnel campaigns tuned for DTC and lead-gen brands.",
    metrics: [
      { label: "Avg. ROAS", value: "3.8×" },
      { label: "CPA reduction", value: "−42%" },
      { label: "Creative tests / month", value: "24+" },
      { label: "Hook rate lift", value: "+58%" },
    ],
    highlights: [
      "UGC-style ads scaled from winning hooks in under 14 days",
      "Retargeting sequences tied to product viewers and add-to-cart",
      "Weekly creative refresh to combat ad fatigue",
    ],
    serviceHref: "/services/tiktok-ads",
  },
  {
    id: "google-ads",
    title: "Google Ads",
    tag: "Paid search",
    description:
      "Search, Shopping, Performance Max, and remarketing built around intent and margin—not vanity clicks.",
    metrics: [
      { label: "Conversion rate lift", value: "+67%" },
      { label: "Cost per lead", value: "−35%" },
      { label: "Shopping ROAS", value: "4.2×" },
      { label: "Brand search share", value: "+28%" },
    ],
    highlights: [
      "Query-level negatives and SKAG-style structure for high-intent terms",
      "Feed optimization and custom labels for Shopping campaigns",
      "Offline conversion import for qualified lead tracking",
    ],
    serviceHref: "/services/google-ads",
  },
  {
    id: "meta-ads",
    title: "Meta Ads",
    tag: "Paid social",
    description:
      "Facebook and Instagram campaigns with structured testing, audience layering, and creative that converts.",
    metrics: [
      { label: "Blended ROAS", value: "4.5×" },
      { label: "MER improvement", value: "+31%" },
      { label: "New customer %", value: "62%" },
      { label: "CPM efficiency", value: "−22%" },
    ],
    highlights: [
      "Advantage+ shopping paired with manual prospecting controls",
      "Creative iteration pipeline: static, video, and carousel formats",
      "CAPI setup for reliable attribution and budget scaling",
    ],
    serviceHref: "/services/meta-ads",
  },
  {
    id: "ghl-automations",
    title: "GHL automations",
    tag: "GoHighLevel",
    description:
      "GoHighLevel workflows that nurture leads, book appointments, and hand off hot prospects to sales.",
    metrics: [
      { label: "Lead response time", value: "< 2 min" },
      { label: "Show rate lift", value: "+44%" },
      { label: "Pipeline velocity", value: "+38%" },
      { label: "Manual tasks saved", value: "12 hrs/wk" },
    ],
    highlights: [
      "Instant SMS + email follow-up on form and ad lead submissions",
      "Appointment reminders and no-show recovery sequences",
      "Stage-based tags and internal alerts for sales-ready leads",
    ],
    serviceHref: "/services/ghl-marketing-automation",
    demoHref: "/services/gohighlevel",
  },
];
