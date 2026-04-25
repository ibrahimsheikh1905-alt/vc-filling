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
          <h1 className="text-6xl max-sm:text-3xl font-bold text-center">
            How to Become an Entrepreneur
          </h1>
          <p className="text-center md:py-5 text-2xl">
            The foundational steps toward business ownership
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
            <p>By Ariele Yaffee, J.D.</p>
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
            <p>
              <span className="text-4xl ">A</span>re you tired of sitting at a
              desk, working for a boss you don&apos;t like, or for a cause you
              don&apos;t believe in? Break the cycle and become an entrepreneur.
              Entrepreneurship offers a pathway to independence, innovation, and
              financial success. Whether driven by a groundbreaking idea or the
              desire to be your own boss, becoming an entrepreneur involves
              careful planning, strategic thinking, and a willingness to take
              risks. We will discuss what entrepreneurship is and how to become
              an entrepreneur.
            </p>
            <h3 className="font-bold text-4xl md:pt-8 pb-5">
              What Is Entrepreneurship?
            </h3>
            <p className="py-5">
              The <span className="text-primary">dictionary</span> defines an
              entrepreneur as “one who organizes, manages, and assumes the risk
              of a business or enterprise.” An entrepreneur takes a unique
              business vision and makes it a reality, bringing new products or
              services to market. Entrepreneurship is about innovation, value
              creation, and problem-solving. It is the process of creating,
              developing, and managing a business venture to achieve specific
              goals and objectives.{" "}
            </p>
            <p className="py-5">
              Some think entrepreneurism is innate and that people are born with
              an entrepreneurial spirit. While it is true that some people may
              be born with talents that lend themselves to being a business
              owner, a person can also be made into an entrepreneur. Hard work,
              education, experience, and passion can develop a successful
              entrepreneur.
            </p>
            <Image
              className="rounded-xl pb-8"
              src="/entrepreneur/pic2.webp"
              alt="Free LLC"
              width={600}
              height={600}
            />
            <h3 className="font-bold text-4xl md:pt-8 pb-5">
              Steps to Becoming an Entrepreneur
            </h3>
            <p>
              Traditional professions often follow defined paths. The path to
              becoming an entrepreneur can be mystifying and sometimes unclear.
              What works for one person in becoming a business owner may not
              work for the next. However, some common steps can help you work
              your way to becoming an entrepreneur.
            </p>
            <h3 className="text-3xl md:pt-8 pb-5">
              Develop an Entrepreneurial Mindset
            </h3>
            <p>
              Your mindset can impact your ability to be a successful
              entrepreneur. You may struggle to achieve your business goals if
              you experience low self-confidence, self-doubt, or imposter
              syndrome. An entrepreneurial mindset involves:
            </p>
            <h3 className="text-3xl md:pt-8 pb-5">
              Prioritizing learning and growth
            </h3>
            <p>
              While it can often seem like entrepreneurs have it all figured
              out, most will concede that they&apos;ll never be able to know it
              all. Entrepreneurs constantly seek new ideas, learn new things,
              and practice personal development. You can prioritize learning and
              growth by dedicating time to reading books and articles, taking
              knowledge-enhancing workshops, following industry trends, and
              sharpening your skill set.{" "}
            </p>
            <h3 className="text-3xl md:pt-8 pb-5">Building your confidence</h3>
            <p>
              Self-confidence can be a secret weapon for an entrepreneur but can
              also be difficult to cultivate. You can build confidence by
              celebrating small wins, recognizing and affirming your talents,
              surrounding yourself with positive people, learning from your
              mistakes, and setting achievable goals. Having quiet confidence
              can help you navigate complex business decisions without
              second-guessing yourself.
            </p>
            <h3 className="text-3xl md:pt-8 pb-5">
              Cultivating resilience and adaptability
            </h3>
            <p>
              Entrepreneurial endeavors are often risky and can undergo many ups
              and downs. It is essential to develop the ability to bounce back
              from setbacks, adapt to constantly changing circumstances, and
              keep going in the face of adversity. You can foster resilience by
              embracing and learning from failure, staying solution-focused, and
              remaining realistic. Don&apos;t beat yourself up when things
              aren&apos;t going exactly as planned. Instead, pivot and create a
              new strategy to adapt. You don&apos;t have to be born with an
              entrepreneurial mindset; it doesn&apos;t require an MBA. You can
              develop it over time.
            </p>
            <div className="border-l-4 border-green-500 pl-4 my-6">
              <h3 className="text-3xl py-2 ">
                Entrepreneurship offers a pathway to
              </h3>
              <h3 className="text-3xl py-2">
                independence, innovation, and financial
              </h3>
              <h3 className="text-3xl py-2">success.</h3>
            </div>
            <h3 className="font-bold text-4xl md:pt-8 pb-5">
              Find Your Passion and Purpose
            </h3>
            <p>
              An entrepreneur&apos;s journey is driven by a clear purpose,
              vision, and passion for what they want to accomplish. You can set
              yourself up for a successful venture by identifying what excites
              you and aligns with your values. Your business idea might be
              something unique in the marketplace or something that enhances an
              existing product or service. It should be something you are
              excited about. If you attempt to start a business you are not
              invested in or passionate about, it will be difficult to have the
              resilience and desire to keep going forward when things get
              challenging. The passion will drive you to adapt and overcome
              obstacles continuously.
            </p>
            <Image
              className="rounded-xl pb-8 mt-9"
              src="/entrepreneur/pic3.webp"
              alt="Free LLC"
              width={600}
              height={600}
            />
            <h3 className="font-bold text-4xl md:pt-8 pb-5">
              Create and Execute a Business Plan
            </h3>
            <p>
              A business plan is a key component to putting your vision into
              action. It outlines a company&apos;s goals, target market,
              organization and structure, funding goals, and key strategies to
              achieve those goals. It can be a strategic tool to help an
              entrepreneur stay on track, make informed decisions, attract
              financing, communicate ideas, mitigate risks, and adapt to
              changes.{" "}
            </p>
            <p>
              Most business plans include the business concept, mission, vision,
              products and services, and financial goals. They may also include
              market analysis, a marketing plan, and a financial plan for
              funding and capital development. A plan can track operating
              expenses to determine if the business is making a profit and
              address ways to manage costs effectively.
            </p>
            <p>
              Once you&apos;ve created a business plan and entrepreneurial
              vision, you can start your business. Launching your business might
              include:
            </p>
            <p className="pt-5">
              <span className="font-bold">
                Legal structure and registration
              </span>
              —selecting the appropriate legal structure for your business
              (e.g., sole proprietorship, LLC, corporation, partnership) and
              completing registration and licensing requirements.
            </p>
            <p>
              <span className="font-bold">Funding</span>—there are numerous ways
              to fund your business, including using your own existing
              resources, securing small business loans or grants, and attracting
              investors and venture capital funding.
            </p>
            <p>
              <span className="font-bold">Establish the business</span>—once you
              have funding, you can establish your physical business location
              (office space), acquire necessary equipment (desks, computers,
              telephones, etc.), build a team (employees or subcontractors) and
              set up efficient operational processes.
            </p>
            <p>
              <span className="font-bold">Develop a brand identity</span>—create
              a strong brand identity that resonates with your target market and
              differentiates your service or product from your competitors.
            </p>
            <p>
              <span className="font-bold">Market and grow your business</span>
              —use effective marketing strategies, including digital marketing,
              leveraging social media, and developing an online presence to
              attract customers and grow your business.
            </p>
            <p className="py-16">
              These are some basic steps to entrepreneurship. But remember that
              even the best business plans and ideas encounter challenges. Be
              prepared to adapt and think outside the box to continue pursuing
              your vision. There is no defined time-frame for becoming a
              successful entrepreneur. Every entrepreneur&apos;s timeline varies
              depending on the industry, the economic environment, business
              model, financing, and individual efforts.
            </p>
            <h3 className="font-bold text-4xl md:pt-8 pb-5">Bottom Line</h3>
            <p>
              Becoming an entrepreneur is a challenging but rewarding journey
              that requires careful planning, continuous learning, and
              resilience. With dedication, support, passion, vision, and an
              entrepreneurial mindset, you can become an entrepreneur.
            </p>
            <p>
              You also don&apos;t have to pursue your entrepreneurial goals
              alone. VC FILING has helped over one million business owners and
              entrepreneurs achieve their business goals. From entity selection
              to efficiencies, VC FILING can help you start, manage, and grow
              your business. Visit VC FILING.com today to learn how we can help
              you realize your entrepreneurial dreams.
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
          <p className="py-1">What an entrepreneur is and does.</p>
          <p className="py-1">
            Steps to becoming an entrepreneur and developing an entrepreneurial
            mindset
          </p>
          <p className="py-1">
            How to build your confidence and cultivate resilience and
            adaptability.{" "}
          </p>
          <p className="py-1">
            Why finding your passion and purpose is integral to
            entrepreneurship.
          </p>
          <p className="py-1">
            The basics of creating and executing a business plan.{" "}
          </p>
          <p>The process of launching your business.</p>
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
            <h3 className="font-bold text-xl">Ariele Yaffee, J.D.</h3>
            <p>
              Ariele has worked as a Special Assistant Attorney General for the
              Rhode Island Attorney General&apos;s Office, Counsel for an
              international consulting firm, and law clerk for a Rhode Island
              Supreme Court Justice. After practicing law for nearly ten years
              in the public and private sectors, Ariele left to pursue her love
              of helping others and the outdoors. For three years, she worked
              for two wilderness therapy programs, helping adolescents and young
              adults with mental health struggles. Ariele holds a J.D. from
              Suffolk Law School and a B.A. in International Affairs from
              Northeastern University. She is licensed to practice law in
              Massachusetts, Rhode Island, and D.C
            </p>
          </div>
          <div className="border-t border-green-200  mx-4"></div>
        </div>
        {/* new section start  */}
        <div className="border-t border-gray-200 md:mx-32 "></div>
        <div className=" md:my-5 p-2 md:mx-32 max-sm:flex justify-center items-center max-sm:my-3">
          <Link
            className="px-2 py-2 bg-slate-100  border  rounded-[30px] "
            href="/testing/step-1"
          >
            BUSINESS LICENSE AND PERMIT
          </Link>
        </div>
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
                href="/testing/step-1"
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
