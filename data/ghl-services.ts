import type { Service } from "@/data/services";

type GhlServiceDef = {
  slug: string;
  title: string;
  shortDescription: string;
  includes: string[];
  outcome?: string;
};

const defaultChallenge =
  "Leads slip through manual follow-up, automations break silently, and CRM data stays messy—limiting conversion and team visibility on GoHighLevel.";

const defaultBestFor =
  "Businesses and agencies running sales, marketing, and client delivery on GoHighLevel.";

function buildGhlService(def: GhlServiceDef): Service {
  return {
    slug: def.slug,
    title: def.title,
    shortDescription: def.shortDescription,
    description: `${def.shortDescription} We configure, test, and document everything inside GoHighLevel so your team can launch confidently and scale without guesswork.`,
    challenge: defaultChallenge,
    includes: def.includes,
    bestFor: defaultBestFor,
    outcome:
      def.outcome ??
      "A dependable GHL implementation that saves time, improves follow-up, and supports measurable pipeline growth.",
    category: "ghl",
  };
}

const ghlServiceDefs: GhlServiceDef[] = [
  {
    slug: "ghl-crm-setup",
    title: "CRM Setup & Contact Management",
    shortDescription:
      "Set up and organize your GoHighLevel CRM, including contact records, custom fields, tags, smart lists, pipelines, and lead tracking.",
    includes: [
      "Contact record structure and custom fields",
      "Tags, smart lists, and segmentation rules",
      "Pipeline alignment with sales stages",
      "Lead source tracking and data hygiene",
      "Team permissions and ownership basics",
    ],
  },
  {
    slug: "ghl-sales-pipelines",
    title: "Sales Pipelines & Opportunity Management",
    shortDescription:
      "Build visual sales pipelines with customized stages, automated opportunity updates, follow-up tasks, and clear visibility into every deal.",
    includes: [
      "Custom pipeline stages and deal fields",
      "Automated stage updates from workflows",
      "Task creation and follow-up reminders",
      "Lost/won reasons and reporting hooks",
      "Sales team views and accountability",
    ],
  },
  {
    slug: "ghl-marketing-automation",
    title: "Marketing Automation & Workflows",
    shortDescription:
      "Create automated workflows for lead nurturing, reminders, internal notifications, customer onboarding, reactivation, and post-sale follow-ups.",
    includes: [
      "Workflow mapping and trigger design",
      "Multi-step nurture and reactivation paths",
      "Internal alerts and task routing",
      "Onboarding and post-sale sequences",
      "Testing, versioning, and documentation",
    ],
  },
  {
    slug: "ghl-ai-chatbots",
    title: "AI Chatbots & Conversational AI",
    shortDescription:
      "Configure website and messaging AI assistants for common questions, lead qualification, appointment requests, and conversation routing.",
    includes: [
      "Bot flows for FAQs and qualification",
      "Website chat and messaging channel setup",
      "Handoff rules to live team members",
      "Appointment and form routing",
      "Conversation logging in the CRM",
    ],
  },
  {
    slug: "ghl-ai-voice-agents",
    title: "AI Voice Agents & Call Automation",
    shortDescription:
      "Implement AI-assisted inbound call handling, lead qualification, appointment scheduling, and follow-up workflows where supported by the selected provider.",
    includes: [
      "Inbound call flow design",
      "Qualification scripts and routing",
      "Appointment scheduling integrations",
      "Follow-up workflows after calls",
      "Provider and plan compatibility review",
    ],
    outcome:
      "Faster lead response and consistent call handling without sacrificing human escalation when it matters.",
  },
  {
    slug: "ghl-appointment-booking",
    title: "Appointment Booking & Calendars",
    shortDescription:
      "Set up booking calendars, team availability, round-robin scheduling, confirmation messages, rescheduling, and no-show reminders.",
    includes: [
      "Calendar configuration and availability rules",
      "Round-robin and team routing",
      "Confirmation and reminder automations",
      "Reschedule and cancellation flows",
      "No-show recovery sequences",
    ],
  },
  {
    slug: "ghl-funnels-landing-pages",
    title: "Funnels & Landing Pages",
    shortDescription:
      "Design and build conversion-focused landing pages, lead-generation funnels, opt-in pages, thank-you pages, and campaign-specific experiences.",
    includes: [
      "Funnel architecture and page wireframes",
      "Mobile-friendly GHL page builds",
      "Forms and tracking on each step",
      "Thank-you and next-step automation",
      "Split testing and iteration support",
    ],
  },
  {
    slug: "ghl-website-migration",
    title: "Website Design & GHL Migration",
    shortDescription:
      "Build or migrate websites and pages into GoHighLevel, including mobile-friendly layouts, forms, tracking, and essential integrations.",
    includes: [
      "Site structure and template setup",
      "Page migration or net-new builds",
      "Forms, pixels, and analytics hooks",
      "Mobile responsiveness and performance basics",
      "Launch checklist and QA",
    ],
  },
  {
    slug: "ghl-forms-surveys",
    title: "Forms, Surveys & Quizzes",
    shortDescription:
      "Create branded lead forms, intake questionnaires, surveys, conditional fields, and automated routing of submitted information.",
    includes: [
      "Branded form and survey design",
      "Conditional logic and multi-step flows",
      "Tagging and pipeline triggers on submit",
      "Notifications and internal routing",
      "Spam protection and compliance basics",
    ],
  },
  {
    slug: "ghl-email-marketing",
    title: "Email Marketing & Campaigns",
    shortDescription:
      "Configure email templates, nurture sequences, broadcasts, segmentation, deliverability basics, and campaign performance tracking.",
    includes: [
      "Template design and brand alignment",
      "Nurture and broadcast campaigns",
      "List segmentation and suppression rules",
      "Deliverability and domain setup guidance",
      "Performance reporting in GHL",
    ],
  },
  {
    slug: "ghl-sms-whatsapp",
    title: "SMS & WhatsApp Automation",
    shortDescription:
      "Set up compliant text-message follow-ups, appointment reminders, lead responses, and WhatsApp workflows using approved integrations and accounts.",
    includes: [
      "SMS opt-in and compliance workflows",
      "Appointment and lead response automations",
      "WhatsApp setup via supported integrations",
      "Two-way inbox routing to teams",
      "Template and timing optimization",
    ],
  },
  {
    slug: "ghl-social-planner",
    title: "Social Media Planner & Scheduling",
    shortDescription:
      "Connect supported social channels, organize content calendars, schedule posts, and streamline social publishing workflows.",
    includes: [
      "Channel connection within supported plans",
      "Content calendar organization",
      "Scheduled publishing workflows",
      "Approval and team coordination",
      "Basic performance review in GHL",
    ],
  },
  {
    slug: "ghl-reputation-management",
    title: "Reputation Management & Reviews",
    shortDescription:
      "Automate review requests, monitor feedback, route unhappy customers to support, and help teams manage online reputation.",
    includes: [
      "Review request automations",
      "Feedback monitoring and alerts",
      "Negative review routing to support",
      "Reputation reporting views",
      "Follow-up sequences for satisfied clients",
    ],
  },
  {
    slug: "ghl-payments-subscriptions",
    title: "Payments, Invoices & Subscriptions",
    shortDescription:
      "Configure supported payment integrations, checkout flows, invoices, recurring billing, and payment-triggered automations.",
    includes: [
      "Payment provider configuration",
      "Checkout and invoice templates",
      "Subscription and recurring billing setup",
      "Payment-triggered workflows",
      "Receipt and internal notification flows",
    ],
  },
  {
    slug: "ghl-memberships-courses",
    title: "Memberships, Courses & Client Portals",
    shortDescription:
      "Build gated learning areas, course experiences, membership access, onboarding flows, and client-facing portals.",
    includes: [
      "Membership and course structure",
      "Gated content and access rules",
      "Client portal branding and navigation",
      "Onboarding automations for new members",
      "Support handoff from portal activity",
    ],
  },
  {
    slug: "ghl-lead-capture-inbox",
    title: "Lead Capture & Multi-Channel Inbox",
    shortDescription:
      "Connect forms, chat widgets, calls, email, and messaging channels to a unified inbox and route inquiries to the right team.",
    includes: [
      "Channel connection to unified inbox",
      "Routing rules by source or intent",
      "Assignment and SLA notifications",
      "Conversation templates and tags",
      "CRM sync for every interaction",
    ],
  },
  {
    slug: "ghl-reporting-dashboards",
    title: "Reporting, Dashboards & Attribution",
    shortDescription:
      "Configure dashboards for lead sources, pipeline performance, appointments, campaign results, and operational KPIs.",
    includes: [
      "Lead source and campaign attribution views",
      "Pipeline and appointment KPI dashboards",
      "Custom fields mapped to reporting",
      "Executive summary views for leadership",
      "Ongoing metric refinement",
    ],
  },
  {
    slug: "ghl-integrations",
    title: "Integrations, APIs & Webhooks",
    shortDescription:
      "Connect GHL with external apps through native integrations, APIs, webhooks, Zapier, Make, or n8n where appropriate.",
    includes: [
      "Integration scoping and data mapping",
      "Native GHL integrations where available",
      "Webhooks, Zapier, Make, or n8n flows",
      "Error handling and monitoring",
      "Documentation for your team",
    ],
  },
  {
    slug: "ghl-saas-white-label",
    title: "SaaS Mode, Sub-Accounts & White Label",
    shortDescription:
      "Support agency account structures, sub-account setup, snapshots, client onboarding, permissions, and SaaS/white-label configuration on eligible plans.",
    includes: [
      "Agency and sub-account architecture",
      "Permissions and user roles",
      "Client onboarding playbooks",
      "SaaS and white-label setup on eligible plans",
      "Snapshot deployment standards",
    ],
  },
  {
    slug: "ghl-snapshots-migration",
    title: "Snapshots, Templates & Account Migration",
    shortDescription:
      "Create reusable snapshots, deploy proven workflows across accounts, and migrate contacts, pipelines, and compatible assets.",
    includes: [
      "Snapshot design and versioning",
      "Cross-account deployment",
      "Contact and pipeline migration",
      "Asset compatibility review",
      "Post-migration QA checklist",
    ],
  },
  {
    slug: "ghl-audit-optimization",
    title: "GHL Audit, Optimization & Troubleshooting",
    shortDescription:
      "Review existing setups, fix broken automations, clean up CRM structures, improve conversion flows, and document recommended improvements.",
    includes: [
      "Full account and workflow audit",
      "Broken automation repair",
      "CRM and pipeline cleanup",
      "Conversion path recommendations",
      "Prioritized improvement roadmap",
    ],
  },
  {
    slug: "ghl-ongoing-support",
    title: "Ongoing Management, Training & Support",
    shortDescription:
      "Provide platform administration, workflow maintenance, team training, SOPs, testing, and ongoing technical support.",
    includes: [
      "Workflow maintenance and updates",
      "Team training sessions and recordings",
      "SOPs and internal documentation",
      "Regression testing after changes",
      "Responsive technical support",
    ],
    outcome:
      "A supported GHL environment your team can run day to day with fewer fires and clearer processes.",
  },
];

export const ghlHubService: Service = {
  slug: "gohighlevel",
  title: "GoHighLevel Services",
  shortDescription:
    "Complete GHL setup, automation, CRM, funnels, AI, integrations, and ongoing support.",
  description:
    "We design, build, and maintain GoHighLevel systems that connect lead capture, nurture, sales, and client delivery in one platform—from first snapshot to ongoing optimization.",
  challenge:
    "Teams adopt GHL but underuse pipelines, automations, and integrations—so leads stall and revenue leaks before sales ever gets a clear handoff.",
  includes: [
    "CRM, pipelines, and contact management",
    "Marketing automation and multi-channel follow-up",
    "Funnels, websites, forms, and booking flows",
    "AI chat, voice, and conversational routing where supported",
    "Integrations, reporting, and ongoing support",
  ],
  bestFor:
    "Agencies, service businesses, and growth teams standardizing marketing and sales on GoHighLevel.",
  outcome:
    "One connected GHL stack that captures demand, automates follow-up, and gives leadership clear visibility.",
  category: "ghl",
};

export const ghlDetailServices: Service[] = ghlServiceDefs.map(buildGhlService);

export const ghlServices: Service[] = [ghlHubService, ...ghlDetailServices];

export type GhlMenuLink = { label: string; href: string };

export const ghlMegaMenuGroups: { title: string; links: GhlMenuLink[] }[] = [
  {
    title: "GHL Services",
    links: [
      { label: "All GHL services", href: "/services/gohighlevel" },
      { label: "CRM setup & contacts", href: "/services/ghl-crm-setup" },
      { label: "Sales pipelines", href: "/services/ghl-sales-pipelines" },
      { label: "Marketing automation", href: "/services/ghl-marketing-automation" },
      { label: "Lead capture & inbox", href: "/services/ghl-lead-capture-inbox" },
      { label: "GHL audit & optimization", href: "/services/ghl-audit-optimization" },
    ],
  },
  {
    title: "GHL — Funnels & comms",
    links: [
      { label: "Funnels & landing pages", href: "/services/ghl-funnels-landing-pages" },
      { label: "Website & migration", href: "/services/ghl-website-migration" },
      { label: "Forms, surveys & quizzes", href: "/services/ghl-forms-surveys" },
      { label: "Email marketing", href: "/services/ghl-email-marketing" },
      { label: "SMS & WhatsApp", href: "/services/ghl-sms-whatsapp" },
      { label: "Appointment booking", href: "/services/ghl-appointment-booking" },
      { label: "Reputation & reviews", href: "/services/ghl-reputation-management" },
    ],
  },
  {
    title: "GHL — AI & scale",
    links: [
      { label: "AI chatbots", href: "/services/ghl-ai-chatbots" },
      { label: "AI voice agents", href: "/services/ghl-ai-voice-agents" },
      { label: "Reporting & dashboards", href: "/services/ghl-reporting-dashboards" },
      { label: "Integrations & webhooks", href: "/services/ghl-integrations" },
      { label: "Payments & subscriptions", href: "/services/ghl-payments-subscriptions" },
      { label: "Memberships & courses", href: "/services/ghl-memberships-courses" },
      { label: "Social planner", href: "/services/ghl-social-planner" },
      { label: "SaaS & white label", href: "/services/ghl-saas-white-label" },
      { label: "Snapshots & migration", href: "/services/ghl-snapshots-migration" },
      { label: "Ongoing support", href: "/services/ghl-ongoing-support" },
    ],
  },
];

export const ghlHubDisplayGroups: {
  title: string;
  subtitle: string;
  slugs: string[];
}[] = [
  {
    title: "CRM & sales",
    subtitle: "Pipelines, contacts, and visibility from first touch to closed deal.",
    slugs: [
      "ghl-crm-setup",
      "ghl-sales-pipelines",
      "ghl-lead-capture-inbox",
      "ghl-reporting-dashboards",
    ],
  },
  {
    title: "Automation & marketing",
    subtitle: "Workflows and campaigns that nurture leads without manual chasing.",
    slugs: [
      "ghl-marketing-automation",
      "ghl-email-marketing",
      "ghl-sms-whatsapp",
      "ghl-social-planner",
      "ghl-reputation-management",
    ],
  },
  {
    title: "Funnels, web & monetization",
    subtitle: "Pages, forms, and checkout experiences built inside GoHighLevel.",
    slugs: [
      "ghl-funnels-landing-pages",
      "ghl-website-migration",
      "ghl-forms-surveys",
      "ghl-payments-subscriptions",
      "ghl-memberships-courses",
    ],
  },
  {
    title: "AI, booking & agency scale",
    subtitle: "Conversational AI, calendars, integrations, and ongoing support.",
    slugs: [
      "ghl-ai-chatbots",
      "ghl-ai-voice-agents",
      "ghl-appointment-booking",
      "ghl-integrations",
      "ghl-saas-white-label",
      "ghl-snapshots-migration",
      "ghl-audit-optimization",
      "ghl-ongoing-support",
    ],
  },
];
