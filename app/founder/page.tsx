import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, Check, MessageCircle } from "lucide-react";
import PageShell from "@/components/page-shell";
import { whatsappUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Pavan Naidu | Founder, Sai Pavan Integrated Facility Services",
  description: "Meet Pavan Naidu, Founder & Director of Sai Pavan Integrated Facility Services in Tirupati, Andhra Pradesh."
};

export default function FounderPage() {
  return (
    <PageShell>
      <main className="founder-page">
        <section className="founder-hero">
          <div className="founder-orbit founder-orbit-one" aria-hidden="true" />
          <div className="founder-orbit founder-orbit-two" aria-hidden="true" />
          <div className="shell founder-hero-grid">
            <div className="founder-copy" data-reveal>
              <p className="kicker light">FOUNDER & DIRECTOR</p>
              <h1>Pavan<br/><em>Naidu.</em></h1>
              <p className="founder-role">Founder & Director <span/> MBA</p>
              <p className="founder-intro">Leadership focused on bringing dependable people, practical maintenance and coordinated facility services together under one accountable partner.</p>
              <div className="founder-actions">
                <Link href="/contact" className="button">Start a conversation <ArrowUpRight size={18}/></Link>
                <a href={whatsappUrl()} target="_blank" className="button founder-ghost"><MessageCircle size={17}/> WhatsApp</a>
              </div>
            </div>
            <div className="founder-portrait-wrap" data-reveal>
              <div className="founder-portrait-frame">
                <Image src="/pavan-naidu.png" alt="Pavan Naidu, Founder and Director of Sai Pavan Integrated Facility Services" fill priority sizes="(max-width: 800px) 90vw, 44vw" className="founder-portrait" />
              </div>
              <div className="founder-caption"><span>01</span><p>Leadership grounded in<br/>service and accountability.</p></div>
            </div>
          </div>
        </section>

        <section className="founder-story shell">
          <div data-reveal>
            <p className="kicker">A PRACTICAL VISION</p>
            <h2>Building a company around <em>complete facility care.</em></h2>
          </div>
          <div data-reveal>
            <p>Pavan Naidu leads Sai Pavan Integrated Facility Services with a clear operating idea: property owners and organisations should be able to rely on one professional partner for their everyday facility and maintenance requirements.</p>
            <p>The company’s approach connects facility management, specialist maintenance, manpower and support services—making coordination simpler and ongoing care more dependable.</p>
          </div>
        </section>

        <section className="leadership-principles">
          <div className="shell">
            <div className="principles-heading" data-reveal>
              <p className="kicker light">LEADERSHIP FOCUS</p>
              <h2>Clear responsibility.<br/><em>Consistent support.</em></h2>
            </div>
            <div className="principle-grid">
              <article data-reveal><span>01</span><Building2/><h3>Integrated thinking</h3><p>Bringing multiple facility requirements together through one coordinated service approach.</p></article>
              <article data-reveal><span>02</span><Check/><h3>Accountable delivery</h3><p>Keeping communication clear, work practical and responsibility easy for clients to understand.</p></article>
              <article data-reveal><span>03</span><ArrowUpRight/><h3>Long-term relationships</h3><p>Supporting properties beyond one-off jobs through responsive, ongoing maintenance care.</p></article>
            </div>
          </div>
        </section>

        <section className="founder-closing">
          <div className="shell" data-reveal>
            <p className="kicker">SAI PAVAN INTEGRATED FACILITY SERVICES</p>
            <h2>One Partner.<br/><em>Complete Facility Solutions.</em></h2>
            <Link href="/services" className="under-link">Explore our services <ArrowUpRight size={16}/></Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
