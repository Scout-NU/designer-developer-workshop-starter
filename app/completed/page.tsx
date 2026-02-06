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
              <img src="/scout-logo.png" alt="Profile" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="flex flex-col gap-8">

            {/* Heading */}
            <h1 className="text-black font-bold text-[5rem] font-['Iowan_Old_Style',Georgia,serif]">
              Hello!
            </h1>

            {/* Bio paragraph */}
            <p className="text-black max-w-lg leading-relaxed text-[1.375rem] font-[Inter,sans-serif]">
              This is my portfolio!!!! I was born at a very young age,
              every since my passion has been reciting all of Lorem Ipsum, from memory. Wanna hear? Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
               consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
               nulla pariatur. How was it? Amazing right?
            </p>

            {/* CTA Button */}
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#5c5c5c] text-white px-8 py-4 rounded-full text-lg font-[Inter,sans-serif] hover:bg-[#4a4a4a] transition-colors w-fit"
            >
              Learn more
              <span aria-hidden="true">→</span>
            </a>

          </div>
        </section>

      </main>
    </div>
  );
}
