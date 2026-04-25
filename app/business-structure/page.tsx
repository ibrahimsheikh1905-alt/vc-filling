import {
  CheckBadgeIcon,
  StarIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import NavigationWrapper from "@/components/NavigationWrapper";

const FreeLLC = () => {
  return (
    <NavigationWrapper>
      <div className="">
        {/* new section start  */}
        <div className="border-t border-b border-black  my-5 md:mx-32 max-sm:mx-5">
          <h2 className="text-primary font-bold md:py-8 text-center text-xl">
            California LLC
          </h2>
          {/* new section start  */}
          <h1 className="text-5xl max-sm:text-3xl font-bold text-center">
            Choosing the Right Business
          </h1>
          <h2 className="text-5xl max-sm:text-3xl font-bold text-center">
            Structure for Your New Business Idea
          </h2>
          <p className="text-center md:py-5 text-2xl">
            It&apos;s crucial to align your business&apos;s legal framework with
            its goals from the very start.
          </p>
        </div>

        {/* new section start  */}
        <div className="md:mx-36 md:flex justify-between">
          {/* left part side  */}
          <div className="flex max-sm:justify-center items-center gap-4">
            <Image
              className="rounded-xl"
              src="/entrepreneur/profile.webp"
              alt="Free LLC"
              width={30}
              height={30}
            />
            <p>By Stormi Harvey, J.D.</p>
          </div>
          {/* right section part  */}
          <div className="flex max-sm:justify-center items-center gap-9 max-sm:pt-5">
            <p>Share</p>
            <Image
              className="rounded-xl border-4"
              src="/entrepreneur/f.svg"
              alt="Free LLC"
              width={30}
              height={30}
            />
            <Image
              className="rounded-xl border-4"
              src="/entrepreneur/in.svg"
              alt="Free LLC"
              width={30}
              height={30}
            />
            <Image
              className="rounded-xl border-4"
              src="/entrepreneur/x.svg"
              alt="Free LLC"
              width={30}
              height={30}
            />
          </div>
        </div>
        {/* new section start  */}
        <div className="flex justify-center items-center py-8 mx-5">
          <Image
            className="rounded-xl"
            src="/entrepreneur/pic1.webp"
            alt="Free LLC"
            width={1200}
            height={1100}
          />
        </div>
        {/* new section start  */}
        <div className="md:mx-36 max-sm:mx-5 md:grid grid-cols-2 gap-6">
          {/* left side div */}
          <div>
            <p className="font-bold">
              <span className="text-4xl ">C</span>ongratulations on your new
              business idea! Now comes the exciting part: Turning your idea into
              reality. But before you dive into raising capital or creating an
              organizational chart, one critical decision is choosing the right
              business structure.
            </p>
            <p className="font-bold">
              Creating a business structure may sound complex, but the guide
              below will help you navigate the process. While you may not
              realize it yet, the structure you choose for your business will
              affect how you pay taxes, secure financing, and manage your
              personal risk. Let&apos;s break down the different business entity
              types to help you pick the best business structure.
            </p>
            <h3 className="font-bold text-4xl md:pt-8 pb-5">
              What Is a Business Structure??
            </h3>
            <p className="py-5">
              Think of a business structure as a house. While it isn&apos;t a
              physical object, it does provide the framework for your business
              to operate. Additionally, there are different types of structures,
              each with its own set of rules and benefits.
            </p>
            <p className="py-5">
              Choosing the right business structure is like choosing the right
              kind of house for your needs. A small bakery might not need the
              same structure as a tech startup planning to go public. This may
              be because the bakery is small, has few liability concerns, and
              focuses on local customers. However, the tech company might need a
              structure for rapid growth, liability protection for the owners,
              and stock options to attract investors. The choice of structure
              affects almost everything. It influences how the business complies
              with rules and how it&apos;s managed day-to-day. So, it&apos;s
              crucial to align your business&apos;s legal framework with its
              goals from the very start.
            </p>

            <h3 className="font-bold text-4xl md:pt-8 ">
              What Factors Should You Consider When
            </h3>
            <h3 className="font-bold text-4xl">
              Choosing a Business Structure?
            </h3>
            <p className="py-5">
              There are a few key factors to consider when making this decision:
            </p>
            <p className="py-2">
              <span className="font-bold">Liability.</span>How much personal
              risk will you have if your business gets sued or goes into debt?
              Some structures, like LLCs, protect your personal assets, while
              others, like sole proprietorships, do not.
            </p>
            <p className="py-2">
              <span className="font-bold">Taxes.</span>Different structures are
              taxed in different ways. Sole proprietors and partners simply
              report business income on their personal tax returns, while
              corporations pay taxes on their profits and then shareholders pay
              taxes again on any dividends they receive. (Simply put, taxation
              is different for S corporations than for C corporations.)
            </p>
            <p>
              <span className="font-bold">Management. </span>How you want to
              manage your business also plays a role. Sole proprietorships are
              simple and have one owner who calls the shots, whereas
              corporations have a more complex structure with a board of
              directors and officers.
            </p>
            <p className="py-2">
              <span className="font-bold">Growth potential.</span>If you plan to
              raise money from investors or go public someday, a corporation
              might be the best option. For smaller businesses, another
              structure might be a better fit.
            </p>

            <p className="py-5">
              Understanding your preferences for each of these factors will
              guide you in selecting the business structure that best aligns
              with your plans.
            </p>
            <Image
              className="rounded-xl pb-8 mt-9"
              src="/entrepreneur/pic3.webp"
              alt="Free LLC"
              width={600}
              height={600}
            />
            <h3 className="text-3xl font-bold">
              Let&apos;s Explore Some Common Business
            </h3>
            <h3 className="text-3xl font-bold">Structure Options</h3>

            <p className="py-5">
              Understanding the different business entity types available to you
              is crucial for anyone starting a company. Each entity type offers
              distinct advantages and disadvantages, depending on your needs and
              goals. Choosing a business entity involves evaluating factors such
              as liability protection, tax considerations, and how much
              regulation you want to handle. Let&apos;s explore some of the most
              common business structure options.
            </p>
            <h3 className="text-3xl md:pt-8 pb-5">Sole Proprietorship</h3>
            <p>
              Sole proprietorships are the simplest and most common structure.
              They are ideal for one-person businesses with low-risk and limited
              growth plans. The owner is the business, and all profits and
              losses flow through their personal tax return. However, the owner
              also has unlimited personal liability, meaning their assets are at
              risk if anyone sues the business.
            </p>
            <h3 className="text-3xl md:pt-8 pb-5">Partnership</h3>
            <p>
              This is a good option for two or more people who want to co-own a
              business. Partners share profits and losses according to a
              predetermined agreement. There are two main types of partnerships:
              general partnerships, where all partners have unlimited liability,
              and limited partnerships, where some partners have limited
              liability. Unlimited liability means that the general partners are
              personally responsible for all business debts. This can put their
              personal assets in danger. In contrast, limited liability means
              that liability is restricted to the amount of money that the
              partners have invested in the business.
            </p>
            <h3 className="text-3xl md:pt-8 pb-5">
              Limited Liability Company (LLC)
            </h3>
            <p>
              This popular structure offers a good balance between flexibility
              and protection. LLCs have limited liability, so the owners&apos;
              personal assets are generally protected. The members of an LLC can
              also choose to be taxed as a pass-through entity, where profits
              and losses pass through to the owners&apos; personal tax returns,
              similar to a sole proprietorship or partnership.
            </p>
            <h3 className="text-3xl md:pt-8 pb-5">Corporation</h3>
            <p>
              This is the most complex structure, but it offers the most
              protection for owners. The two most common corporation forms are C
              corporations and S corporations. However, there are many others,
              such as:{" "}
            </p>
            {/* new section start  */}
            <div className="mx-5 py-5">
              <p>
                <span className="font-bold">Professional corporations—</span>
                designed for licensed professionals
              </p>
              <p className="py-2">
                <span className="font-bold">Public corporations—</span>whose
                shares are traded publicly
              </p>
              <p>
                <span className="font-bold">Close corporations—</span>which
                typically have a limited number of shareholders
              </p>
            </div>
            <p>
              A C corporation is the traditional corporation structure. C
              corporations are legal entities separate from their owners, and
              shareholders&apos; personal assets are protected from business
              debts and lawsuits. However, income from C corporations may be
              subject to double taxation. This means that the corporation pays
              taxes on its profits, and then shareholders pay taxes again on any
              dividends they receive from the corporation. C corporations also
              have more complex filing requirements and ongoing formalities,
              such as holding board meetings and maintaining certain corporate
              records.
            </p>
            <p className="py-5">
              An S corporation is a special type of corporation that elects to
              be taxed differently from C corporations. S corporations are
              similar to LLCs in that they prevent double taxation. Profits and
              losses pass through to the owners&apos; personal tax returns,
              similar to a sole proprietorship or partnership. However, there
              are stricter ownership restrictions for S corporations. For
              example, S corporations can only have a limited number of
              shareholders (usually 100 or less), and they must be U.S. citizens
              or permanent residents.
            </p>
            <h3 className="text-3xl md:pt-8 pb-5">Nonprofits</h3>
            <p>
              A nonprofit is a legal entity formed for charitable or social
              purposes. It is exempt from federal income tax and may also be
              exempt from state and local taxes. There are distinct types of
              nonprofit organizations, including public charities, private
              foundations, and social clubs. To qualify for tax-exempt status, a
              nonprofit must meet certain IRS requirements.
            </p>
            <div className="border-l-4 border-green-500 pl-4 my-8">
              <h3 className="text-3xl py-2 ">
                The structure you choose for your business
              </h3>
              <h3 className="text-3xl py-2">
                will affect how you pay taxes, secure
              </h3>
              <h3 className="text-3xl py-2">success.</h3>
            </div>
            <h3 className="font-bold text-4xl md:pt-8 pb-5">
              Set Up Your Business for Success with VC FILING
            </h3>
            <p>
              Choosing the right business structure is a key step in launching
              your business. By considering your options and your specific
              needs, you can make an informed decision that will help your
              business thrive. Additionally, the U.S. Small Business
              Administration offers a great resource to help you choose the
              right structure. Once you decide, VC FILING will guide you through
              the formation process step by step.
            </p>
            <p className="py-4">
              Remember, you can always call our support phone number for further
              assistance. Now, go forth and make the world a better place with
              your new business!
            </p>
            <p>
              <span className="font-bold"> Disclaimer:</span> VC FILING and its
              affiliates do not provide tax, legal, or accounting advice. This
              material has been prepared for informational purposes only, and is
              not intended to provide, and should not be relied on for, tax,
              legal, or accounting advice. You should consult your own tax,
              legal, and accounting advisors before engaging in any transaction.
            </p>
          </div>
          {/* right section start  */}
          <div className="md:mx-28  my-5">
            <div className="border-t border-black mx-4"></div>
            <h3 className="font-bold text-center md:pt-5 pb-16">
              Featured Articles
            </h3>
            <div className="border-t border-black  mx-4"></div>
            <h3 className="font-bold text-center md:pt-5 pb-7">
              Featured Podcast Episode
            </h3>
            <div className="flex justify-start items-start gap-5 my-2 ">
              <Image
                className="rounded-xl"
                src="/entrepreneur/pc1.webp"
                alt="Free LLC"
                width={70}
                height={70}
              />
              <p className="text-xl">John Diamon</p>
            </div>
            <div className="border-t border-black"></div>

            <div className="flex  py-5 gap-5">
              <Image
                className="rounded-xl"
                src="/entrepreneur/pc2.webp"
                alt="Free LLC"
                width={70}
                height={70}
              />
              <p className="text-xl"> Rubyana Her</p>
            </div>
            <div className="border-t border-black  mx-4"></div>
            <div className="flex my-2 gap-5">
              <Image
                className="rounded-xl"
                src="/entrepreneur/pc3.webp"
                alt="Free LLC"
                width={70}
                height={70}
              />
              <p className="text-xl">Chris Garza</p>
            </div>
          </div>
        </div>

        {/* new section start  */}
        <div className="border-4 p-7 rounded-xl my-10 md:mx-32 max-sm:mx-5">
          <h3 className="py-6">
            <span className="text-primary font-bold text-3xl ">
              Key Takeaways
            </span>
          </h3>
          <p className="py-1">
            Why considering the right business structure from day one is vital
            to your startup.
          </p>
          <p className="py-1">What is a “business structure?”</p>
          <p className="py-1">
            The factors you should consider when choosing a business structure.
          </p>
          <p className="py-1">Common business structure options.</p>
          <p className="py-1">
            The pros and cons of sole proprietorships, partnerships, LLCs,
            corporations, and nonprofits
          </p>
          <p>The distinctions of c corporations versus s corporations</p>
        </div>
        {/* new section start  */}
        <div className="md:flex gap-5 md:mx-32 my-10 max-sm:mx-5">
          <div>
            <Image
              className="rounded-xl"
              src="/entrepreneur/profile.webp"
              alt="Free LLC"
              width={200}
              height={200}
            />
          </div>
          <div className="">
            <h3 className="font-bold text-xl">Stormi Harvey, J.D.</h3>
            <p>
              Stormi is a Texas-based Legal Content Writer at Juris Digital. She
              received her bachelor&apos;s degree from Southern Arkansas
              University, where she played golf, and her J.D. from UNT Dallas
              College of Law. Stormi&apos;s background is diverse, with
              experience in insurance, title, graphic design, and digital
              marketing. She enjoys getting to be analytical yet creative in her
              work, and when not working she enjoys live music, evening walks
              outdoors, iced matcha lattes, and golfing
            </p>
          </div>
          <div className="border-t border-green-200  mx-4"></div>
        </div>
        {/* new section start  */}
        <div className="border-t border-gray-200 md:mx-32 "></div>

        {/* new section start  */}
        <div className="flex max-sm:justify-center items-center gap-9 my-6 mx-32">
          <p>Share</p>
          <Image
            className="rounded-xl border-4"
            src="/entrepreneur/f.svg"
            alt="Free LLC"
            width={30}
            height={30}
          />
          <Image
            className="rounded-xl border-4"
            src="/entrepreneur/in.svg"
            alt="Free LLC"
            width={30}
            height={30}
          />
          <Image
            className="rounded-xl border-4"
            src="/entrepreneur/x.svg"
            alt="Free LLC"
            width={30}
            height={30}
          />
        </div>
        {/* new section start  */}
        <div className="md:mx-28 max-sm:mx-5 md:grid grid-cols-2 gap-10">
          <div className="max-sm:flex justify-center items-center">
            <Image
              className="rounded-xl border-4"
              src="/entrepreneur/podcast.webp"
              alt="Free LLC"
              width={600}
              height={600}
            />
          </div>
          <div className="md:pb-24 max-sm:pb-5">
            <Image
              className=" my-5"
              src="/logo.png"
              alt="Free LLC"
              width={70}
              height={70}
            />
            <h3 className="text-3xl font-bold uppercase">Get VC FILING</h3>
            <h3 className="text-3xl font-bold uppercase">Podcast</h3>
            <p className="flex  items-center">
              Join us as we celebrate entrepreneurship and tackle the very real
              issues of failure, fear and the psychology of success. Each
              episode is an adventure.
            </p>
            <div className="flex justify-center items-center my-5">
              <Link
                className="px-9 py-5 bg-primary text-white border border-primary rounded-[30px] "
                href={"/form-a-llc/"}
              >
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default FreeLLC;
