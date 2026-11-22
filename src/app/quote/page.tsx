"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { QUOTE_SERVICE_TYPES, YEARS_OPTIONS, COPY } from "@/lib/content";
import { QuoteForm, type PrefaceQuestion } from "@/components/quote/QuoteForm";
import { ShieldCheck, ArrowRight, Phone, Clock, Zap, MapPin } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, title: COPY.quote.trustNicheTitle, desc: COPY.quote.trustNicheDesc },
  { icon: Zap, title: "~15-minute quotes", desc: "Real quotes from real markets, fast." },
  { icon: Clock, title: "2-hour claims response", desc: "When a loss hits, you reach a person." },
  { icon: MapPin, title: "All 50 states", desc: "Licensed nationwide — NPN #8608479." },
];

const TRADE_TYPE_OPTIONS = [
  "Solar Installation",
  "HVAC",
  "Electrical",
  "Spray Foam / Insulation",
  "Roofing",
  "Geothermal / Energy Efficiency",
  "General Contractor",
  "Specialty Trade",
  "Other",
];

const SUBS_INSURED_OPTIONS = ["Yes — all of them", "Some of them", "No", "We don't use subcontractors"];

// Legacy-only questions of the previous form. Each is also posted under its ORIGINAL field name by legacyFields()
// below (the QuoteForm itself adds the _info_ copy), so leads/mappers that read the old names keep working.
const PREFACE_QUESTIONS: PrefaceQuestion[] = [
  { name: "serviceType", label: "What do you need?", type: "select", options: QUOTE_SERVICE_TYPES, required: true },
  { name: "subsHaveInsurance", label: "Do your subcontractors have insurance?", type: "select", options: SUBS_INSURED_OPTIONS },
  { name: "subsInsuredPercent", label: "What percent of your subcontractors have insurance?", type: "text" },
  { name: "needUninsuredSubCoverage", label: "Do you need coverage for uninsured subcontractors?", type: "select", options: ["Yes", "No", "Not sure"] },
  { name: "class_code_1", label: "Class code 1 (+ % of operations), if you know it", type: "text" },
  { name: "class_code_2", label: "Class code 2 (+ % of operations)", type: "text" },
  { name: "class_code_3", label: "Class code 3 (+ % of operations)", type: "text" },
  { name: "class_code_4", label: "Class code 4 (+ % of operations)", type: "text" },
  { name: "class_code_5", label: "Class code 5 (+ % of operations)", type: "text" },
  { name: "largest_projects", label: "5 largest projects ever (description + dollar amount)", type: "textarea" },
];

const yearsBucket = (startDate: string) => {
  const y = parseInt((startDate || "").slice(0, 4), 10);
  if (!y) return "";
  const n = new Date().getFullYear() - y;
  const i = n < 1 ? 0 : n <= 2 ? 1 : n <= 5 ? 2 : n <= 10 ? 3 : 4;
  return YEARS_OPTIONS[i];
};

// Every field name the previous /quote form posted that the shared form does not post under that name.
// Add-only: values come from the canonical answers (or the legacy-only questions above); blanks stay blank.
function legacyFields(d: Record<string, string>, pf: Record<string, string>): Record<string, string> {
  const split = [d.residentialPct && `${d.residentialPct}% residential`, d.commercialPct && `${d.commercialPct}% commercial`].filter(Boolean).join(" / ");
  return {
    serviceType: pf.serviceType ?? "",
    yearsInBusiness: yearsBucket(d.businessStartDate),
    message: d.notes ?? "",
    priorGrossSales: d.lastGrossSales ?? "",
    priorSubcontractorExpenses: d.lastSubcontractingCosts ?? "",
    priorEmployeeCount: d.lastEmployeeCount ?? "",
    priorEmployeePayroll: d.lastEmployeePayroll ?? "",
    estGrossSales: d.nextGrossEstimate ?? "",
    estSubcontractorExpenses: d.nextSubcontractingCosts ?? "",
    estEmployeeCount: d.nextEmployeeCount ?? "",
    estEmployeePayroll: d.nextEmployeePayroll ?? "",
    estMaterialCosts: d.nextMaterialCosts ?? "",
    subsHaveInsurance: pf.subsHaveInsurance ?? "",
    subsInsuredPercent: pf.subsInsuredPercent ?? "",
    needUninsuredSubCoverage: pf.needUninsuredSubCoverage ?? "",
    year_business_started: d.yearBusinessStarted ?? "",
    business_description: d.businessDescription ?? "",
    class_code_1: pf.class_code_1 ?? "",
    class_code_2: pf.class_code_2 ?? "",
    class_code_3: pf.class_code_3 ?? "",
    class_code_4: pf.class_code_4 ?? "",
    class_code_5: pf.class_code_5 ?? "",
    residential_vs_commercial: split,
    new_vs_existing_construction: d.newConstructionPct ? `${d.newConstructionPct}% new construction` : "",
    largest_projects: pf.largest_projects ?? "",
    prior_carrier_name: d.currentCarrier ?? "",
    prior_policy_expiration: d.currentPolicyExpiration ?? "",
  };
}

const QUOTE_CLASSES = {
  form: "space-y-8",
  section: "space-y-4 pt-5 border-t border-adobe first:border-t-0 first:pt-0",
  heading: "font-heading font-bold text-espresso text-sm uppercase tracking-wider",
  grid: "grid sm:grid-cols-2 gap-4",
  label: "block text-sm font-heading font-semibold text-espresso mb-1.5",
  input: "w-full px-4 py-3 rounded-xl border border-adobe bg-cream/50 text-espresso placeholder-mocha/60 focus:outline-none focus:border-clay focus:ring-2 focus:ring-clay/20 transition-all text-sm",
  error: "text-xs text-red-600 mt-1",
  legend: "block text-sm font-heading font-semibold text-espresso mb-1.5",
  option: "flex items-center gap-2 text-sm text-espresso",
  button: "w-full px-8 py-4 bg-clay-gradient text-white font-heading font-bold rounded-full shadow-warm disabled:opacity-60",
  ok: "p-6 rounded-2xl bg-sage/15 text-espresso font-heading font-semibold",
  bad: "p-4 rounded-xl bg-red-50 text-red-700 text-sm font-medium",
  detail: "mt-2 grid sm:grid-cols-2 gap-3 pl-4 border-l-2 border-adobe",
};

export default function QuotePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-warm-radial pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-wide">
            <FadeIn className="text-center max-w-2xl mx-auto mb-12">
              <span className="pill-clay"><ShieldCheck className="h-3.5 w-3.5" /> Free quote</span>
              <h1 className="mt-5 font-heading font-extrabold text-espresso text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                {COPY.quote.h1Lead}{" "}
                <span className="bg-gradient-to-r from-clay via-clay-light to-gold-dark bg-clip-text text-transparent">{COPY.quote.h1Highlight}</span>
              </h1>
              <p className="mt-5 lead">{COPY.quote.lead}</p>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                {trustItems.map((item) => (
                  <FadeIn key={item.title}>
                    <div className="flex gap-3 p-5 rounded-2xl bg-white border border-adobe shadow-card">
                      <span className="flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-clay/10 text-clay"><item.icon className="h-5 w-5" strokeWidth={2.2} /></span>
                      <div>
                        <p className="font-heading font-bold text-espresso text-sm">{item.title}</p>
                        <p className="text-mocha text-xs leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
                <FadeIn>
                  <div className="p-5 rounded-2xl bg-espresso text-cream text-center">
                    <p className="text-xs font-heading font-bold uppercase tracking-wider text-gold mb-2">Prefer to call?</p>
                    <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 text-cream font-heading font-extrabold text-xl hover:text-gold-light transition-colors"><Phone className="h-5 w-5" />{SITE.phone}</a>
                    <p className="text-xs text-cream/60 mt-1">{SITE.hours}</p>
                  </div>
                </FadeIn>
              </div>

              <div className="lg:col-span-2">
                <FadeIn>
                  <div className="rounded-3xl bg-white border border-adobe shadow-card p-7 md:p-9">
                    <QuoteForm
                      formName="quote"
                      tradeName="Energy Contractor"
                      endpoint="/__forms.html"
                      options={{ yn: true, feinRequired: false }}
                      tradeTypeOptions={TRADE_TYPE_OPTIONS}
                      defaults={{ coverageTypes: "General Liability" }}
                      prefaceQuestions={PREFACE_QUESTIONS}
                      legacyFields={legacyFields}
                      classes={QUOTE_CLASSES}
                      successMessage="Thank you! We'll review your operation and reach out within one business day with personalized quotes."
                      errorMessage={COPY.quote.errorMessage}
                    />
                    <p className="mt-4 text-xs text-center text-mocha/70">No spam. No commitment. We'll only contact you about your quote.</p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
