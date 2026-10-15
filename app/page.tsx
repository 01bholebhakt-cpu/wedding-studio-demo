
import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Instagram,
  Menu,
  Plus,
  Sparkles,
} from "lucide-react";

const photos = {
  hero: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=90",
  wedding: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=85",
  couple: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
  bride: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=85",
  ceremony: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=1200&q=85",
  detail: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=85",
};

const stories = [
  { title: "The Art of Forever", place: "TUSCANY, ITALY", image: photos.wedding },
  { title: "A Love in Bloom", place: "NAPA VALLEY, CALIFORNIA", image: photos.couple },
  { title: "The Quiet Promise", place: "CHARLESTON, SOUTH CAROLINA", image: photos.bride },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f6f1] text-[#252820]">
      <header className="absolute left-0 top-0 z-20 flex w-full items-center justify-between px-6 py-6 text-white md:px-14 md:py-8">
        <a href="#" className="text-[10px] tracking-[.3em] md:text-xs">
          LUMIÈRE <span className="text-[#d9c5a0]">/</span> WEDDINGS
        </a>
        <nav className="hidden items-center gap-9 text-[10px] tracking-[.2em] md:flex">
          <a href="#portfolio" className="transition hover:text-[#d9c5a0]">PORTFOLIO</a>
          <a href="#approach" className="transition hover:text-[#d9c5a0]">OUR APPROACH</a>
          <a href="#investment" className="transition hover:text-[#d9c5a0]">INVESTMENT</a>
        </nav>
        <a href="#contact" className="hidden border border-white/60 px-5 py-3 text-[10px] tracking-[.18em] transition hover:bg-white hover:text-black md:block">
          INQUIRE ↗
        </a>
        <a href="#contact" aria-label="Contact" className="md:hidden">
          <Menu size={23} strokeWidth={1.3} />
        </a>
      </header>

      <section className="relative flex min-h-[740px] items-end overflow-hidden bg-[#373a32] md:min-h-[850px]">
        <Image
          src={photos.hero}
          alt="Romantic wedding celebration"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/60" />
        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 pb-20 pt-36 text-white md:px-16 md:pb-24">
          <p className="mb-7 text-[10px] tracking-[.34em] text-[#e6d6bb] md:text-xs">
            FOR THE WILDLY, WONDERFULLY IN LOVE
          </p>
          <h1 className="max-w-4xl font-serif text-6xl leading-[.98] tracking-[-.045em] md:text-8xl lg:text-[112px]">
            Your love,
            <br />
            <span className="pl-10 italic font-light text-[#e8d5b4] md:pl-24">beautifully</span>
            <br />
            remembered.
          </h1>
          <div className="mt-10 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <p className="max-w-sm text-sm leading-7 text-white/80">
              Honest moments. Artful imagery. The kind of photographs that
              take you right back to how it all felt.
            </p>
            <a href="#portfolio" className="group flex w-fit items-center gap-4 border-b border-white/50 pb-3 text-[10px] tracking-[.22em]">
              DISCOVER OUR WORK
              <ArrowDownRight size={17} className="transition group-hover:translate-x-1 group-hover:translate-y-1" />
            </a>
          </div>
        </div>
        <span className="absolute right-6 top-1/2 hidden -rotate-90 text-[9px] tracking-[.3em] text-white/80 md:block">
          EST. WITH LOVE · AVAILABLE WORLDWIDE
        </span>
      </section>

      <section id="approach" className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:gap-20 md:px-16 md:py-36">
        <div>
          <p className="mb-7 text-[10px] tracking-[.28em] text-[#9a8060]">MORE THAN A MOMENT</p>
          <h2 className="font-serif text-5xl leading-[1.08] tracking-tight md:text-7xl">
            The beauty is
            <br />
            in the <i className="font-light">in-between.</i>
          </h2>
          <p className="mt-8 max-w-md text-sm leading-8 text-[#6e6e63]">
            The nervous laugh before the vows. The hand that finds yours
            beneath the table. The people who made your story what it is.
            We photograph it all, with intention and heart.
          </p>
          <a href="#contact" className="mt-9 inline-flex items-center gap-4 border-b border-[#b4a184] pb-3 text-[10px] tracking-[.2em]">
            GET TO KNOW US <ArrowRight size={15} />
          </a>
        </div>
        <div className="relative md:pl-8">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#e5dfd4]">
            <Image src={photos.ceremony} alt="Wedding ceremony in beautiful natural light" fill unoptimized className="object-cover" />
          </div>
          <p className="absolute -bottom-7 -left-1 font-serif text-2xl italic text-[#9a8060] md:-left-10 md:text-3xl">
            Real moments, always.
          </p>
        </div>
      </section>

      <section id="portfolio" className="bg-[#eeece5] px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[10px] tracking-[.28em] text-[#9a8060]">A FEW LOVE STORIES</p>
              <h2 className="font-serif text-5xl tracking-tight md:text-7xl">The collection.</h2>
            </div>
            <p className="max-w-xs text-sm leading-7 text-[#74746a]">
              Every celebration has its own rhythm. Here are a few we have
              been lucky enough to witness.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3 md:gap-6">
            {stories.map((story, i) => (
              <a href="#contact" key={story.title} className="group block">
                <div className={`relative overflow-hidden bg-[#d9d3c8] ${i === 1 ? "aspect-[4/5] md:mt-16" : "aspect-[4/5]"}`}>
                  <Image src={story.image} alt={story.title} fill unoptimized className="object-cover transition duration-700 group-hover:scale-[1.04]" />
                  <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f6f1]/90 opacity-0 transition group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-2xl italic">{story.title}</h3>
                    <p className="mt-2 text-[9px] tracking-[.18em] text-[#8a8579]">{story.place}</p>
                  </div>
                  <span className="pt-2 text-xs text-[#9a8060]">0{i + 1}</span>
                </div>
              </a>
            ))}
          </div>
          <a href="#contact" className="mx-auto mt-14 flex w-fit items-center gap-4 border-b border-[#aaa18f] pb-3 text-[10px] tracking-[.2em]">
            LET'S CREATE YOUR STORY <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="relative min-h-[420px] bg-[#d8d0c2] md:min-h-[680px]">
          <Image src={photos.detail} alt="Romantic wedding details" fill unoptimized className="object-cover" />
        </div>
        <div className="flex flex-col justify-center bg-[#30332b] px-8 py-20 text-[#f8f6f1] md:px-16 lg:px-24">
          <Sparkles size={23} strokeWidth={1} className="mb-9 text-[#cbb28d]" />
          <p className="mb-6 text-[10px] tracking-[.25em] text-[#cbb28d]">THE LUMIÈRE EXPERIENCE</p>
          <h2 className="font-serif text-5xl leading-tight md:text-6xl">
            Present for
            <br />
            <i className="font-light">every feeling.</i>
          </h2>
          <p className="mt-7 max-w-md text-sm leading-8 text-white/65">
            We believe the best photographs happen when you forget the camera
            is there. Our approach is thoughtful, unobtrusive, and deeply
            personal — so you can be in your day, not performing for it.
          </p>
          <div className="mt-10 space-y-4 text-xs tracking-wide text-white/80">
            {["A personal planning consultation", "Gentle, documentary-led direction", "Carefully edited heirloom imagery"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Check size={15} className="text-[#cbb28d]" /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="investment" className="px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="mb-6 text-[10px] tracking-[.28em] text-[#9a8060]">MADE FOR YOUR KIND OF FOREVER</p>
          <h2 className="font-serif text-5xl leading-tight md:text-7xl">
            Your day deserves
            <br />
            <i className="font-light">to be remembered.</i>
          </h2>
          <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-[#74746a]">
            Tell us what you are dreaming up. We will help you find the
            collection that feels right for your celebration.
          </p>
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 text-left sm:grid-cols-2">
            <div className="border border-[#ded9ce] p-7 md:p-9">
              <p className="text-[10px] tracking-[.22em] text-[#9a8060]">INTIMATE CELEBRATIONS</p>
              <h3 className="mt-5 font-serif text-3xl">The Essentials</h3>
              <p className="mt-4 text-sm leading-7 text-[#74746a]">Thoughtful coverage for smaller celebrations and the moments that matter most.</p>
              <a href="#contact" className="mt-7 inline-flex items-center gap-3 text-[10px] tracking-[.16em]">EXPLORE YOUR OPTIONS <ArrowRight size={14}/></a>
            </div>
            <div className="bg-[#30332b] p-7 text-white md:p-9">
              <p className="text-[10px] tracking-[.22em] text-[#cbb28d]">FULL WEDDING STORIES</p>
              <h3 className="mt-5 font-serif text-3xl">The Heirloom</h3>
              <p className="mt-4 text-sm leading-7 text-white/65">A considered, full-day experience with room for every chapter of your story.</p>
              <a href="#contact" className="mt-7 inline-flex items-center gap-3 text-[10px] tracking-[.16em]">EXPLORE YOUR OPTIONS <ArrowRight size={14}/></a>
            </div>
          </div>
          <p className="mt-6 text-[10px] text-[#969083]">Custom collections and availability shared upon inquiry.</p>
        </div>
      </section>

      <section id="contact" className="bg-[#e9e4d9] px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-6 text-[10px] tracking-[.25em] text-[#9a8060]">THE BEGINNING OF SOMETHING BEAUTIFUL</p>
            <h2 className="font-serif text-6xl leading-[1.05] md:text-8xl">Tell us<br/>your <i>story.</i></h2>
            <p className="mt-7 max-w-sm text-sm leading-7 text-[#74746a]">
              The date, the dream, the little details you cannot stop thinking
              about. We would love to hear all about it.
            </p>
            <a href="mailto:hello@lumiereweddings.example?subject=Wedding%20Photography%20Inquiry" className="mt-9 inline-flex items-center gap-3 border-b border-[#aaa18f] pb-3 text-xs">
              hello@lumiereweddings.example <ArrowUpRight size={15}/>
            </a>
          </div>
          <form action="https://formsubmit.co/hello@lumiereweddings.example" method="POST" className="space-y-6">
            <input type="hidden" name="_subject" value="New wedding inquiry — Lumière Weddings" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_template" value="table" />
            {[
              { label: "YOUR NAME", name: "name", placeholder: "First and last name", type: "text" },
              { label: "YOUR EMAIL", name: "email", placeholder: "you@example.com", type: "email" },
              { label: "WEDDING DATE", name: "wedding_date", placeholder: "MM / DD / YYYY", type: "text" },
              { label: "CELEBRATION LOCATION", name: "location", placeholder: "City, venue or destination", type: "text" },
            ].map((field) => (
              <label key={field.name} className="block">
                <span className="mb-3 block text-[9px] tracking-[.2em] text-[#79776d]">{field.label}</span>
                <input required name={field.name} type={field.type} placeholder={field.placeholder} className="w-full border-b border-[#c8c0b2] bg-transparent py-3 text-sm outline-none transition placeholder:text-[#aaa397] focus:border-[#6f725d]" />
              </label>
            ))}
            <label className="block">
              <span className="mb-3 block text-[9px] tracking-[.2em] text-[#79776d]">TELL US A LITTLE MORE</span>
              <textarea name="message" rows={3} placeholder="Your plans, your vision, anything you'd love us to know..." className="w-full resize-y border-b border-[#c8c0b2] bg-transparent py-3 text-sm outline-none placeholder:text-[#aaa397] focus:border-[#6f725d]" />
            </label>
            <button type="submit" className="group flex w-full items-center justify-between bg-[#30332b] px-6 py-5 text-[10px] tracking-[.2em] text-white transition hover:bg-[#45493b]">
              SEND YOUR INQUIRY <ArrowRight size={17} className="transition group-hover:translate-x-1"/>
            </button>
            <p className="text-[10px] leading-5 text-[#8a8579]">Demo contact form — configure a real form endpoint before using with clients.</p>
          </form>
        </div>
      </section>

      <footer className="bg-[#30332b] px-6 py-9 text-white md:px-16">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-7 md:flex-row md:items-center">
          <a href="#" className="text-xs tracking-[.25em]">LUMIÈRE / WEDDINGS</a>
          <p className="text-[10px] tracking-[.12em] text-white/55">ARTFUL IMAGERY. HONESTLY YOURS.</p>
          <div className="flex items-center gap-5">
            <a href="#portfolio" className="text-[10px] tracking-[.15em] hover:text-[#cbb28d]">PORTFOLIO</a>
            <a href="#contact" className="text-[10px] tracking-[.15em] hover:text-[#cbb28d]">CONTACT</a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[#cbb28d]"><Instagram size={17}/></a>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-[1400px] border-t border-white/10 pt-5 text-[9px] tracking-[.1em] text-white/40">© 2026 LUMIÈRE WEDDINGS · CONCEPT WEBSITE BY CODEWAVE STUDIOS</p>
      </footer>
    </main>
  );
}
