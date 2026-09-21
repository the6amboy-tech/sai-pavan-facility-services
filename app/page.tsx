"use client";

import { useState, type ElementType } from "react";
import { ArrowRight, BadgeCheck, Building2, Check, ChevronDown, ClipboardCheck, Factory, HeartPulse, Leaf, Menu, Phone, ShieldCheck, Sparkles, UsersRound, Wrench, X } from "lucide-react";

const services: [string, string, ElementType][] = [
  ["Housekeeping", "Daily cleaning, deep cleaning & hygiene programs", Sparkles],
  ["Security", "Trained guards and dependable site protection", ShieldCheck],
  ["Technical Maintenance", "Electrical, plumbing, HVAC & preventive care", Wrench],
  ["Manpower Supply", "Reliable, trained staff for every operation", UsersRound],
];

const industries: [string, ElementType][] = [
  ["Corporate offices", Building2], ["Hospitals", HeartPulse], ["Educational institutions", ClipboardCheck], ["Industrial & manufacturing", Factory]
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setLoading(true);
    const form = new FormData(e.currentTarget);
    const result = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(form)) });
    setLoading(false); if (result.ok) { setSent(true); e.currentTarget.reset(); }
  }
  return <main>
    <div className="utility"><div className="wrap utility-inner"><span>Tirupati, Andhra Pradesh, India</span><a href="mailto:info@saipavanfs.com">info@saipavanfs.com</a><a href="tel:8500229978">+91 85002 29978</a></div></div>
    <header className="header"><div className="wrap nav">
      <a className="brand" href="#top" aria-label="Sai Pavan Facility Services home"><span className="brand-mark"><Building2 size={24}/><Leaf size={17}/></span><span><b>SAI PAVAN</b><em>FACILITY SERVICES</em></span></a>
      <button className="mobile-menu" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X/> : <Menu/>}</button>
      <nav className={menu ? "open" : ""}><a href="#about">About us</a><a href="#services">Services</a><a href="#industries">Industries</a><a href="#why">Why us</a><a href="#contact" className="nav-cta">Get a quote <ArrowRight size={15}/></a></nav>
    </div></header>
    <section className="hero" id="top"><div className="hero-photo"/><div className="wrap hero-grid"><div className="hero-copy">
      <p className="eyebrow"><span/> INTEGRATED FACILITY MANAGEMENT</p><h1>Cleaner spaces.<br/><i>Brighter</i> tomorrows.</h1><p className="lead">One trusted partner for cleaner, safer, and more productive spaces — from people to processes, we manage it all.</p>
      <div className="hero-actions"><a href="#contact" className="button primary">Get a free quote <ArrowRight size={18}/></a><a href="#services" className="text-link">Explore services <ArrowRight size={17}/></a></div>
      <div className="trust-row"><span><BadgeCheck/> 18+ services</span><span><BadgeCheck/> Trained staff</span><span><BadgeCheck/> 24/7 support</span></div>
    </div><aside className="hero-card"><p>YOUR SPACE,<br/>OUR STANDARD.</p><span>People. Process. Performance.</span></aside></div></section>
    <section className="intro wrap" id="about"><div><p className="eyebrow"><span/> ABOUT SAI PAVAN</p><h2>Driven by people.<br/>Built on <i>trust.</i></h2></div><div className="intro-copy"><p>We believe clean, safe and well-maintained spaces create a better tomorrow for everyone. Our professional teams bring consistency, care and accountability to every facility.</p><a href="#contact" className="text-link">Meet our team <ArrowRight size={17}/></a></div></section>
    <section className="services-section" id="services"><div className="wrap"><div className="section-head"><div><p className="eyebrow"><span/> WHAT WE DO</p><h2>Complete facility solutions.<br/><i>One partner.</i></h2></div><p>Reliable services designed around the unique needs of your people, property and operations.</p></div><div className="service-grid">{services.map(([title, text, Icon], i) => <article className="service" key={String(title)}><div className={'service-icon icon-'+i}><Icon/></div><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Request ${title}`}>Learn more <ArrowRight size={16}/></a></article>)}</div></div></section>
    <section className="promise" id="why"><div className="wrap promise-grid"><div className="promise-photo"/><div className="promise-text"><p className="eyebrow light"><span/> THE SAI PAVAN PROMISE</p><h2>A higher standard<br/>of <i>everyday care.</i></h2><p>Every detail matters. From responsive teams and transparent operations to quality checks that keep your spaces ready for what’s next.</p><ul><li><Check/> Experienced, verified professionals</li><li><Check/> Quality-first service delivery</li><li><Check/> Safe, sustainable practices</li></ul></div></div></section>
    <section className="industries wrap" id="industries"><div className="centered"><p className="eyebrow"><span/> WHERE WE SERVE</p><h2>Built for every kind of space.</h2></div><div className="industry-grid">{industries.map(([title, Icon]) => <article key={String(title)}><Icon/><h3>{title}</h3><p>Service made to fit your environment.</p></article>)}</div></section>
    <section className="contact" id="contact"><div className="wrap contact-grid"><div><p className="eyebrow light"><span/> LET’S GET STARTED</p><h2>Ready for a better<br/><i>tomorrow?</i></h2><p>Tell us a little about your facility. Our team will get in touch to understand exactly what you need.</p><a className="phone" href="tel:8500229978"><Phone/> +91 85002 29978</a></div><form onSubmit={submit}><label>Your name<input name="name" required placeholder="Name"/></label><label>Phone number<input name="phone" required type="tel" placeholder="Phone number"/></label><label>Service required<select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map(([title]) => <option key={String(title)}>{title}</option>)}<option>Other</option></select><ChevronDown/></label><button className="button primary" disabled={loading}>{loading ? "Sending…" : "Request a callback"}<ArrowRight size={18}/></button>{sent && <p className="success">Thank you! Our team will call you shortly.</p>}</form></div></section>
    <footer><div className="wrap footer-top"><a className="brand footer-brand" href="#top"><span className="brand-mark"><Building2 size={22}/><Leaf size={15}/></span><span><b>SAI PAVAN</b><em>FACILITY SERVICES</em></span></a><p>Cleaner spaces. Safer places.<br/>Brighter tomorrows.</p><div><a href="mailto:info@saipavanfs.com">info@saipavanfs.com</a><a href="tel:9700012237">+91 97000 12237</a></div></div><div className="wrap footer-bottom">© 2026 Sai Pavan Facility Services <span>All rights reserved.</span></div></footer>
  </main>;
}
