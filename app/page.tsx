
import Image from "next/image";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Menu,
  Plus,
  Sparkles,
} from "lucide-react";

const photos = {
  hero: "/images/hero.jpg",
  story: "/images/story.jpg",
  portfolio: "/images/portfolio.jpg",
  bride: "/images/bride.jpg",
};

const stories = [
  {
    number: "01",
    title: "A day in golden light",
    location: "TUSCANY, ITALY",
    image: photos.portfolio,
    type: "DESTINATION WEDDING",
  },
  {
    number: "02",
    title: "Where we begin",
    location: "NAPA VALLEY, CALIFORNIA",
    image: photos.story,
    type: "AN INTIMATE CELEBRATION",
  },
  {
    number: "03",
    title: "The way she looked",
    location: "CHARLESTON, SOUTH CAROLINA",
    image: photos.bride,
    type: "BRIDAL PORTRAITS",
  },
];

const services = [
  {
    number: "01",
    title: "Wedding days",
    description:
      "From the quiet morning preparations to the last dance. Every chapter, photographed with intention.",
  },
  {
    number: "02",
    title: "Destination stories",
    description:
      "Celebrations in places that mean something. Thoughtful imagery, wherever your story takes us.",
  },
  {
    number: "03",
    title: "The in-between",
    description:
      "Engagements, rehearsal dinners and the ordinary moments that become extraordinary with time.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f5f2eb] text-[#292a24]">
      {/* Navigation */}
      <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-5 py-6 text-white sm:px-9 md:px-14 md:py-8">
        <a href="#" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 font-serif text-lg italic transition group-hover:bg-white group-hover:text-black">
            L
          </span>
          <span className="text-[10px] leading-[1.7] tracking-[.24em] sm:text-xs">
            LUMIÈRE
            <br />
            <span className="text-white/60">WEDDING PHOTOGRAPHY</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-[9px] tracking-[.2em] lg:flex">
          <a className="transition hover:text-[#d9c49d]" href="#work">
            SELECTED WORK
          </a>
          <a className="transition hover:text-[#d9c49d]" href="#philosophy">
            PHILOSOPHY
          </a>
          <a className="transition hover:text-[#d9c49d]" href="#experience">
            EXPERIENCE
          </a>
        </nav>

        <a
          href="#contact"
          className="hidden border border-white/65 px-5 py-3 text-[9px] tracking-[.19em] transition hover:bg-white hover:text-[#292a24] sm:block"
        >
          LET&apos;S TALK <ArrowUpRight className="ml-2 inline" size={13} />
        </a>

        <a
          href="#contact"
          aria-label="Go to contact section"
          className="sm:hidden"
        >
          <Menu size={23} strokeWidth={1.3} />
        </a>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[760px] items-end bg-[#47473c] sm:min-h-[850px] lg:min-h-[940px]">
        <Image
          src={photos.hero}
          alt="Wedding celebration captured in a cinematic, documentary style"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/65" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-20 pt-40 sm:px-10 md:px-16 md:pb-24 lg:px-24">
          <div className="mb-9 flex items-center gap-3">
            <span className="h-px w-10 bg-[#d6bd92]" />
            <p className="text-[9px] tracking-[.28em] text-[#f0dfc1] sm:text-[10px]">
              PHOTOGRAPHING FEELING, NOT PERFECTION
            </p>
          </div>

          <h1 className="max-w-[1100px] font-serif text-[clamp(3.8rem,10vw,9.5rem)] leading-[.88] tracking-[-.055em]">
            The day goes.
            <br />
            <span className="pl-[7vw] font-light italic text-[#e8d7b7]">
              The feeling
            </span>
            <br />
            stays.
          </h1>

          <div className="mt-12 flex flex-col gap-8 sm:mt-16 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-[340px] text-sm leading-7 text-white/80">
              
            </p>

            <a
              href="#work"
              className="group flex w-fit items-center gap-5 border-b border-white/55 pb-3 text-[9px] tracking-[.23em] transition hover:border-[#d6bd92]"
            >
              ENTER THE STORIES
              <ArrowDownRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 right-7 hidden items-center gap-3 text-[8px] tracking-[.22em] text-white/65 md:flex">
          <span className="h-px w-8 bg-white/50" />
          AVAILABLE WORLDWIDE
        </div>
      </section>

      {/* Intro */}
      <section
        id="philosophy"
        className="mx-auto grid max-w-[1500px] gap-12 px-6 py-24 sm:px-10 md:grid-cols-[1.05fr_.95fr] md:items-center md:gap-16 md:px-16 md:py-36 lg:px-24"
      >
        <div className="relative">
          <p className="mb-7 text-[9px] tracking-[.27em] text-[#8d7654]">
            A DIFFERENT KIND OF PRESENCE
          </p>

          <h2 className="font-serif text-5xl leading-[1.04] tracking-[-.035em] sm:text-6xl lg:text-[76px]">
            Not made for
            <br />
            the camera.
            <br />
            <span className="font-light italic text-[#a18a68]">
              Made for you.
            </span>
          </h2>

          <p className="mt-8 max-w-md text-sm leading-8 text-[#747268]">
            We are drawn to the moments nobody announces. A deep breath before
            the ceremony. Your father trying not to cry. The chaos, the
            tenderness, the wonderfully imperfect things that make a day
            entirely yours.
          </p>

          <p className="mt-5 max-w-md text-sm leading-8 text-[#747268]">
            Our work is honest, considered and quietly cinematic. You live the
            day. We make sure you can return to it.
          </p>

          <a
            href="#experience"
            className="mt-9 inline-flex items-center gap-4 border-b border-[#b4a184] pb-3 text-[9px] tracking-[.2em]"
          >
            THE WAY WE WORK <ArrowRight size={15} />
          </a>

          <div className="mt-14 hidden font-serif text-2xl italic text-[#a18a68] md:block">
            Less posing. More feeling.
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[500px] md:ml-auto">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#ded6c8]">
            <Image
              src={photos.story}
              alt="A quiet moment between two people in love"
              fill
              unoptimized
              sizes="(max-width: 768px) 90vw, 42vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-3 bg-[#f5f2eb] px-5 py-4 sm:-left-8 sm:px-7">
            <p className="font-serif text-xl italic sm:text-2xl">
              Remember how it felt.
            </p>
            <p className="mt-2 text-[8px] tracking-[.2em] text-[#827b6e]">
              THAT IS THE WHOLE POINT
            </p>
          </div>

          <span className="absolute -right-3 top-8 hidden border border-white/70 bg-[#f5f2eb]/90 px-4 py-3 text-[8px] tracking-[.2em] sm:block">
            EST. IN LOVE
          </span>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="bg-[#e9e5dc] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 flex flex-col gap-7 md:mb-20 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-6 text-[9px] tracking-[.27em] text-[#8d7654]">
                A SMALL COLLECTION OF MEMORIES
              </p>
              <h2 className="font-serif text-5xl tracking-[-.04em] sm:text-7xl lg:text-8xl">
                Stories, not poses.
              </h2>
            </div>
            <p className="max-w-[310px] text-sm leading-7 text-[#77746a]">
              Different places. Different people. One thing in common: a day
              that could never belong to anyone else.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-12 md:gap-x-7 md:gap-y-16">
            {stories.map((story, index) => (
              <a
                href="#contact"
                key={story.number}
                className={`group block ${
                  index === 0
                    ? "md:col-span-7"
                    : index === 1
                      ? "md:col-span-5 md:mt-28"
                      : "md:col-span-6 md:col-start-4"
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-[#d4cbbb] ${
                    index === 1 ? "aspect-[4/5]" : "aspect-[5/4]"
                  }`}
                >
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 95vw, 60vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />

                  <span className="absolute left-5 top-5 text-[9px] tracking-[.2em] text-white">
                    {story.number} / 03
                  </span>

                  <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/65 text-white transition group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight size={17} />
                  </span>

                  <div className="absolute inset-x-5 bottom-6 text-white sm:inset-x-8 sm:bottom-8">
                    <p className="mb-3 text-[8px] tracking-[.22em] text-white/75">
                      {story.type}
                    </p>
                    <h3 className="font-serif text-3xl italic sm:text-4xl lg:text-5xl">
                      {story.title}
                    </h3>
                    <p className="mt-3 text-[8px] tracking-[.2em] text-white/75">
                      {story.location}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-16 border-t border-[#cfc8ba] pt-8 sm:flex sm:items-center sm:justify-between">
            <p className="max-w-sm text-sm leading-7 text-[#77746a]">
              Every gallery starts with a conversation about what matters to
              you.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-4 text-[9px] tracking-[.2em] sm:mt-0"
            >
              TELL US YOUR STORY <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="relative overflow-hidden bg-[#30332b] px-6 py-28 text-[#f5f2eb] sm:px-10 md:px-16 md:py-40 lg:px-24">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/[.07] sm:h-[500px] sm:w-[500px]" />
        <div className="absolute -right-6 -top-10 h-64 w-64 rounded-full border border-white/[.07] sm:h-[400px] sm:w-[400px]" />

        <div className="relative mx-auto max-w-[1300px]">
          <Sparkles className="mb-9 text-[#d6bd92]" size={24} strokeWidth={1} />

          <p className="mb-6 text-[9px] tracking-[.28em] text-[#d6bd92]">
            OUR PROMISE TO YOU
          </p>

          <h2 className="max-w-5xl font-serif text-5xl leading-[1.08] tracking-[-.035em] sm:text-7xl lg:text-[100px]">
            Be here for
            <br />
            <span className="font-light italic text-[#d6bd92]">
              every second.
            </span>
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-end">
            <p className="max-w-lg text-sm leading-8 text-white/65">
              No endless interruptions. No turning your wedding into a
              photoshoot. Just gentle direction when you need it, room to be
              yourselves, and thoughtful photographs of the things you might
              otherwise miss.
            </p>

            <div className="space-y-5 md:justify-self-end">
              {[
                "Thoughtful planning before the day",
                "A calm, unobtrusive presence",
                "Images made to last beyond a trend",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-xs text-white/80">
                  <span className="h-1 w-1 rounded-full bg-[#d6bd92]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="experience" className="px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-12 md:mb-16">
            <p className="mb-5 text-[9px] tracking-[.27em] text-[#8d7654]">
              WHAT WE PHOTOGRAPH
            </p>
            <h2 className="font-serif text-5xl tracking-[-.04em] sm:text-7xl">
              Made around you.
            </h2>
          </div>

          <div className="border-t border-[#d7d0c4]">
            {services.map((service) => (
              <a
                key={service.number}
                href="#contact"
                className="group grid gap-4 border-b border-[#d7d0c4] py-8 transition-colors hover:bg-[#eeebe3] sm:grid-cols-[70px_1fr_1fr_30px] sm:items-center sm:gap-7 sm:px-4"
              >
                <span className="text-[9px] tracking-[.18em] text-[#9b8869]">
                  {service.number}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl">
                  {service.title}
                </h3>
                <p className="max-w-md text-sm leading-7 text-[#77746a]">
                  {service.description}
                </p>
                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="bg-[#e9e5dc] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
        <div className="mx-auto grid max-w-[1300px] gap-12 md:grid-cols-2 md:items-center md:gap-20">
          <div>
            <p className="mb-6 text-[9px] tracking-[.26em] text-[#8d7654]">
              A NOTE ON INVESTMENT
            </p>
            <h2 className="font-serif text-5xl leading-[1.08] tracking-[-.04em] sm:text-7xl">
              An experience
              <br />
              <span className="italic font-light">worth keeping.</span>
            </h2>
          </div>

          <div>
            <p className="text-sm leading-8 text-[#77746a]">
              Every celebration is different. Your collection is shaped around
              your plans, the people who matter and the moments you want
              remembered. We will walk you through the options, with no
              pressure and no one-size-fits-all package.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-4 border-b border-[#a99a81] pb-3 text-[9px] tracking-[.2em]"
            >
              ASK ABOUT YOUR DATE <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#f5f2eb] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
        <div className="mx-auto grid max-w-[1300px] gap-14 md:grid-cols-[1fr_.8fr] md:gap-24">
          <div>
            <p className="mb-7 text-[9px] tracking-[.26em] text-[#8d7654]">
              YOUR STORY STARTS HERE
            </p>

            <h2 className="font-serif text-6xl leading-[.98] tracking-[-.05em] sm:text-8xl lg:text-[100px]">
              Tell us
              <br />
              <span className="font-light italic text-[#a18a68]">everything.</span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-8 text-[#77746a]">
              The date you have in mind. The place you keep dreaming about.
              The little details that make your celebration yours. We are
              listening.
            </p>

            <div className="mt-10 flex items-center gap-3 text-[9px] tracking-[.2em] text-[#8d7654]">
              <span className="h-px w-8 bg-[#b8a487]" />
              WEDDINGS · DESTINATIONS · REAL LIFE
            </div>
          </div>

          <div className="flex flex-col justify-center border-t border-[#d7d0c4] pt-10 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <p className="mb-5 text-[9px] tracking-[.22em] text-[#8d7654]">
              HAVE A DATE IN MIND?
            </p>

            <p className="font-serif text-3xl leading-snug sm:text-4xl">
              Let&apos;s start with a conversation.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#77746a]">
              Tell us a little about your plans. We will talk through
              availability, your vision and what feels right for your day.
            </p>

            <a
              href="mailto:YOUR-EMAIL@example.com?subject=Wedding%20Photography%20Inquiry&body=Hello%20Lumi%C3%A8re%2C%0A%0AOur%20wedding%20date%3A%0ALocation%3A%0ATell%20you%20more%3A"
              className="group mt-9 flex items-center justify-between gap-5 bg-[#30332b] px-6 py-5 text-[9px] tracking-[.18em] text-white transition hover:bg-[#474b3d]"
            >
              <span>ENQUIRE ABOUT YOUR WEDDING</span>
              <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            <p className="mt-4 text-[10px] leading-6 text-[#8c877b]">
              Portfolio concept by CodeWave Studios. 
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#30332b] px-6 py-9 text-white sm:px-10 md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 font-serif text-lg italic">
              L
            </span>
            <span className="text-[10px] tracking-[.22em]">
              LUMIÈRE WEDDINGS
            </span>
          </a>

          <p className="text-[9px] tracking-[.15em] text-white/55">
            HONEST MOMENTS. LASTING MEANING.
          </p>

          <div className="flex items-center gap-5 text-[9px] tracking-[.15em]">
            <a href="#work" className="hover:text-[#d6bd92]">
              WORK
            </a>
            <a href="#contact" className="hover:text-[#d6bd92]">
              CONTACT
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-[#d6bd92]"
            >
              <Instagram size={17} />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-[1500px] flex-col gap-2 border-t border-white/10 pt-5 text-[9px] tracking-[.1em] text-white/40 sm:flex-row sm:justify-between">
          <p>© 2026 LUMIÈRE WEDDINGS</p>
          <p>CONCEPT & DESIGN BY CODEWAVE STUDIOS</p>
        </div>
      </footer>
    </main>
  );
}
