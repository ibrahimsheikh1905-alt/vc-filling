"use client";

import NavigationWrapper from "@/components/NavigationWrapper";

const CYAN = "#06B6D4";

const navCategories = [
  { icon: "📈", label: "Trending", id: "trending" },
  { icon: "💡", label: "Ideas & Strategies", id: "ideas" },
  { icon: "📣", label: "Marketing & Branding", id: "marketing" },
  { icon: "📄", label: "How-to", id: "howto" },
  { icon: "⚖️", label: "Legal & Tax", id: "legal" },
  { icon: "⚙️", label: "Tools", id: "tools" },
  { icon: "▶️", label: "Podcasts & Videos", id: "podcasts" },
];

const topLinks = [
  ["Trending", "Women Founders Confront the Gender Funding Gap"],
  ["Ideas & Strategies", "Disruptive by Design: The Gatorade Effect and the Future of Innovation"],
  ["Trending", "Think Beyond the Blurb"],
  ["How-to", "How to Manage Your Startup’s Online Reputation"],
  ["Ideas & Strategies", "Business Unusual"],
  ["Trending", "The Secret Superpower of Creative Minds: Resilience"],
];

const smallTrending = [
  ["Vacation to Vocation", "Why Customers Buy the Founder (Not Just the Product)"],
  ["Your Product Is You", "Making Your AI Startup Stand Out"],
];

const ideaLinks = [
  ["How You Stack Up", "Why Tech Is Vital for Your Startup"],
  ["Keeping Your Balance", "Credit Card Entrepreneurs"],
  ["Pitch Perfect", "The Perfect Elevator Pitch in the Age of AI"],
  ["Dreamwork to Real Work", "A No-BS Way to Turn Concepts Into Companies"],
];

const marketingLinks = [
  ["You Name It", "A Step-by-Step Guide to Naming Your Business & Maintaining Your Sanity"],
  ["Creating Revenue", "Why the Creative Economy Is Thriving"],
  ["Do You Have Protection?", "How to Protect Your Brand Without a Trademark Lawyer"],
  ["Cash Flow State", "Subscription Economy: Building Loyalty and Predictable Revenue in Modern Commerce"],
];

const howToLeft = [
  ["Creative Nuts & Bolts", "What Every Business Should Know About Paying Contractors"],
  ["The 411 On The 1099", "How to Start a Business on a Budget of $500 or Less"],
];

const legalLinks = [
  ["Theft Prevention", "How to Protect Your Brand Without a Trademark Lawyer"],
  ["Tax Hacks", "How Founders Can Handle Quarterly Taxes With Confidence"],
  ["Divide & Conquer", "How to Separate Business and Personal Finances for Taxes"],
  ["Worth The Wait", "Why Compliance Should Come Before Cash Flow"],
  ["Your Organization Needs Organization", "Tax Organization Tips for Founders: Receipts & Write-Offs"],
  ["Plan Now, Rave Later", "What Is the Best Business Structure for Taxes?"],
];

const podcastEpisodes = [
  ["Evelyse Taylor", "If You Can’t Get Over Your Fear, Do It Afraid."],
  ["Nadia Ardebili", "Putting the Human in Human Resources."],
  ["Tyler Hochman", "Why Irrational Confidence Is an Entrepreneur’s Superpower."],
  ["Theresa Villano Reed", "The Secret To Making People Remember You!"],
  ["Jane Hyman", "Bringing Legal Help to an Underserved Community: the People."],
];

function Arrow() {
  return <span className="text-cyan-500 text-xl leading-none">›</span>;
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-cyan-600">
      {children}
    </div>
  );
}

function SectionTitle({ icon, title }: { icon: string; title: string }) {
  return (
    <h2 className="mb-5 flex items-center gap-2 text-2xl font-black text-slate-950">
      <span className="text-cyan-500">{icon}</span>
      {title}
    </h2>
  );
}

function ArticleLink({ tag, title }: { tag: string; title: string }) {
  return (
    <a
      href="#"
      className="group flex items-start justify-between gap-4 border-b border-slate-200 py-4"
    >
      <div>
        <Tag>{tag}</Tag>
        <h3 className="text-[15px] font-extrabold leading-snug text-slate-950 transition group-hover:text-cyan-600">
          {title}
        </h3>
      </div>
      <Arrow />
    </a>
  );
}

function ImageBox({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-50 via-slate-100 to-cyan-100 shadow-sm ${className}`}
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-6 top-6 h-20 w-20 rounded-full bg-cyan-300 blur-3xl" />
        <div className="absolute bottom-3 right-6 h-28 w-28 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>
      <div className="relative z-10 flex h-full items-center justify-center p-6 text-center text-sm font-bold text-slate-500">
        {children || "Image"}
      </div>
    </div>
  );
}

export default function StartupCentralPage() {
  return (
    <NavigationWrapper>
      <main className="bg-white font-sans text-slate-950">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-6 pt-12 text-center md:px-10">
          <p className="mb-2 text-[13px] font-black uppercase tracking-[0.42em] text-cyan-600">
            Dream It. Plan It. Do It.
          </p>

          <h1 className="text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
            Startup Central
          </h1>

          <p className="mt-2 text-2xl font-black text-cyan-600">by Incorp Bay</p>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Articles, podcasts, and videos to help you start, grow, and thrive in business.
          </p>

          <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-b border-slate-200 pb-5 text-sm font-bold text-slate-700">
            {navCategories.map((item, index) => (
              <button
                key={item.label}
                type="button"
                onClick={() =>
                  document.getElementById(item.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className={`flex items-center gap-2 border-b-2 bg-transparent pb-4 transition hover:text-cyan-600 ${
                  index === 0 ? "border-cyan-500 text-slate-950" : "border-transparent"
                }`}
              >
                <span className="text-cyan-500">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </section>

        {/* Top Feature */}
        <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.35fr_0.75fr]">
            <div>
              <ImageBox className="aspect-[16/7] w-full">Marketing Without Money Image</ImageBox>
              <div className="mt-5">
                <Tag>Marketing & Branding</Tag>
                <h2 className="text-3xl font-black leading-tight">Marketing Without Money</h2>
                <p className="mt-2 text-base text-slate-600">
                  How Founders Are Turning Free Channels into Growth Machines
                </p>
              </div>
            </div>

            <div className="divide-y divide-slate-200">
              {topLinks.map(([tag, title]) => (
                <ArticleLink key={title} tag={tag} title={title} />
              ))}
            </div>
          </div>
        </section>

        {/* Trending */}
        <section id="trending" className="mx-auto max-w-7xl border-t border-slate-200 px-6 py-8 md:px-10">
          <SectionTitle icon="📈" title="Trending" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr_0.75fr]">
            {smallTrending.map(([tag, title], index) => (
              <div key={title}>
                <ImageBox className="aspect-[16/7] w-full">
                  {index === 0 ? "Founder Speaking Image" : "AI Startup Image"}
                </ImageBox>
                <div className="mt-4">
                  <Tag>{tag}</Tag>
                  <h3 className="text-xl font-black leading-tight">{title}</h3>
                </div>
              </div>
            ))}

            <div className="divide-y divide-slate-200">
              <ArticleLink tag="Dare To Different" title="Keep it Weird, Y’all" />
              <ArticleLink tag="Venture Capital of TX" title="The Outlook for Entrepreneurship Has Never Been Brighter" />
            </div>
          </div>
        </section>

        {/* Ideas */}
        <section id="ideas" className="mx-auto max-w-7xl border-t border-slate-200 px-6 py-8 md:px-10">
          <SectionTitle icon="💡" title="Ideas & Strategies" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.55fr_1.45fr]">
            <div>
              <Tag>Go Get ’Em</Tag>
              <h3 className="text-2xl font-black leading-tight">How to Find Your First 10 Customers</h3>
              <p className="mt-3 text-slate-600">Proactive First Steps to Building Your Business</p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-500 px-5 py-2 text-sm font-black text-cyan-600 transition hover:bg-cyan-500 hover:text-white"
              >
                Read More <span>→</span>
              </a>
            </div>

            <ImageBox className="aspect-[16/6] w-full">Team Meeting Image</ImageBox>
          </div>

          <div className="mt-8 grid grid-cols-1 divide-y divide-slate-200 border-t border-slate-200 md:grid-cols-4 md:divide-x md:divide-y-0">
            {ideaLinks.map(([tag, title]) => (
              <div key={title} className="p-4">
                <ArticleLink tag={tag} title={title} />
              </div>
            ))}
          </div>
        </section>

        {/* Marketing */}
        <section id="marketing" className="mx-auto max-w-7xl border-t border-slate-200 px-6 py-8 md:px-10">
          <SectionTitle icon="📣" title="Marketing & Branding" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <ImageBox className="aspect-[16/9] w-full">Branding Image</ImageBox>
              <div className="mt-4">
                <Tag>Don’t Sell Yourself Short</Tag>
                <h3 className="text-lg font-black">How to Market Your Startup: A Step-by-Step Guide</h3>
              </div>
            </div>
            <div className="divide-y divide-slate-200">
              {marketingLinks.map(([tag, title]) => (
                <ArticleLink key={title} tag={tag} title={title} />
              ))}
              <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-black text-cyan-600">
                View all →
              </a>
            </div>
          </div>
        </section>

        {/* How-to */}
        <section id="howto" className="mx-auto max-w-7xl border-t border-slate-200 px-6 py-8 md:px-10">
          <SectionTitle icon="📄" title="How-to" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <ImageBox className="aspect-[16/9] w-full">How-to Image</ImageBox>
              <div className="mt-4">
                <Tag>Legal Easy Steps</Tag>
                <h3 className="text-lg font-black">How to Become an Entrepreneur</h3>
              </div>
            </div>
            <div className="divide-y divide-slate-200">
              {howToLeft.map(([tag, title]) => (
                <ArticleLink key={title} tag={tag} title={title} />
              ))}
              <ArticleLink tag="How to Do Good" title="How to Pay Yourself Legally Without Paying a Fortune in Taxes" />
            </div>
          </div>
        </section>

        {/* Legal */}
        <section id="legal" className="mx-auto max-w-7xl border-t border-slate-200 px-6 py-8 md:px-10">
          <SectionTitle icon="⚖️" title="Legal & Tax" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <ImageBox className="aspect-[16/9] w-full">Legal & Tax Image</ImageBox>
              <div className="mt-4">
                <Tag>Cover Your Assets</Tag>
                <h3 className="text-lg font-black">Protect Your Business From Common Legal Pitfalls</h3>
              </div>
            </div>
            <div className="divide-y divide-slate-200">
              {legalLinks.map(([tag, title]) => (
                <ArticleLink key={title} tag={tag} title={title} />
              ))}
              <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-black text-cyan-600">
                View all →
              </a>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section id="tools" className="mx-auto max-w-7xl border-t border-slate-200 px-6 py-8 md:px-10">
          <div>
            <SectionTitle icon="⚙️" title="Tools" />
            <div className="rounded-2xl border border-cyan-100 bg-cyan-50/40 p-6">
              <p className="mb-5 text-sm text-slate-600">
                Articles, podcasts, and videos to help you start, grow, and thrive in business.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Entity Quiz", href: "/corporation-state-information" },
                  { label: "Name Checker", href: "/name-search" },
                  { label: "Name Generator", href: "/name-generator" },
                ].map((tool) => (
                  <a
                    key={tool.label}
                    href={tool.href}
                    className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-black shadow-sm transition hover:border-cyan-300 hover:shadow-md"
                  >
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-500" />
                      {tool.label}
                    </span>
                    <Arrow />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-700 p-6 text-white">
              <h3 className="text-2xl font-black">Kickstart Your Dream Business With Incorp Bay Now.</h3>
              <p className="mt-2 text-cyan-50">Powerful resources. Real-world guidance. Built for founders like you.</p>
            </div>
          </div>

        </section>

        {/* Podcasts */}
        <section id="podcasts" className="mx-auto max-w-7xl border-t border-slate-200 px-6 py-8 md:px-10">
          <SectionTitle icon="▶️" title="Podcasts & Videos" />
          <div className="grid gap-6 md:grid-cols-[0.9fr_1fr]">
            <div>
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.35),transparent_45%)]" />
                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                  <p className="text-xs font-black uppercase tracking-widest text-cyan-300">Incorp Bay Presents</p>
                  <h3 className="mt-2 text-2xl font-black uppercase leading-tight">
                    The State of Entrepreneurship 2025
                  </h3>
                  <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-white">
                    ▶
                  </div>
                </div>
              </div>
              <h3 className="mt-3 font-black">The Secret to Starting a Business in 2025</h3>
            </div>

            <div className="divide-y divide-slate-200">
              {podcastEpisodes.map(([name, title]) => (
                <ArticleLink key={title} tag={name} title={title} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </NavigationWrapper>
  );
}
