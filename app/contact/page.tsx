"use client";

import { useState } from "react";
import { ArrowUpRight, Check, MapPin, MessageCircle, Phone } from "lucide-react";
import PageShell from "@/components/page-shell";
import { maps, phone, services, whatsappUrl } from "@/lib/site-data";

export default function Contact() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("");
  const enquiryWhatsApp = whatsappUrl(service || undefined);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setDone(false);
    const form = event.currentTarget;
    const fields = new FormData(form);
    const response = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(fields)) });
    setLoading(false);
    if (response.ok) { setDone(true); setService(""); form.reset(); }
  }

  return <PageShell><main>
    <section className="sub-hero contact-hero"><div className="shell"><p className="kicker">START A CONVERSATION</p><h1>Let’s make your<br/>facility <em>work better.</em></h1><p>Tell us what you need. Our team will shape a professional solution around your property and requirements.</p></div></section>
    <section className="contact-page shell"><div className="contact-side"><p className="kicker">GET IN TOUCH</p><h2>One partner for<br/><em>better facilities.</em></h2><p>Our team is ready to understand your requirement and recommend the right facility-management or maintenance support.</p><a href={`tel:${phone}`}><Phone/> +91 {phone}</a><address><MapPin/> Plot No. 201, Guruharan Residency<br/>Near Ramanujan Circle, Beside Bliss Hotel<br/>Tirupati, Andhra Pradesh, India</address><a className="directions" href={maps} target="_blank" rel="noreferrer"><MapPin/> Get Directions</a><ul><li><Check/> Customized facility solutions</li><li><Check/> Responsive maintenance support</li><li><Check/> One accountable point of contact</li></ul></div>
      <form onSubmit={submit} className="quote-form"><input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="honeypot"/><label>Full Name *<input name="name" required placeholder="Your full name" autoComplete="name"/></label><label>Phone Number *<input name="mobile" required placeholder="Your phone number" type="tel" autoComplete="tel"/></label><label>Service Required *<select name="service" required value={service} onChange={(event)=>setService(event.target.value)}><option value="" disabled>Select a service</option>{services.map((item)=><option key={item.slug} value={item.title}>{item.title}</option>)}</select></label><label>Location / City *<input name="location" required placeholder="Your location or city"/></label><label>Requirement / Message *<textarea name="message" required placeholder="Tell us about your requirement"/></label><label>Email Address <input name="email" placeholder="Optional" type="email" autoComplete="email"/></label><div className="form-actions"><button className="button" disabled={loading}>{loading?"Sending...":"Request a callback"}<ArrowUpRight size={18}/></button><a className="button form-whatsapp" href={enquiryWhatsApp} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp Enquiry</a></div>{done&&<p className="form-success" role="status">Thank you — our team will contact you shortly.</p>}</form>
    </section>
  </main></PageShell>;
}
