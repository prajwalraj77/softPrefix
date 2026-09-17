"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, Check, ChevronDown, Code2, Database, Gauge, Globe2,
  LayoutDashboard, Menu, MessageCircle, MoveUpRight, Phone, Rocket,
  Settings2, Smartphone, Sparkles, X, Zap,
} from "lucide-react";
import { company } from "@/config/company";
import { contact } from "@/config/contact";
import { navigation } from "@/config/navigation";
import { social } from "@/config/social";

const services = [
  { icon: Code2, title: "Custom Software", text: "Purpose-built systems designed around the way your business actually works." },
  { icon: Globe2, title: "Web Applications", text: "Fast, responsive web experiences that turn ideas into useful digital products." },
  { icon: UsersIcon, title: "CRM Development", text: "Keep leads, customers, communication and workflows connected in one place." },
  { icon: Settings2, title: "Business Automation", text: "Replace repetitive manual processes with reliable digital workflows." },
  { icon: LayoutDashboard, title: "Dashboards", text: "Make important business information easier to understand and act on." },
  { icon: Database, title: "Inventory Systems", text: "Track products, stock, orders and operational activity with clarity." },
  { icon: Smartphone, title: "Mobile Applications", text: "Bring your customer or business experience to the devices people use every day." },
  { icon: Rocket, title: "SaaS Products", text: "From product concept to scalable software ready for real users." },
];

function UsersIcon(props: React.ComponentProps<typeof Code2>) {
  return <Sparkles {...props} />;
}

const process = [
  ["01", "Discover", "Understand the business, users and problem before choosing the technology."],
  ["02", "Plan", "Turn the requirement into a clear product scope, workflow and delivery plan."],
  ["03", "Design", "Create a clean experience that feels simple for the people using it."],
  ["04", "Build", "Develop the solution with maintainable, scalable technology."],
  ["05", "Launch", "Take the product into real-world use and make the transition smooth."],
  ["06", "Grow", "Keep improving the system as the business and its requirements evolve."],
] as const;

const technologies = ["Next.js", "React", "Node.js", "Express", "MongoDB", "JavaScript", "Tailwind CSS", "REST APIs"];

const inputClass = "w-full rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-blue-400/60 focus:bg-white/[0.055]";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/[0.06] bg-[#05070b]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)} aria-label="SOFTPREFIX home">
          <div className="grid h-9 w-9 place-items-center rounded-xl border border-blue-400/25 bg-blue-500/10 text-blue-300"><span className="text-sm font-black">S</span></div>
          <span className="text-sm font-semibold tracking-[0.22em]">SOFTPREFIX</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => <a key={item.href} href={item.href} className="text-sm text-white/60 transition hover:text-white">{item.label}</a>)}
        </nav>
        <a href="#contact" className="hidden rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium transition hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-500/10 md:inline-flex">Let's Talk <ArrowRight className="ml-2 h-4 w-4" /></a>
        <button className="rounded-xl border border-white/10 p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="border-t border-white/[0.06] bg-[#070a10]/95 px-5 py-5 md:hidden">
        {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b border-white/[0.06] py-4 text-lg text-white/75">{item.label}</a>)}
        <a href="#contact" onClick={() => setOpen(false)} className="mt-4 flex items-center justify-center rounded-2xl bg-white py-3.5 font-semibold text-black">Let's Talk <ArrowRight className="ml-2 h-4 w-4" /></a>
      </div>}
    </header>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-20"
    >
      <div className="page-grid absolute inset-0" />

      <div className="absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pt-12 pb-8 sm:px-8 sm:pt-12 sm:pb-10 lg:grid-cols-[1.02fr_.98fr] lg:gap-8 lg:pt-12 lg:pb-10">
        
        {/* LEFT */}
        <div className="mt-3 lg:mt-0">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-400/[0.06] px-3.5 py-2 text-xs font-medium text-blue-200">
              <Sparkles className="h-3.5 w-3.5" />
              Custom software for real business problems
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[4.35rem] xl:text-[4.7rem]">
              Software that{" "}
              <span className="text-gradient">
                moves your business forward.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
              We design and develop custom software, websites, CRM systems,
              dashboards and digital solutions that help businesses automate
              work, save time and scale.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="hero-primary-button group inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black shadow-[0_10px_40px_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(59,130,246,0.18)]"
              >
                <span>Build Your Solution</span>
                <ArrowRight className="ml-2 h-4 w-4 text-black transition group-hover:translate-x-1" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                Explore Our Work
                <MoveUpRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/40">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-blue-400" />
                Custom-built
              </span>

              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-blue-400" />
                Flexible pricing
              </span>

              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-blue-400" />
                Worldwide
              </span>
            </div>
          </Reveal>
        </div>

        {/* RIGHT */}
        <div className="lg:translate-x-6 xl:translate-x-10">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
function HeroVisual() {
  const cards = [
    { title: "CRM", value: "2,840", label: "Customers", x: "left-0 top-10", d: 0 },
    { title: "Analytics", value: "+28.4%", label: "Growth", x: "right-0 top-0", d: .15 },
    { title: "Inventory", value: "98.7%", label: "Accuracy", x: "right-8 bottom-4", d: .3 },
  ];
  return <div className="relative mx-auto h-[390px] w-full max-w-[620px] sm:h-[450px] lg:h-[560px]">
    <motion.div animate={{ rotate: [0, 2, 0, -2, 0], y: [0, -8, 0, 8, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="hero-dashboard-glow absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20" />
    <div className="absolute left-1/2 top-1/2 z-10 w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-white/10 bg-[#0a0f17]/90 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
      <div className="flex items-center justify-between border-b border-white/[0.07] pb-4"><div><div className="text-[10px] uppercase tracking-[0.25em] text-blue-300/70">SOFTPREFIX OS</div><div className="mt-1 text-lg font-semibold">Business overview</div></div><div className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,.9)]" /></div>
      <div className="mt-5 grid grid-cols-2 gap-3"><MiniStat label="Revenue" value="₹8.42L" up="+18.2%" /><MiniStat label="Customers" value="2,840" up="+12.7%" /></div>
      <div className="mt-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4"><div className="flex items-center justify-between text-xs text-white/40"><span>Business activity</span><span>Last 30 days</span></div><div className="mt-4 flex h-24 items-end gap-1.5">{[35,52,41,66,58,76,61,83,72,92,79,96,88,100,91,105,98,112,104,120].map((h,i)=><motion.div key={i} initial={{height:0}} animate={{height:`${Math.min(h,100)}%`}} transition={{delay:.4+i*.03,duration:.6}} className="flex-1 rounded-t bg-gradient-to-t from-blue-600/40 to-cyan-300/80" />)}</div></div>
      <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3"><span className="flex items-center gap-2 text-xs text-white/50"><Zap className="h-3.5 w-3.5 text-cyan-300" /> Automation active</span><span className="text-xs font-medium text-emerald-300">Running</span></div>
    </div>
    {cards.map((card) => <motion.div key={card.title} animate={{y:[0,-9,0], rotate:[0,.5,0]}} transition={{duration:5+card.d*4,delay:card.d,repeat:Infinity,ease:"easeInOut"}} className={`absolute ${card.x} z-20 w-36 rounded-2xl border border-white/10 bg-[#0a0f17]/90 p-4 shadow-xl backdrop-blur-xl sm:w-40`}><div className="text-[10px] uppercase tracking-[.2em] text-white/35">{card.title}</div><div className="mt-2 text-xl font-semibold">{card.value}</div><div className="mt-1 text-[11px] text-white/40">{card.label}</div></motion.div>)}
  </div>;
}

function MiniStat({ label, value, up }: { label:string; value:string; up:string }) { return <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3.5"><div className="text-[11px] text-white/35">{label}</div><div className="mt-1 text-lg font-semibold">{value}</div><div className="mt-1 text-[10px] text-emerald-300">{up}</div></div>; }

export function ProblemSolution() {
  const items = [
    ["Manual customer records", "CRM"], ["Spreadsheet-heavy reporting", "Dashboard"], ["Paper or manual inventory", "Inventory system"], ["Repeated business tasks", "Automation"],
  ];
  return <section id="solutions" className="relative border-t border-white/[0.06] py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20"><Reveal><div><p className="text-xs font-semibold uppercase tracking-[.25em] text-blue-300">The problem</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Your business shouldn't run on <span className="text-white/35">manual work</span> forever.</h2><p className="mt-6 max-w-lg leading-7 text-white/50">Every business has processes that consume time. We turn those processes into practical software so your team can spend more time on the work that actually moves the business forward.</p></div></Reveal><div className="grid gap-3 sm:grid-cols-2">{items.map(([from,to],i)=><Reveal key={from} delay={i*.07}><motion.div whileHover={{y:-5}} className="group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition hover:border-blue-400/20 hover:bg-blue-500/[0.035]"><div className="flex items-center justify-between"><span className="text-sm text-white/50">{from}</span><ArrowRight className="h-4 w-4 text-white/20 transition group-hover:translate-x-1 group-hover:text-blue-300" /></div><div className="mt-10 text-xl font-semibold">→ {to}</div><div className="mt-2 text-xs text-white/30">A better way to operate</div></motion.div></Reveal>)}</div></div></div></section>;
}

export function Services() { return <section id="services" className="relative py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><Reveal><div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[.25em] text-blue-300">What we build</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Software shaped around your business.</h2><p className="mt-5 leading-7 text-white/50">From a focused website to a complete operational platform, we build the technology your business actually needs.</p></div></Reveal><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{services.map(({icon:Icon,title,text},i)=><Reveal key={title} delay={(i%4)*.05}><motion.article whileHover={{y:-7}} className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition hover:border-blue-400/20"><div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition group-hover:opacity-100"/><div className="relative"><div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-blue-300"><Icon className="h-5 w-5" /></div><h3 className="mt-7 font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/42">{text}</p><div className="mt-7 text-xs text-white/25 transition group-hover:text-blue-300">Explore service <ArrowRight className="ml-1 inline h-3.5 w-3.5" /></div></div></motion.article></Reveal>)}</div></div></section>; }

export function Process() { return <section className="border-y border-white/[0.06] bg-white/[0.015] py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><Reveal><p className="text-xs font-semibold uppercase tracking-[.25em] text-blue-300">How we work</p><h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-.04em] sm:text-5xl">From a business problem to software that works.</h2></Reveal><div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">{process.map(([num,title,text],i)=><Reveal key={num} delay={(i%3)*.06} className="h-full"><div className="h-full bg-[#080c12] p-7 sm:p-8"><div className="flex items-center justify-between"><span className="text-xs text-blue-300">{num}</span><span className="h-px w-12 bg-white/10"/></div><h3 className="mt-12 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/40">{text}</p></div></Reveal>)}</div></div></section>; }

export function Work() { return <section id="work" className="py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><Reveal><div><p className="text-xs font-semibold uppercase tracking-[.25em] text-blue-300">Selected work</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Real systems. Real workflows.</h2></div></Reveal><Reveal><p className="max-w-md text-sm leading-6 text-white/40">A look at the kind of business software SOFTPREFIX can design and develop.</p></Reveal></div><Reveal delay={.1}><motion.div whileHover={{scale:1.01}} className="group mt-12 overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#090e15]"><div className="grid lg:grid-cols-[.9fr_1.1fr]"><div className="p-7 sm:p-10 lg:p-14"><div className="inline-flex rounded-full border border-cyan-300/10 bg-cyan-300/[0.05] px-3 py-1.5 text-[10px] uppercase tracking-[.2em] text-cyan-200">Electric mobility</div><h3 className="mt-6 text-3xl font-semibold tracking-[-.03em]">EV Management Platform</h3><p className="mt-5 leading-7 text-white/45">A connected platform for customers, scooters, charging stations, rides and operational workflows—bringing multiple business processes into one digital system.</p><div className="mt-8 flex flex-wrap gap-2">{["Customer portal","Operations","Stations","Rides","Admin dashboard"].map(x=><span key={x} className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[11px] text-white/45">{x}</span>)}</div><a href="#contact" className="mt-10 inline-flex items-center text-sm font-medium text-white">Discuss a similar system <ArrowRight className="ml-2 h-4 w-4" /></a></div><div className="relative min-h-[360px] overflow-hidden border-t border-white/[0.07] bg-[radial-gradient(circle_at_70%_35%,rgba(34,211,238,.16),transparent_28%),radial-gradient(circle_at_35%_70%,rgba(59,130,246,.16),transparent_30%)] lg:border-l lg:border-t-0"><div className="absolute inset-8 rounded-[24px] border border-white/10 bg-black/30 p-5 backdrop-blur"><div className="flex gap-2"><span className="h-2 w-2 rounded-full bg-white/20"/><span className="h-2 w-2 rounded-full bg-white/10"/><span className="h-2 w-2 rounded-full bg-white/10"/></div><div className="mt-7 grid grid-cols-3 gap-3"><div className="col-span-2 h-24 rounded-2xl border border-white/[0.06] bg-white/[0.03]"/><div className="h-24 rounded-2xl border border-white/[0.06] bg-white/[0.03]"/></div><div className="mt-3 h-32 rounded-2xl border border-white/[0.06] bg-white/[0.03]"/><div className="mt-3 grid grid-cols-2 gap-3"><div className="h-20 rounded-2xl border border-white/[0.06] bg-white/[0.03]"/><div className="h-20 rounded-2xl border border-white/[0.06] bg-white/[0.03]"/></div></div><motion.div animate={{y:[-10,10,-10]}} transition={{duration:6,repeat:Infinity}} className="absolute bottom-8 right-8 rounded-2xl border border-cyan-200/15 bg-cyan-300/[0.08] px-4 py-3 text-xs text-cyan-100 backdrop-blur-xl">● Platform online</motion.div></div></div></motion.div></Reveal></div></section>; }

export function WhyUs() { const points=["Custom-built around your workflow","Affordable, flexible engagement models","No unnecessary complexity or inflated scope","Technology that can grow with the business","Ongoing improvements when you need them"]; return <section className="py-24 sm:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center"><Reveal><div><p className="text-xs font-semibold uppercase tracking-[.25em] text-blue-300">Why SOFTPREFIX</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Technology without the enterprise price tag.</h2><p className="mt-6 max-w-xl leading-7 text-white/45">We believe good software should be accessible to growing businesses. We focus on what your business needs, build it properly, and keep the engagement flexible.</p><ul className="mt-8 space-y-4">{points.map(p=><li key={p} className="flex gap-3 text-sm text-white/65"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-400/10 text-blue-300"><Check className="h-3 w-3"/></span>{p}</li>)}</ul></div></Reveal><Reveal delay={.1}><div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.025] p-8 sm:p-10"><div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/10 blur-[90px]"/><Gauge className="relative h-8 w-8 text-blue-300"/><div className="relative mt-8 text-6xl font-semibold tracking-[-.06em]">Built <span className="text-white/25">for</span> you.</div><p className="relative mt-5 max-w-sm text-sm leading-6 text-white/40">Project-based or monthly. Start with what matters today and evolve when your business is ready.</p><div className="relative mt-10 grid grid-cols-2 gap-3"><div className="rounded-2xl border border-white/[0.07] p-4"><div className="text-xs text-white/30">Engagement</div><div className="mt-2 font-medium">Flexible</div></div><div className="rounded-2xl border border-white/[0.07] p-4"><div className="text-xs text-white/30">Reach</div><div className="mt-2 font-medium">Worldwide</div></div></div></div></Reveal></div></section>; }

export function Technology() { return <section className="border-y border-white/[0.06] py-20"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[.25em] text-blue-300">Technology</p><p className="mt-3 text-sm text-white/40">Modern tools behind dependable digital products.</p></div><div className="flex max-w-3xl flex-wrap gap-2">{technologies.map((tech,i)=><motion.span key={tech} whileHover={{y:-3}} className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 text-xs text-white/55">{tech}</motion.span>)}</div></div></div></section>; }

export function About() { return <section id="about" className="py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]"><Reveal><div><p className="text-xs font-semibold uppercase tracking-[.25em] text-blue-300">About SOFTPREFIX</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Built with a simple idea.</h2></div></Reveal><Reveal delay={.1}><div><p className="text-xl leading-8 text-white/70 sm:text-2xl">Businesses shouldn't spend their best hours doing work that software can handle.</p><p className="mt-6 max-w-3xl leading-7 text-white/42">Founded in 2026, SOFTPREFIX helps businesses turn manual processes and ideas into practical digital products. We don't believe every business needs the same software—so we build around the actual requirement.</p><div className="mt-10 flex items-center gap-4"><div className="grid h-14 w-14 place-items-center rounded-full border border-blue-400/20 bg-blue-500/10 text-lg font-bold text-blue-200">P</div><div><div className="font-semibold">{company.founder}</div><div className="text-xs text-white/35">{company.founderRole}</div></div></div></div></Reveal></div></div></section>; }

export function NotSure() { return <section className="px-5 py-8 sm:px-8"><div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-blue-300/10 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,.12),transparent_28%),linear-gradient(135deg,rgba(59,130,246,.12),rgba(255,255,255,.02))] p-8 sm:p-12 lg:p-16"><div className="max-w-3xl"><div className="text-xs font-semibold uppercase tracking-[.25em] text-blue-200">No technical knowledge required</div><h2 className="mt-5 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Not sure what software you need?</h2><p className="mt-5 max-w-2xl leading-7 text-white/50">That's okay. Tell us what takes too much time, what your team does manually, or what you'd like to improve. We'll help identify the right solution.</p><a href="#contact" className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black">Tell Us Your Problem <ArrowRight className="ml-2 h-4 w-4" /></a></div></div></section>; }

export function Contact() {
  const [sent,setSent]=useState(false);
  const [loading,setLoading]=useState(false);
  async function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();setLoading(true);const form=new FormData(e.currentTarget);const name=String(form.get("name")||"");const phone=String(form.get("phone")||"");const message=String(form.get("message")||"");const text=`New SOFTPREFIX enquiry%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message)}`;setLoading(false);setSent(true);window.open(`https://wa.me/${contact.whatsapp}?text=${text}`,"_blank");}
  return <section id="contact" className="py-24 sm:py-32"><div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-20"><Reveal><div><p className="text-xs font-semibold uppercase tracking-[.25em] text-blue-300">Start a conversation</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Let's build something that works for your business.</h2><p className="mt-6 max-w-lg leading-7 text-white/45">You don't need a perfect brief. Give us the problem, and we'll help you figure out the solution.</p><div className="mt-10 space-y-4"><a href={`tel:${contact.phone}`} className="flex items-center gap-3 text-sm text-white/60 hover:text-white"><Phone className="h-4 w-4 text-blue-300"/>{contact.displayPhone}</a><a href={`https://wa.me/${contact.whatsapp}`} target="_blank" className="flex items-center gap-3 text-sm text-white/60 hover:text-white"><MessageCircle className="h-4 w-4 text-emerald-300"/>WhatsApp us</a><a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-sm text-white/60 hover:text-white">{contact.email}</a></div></div></Reveal><Reveal delay={.1}><form onSubmit={submit} className="rounded-[32px] border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8"><div className="grid gap-4 sm:grid-cols-2"><label className="text-xs text-white/45">Name *<input required name="name" className={`mt-2 ${inputClass}`} placeholder="Your name"/></label><label className="text-xs text-white/45">Phone *<input required name="phone" type="tel" className={`mt-2 ${inputClass}`} placeholder="Your phone number"/></label><label className="text-xs text-white/45">Email<input name="email" type="email" className={`mt-2 ${inputClass}`} placeholder="you@company.com"/></label><label className="text-xs text-white/45">Company<input name="company" className={`mt-2 ${inputClass}`} placeholder="Company name"/></label></div><label className="mt-4 block text-xs text-white/45">What do you need?<select name="service" className={`${inputClass} mt-2`} defaultValue=""><option value="" disabled>Select if you know</option><option>Website</option><option>CRM</option><option>Mobile Application</option><option>Dashboard</option><option>Inventory Management</option><option>Custom Software</option><option>E-commerce</option><option>Automation</option><option>Other</option><option>Not Sure</option></select></label><label className="mt-4 block text-xs text-white/45">Tell us about your requirement<textarea name="message" rows={5} className={`${inputClass} mt-2 resize-none`} placeholder="What is currently taking too much time? What would you like to improve?"/></label><button disabled={loading} className="mt-5 flex w-full items-center justify-center rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-black transition hover:-translate-y-0.5 disabled:opacity-60">{sent ? "WhatsApp opened — thank you!" : loading ? "Preparing…" : "Send Enquiry"}<ArrowRight className="ml-2 h-4 w-4"/></button><p className="mt-3 text-center text-[11px] leading-5 text-white/25">Only your name and phone number are required. If you're not sure what you need, just describe the problem.</p></form></Reveal></div></section>;
}

export function Footer(){return <footer className="border-t border-white/[0.06] py-10"><div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-end md:justify-between"><div><div className="text-sm font-semibold tracking-[.22em]">SOFTPREFIX</div><p className="mt-3 max-w-sm text-xs leading-5 text-white/30">{company.tagline} Custom software and digital solutions for businesses worldwide.</p></div><div className="flex flex-wrap gap-5 text-xs text-white/35"><a href={social.linkedin} target="_blank">LinkedIn</a><a href={social.github} target="_blank">GitHub</a><a href={social.instagram} target="_blank">Instagram</a><a href="#contact">Contact</a></div><div className="text-xs text-white/25">© {company.founded} {company.name}. All rights reserved.</div></div></footer>; }

export function Site(){return <><Navbar/><main><Hero/><ProblemSolution/><Services/><Process/><Work/><WhyUs/><Technology/><About/><NotSure/><Contact/></main><Footer/></>;}
