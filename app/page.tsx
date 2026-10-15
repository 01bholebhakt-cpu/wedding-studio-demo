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
              href="#work"
              className="group mt-9 flex items-center justify-between gap-5 bg-[#30332b] px-6 py-5 text-[9px] tracking-[.18em] text-white transition hover:bg-[#474b3d]"
            >
              <span>EXPLORE THE PORTFOLIO</span>
              <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            <p className="mt-4 text-[10px] leading-6 text-[#8c877b]">
              Portfolio concept by CodeWave Studios. This is a design concept, not a live photography booking site.
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
