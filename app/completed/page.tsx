export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 px-8 py-8 flex flex-col items-center">

      {/* ===== NAVBAR ===== */}
      <nav className="w-full max-w-6xl flex items-center justify-between px-8 py-6">
        <span className="text-white text-2xl font-[Inter,sans-serif]">
          Name
        </span>

        {/* Navigation links*/}
        <div className="flex gap-8">
          <a
            href="#"
            className="text-white text-xl font-[Inter,sans-serif] hover:opacity-80"
          >
            Project
          </a>
          <a
            href="#"
            className="text-white text-xl font-[Inter,sans-serif] hover:opacity-80"
          >
            Resume
          </a>
          <a
            href="#"
            className="text-white text-xl font-[Inter,sans-serif] hover:opacity-80"
          >
            Adventures
          </a>
        </div>
      </nav>

      {/* MAIN CARD CONTAINER */}
      <main className="w-full max-w-6xl bg-[#d9d9d9] rounded-3xl">

        {/* HERO SECTION */}
        <section className="flex flex-col md:flex-row gap-12 px-12 py-16">

          {/* LEFT SIDE - IMAGE PLACEHOLDER */}
          <div className="flex-shrink-0">
            <div className="w-72 h-96 bg-[#c4c4c4] rounded-2xl border border-gray-400 flex items-center justify-center">
              <img src="/zayj-retreat.JPG" alt="Profile" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="flex flex-col gap-8">

            {/* Heading */}
            <h1 className="text-black font-bold text-[5rem] font-['Iowan_Old_Style',Georgia,serif]">
              Yo!
            </h1>

            {/* Bio paragraph */}
            <p className="text-black max-w-lg leading-relaxed text-[1.375rem] font-[Inter,sans-serif]">
              I&apos;m Zaydaan, a third year Computer Science student at Northeastern University. 
              <br />
              <br />
              I am Scout&apos;s Conference Tech Lead for Interventions: Entangle, check it out on March 22nd at ISEC!
              <br />
              <br />
              Personal Favorites:
              <br />
              - Food: Sushi
              <br />
              - Movie: Blade Runner 2049
              <br />
              - Season: Summer!!!
              <br />
              - Hobby: Photography
              <br />
            </p>

            {/* CTA Button */}
            <a
              href="https://www.linkedin.com/in/zaydaan/"
              className="inline-flex items-center gap-2 bg-[#5c5c5c] text-white px-8 py-4 rounded-full text-lg font-[Inter,sans-serif] hover:bg-[#4a4a4a] transition-colors w-fit"
            >
              LinkedIn
              <span aria-hidden="true">→</span>
            </a>

          </div>
        </section>

      </main>
    </div>
  );
}
