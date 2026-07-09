"use client";

import React from "react";
import NavigationWrapper from "@/components/NavigationWrapper";

const ORANGE = "#ff4b14";

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21V5.5Z" />
      <path d="M4 5.5v15M8 7h8" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M8 4h8v4a4 4 0 1 1-8 0V4Z" />
      <path d="M8 6H5a3 3 0 0 0 3 5M16 6h3a3 3 0 0 1-3 5M12 12v4M9 20h6M10 16h4" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const toc = [
  "How to Form an Alabama Corporation Yourself in 6 Steps",
  "Alabama Corporation Types",
  "Helpful Resources From the State of Alabama",
  "More Information in This Guide",
];

const cBenefits = [
  "The strongest form of liability protection possible by insulating your personal assets and finances from business debts, obligations, damages, bankruptcy or other liabilities",
  "Several options to create, buy, sell or transfer stock, including publicly",
  "The ability to issue more than one type of stock",
  "The ability to raise more funds by issuing more stock",
  "The ability to sell stock to investors inside and outside the U.S.",
];

const sBenefits = [
  "Options for creating, transferring and selling stock, though not as many as a C Corp",
  "The capacity for up to 100 shareholders",
  "Simpler rules than those that apply to C Corporations",
  "Easy transfer of ownership simply by selling your stock",
  "The possibility of saving money by allowing you to pay less self-employment tax",
];

const resources = ["Secretary of State", "Department of Revenue", "Department of Labor"];

function Sidebar() {
  return (
    <aside className="block sticky top-20 self-start z-20 w-[320px] shrink-0 border-r border-[#d9e0e7] bg-white">
      <div className="px-8 pt-6 pb-6">
        <div className="rounded-[14px] bg-[#ffd9cb] px-5 py-2.5 text-[15px] text-[#b93408]">
          Alabama Corp
        </div>

        <nav className="mt-3 space-y-4 text-[15px] leading-[1.4]">
          {toc.map((item, i) => (
            <a
              href={`#section-${i}`}
              key={item}
              className={`block pl-4 ${
                i === 0
                  ? "border-l-4 border-[#ff4b14] text-[#333]"
                  : "text-[#717b90] hover:text-[#ff4b14]"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#section-4"
          className="mt-4 flex items-center justify-between rounded-[14px] bg-[#ffd9cb] px-5 py-2.5 text-[15px] text-[#b93408]"
        >
          <span>Business Taxes</span>
          <ArrowIcon />
        </a>

        <div className="mt-10 w-full rounded-[18px] bg-white p-5 text-center shadow-[0_18px_35px_rgba(0,0,0,0.14)]">
          <h3 className="text-[17px] font-extrabold">Form Your Business</h3>
          <p className="mt-2 text-[13px] leading-5">
            Form for $0 (+ State Fee) with a Free 1st Year of Registered Agent
          </p>
          <button className="mt-4 w-full rounded-full bg-[#ff4b14] px-5 py-3 text-[14px] font-extrabold text-white">
            GET STARTED
          </button>
        </div>
      </div>
    </aside>
  );
}

function TextLink({ children }: { children: React.ReactNode }) {
  return <span className="text-[#ff4b14]">{children}</span>;
}

function Para({ children }: { children: React.ReactNode }) {
  return <p className="mb-7 text-[18px] leading-[1.65] text-[#161616]">{children}</p>;
}

function SectionTitle({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} className="mb-7 scroll-mt-28 text-[44px] font-extrabold leading-[1.08] tracking-[-1.2px] text-black">
      {children}
    </h2>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-4 mt-10 text-[28px] font-extrabold leading-[1.15] text-black">{children}</h3>;
}

function HeroArt() {
  return (
    <div className="mt-8 overflow-hidden rounded-lg bg-[#e9edf2]">
      <div className="flex h-[420px] items-center justify-center p-10">
        <div className="relative h-[285px] w-[720px] rounded-[18px] border-[10px] border-white bg-white shadow-2xl overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-[310px] bg-[radial-gradient(#d7dde6_2px,transparent_2px)] [background-size:12px_12px] opacity-80" />
          <div className="absolute left-[95px] top-[150px] h-[92px] w-[50px] bg-[radial-gradient(#ff8a64_3px,transparent_3px)] [background-size:12px_12px]" />
          <div className="absolute left-[230px] top-[82px] w-[360px] rounded-tl-[28px] rounded-tr-[90px] bg-white p-8 shadow-xl">
            <div className="absolute right-8 top-7 text-xl font-black italic">bizee</div>
            <h3 className="text-[22px] font-extrabold">Form Your Business</h3>
            <div className="mt-7 text-sm font-bold text-gray-700">Business Name</div>
            <div className="mt-3 rounded-full border border-gray-200 px-6 py-4 font-bold text-gray-500">ALABAMA</div>
            <div className="mt-6 text-sm font-bold text-gray-700">Entity Type</div>
            <div className="mt-4 flex gap-3">
              {['C Corp','S Corp','Nonprofit','LLC'].map((x, i) => (
                <div key={x} className={`rounded-full border px-6 py-3 font-bold ${i===0?'border-orange-200 bg-orange-50 text-[#ff4b14]':'border-gray-200 text-gray-500'}`}>{x}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#d5dbe3] px-11 py-6 text-[16px] leading-7 text-[#1f2c45]">
        Bizee can take care of all your corporation formation paperwork — and we'll do it for free. Just pay the required Alabama state fee ($236).
      </div>
    </div>
  );
}

function VideoBox() {
  return (
    <div className="mt-10 overflow-hidden rounded-t-[18px] border-[10px] border-[#d7dde6] border-b-0 bg-[#fff7f1]">
      <div className="h-1.5 bg-black" />
      <div className="relative flex h-[420px] items-center justify-center">
        <div className="text-center">
          <div className="text-[24px] font-black tracking-wide">WHAT IS A</div>
          <div className="text-[56px] font-black leading-none text-[#ff4b14]">CORPORATION?</div>
        </div>
        <div className="absolute left-1/2 top-1/2 flex h-[68px] w-[120px] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[#214cd8]/95">
          <div className="ml-2 h-0 w-0 border-y-[16px] border-l-[24px] border-y-transparent border-l-white" />
        </div>
      </div>
    </div>
  );
}

function CTANameCard() {
  return (
    <div className="my-10 flex min-h-[220px] items-center overflow-hidden rounded-[18px] border border-[#d5dde7] bg-[#f5f7f9]">
      <div className="relative h-[220px] w-[260px] shrink-0 overflow-hidden">
        <div className="absolute -bottom-14 left-10 h-[230px] w-[150px] rotate-[-12deg] rounded-[35px] border-[8px] border-black bg-white shadow-xl">
          <div className="mx-auto mt-3 h-5 w-20 rounded-full bg-black" />
          <div className="p-5 text-xs text-gray-700">
            <div className="font-bold">Business Name Search</div>
            <div className="mt-7 text-3xl text-gray-200">Type Name</div>
          </div>
        </div>
      </div>
      <h3 className="max-w-[330px] text-[24px] font-extrabold leading-[1.3]">We Can Check Alabama Corporation Name Availability for You</h3>
      <button className="ml-auto mr-8 rounded-full bg-[#ff4b14] px-8 py-4 text-[15px] font-extrabold text-white">DEPARTMENT OF LABOR</button>
    </div>
  );
}

function FilingBox() {
  const items = [
    "Your business name and type",
    "Registered Agent's name and address",
    "Names and addresses of directors",
    "The corporation's capital structure (number of shares to be issued, who owns them, pricing, etc.)",
    "Your corporation's purpose, which is the Alabama default \"the transaction of any lawful business for which corporations may be incorporated in Alabama\" under Title 10A, Chapter 2A of the Code of Alabama",
    "The organizer's name and address",
  ];
  return (
    <div className="my-10 rounded-lg border border-[#d5dde7] bg-[#f5f7f9] px-8 py-8 shadow-sm">
      <h4 className="mb-8 text-[22px] font-extrabold">Here's what is typically included:</h4>
      <ul className="space-y-6 pl-8 text-[18px] leading-[1.6]">
        {items.map((item) => <li key={item} className="list-disc pl-3">{item}</li>)}
      </ul>
    </div>
  );
}

function FeesTable() {
  return (
    <>
      <h3 className="mb-6 mt-16 text-[26px] font-extrabold">What Are the Fees and Requirements To Incorporate in Alabama?</h3>
      <div className="overflow-hidden rounded-[18px] border border-[#dce1e7] text-[18px]">
        <div className="grid grid-cols-3 bg-[#f3f5f7] font-extrabold">
          <div className="p-6">State Fee</div><div className="p-6">State Filing Time</div><div className="p-6">Expedited Filing Time</div>
        </div>
        <div className="grid grid-cols-3 bg-white">
          <div className="p-6 font-bold text-[#ff4b14]">$236</div><div className="p-6">3 Weeks</div><div className="p-6">1 Business Day</div>
        </div>
      </div>
      <h3 className="mb-6 mt-12 text-[28px] font-extrabold">Annual Report</h3>
      <div className="overflow-hidden rounded-[18px] border border-[#dce1e7] text-[18px]">
        {[
          ['Frequency','Annually'],
          ['Due Date','Annual Year: April 15th Fiscal Year: 3½ months after beginning of tax year'],
          ['Note','Schedule AL-CAR filed with Business Privilege Tax Return is accepted in lieu of a separate Annual Report. C Corps must file Form CPT. S Corps must file Form PPT.'],
          ['Business Privilege Tax','$100']
        ].map((r, i) => (
          <div key={r[0]} className={`grid grid-cols-[1fr_1.25fr] border-b border-[#dce1e7] last:border-b-0 ${i%2?'bg-[#f3f5f7]':'bg-white'}`}>
            <div className="p-6 font-extrabold">{r[0]}</div><div className="p-6 leading-[1.35]">{r[1]}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function ResourceLinks() {
  return (
    <div className="space-y-8">
      {resources.map(r => (
        <a key={r} className="flex items-center justify-between border-l-4 border-[#677184] bg-[#f3f5f7] px-5 py-5 text-[17px] font-extrabold">
          <span>{r}</span><ExternalIcon />
        </a>
      ))}
    </div>
  );
}

export default function AlabamaCorporationPage() {
  return (
    <NavigationWrapper>
      <div className="min-h-screen bg-white font-sans text-black">
        <div className="flex items-start">
          <Sidebar />
          <main className="w-full max-w-[1040px] px-8 pb-20 pt-10 mx-auto">
            <div className="mb-14 inline-flex items-center gap-5 rounded-xl bg-[#f5f6f8] px-6 py-4 text-[16px] text-[#1b2944]">
              <span>Bizee</span><span className="text-gray-400">›</span><span>Corp Formation By State</span><span className="text-gray-400">›</span><span className="text-[#ff4b14]">Alabama</span>
            </div>

            <h1 className="max-w-[760px] text-[54px] font-extrabold leading-[1.08] tracking-[-1.4px]">How to Incorporate in Alabama</h1>
            <p className="mt-6 text-[18px] font-extrabold">Have Bizee do the work for you $0 + state fee</p>
            <button className="mt-8 rounded-full bg-[#ff4b14] px-7 py-4 text-[16px] font-extrabold text-white">INCORPORATE NOW</button>
            <p className="mt-7 text-[18px] font-extrabold">Learn how to form an Alabama corporation yourself</p>
            <div className="mt-16 flex items-center gap-10 text-[15px] text-[#15233a]">
              <span className="flex items-center gap-2"><BookIcon />12 min read</span>
              <span className="flex items-center gap-3"><TrophyIcon />TrustPilot TrustScore 4.7 | 25,633 reviews</span>
            </div>
            <HeroArt />

            <section className="mt-16">
              <SectionTitle>Why Incorporate in Alabama?</SectionTitle>
              <Para>Like many states in the country, Alabama offers a <TextLink>variety of tax incentives</TextLink> that are attractive to new and existing businesses looking to expand their operations within the state.</Para>
              <Para>For example, the <TextLink>Alabama Enterprise Zone Program</TextLink> provides certain tax incentives to corporations, partnerships, and proprietorships that locate or expand within designated Enterprise Zones. In addition to state-level tax incentives, businesses may also receive local tax and non-tax incentives for locating or expanding within a designated Enterprise Zone.</Para>
              <Para>For most entrepreneurs looking to create a larger business, forming an Alabama corporation may be the best choice. As a corporation, your business is able to buy and trade stock, and when it comes to excess profits, corporations offer more flexibility than a limited liability company (LLC). A corporation is allowed to pass income and losses to its shareholders, who report taxes on an individual tax return at ordinary levels.</Para>
              <SubTitle>Is an LLC Better Than a Corporation?</SubTitle>
              <Para>It all depends on your goals. Limited liability companies are generally better for smaller businesses. An LLC is easier to set up, and you receive many of the same benefits as a corporation, but with less regulation.</Para>
              <Para>Learn more about forming an <TextLink>Alabama LLC</TextLink> so you can decide which business entity is right for you.</Para>
              <SubTitle>Benefits of Forming an Alabama C Corp</SubTitle>
              <p className="text-[18px]">It offers you numerous advantages including, but not limited to:</p>
              <ul className="my-8 ml-12 space-y-4 text-[18px] leading-[1.6]">{cBenefits.map(b => <li className="list-disc" key={b}>{b}</li>)}</ul>
              <SubTitle>Benefits of Forming an Alabama S Corp</SubTitle>
              <p className="text-[18px]">It offers several advantages similar to those provided by a C Corp including, but not limited to:</p>
              <ul className="my-8 ml-12 space-y-4 text-[18px] leading-[1.6]">{sBenefits.map(b => <li className="list-disc" key={b}>{b}</li>)}</ul>
              <Para>In this guide, you'll find information on naming your corporation, getting a Registered Agent, the fees you'll need to pay, business taxes and much more. We also cover what you'll need to register your corporation and how you'll interact with the AL Secretary of State.</Para>
              <SubTitle>Start a Business in Alabama Checklist</SubTitle>
              <Para>To help you along the way, use our <TextLink>Starting a Business</TextLink> checklist to keep track of everything you need to do to get your business up and running.</Para>
            </section>

            <section id="section-0" className="mt-16 scroll-mt-28">
              <SectionTitle>How to Form an Alabama Corporation Yourself in 6 Steps</SectionTitle>
              <VideoBox />
              <SubTitle>Step 1: Choose a Unique Business Name and Complete a State Corporation Search</SubTitle>
              <Para>Every Alabama business must have a unique name that hasn't already been claimed by another business in the state. If you're having difficulty coming up with a name, try using our <TextLink>Business Name Generator</TextLink> to gather ideas.</Para>
              <Para>You'll need to follow a few naming rules, which you can read about in detail on the Alabama Corporation Names page. Once you've chosen a name, you'll need to make sure it's available in Alabama. To learn whether another company in the state is using your desired business name, use our tool to do an Alabama entity search.</Para>
              <Para>You can also <TextLink>carry out a name search</TextLink> on the AL Secretary of State website.</Para>
              <CTANameCard />
              <SubTitle>Step 2: Provide an Official Business Address for your Corporation</SubTitle>
              <Para>Every Alabama corporation must have a designated address. That could be the address of your home (if you're running the company from your residence), a building where your office is located or any physical address of your preference. The address can be outside the state of Alabama and can be a P.O. Box.</Para>
              <Para>You may also be able to use a virtual mailbox for your business address. Bizee can provide you with an Alabama virtual mailbox where we'll receive your mail, and scan it for your online review. This can be especially convenient if you run a home-based business and don't want your home address published publicly as part of your business record.</Para>
              <SubTitle>Step 3: Assign a Registered Agent</SubTitle>
              <Para>A Registered Agent is someone who receives official correspondence and is responsible for filing reports with the Secretary of State. Every Alabama corporation is required to have a Registered Agent.</Para>
              <Para>You can fill this position yourself, assign another manager in your business or use a Registered Agent service. If your Registered Agent in Alabama is a person, they must have a physical street address in Alabama and must be present during business hours to receive important documents on behalf of your company.</Para>
              <Para>You'll appoint your Registered Agent when you file your Alabama Certificate of Formation to create your business with the Secretary of State.</Para>
              <Para>All of Bizee's business formation packages include Registered Agent service. It's free for the first year and just $149 per year after that. You can also access a digital dashboard to view any document we've received on your behalf.</Para>
              <SubTitle>Step 4: File Your Certificate of Formation with the AL Secretary of State</SubTitle>
              <Para>Once you've gathered all the information for your corporation, you'll need to <TextLink>complete your filing</TextLink> online with the Secretary of State to receive your Alabama Certificate of Formation. This will officially create your business.</Para>
              <FilingBox />
              <a className="mb-10 flex items-center justify-between border-l-4 border-[#677184] bg-[#f3f5f7] px-6 py-5 text-[16px] font-extrabold">Download Incorporation Form <ExternalIcon /></a>
              <Para>Your Certificate of Formation <TextLink>can be filed online</TextLink> via the state's digital portal. You can also mail the form to the Office of the Secretary of State, or Bizee can file it on your behalf. The Alabama corporation filing fee is $208.</Para>
              <div className="my-10 grid grid-cols-[1fr_1.2fr] rounded-[18px] border border-[#dce1e7] p-6 text-[18px]"><b>File by Mail</b><div>Secretary of State<br/>Business Services<br/>P.O. Box 5616<br/>Montgomery, Alabama 36103-5616</div></div>
              <Para>You only need to file your Alabama Certificate of Formation once, but every year after, you'll also need to report and pay <TextLink>AL business privilege tax</TextLink> (if applicable to your business) and file an annual report. Bizee can remind you about this every year, or we can do it for you if you have us handle the paperwork.</Para>
              <CTANameCard />
              <FeesTable />
              <SubTitle>Step 5: Get an Employer Identification Number (EIN) from the Internal Revenue Service</SubTitle>
              <Para>You'll need an <TextLink>EIN</TextLink> to identify your business to the IRS. You use this number when filing and paying taxes, when submitting payroll information and payments for your employees and for opening a business bank account. You can obtain one directly from the IRS, or Bizee can get one for you as part of the Alabama corporation formation process.</Para>
              <SubTitle>Step 6: Write Bylaws</SubTitle>
              <Para>A set of rules that govern how a corporation will be run, bylaws detail how many directors the corporation will have, whether the board of directors will have annual meetings and what the voting requirements are, among other things.</Para>
              <Para>Some states require companies to create bylaws — including Alabama. It's always a good idea to write them to protect your business from any future changes and events, regardless of the legalities of your state.</Para>
            </section>

            <section id="section-1" className="mt-16 scroll-mt-28">
              <SectionTitle>Alabama Corporation Types</SectionTitle>
              <SubTitle>C Corporation</SubTitle>
              <Para>When you file to start a corporation, by default, it's a C Corp. This is the choice for large businesses that will trade shares in the stock market</Para>
              <Para>An Alabama C Corp will offer you several liability protections, but it will also be required to adhere to numerous strict rules and regulations. It will also likely have a substantial amount of administrative overhead and won't enjoy as many tax advantages as other corporation types.</Para>
              <Para>Learn more about <TextLink>C Corporations.</TextLink></Para>
              <SubTitle>S Corporation</SubTitle>
              <Para>Technically, an S Corporation isn't a business entity the way LLCs and C Corporations are. It's a tax filing status. An LLC or a C Corporation can be an S Corporation. It's just a matter of filing a form with the IRS.</Para>
              <Para>The main reason to file as an S Corp is to save money on self-employment taxes. To get an idea of how much money you might save, use our <TextLink>S Corp Tax Calculator.</TextLink></Para>
              <Para>If you want your Alabama C Corporation to be treated as an Alabama S Corporation, file the IRS <TextLink>Election by a Small Business Corporation</TextLink> form, also known as Form 2553 or an <TextLink>S Corp Election form.</TextLink></Para>
              <Para>Consult with your accountant or tax advisor to determine whether this is your best option.</Para>
              <Para>Learn more about <TextLink>S Corporations.</TextLink></Para>
              <SubTitle>Professional Corporation</SubTitle>
              <Para>Some states, including Alabama, allow certain occupations to form Professional Corporations that deliver professional services. The state's business code defines this as:</Para>
              <Para>"... any type of service that may lawfully be performed only pursuant to a license issued by a state court, state regulatory licensing board, or other like agency pursuant to state laws."</Para>
              <div className="my-10 rounded-lg border border-[#d5dde7] bg-[#f5f7f9] px-12 py-12 shadow-md">
                <h4 className="mb-8 text-[22px] font-extrabold leading-[1.45]">Per Alabama Code, Title 34, a few of the professions permitted to form an Alabama Professional Corporation include, but may not be limited to:</h4>
                <ul className="ml-9 space-y-6 text-[18px]">
                  {['Architects','Attorneys','Accountants','Dentists','Physicians','Veterinarians'].map(x => <li className="list-disc" key={x}>{x}</li>)}
                </ul>
              </div>
              <Para>Check with the AL Secretary of State to confirm whether your business should and can be a Professional Corporation.</Para>
              <SubTitle>Close Corporation</SubTitle>
              <Para>Put simply, a Close Corporation is one that has a limited number of shareholders, and isn't publicly traded. Usually, Close Corporations are exempt from corporate requirements, such as having a board of directors and holding annual meetings. Alabama no longer allows the formation of close corporations, however there are certain exemptions applicable to close corporations formed before 1995. Information on close corporations can be found in the Alabama code <TextLink>Title 10A, Chapter 30, Article 2.</TextLink></Para>
              <Para>These entities are often chosen by family-owned businesses to prevent non-family members from establishing or claiming any ownership of the company.</Para>
              <SubTitle>Foreign Corporation</SubTitle>
              <Para>If your business operates in another state and you want to expand into Alabama — or vice versa — you'll need to form a Foreign Corporation</Para>
              <SubTitle>Nonprofit Corporation</SubTitle>
              <Para>Charitable organizations can incorporate as nonprofit corporations. This means all the profits they generate are donated to the organization supported by the charity, minus administrative costs.</Para>
              <Para>A <TextLink>nonprofit corporation</TextLink> is also exempt from federal and state taxes, allowing more of the profit to benefit the charity.</Para>
              <SubTitle>Limited Liability Company</SubTitle>
              <Para>Depending on the kind of business you want to form, or your personal circumstances and goals, an LLC may be a better option.</Para>
              <Para>For example, you may not need the options to buy and sell stock. Or you may simply want to start a small business with a few employees or even just yourself.</Para>
              <Para>An <TextLink>Alabama LLC</TextLink> is usually a better option for a smaller business. It's easier to set up, but it still offers you certain advantages you'd get from a corporation. You can even have your LLC treated as an S Corporation for tax purposes to save you money.</Para>
              <Para>Regardless of which direction you decide to go, we can help you with your Alabama business registration.</Para>
              <Para>Learn more about <TextLink>limited liability companies.</TextLink></Para>
              <SubTitle>Sole Proprietorship or Partnership</SubTitle>
              <Para>These are the simplest types of businesses to set up. That's because there's no real setup to do. If you don't choose to form a separate business entity, by default, you'll have either a sole proprietorship (just you) or a partnership (you and one or more other people).</Para>
              <Para>Neither of these options provide you with any special benefits or liability protections and can leave your personal assets vulnerable. For these reasons, we don't recommend them.</Para>
              <Para>Compare <TextLink>business entity types</TextLink> to decide which one is best for you.</Para>
            </section>

            <section id="section-2" className="mt-16 scroll-mt-28">
              <SectionTitle>Helpful Resources From the State of Alabama</SectionTitle>
              <ResourceLinks />
            </section>

            <section id="section-3" className="mt-14 scroll-mt-28">
              <SectionTitle>More Information in This Guide</SectionTitle>
              <p className="mb-10 text-[16px]">You'll find plenty more insight and guidance on the other pages of this guide, including:</p>
              {[
                ['Alabama Corporation Names','How to search the state business registry and find the right name. Includes information on naming rules, trade names, reserving a corporation name and more'],
                ['Alabama Registered Agents',"How to appoint, change and search for Registered Agents. Also includes the duties they fulfill and the rules they're required to follow."],
                ['Alabama Incorporation Fees','Details the various fees you\'ll need to pay, as well as the state and federal requirements you\'ll need to meet. Includes details about Employer Identification Numbers (EINs), state and federal business licenses, annual reports and more.'],
                ['Alabama Corporation Taxes',"Covers the various taxes you'll have to pay to the state and federal governments. Includes details about state taxes such as sales and franchise, and federal taxes such as income and self-employment."]
              ].map(([h,p]) => (
                <div className="mb-9" key={h}>
                  <h3 className="mb-4 text-[24px] font-extrabold">{h}</h3>
                  <p className="text-[16px] leading-7">{p}</p>
                </div>
              ))}
              <h2 className="mt-12 text-[42px] font-extrabold tracking-[-1px]">Launch Your Business With Bizee</h2>
              <p className="mt-8 text-[16px]">No Contracts. No Surprises. Only $0 + State Fee to Launch Your Business.</p>
              <button className="mt-8 rounded-full bg-[#ff4b14] px-7 py-4 text-[16px] font-extrabold text-white">DEPARTMENT OF LABOR</button>
            </section>

          </main>
        </div>
      </div>
    </NavigationWrapper>
  );
}