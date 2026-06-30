"use client";

import { useEffect, useRef, useState } from "react";
import NavigationWrapper from "@/components/NavigationWrapper";

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-3 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-5 bg-white px-5 py-4 text-left text-[15px] font-semibold text-slate-900 transition hover:bg-cyan-50/60"
      >
        <span>{q}</span>
        <ChevronDown open={open} />
      </button>

      {open && (
        <div className="px-5 pb-5 text-sm leading-7 text-slate-600">
          {a}
        </div>
      )}
    </div>
  );
};

const TOCItem = ({
  label,
  active,
  indent,
  onClick,
}: {
  label: string;
  active: boolean;
  indent?: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`block w-full border-l-2 py-2 pr-3 text-left text-[13.5px] leading-normal transition-all duration-200 ${
      indent ? "pl-7" : "pl-3"
    } ${
      active
        ? "border-cyan-500 bg-cyan-50 font-bold text-cyan-600"
        : "border-transparent text-slate-600 hover:border-cyan-200 hover:bg-cyan-50/50 hover:text-cyan-700"
    }`}
  >
    {label}
  </button>
);

export default function ChoosingBusinessStructurePage() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const sections = [
    "Introduction",
    "What a business structure actually does",
    "The 4 factors that drive the decision",
    "The 4 main business structures compared",
    "How to match a structure to your situation",
    "Formation and registration basics",
    "FAQ",
  ];

  const faqs = [
    {
      q: "What are the 4 types of business structure?",
      a: "The four main business structures are sole proprietorship, partnership, LLC, and corporation. Each handles liability, taxes, and management differently, so the right choice depends on your specific situation.",
    },
    {
      q: "How do I choose the right business structure?",
      a: "Start by evaluating four factors: how much personal liability you're willing to carry, how you want to be taxed, how you plan to run and build your business, and your growth and capital-raising plans. Your answers to these questions will point you toward the structure that fits best.",
    },
    {
      q: "What is better for a small business — an LLC or a corporation?",
      a: "For most small businesses, an LLC is the better choice. It offers liability protection along with flexible management and pass-through taxation, without the administrative overhead of a corporation, like a board of directors or required annual meetings.",
    },
    {
      q: "What is an LLC used for?",
      a: "An LLC, or Limited Liability Company, is used to separate your personal assets from your business's debts and liabilities while still allowing flexible management and pass-through taxation, where business income is reported on your personal tax return.",
    },
    {
      q: "What's the difference between a sole proprietorship and an LLC?",
      a: "A sole proprietorship has no legal separation between you and your business, meaning your personal assets are at risk if the business is sued or can't pay its debts. An LLC creates a legal separation, generally protecting your personal assets as long as you keep business and personal finances properly separated.",
    },
    {
      q: "What are the types of business ownership?",
      a: "The main types of business ownership are sole proprietorship (one owner), partnership (two or more owners), LLC (one or more members), and corporation (owned by shareholders). Each type comes with different rules for liability, taxation, and management.",
    },
    {
      q: "Can I change my business structure later?",
      a: "Yes, you can change your business structure as your business grows or your needs change. However, the formation decision is easier to get right the first time than to undo later, so it's worth consulting a tax professional before you file.",
    },
  ];

  const setSectionRef = (index: number) => (element: HTMLElement | null) => {
    sectionRefs.current[index] = element;
  };

  const handleTocClick = (index: number) => {
    setActiveSection(index);
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (ref) => ref === entry.target,
            );
            if (index !== -1) setActiveSection(index);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-110px 0px -55% 0px" },
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

return (
    <NavigationWrapper>
      <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
        <section className="mx-auto max-w-[1100px] px-6 pb-0 pt-8 md:px-8">
          <div className="mb-5 flex items-center justify-end gap-2.5">
            <span className="mr-1 self-center text-xs text-slate-500">Share:</span>
            {["in", "✕", "🔗"].map((icon, i) => (
              <span
                key={i}
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-slate-200 text-xs text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
              >
                {icon}
              </span>
            ))}
          </div>

          <div className="mb-10 rounded-[20px] bg-slate-50 px-6 py-12 text-center md:px-12">
            <div className="mb-5 flex items-center justify-center gap-1.5 text-xs text-slate-500">
              🕒 11 min read
            </div>

            <h1 className="mx-auto mb-5 max-w-2xl text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">
              Choosing the Right Business Structure for Your New Business
            </h1>

            <p className="mx-auto mb-7 max-w-xl text-[15px] leading-relaxed text-slate-500">
              Learn how to choose the right business structure for your new business.
              Compare sole proprietorships, partnerships, LLCs, and corporations —
              including liability, taxes, and management.
            </p>

            <div className="flex items-center justify-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-sm font-extrabold text-white shadow-md shadow-cyan-500/30">
                i
              </span>
              <div className="text-left">
                <div className="text-[13px] font-bold text-slate-900">
                  IncorpBay Editorial Staff
                </div>
                <div className="text-[11px] text-slate-400">Editorial Team</div>
              </div>
            </div>
</div>
        </section>

        <section className="mx-auto grid max-w-[1100px] grid-cols-1 gap-10 px-6 pb-16 md:grid-cols-[240px_1fr] md:gap-14 md:px-8">
          <aside className="md:sticky md:top-6 md:self-start">
          <div className="mb-3 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-slate-500">
            ⬆ Jump to section
          </div>

          <div className="overflow-hidden rounded-xl border border-cyan-200 bg-cyan-50 py-3 shadow-sm">
            <div className="flex items-center justify-between px-4 pb-2.5 text-[13px] font-bold text-cyan-600">
              Table of contents <span>▾</span>
            </div>

            <div className="rounded-b-lg bg-white">
              {sections.map((section, index) => (
                <TOCItem
                  key={section}
                  label={section}
                  active={index === activeSection}
                  onClick={() => handleTocClick(index)}
                />
              ))}
            </div>
          </div>
        </aside>

        <article className="min-w-0 max-w-[680px]">
          <section ref={setSectionRef(0)} className="scroll-mt-28">
            <h2 className="mb-3.5 text-[26px] font-extrabold text-slate-950">
              Introduction
            </h2>
            <p className="mb-9 text-[15px] leading-[1.8] text-slate-700">
              The right business structure depends on how much personal liability
              you're willing to carry, how you want to be taxed, and how you plan
              to run and build your business. The 4 main options —{" "}
              <span className="font-medium text-cyan-700">sole proprietorship</span>,
              partnership, LLC, and corporation — each handle these factors
              differently. This guide breaks down what matters most so you can
              make a confident decision.
            </p>
          </section>

          <section ref={setSectionRef(1)} className="scroll-mt-28">
            <h2 className="mb-3.5 text-[26px] font-extrabold text-slate-950">
              What a business structure actually does
            </h2>
            <p className="mb-4 text-[15px] leading-[1.8] text-slate-700">
              A business structure is the legal framework that defines how your
              business is owned, taxed, and held responsible for its debts. It's
              not just paperwork — it determines whether your personal finances
              are on the line if something goes wrong, how the IRS treats your
              income, and who has the authority to make decisions.
            </p>
            <p className="mb-9 text-[15px] leading-[1.8] text-slate-700">
              Most entrepreneurs don't realize how much the structure choice
              shapes day-to-day operations until they're already running the
              business. A sole proprietor and an LLC owner can run the same type
              of business, but their exposure to risk and their tax obligations
              look very different. Getting this right at the start is a lot
              easier than changing it later.
            </p>
          </section>

          <section ref={setSectionRef(2)} className="scroll-mt-28">
            <h2 className="mb-3.5 text-[26px] font-extrabold text-slate-950">
              The 4 factors that drive the decision
            </h2>
            <p className="mb-7 text-[15px] leading-[1.8] text-slate-700">
              Before comparing structures, figure out where you stand on 4 core
              factors. Your answers will narrow the field quickly.
            </p>

            <h3 className="mb-2.5 text-[19px] font-bold text-slate-950">Liability</h3>
            <p className="mb-6 text-[15px] leading-[1.8] text-slate-700">
              How much personal risk are you willing to carry? In a sole
              proprietorship or general partnership, your personal finances are
              fair game if the business is sued or can't pay its debts. LLCs and
              corporations create a legal separation between you and the business,
              so your personal assets generally stay protected — as long as you
              keep the two properly separated.
            </p>

            <h3 className="mb-2.5 text-[19px] font-bold text-slate-950">Taxes</h3>
            <p className="mb-6 text-[15px] leading-[1.8] text-slate-700">
              Sole proprietors and partners report business income directly on
              their personal tax returns — the business itself doesn't file a
              separate return. LLCs follow the same pass-through model by default,
              though they can elect to be taxed as an{" "}
              <span className="font-medium text-cyan-700">S Corporation</span> or C
              Corporation. <span className="font-medium text-cyan-700">C corporations</span>{" "}
              pay taxes at the corporate level, and shareholders pay again on
              dividends — what's commonly called double taxation.
            </p>

            <h3 className="mb-2.5 text-[19px] font-bold text-slate-950">
              Management and control
            </h3>
            <p className="mb-6 text-[15px] leading-[1.8] text-slate-700">
              Sole proprietors make every decision themselves. Partnerships split
              control among partners based on their agreement. LLCs let members
              set up management however they want through an operating agreement —
              either member-managed or manager-managed. Corporations have the most
              formal structure: a board of directors, officers, and bylaws that
              govern how decisions get made.
            </p>

            <h3 className="mb-2.5 text-[19px] font-bold text-slate-950">
              Growth and capital
            </h3>
            <p className="mb-10 text-[15px] leading-[1.8] text-slate-700">
              If you plan to raise money from outside investors or eventually go
              public, a C corporation is the most practical choice — it can issue
              unlimited shares of stock to raise equity financing. S corporations
              can also issue stock but are capped at 100 shareholders, all of whom
              must be U.S. citizens or residents. LLCs can bring in investors
              through membership interests, but the process is more complex than
              issuing shares. Sole proprietorships and partnerships have the
              hardest time attracting outside capital.
            </p>
          </section>

          <section ref={setSectionRef(3)} className="scroll-mt-28">
            <h2 className="mb-3.5 text-[26px] font-extrabold text-slate-950">
              The 4 main business structures compared
            </h2>
            <p className="mb-7 text-[15px] leading-[1.8] text-slate-700">
              The 4 main business structures are sole proprietorship, partnership,
              LLC, and corporation. Each one handles liability, taxes, and
              management differently. Here's what you need to know about each.
            </p>

            <h3 className="mb-2.5 text-[19px] font-bold text-slate-950">
              Sole proprietorship
            </h3>
            <p className="mb-4 text-[15px] leading-[1.8] text-slate-700">
              A sole proprietorship is the simplest structure — one person owns
              and runs the business, and there's no legal separation between the
              owner and the business. You don't need to register with the state to
              form one, though you may need to file a{" "}
              <span className="font-medium text-cyan-700">
                DBA (Doing Business As) statement
              </span>{" "}
              if you operate under a name other than your own.
            </p>
            <p className="mb-7 text-[15px] leading-[1.8] text-slate-700">
              The trade-off is unlimited personal liability. If the business is
              sued or can't pay its debts, your personal finances are on the hook —
              but most entrepreneurs outgrow it quickly.
            </p>

            <h3 className="mb-2.5 text-[19px] font-bold text-slate-950">Partnership</h3>
            <p className="mb-4 text-[15px] leading-[1.8] text-slate-700">
              A partnership is owned by 2 or more people who share profits,
              responsibilities, and — in a general partnership — unlimited
              personal liability. Each general partner can bind the business to
              contracts and obligations, which means one partner's decisions can
              put everyone's personal finances at risk.
            </p>
            <p className="mb-7 text-[15px] leading-[1.8] text-slate-700">
              A limited partnership (LP) offers a middle ground: general partners
              manage the business and carry unlimited liability, while limited
              partners contribute capital and have liability limited to what they
              invested. Partnerships don't need formal state registration unless
              they're using a fictitious name, but a written partnership agreement
              is worth having regardless.
            </p>

            <h3 className="mb-2.5 text-[19px] font-bold text-slate-950">
              Limited Liability Company (LLC)
            </h3>
            <p className="mb-4 text-[15px] leading-[1.8] text-slate-700">
              An LLC combines liability protection with flexible management and
              pass-through taxation. Your personal assets are generally protected
              from business debts and lawsuits, and you set up management however
              works best for your business through an operating agreement. By
              default, the IRS taxes a single-member LLC like a sole proprietorship
              and a multi-member LLC like a partnership — but you can elect S
              Corporation or C Corporation tax treatment if that's more
              advantageous.
            </p>
            <p className="mb-7 text-[15px] leading-[1.8] text-slate-700">
              To form an LLC, you file{" "}
              <span className="font-medium text-cyan-700">Articles of Organization</span>{" "}
              with your state's Secretary of State office and pay the state filing
              fee. The LLC is the most popular structure for small business owners
              because it offers real protection without the administrative overhead
              of a corporation.
            </p>

            <h3 className="mb-2.5 text-[19px] font-bold text-slate-950">Corporation</h3>
            <p className="mb-4 text-[15px] leading-[1.8] text-slate-700">
              A corporation is a separate legal entity from its owners, with the
              most formal management structure of any business type — a board of
              directors, officers, and bylaws. There are 2 main types: C
              corporations and S corporations.
            </p>
            <p className="mb-10 text-[15px] leading-[1.8] text-slate-700">
              A C corporation can issue unlimited shares of stock, making it the
              go-to structure for businesses that plan to raise significant outside
              investment or eventually go public. The downside is double taxation —
              the corporation pays taxes on profits, and shareholders pay again on
              any dividends. An S corporation avoids double taxation through
              pass-through treatment, but it's limited to 100 shareholders who must
              all be U.S. citizens or residents. To form either type, you file
              Articles of Incorporation with the state.
            </p>
          </section>

          <section ref={setSectionRef(4)} className="scroll-mt-28">
            <h2 className="mb-3.5 text-[26px] font-extrabold text-slate-950">
              How to match a structure to your situation
            </h2>
            <p className="mb-7 text-[15px] leading-[1.8] text-slate-700">
              The best structure for your business depends on your specific
              situation — there's no single right answer. But a few common
              scenarios point clearly in one direction.
            </p>

            <h3 className="mb-2.5 text-[19px] font-bold text-slate-950">
              You're starting solo with low risk
            </h3>
            <p className="mb-7 text-[15px] leading-[1.8] text-slate-700">
              A sole proprietorship works if you're testing an idea, freelancing,
              or running a low-risk side business with minimal liability exposure.
              It's the fastest way to start — no registration required in most
              cases. But if the business grows or takes on any real liability,
              forming an LLC is worth the extra step.
            </p>

            <h3 className="mb-2.5 text-[19px] font-bold text-slate-950">
              You're starting with a partner
            </h3>
            <p className="mb-7 text-[15px] leading-[1.8] text-slate-700">
              A multi-member LLC gives co-founders liability protection and
              flexible profit-sharing without the formality of a corporation. A
              general partnership is simpler to form but leaves both partners
              personally exposed. If you're going into business with someone else,
              a written agreement — whether a partnership agreement or an LLC
              operating agreement — is non-negotiable.
            </p>

            <h3 className="mb-2.5 text-[19px] font-bold text-slate-950">
              You want liability protection and tax flexibility
            </h3>
            <p className="mb-7 text-[15px] leading-[1.8] text-slate-700">
              An LLC is the most common choice here. It protects your personal
              assets, lets you choose how you're taxed, and doesn't require a
              board of directors or annual shareholder meetings. Most small
              business owners find it hits the right balance between protection
              and simplicity.
            </p>

            <h3 className="mb-2.5 text-[19px] font-bold text-slate-950">
              You're planning to raise outside investment
            </h3>
            <p className="mb-10 text-[15px] leading-[1.8] text-slate-700">
              A C corporation is the standard choice for businesses that plan to
              raise venture capital or eventually go public. Investors and
              institutional funds typically prefer C corporations because of the
              clean equity structure and no shareholder restrictions. If outside
              investment isn't in the near-term plan, an LLC or S corporation is
              usually a better fit.
            </p>
          </section>

          <section ref={setSectionRef(5)} className="scroll-mt-28">
            <h2 className="mb-3.5 text-[26px] font-extrabold text-slate-950">
              Formation and registration basics
            </h2>
            <p className="mb-4 text-[15px] leading-[1.8] text-slate-700">
              Once you've chosen a structure, the registration requirements depend
              on which one you picked. Here's what each structure requires to get
              officially formed.
            </p>
            <p className="mb-3.5 text-[15px] leading-[1.8] text-slate-700">
              <strong>Sole proprietorship:</strong> No state registration required.
              If you operate under a name other than your own, file a DBA
              statement with your state or local government.
            </p>
            <p className="mb-3.5 text-[15px] leading-[1.8] text-slate-700">
              <strong>General partnership:</strong> No formal state registration
              required unless using a fictitious name. A written partnership
              agreement is strongly recommended.
            </p>
            <p className="mb-3.5 text-[15px] leading-[1.8] text-slate-700">
              <strong>LLC:</strong> File Articles of Organization with your state's
              Secretary of State office and pay the state filing fee, which varies
              by state.
            </p>
            <p className="mb-6 text-[15px] leading-[1.8] text-slate-700">
              <strong>Corporation (C Corp or S Corp):</strong> File Articles of
              Incorporation with the state and adopt bylaws. Initial filing fees
              vary by state. S corporation status requires a separate IRS election
              using Form 2553.
            </p>
            <p className="mb-6 text-[15px] leading-[1.8] text-slate-700">
              Regardless of structure, most businesses that hire employees — or
              that want to open a business bank account — need to file certain tax
              forms or get an{" "}
              <span className="font-medium text-cyan-700">
                Employer Identification Number (EIN)
              </span>{" "}
              from the IRS. You can apply for an EIN at no cost through the IRS
              website, and online applications are processed immediately.
            </p>
            <p className="mb-12 text-[15px] leading-[1.8] text-slate-700">
              A tax professional can help you figure out which structure makes the
              most sense for your specific situation before you file anything. The
              formation decision is easier to get right the first time than to undo
              later.
            </p>
          </section>

          <section ref={setSectionRef(6)} className="scroll-mt-28">
            <h2 className="mb-5 text-[26px] font-extrabold text-slate-950">FAQ</h2>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </section>
        </article>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 pb-16 md:px-8">
        <div className="relative overflow-hidden rounded-[28px] border border-cyan-100 bg-gradient-to-br from-white via-white to-cyan-50 px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:px-12 md:py-12 lg:px-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />

          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_430px]">
            <div className="max-w-xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                <span>Excellent 4.7 out of 5</span>
                <span className="text-cyan-500">★</span>
                <span className="font-bold text-cyan-600">Trustpilot</span>
              </div>

              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-4xl">
                Start Your Story With IncorpBay
              </h2>

              <p className="mt-4 max-w-[520px] text-sm leading-7 text-slate-600 md:text-[15px]">
                Marina turned her passion into a thriving boutique with a little
                help from IncorpBay. Whether you are starting a bridal business, a
                retail shop, or something entirely different, we can help you handle
                the paperwork so you can focus on what matters most. Get started
                today for $0 + state fee.
              </p>

              <button className="mt-7 inline-flex rounded-full bg-cyan-500 px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-600 hover:shadow-cyan-600/30">
                Get Started
              </button>
            </div>

            <div className="relative mx-auto h-[410px] w-full max-w-[430px] sm:h-[390px]">
              <div className="absolute left-0 top-8 w-[190px] rounded-2xl bg-white p-4 text-[11px] shadow-2xl shadow-slate-900/10 ring-1 ring-slate-100 sm:left-4">
                {[
                  "Corp Formation",
                  "Compliance",
                  "Financials",
                  "Taxes",
                  "Insurance",
                  "Business Mail",
                  "Business Contracts",
                ].map((item, i) => (
                  <div
                    key={item}
                    className={`mb-1 flex items-center justify-between rounded-lg px-2.5 py-2 ${
                      i === 0
                        ? "bg-cyan-50 font-bold text-cyan-600"
                        : "font-medium text-slate-500"
                    }`}
                  >
                    <span>{item}</span>
                    {i === 0 && <span className="text-cyan-600">›</span>}
                  </div>
                ))}
                <div className="mt-3 border-t border-slate-100 pt-3 text-slate-400">
                  Support
                </div>
              </div>

              <div className="absolute right-0 top-0 w-[205px] rounded-2xl bg-white p-5 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-100 sm:right-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-extrabold text-slate-950">
                      Corp Formation
                    </div>
                    <div className="mt-1 text-[11px] text-slate-400">
                      Order Status
                    </div>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500 text-sm font-black text-white shadow-md shadow-cyan-500/30">
                    ✓
                  </span>
                </div>

                <div className="mb-3 flex justify-center">
                  <svg width="120" height="72" viewBox="0 0 120 72">
                    <path
                      d="M16,64 A44,44 0 0,1 104,64"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="9"
                      strokeLinecap="round"
                      strokeDasharray="7 5"
                    />
                    <path
                      d="M16,64 A44,44 0 0,1 84,24"
                      fill="none"
                      stroke="#06B6D4"
                      strokeWidth="9"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="mb-4 text-center text-[11px] font-semibold text-cyan-600">
                  ● Operational
                </div>

                <div className="mb-1 text-[11px] text-slate-500">Order Tracking</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 rounded-xl bg-cyan-500 px-3 py-2.5 text-center text-lg font-extrabold text-white shadow-md shadow-cyan-500/20">
                    65%
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400">EIN</span>
                </div>
              </div>

              <div className="absolute bottom-2 left-8 right-4 rounded-2xl bg-white px-5 py-4 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-100 sm:left-16">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-extrabold text-slate-950">
                      Business Setup
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Documents and compliance
                    </p>
                  </div>
                  <span className="rounded-full bg-cyan-50 px-3 py-1 text-[10px] font-bold text-cyan-600">
                    Active
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {["Filed", "Verified", "Ready"].map((item) => (
                    <div key={item} className="rounded-xl bg-slate-50 px-3 py-2">
                      <div className="mb-1 h-1.5 w-8 rounded-full bg-cyan-400" />
                      <p className="text-[10px] font-bold text-slate-600">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] border border-cyan-200/60" />
            </div>
          </div>
        </div>
</section>
      </div>
    </NavigationWrapper>
  );
}
