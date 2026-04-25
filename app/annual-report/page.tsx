import { StarIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
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
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import { statesInUS } from "@/data";

const Amendment = () => {
  return (
    <NavigationWrapper>
      <div className=" my-16 flex flex-col-reverse md:flex-row max-sm:mx-5">
        <div className=" md:text-left">
          <h1 className="md:text-5xl text-3xl font-bold  pt-20 md:pl-20">
            File an Annual Report
          </h1>
          <h2 className="md:text-5xl text-3xl font-bold   md:pl-20">
            for Your LLC With
          </h2>
          <h2 className="md:text-5xl text-3xl font-bold   md:pl-20">
            {" "}
            VC Filling
          </h2>
          <h2 className=" md:pl-20 md:py-5  ">
            Filing an Annual Report Is Required by Your Secretary of State — For
            All Business Entities
          </h2>
          <h2 className="md:pl-20 pb-12 ">
            Lighten your workload and ensure your business stays compliant by
            letting VC Filling handle your annual report filing.
          </h2>
          <Link
            className="md:px-10 px-3 md:ml-20 py-5 font-bold bg-primary text-white border border-primary rounded-[30px] "
            href="/annual-report/step-1"
          >
            FILE ASSUMED BUSINESS NAME
          </Link>
        </div>

        <Image
          src="/free-llc/LLC green.jpg"
          alt="Free LLC"
          width={850}
          height={850}
        />
      </div>
      <div className="max-w-7xl mx-auto ">
        <div className="flex gap-4 items-center justify-center md:my-16 py-7 mx-3 md:flex-row flex-col">
          <Image src="/main/vcicon.jpg" alt="image" width={200} height={200} />
          <div>
            <h3 className="md:text-5xl text-3xl font-bold py-2 uppercase">
              Join <span className="text-primary">1,000,000+</span>
              <br /> Entrepreneurs <br />
              like you
            </h3>
            <p className="md:text-xl text-base font-light">
              Entrepreneurship is booming - and we&apos;re happy to be <br />{" "}
              one of America&apos;s fastest growing companies.
            </p>
          </div>
        </div>
        {/* -----------new section --- */}

        <div className="md:flex   gap-9">
          {/* part left  */}
          <div className="mx-5">
            <p>What Is an Annual Report?</p>
            <p>Who Needs to File an Annual Report?</p>
            <p>Who Doesn&apos;t Need to File an Annual Report?</p>
            <p>What&apos;s the Purpose of an Annual Report?</p>
            <p>
              What Happens If I Don&apos;t File an Annual Report or Miss the
              Deadline?
            </p>
            <p>How to File Your Annual Report</p>
            <p>When Is Your Annual Report Due?</p>
            <p>Business and Financial Annual Reports</p>
            <p>Need Help Filing Your LLC Annual Report?</p>
          </div>
          {/* part right  */}
          <div className="mx-10">
            <Image
              src="/annual-port/vid.webp"
              alt="image"
              width={900}
              height={900}
            />
            <h3 className="text-2xl font-bold md:py-10">
              What Is an Annual Report?
            </h3>
            <p>
              An annual report is a filing that provides details of your
              company&apos;s business activities over the previous year. Some
              states call annual reports for LLCs “Statements of Information.
            </p>
            <p className="md:py-4">
              Annual reports give state governing authorities important
              information, including the names and addresses of directors or
              managing members of a corporation or LLC, as well as the company
              and Registered Agent address.
            </p>
            <p className="md:py-3">
              As a business manager, director or owner, you&apos;re obliged to
              follow state regulations and meet certain requirements, one of
              which is to file an annual report for your LLC or corporation.
            </p>
            <p className="md:py-3">
              Some states only require you to file a report every two years,
              called a “biennial report.”
            </p>
            <p className="md:py-3">
              A formal annual report is required to be filed with your Secretary
              of State. Learn more about{" "}
              <span className="text-primary">
                filing an annual report in our ultimate guide.
              </span>
            </p>
            <p className="md:py-3">
              You may also need to create additional yearly reports for your
              investors, shareholders or stakeholders, but these business or
              financial reports are not the same as LLC or corporation annual
              reports.
            </p>
            <h3 className="text-3xl font-bold md:py-3">
              Who Needs to File an Annual Report?
            </h3>
            <p className="md:py-3">
              If you&apos;ve incorporated a business — as an LLC, LLP, S Corp,
              or C Corp — you must file an annual report (or equivalent report
              based on your state&apos;s schedule), normally with your Secretary
              of State. This applies no matter how big or small your business
              is.
            </p>
            <p className="md:py-3">
              Annual reports can be daunting and filing incorrectly (or not at
              all) can cause serious headaches and consequences later, such as
              late penalties, dissolution and loss of liability protection.
            </p>
            <p className="md:py-3 ">
              Avoid tiresome paperwork and the repercussions of noncompliance by
              letting VC FILING take care of the paperwork for you. Free up your
              time to focus on what matters — your business.
            </p>
            <h3 className="text-3xl font-bold md:py-5">
              Who Doesn&apos;t Need to File an Annual Report?
            </h3>
            <p className="py-3">
              Generally, sole proprietors and partnerships don&apos;t have to
              file an annual report because the business is not a separate
              entity from the business owner.
            </p>
            <div className="bg-gray-300 p-5 rounded-xl">
              <h3 className="text-xl font-bold py-4">
                What Does an LLC or Corporate Annual Report Contain?
              </h3>
              <p className="py-3">
                Annual reports vary in complexity and typically include the
                following:
              </p>
              <div className="flex gap-3 md:py-3">
                <CheckBadgeIcon className="min-h-4 max-h-4 min-w-4 max-w-4 text-primary" />
                <p>
                  The principal business (head office) address of the company
                </p>
              </div>
              <div className="flex gap-3 md:py-3">
                <CheckBadgeIcon className="min-h-4 max-h-4 min-w-4 max-w-4 text-primary" />
                <p>
                  The names and addresses of the managers of the business
                  (directors and officers in a corporation, members and managers
                  in an LLC)
                </p>
              </div>
              <div className="flex gap-3 md:py-3">
                <CheckBadgeIcon className="min-h-4 max-h-4 min-w-4 max-w-4 text-primary" />
                <p>Important identification numbers for your business</p>
              </div>
              <div className="flex gap-3 md:py-3">
                <CheckBadgeIcon className="min-h-4 max-h-4 min-w-4 max-w-4 text-primary" />
                <p>The purpose of your business</p>
              </div>
              <div className="flex gap-3 md:py-3 ">
                <CheckBadgeIcon className="min-h-4 max-h-4 min-w-4 max-w-4 text-primary" />
                <p>Authorized signatories and Registered Agents</p>
              </div>
              <div className="flex gap-3 md:py-3">
                <CheckBadgeIcon className="min-h-4 max-h-4 min-w-4 max-w-4 text-primary" />
                <p>The number of shares of stock issued by the business</p>
              </div>
            </div>
            <h3 className="text-3xl font-bold md:pt-8">
              What&apos;s the Purpose of an Annual Report?
            </h3>
            <p className="md:py-3">
              The purpose of an annual report is to keep your state informed of
              your business&apos;s activities throughout the previous year and
              declare any changes to the details or ownership of your business —
              for example, if the business has changed locations or has new
              directors or managers.
            </p>
            <p className="md:py-3">
              Annual reports also provide shareholders and any other interested
              people with information about your business&apos;s financial
              performance.
            </p>
            <p className="md:py-3">
              Need to make changes to your business outside of the usual annual
              reporting time? No problem! You can file an{" "}
              <span className="text-primary">Articles of Amendment form </span>
              or have VC FILING take care of it for you.
            </p>
            <h3 className="text-3xl font-bold md:py-5">
              What Happens If I Don&apos;t File an Annual Report or Miss the
              Deadline?
            </h3>
            <p className="md:py-3">
              If you don&apos;t file your annual report or miss the deadline,
              you put your business at risk. Your state could impose a late
              penalty fine and your business could lose its “good standing.”
            </p>
            <p className="md:py-3">
              Further delaying filing means your business could be dissolved by
              your state agency and struck off the register. If this happens,
              you&apos;ll no longer have liability protection and can&apos;t
              continue as an LLC or corporation.
            </p>
            <h3 className="text-3xl font-bold md:py-5">
              How to File Your Annual Report
            </h3>
            <p className="md:py-3">
              If you need to file an annual report for your LLC or corporation,
              you can normally do so online through your state&apos;s website.
            </p>
            <p className="md:py-3">
              In addition to filing your annual report, you&apos;ll also need to
              pay a fee — these fees vary from state to state and could range
              between $50 and $400.
            </p>
            <p className="md:py-3">
              Some states will also require you to file other business
              documentation if important details of your business have changed.
            </p>
            <h3 className="">When Is Your Annual Report Due?</h3>
          </div>
        </div>

        {/* new era of privacy section */}
        <div className="bg-black rounded-xl md:my-24 pb-10 md:px-20 mx-5">
          <div className="md:pt-12 mx-5 pt-6">
            <p className="font-semibold text-yellow-400">NEW ERA OF PRIVACY</p>
            <h2 className="md:text-5xl text-white font-bold text-xl uppercase ">
              <span className="text-primary">Benefits of Filing your</span>{" "}
              Annual LLC Report with VC FILING
            </h2>
          </div>
          {/* new sub-section start 1,2  */}
          <div className=" md:grid grid-cols-2 gap-9 mx-5 md:pt-20  max-sm:pt-5">
            {/* left section */}
            <div>
              <div className="border border-gray-200 rounded-2xl  bg-gray-900 p-5 mb-7 ">
                <div className="flex gap-4  pt-9 pb-9 pl-3 bg-gray-700 rounded-xl mb-3 ">
                  <CheckBadgeIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary" />
                  <h2 className="font-bold md:text-2xl text-xl text-white">
                    Exceptional{" "}
                    <span className="text-primary">Value for Your Money</span>{" "}
                    Always
                  </h2>
                </div>

                <p className="  text-white my-4">
                  No subscriptions, no recurring fees and no hidden costs.
                  Clear, transparent pricing — every time.
                </p>
              </div>
              {/* part 2 */}
              <div className="border border-gray-200 rounded-2xl  bg-gray-900 p-5 mb-7 ">
                <div className="flex gap-4  pt-9 pb-9 pl-3 bg-gray-700 rounded-xl mb-3 ">
                  <CheckBadgeIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary" />
                  <h2 className="font-bold md:text-2xl text-xl text-white">
                    Personalized,{" "}
                    <span className="text-primary">Industry-Leading</span>{" "}
                    Support
                  </h2>
                </div>

                <p className="  text-white my-4">
                  24/7 fast and friendly customer service. Talk to a dedicated
                  specialist, not a salesperson, whenever you need to.
                </p>
              </div>
            </div>
            {/* right section  */}
            <div className="mt-10">
              <div className="border border-gray-200 rounded-2xl  bg-gray-900 p-5 mb-7 ">
                <div className="flex gap-4  pt-9 pb-9 pl-3 bg-gray-700 rounded-xl mb-3 ">
                  <CheckBadgeIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary" />
                  <h2 className="font-bold md:text-2xl text-xl text-white">
                    Enjoy a{" "}
                    <span className="text-primary">Superior and Modern</span>{" "}
                    User Experience
                  </h2>
                </div>

                <p className="  text-white my-4">
                  File your annual report effortlessly. A carefully crafted
                  experience makes entrepreneurship easy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*------------------ faq section ----------*/}
        <div className="my-16  md:pt-20 mx-5">
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left ">
            Common Questions About
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left pb-6">
            Filing an Annual Report
          </h2>
          <Accordion type="single" collapsible className="text-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How Much Does it Cost to File an Annual Report?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light ">
                  Our service fee to file an annual report is $99.
                </p>
                <p className="my-2 md:text-xl text-base font-light ">
                  The fee is the same whether you need to file an LLC annual
                  report or an annual report for your corporation or nonprofit.
                  The state fee will vary. To review the fee in your state,
                  select your entity type and the entity state at the bottom of
                  the page.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Are There Any Hidden Cost?</AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light ">
                  No! We pride ourselves on transparency. There are absolutely
                  no hidden costs associated with filing your annual report.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Are There any Specific Rules for My State?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light ">
                  Yes. Some states proceed to immediate dissolution if your
                  annual report is not filed by the deadline. This means that
                  your company will no longer be registered with the state and
                  the legal and tax benefits of being incorporated will no
                  longer be available to you. States that do this are Florida,
                  Wyoming, Georgia and Virginia.Other states have 20-90 day
                  grace periods.Discover everything you need to know about your
                  <span className="text-primary">
                    {" "}
                    state-specific compliance filing requirements.
                  </span>
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How Long Does it Take to File an Annual Report
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light ">
                  <span className="text-primary">
                    Business filing deadlines are
                  </span>{" "}
                  dependent on the governing state agency and filing times vary
                  by state. It&apos;s important that your business&apos;s annual
                  report is filed well in advance of the due date in order to
                  avoid any potential late filing fees.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Are There any Guides or Resources for Getting Started?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light ">
                  Uncover everything you need to know about specific{" "}
                  <span className="text-primary">state LLC information</span>{" "}
                  and check out our{" "}
                  <span className="text-primary">
                    ultimate guide to filing your annual report.
                  </span>
                  You can find all other resources relating to{" "}
                  <span className="text-primary">annual reports</span> in our
                  resource center.
                </p>
              </AccordionContent>

              <AccordionContent></AccordionContent>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                What Happens if the Annual Report Cannot be Filed
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light ">
                  If your entity has been administratively revoked, otherwise
                  dissolved or the report is not due within a close proximity to
                  you placing your order, our policy is to contact and inform
                  you then issue a full refund.If your company has been
                  dissolved for any reason, we can assist with reinstatement and
                  then proceed to file the Annual Report.
                </p>
              </AccordionContent>

              <AccordionContent></AccordionContent>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                What Will Receive When The Annual Report is Filed?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light ">
                  Once the filing is complete, your governing state agency will
                  typically return a filed copy of your Annual Report which is
                  then mailed to you.
                </p>
              </AccordionContent>

              <AccordionContent></AccordionContent>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                What is the Purpose of Filing an Annual Report?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light ">
                  The purpose of filing an annual report is to provide your
                  state with important and up-to-date information about your
                  business and any changes or updated information since the last
                  filing period.
                </p>
              </AccordionContent>

              <AccordionContent></AccordionContent>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>
                What Happens if You Don&apos;t File and Annual Report?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light ">
                  If you don&apos;t file your LLC annual report, or don&apos;t
                  file it on time, there are several things that can happen: The
                  state will write to you and could impose a late filing penalty
                  that you&apos;ll be obligated to pay in addition to your
                  regular annual report filing cost.
                </p>
                <p className="my-2 md:text-xl text-base font-light ">
                  Since a DBA acts as a nickname, you won&apos;t need a separate
                  EIN for it. You do, however, need an EIN for your registered
                  business entity for tax purposes.
                </p>
                <p className="my-2 md:text-xl text-base font-light ">
                  Since a DBA acts as a nickname, you won&apos;t need a separate
                  EIN for it. You do, however, need an EIN for your registered
                  business entity for tax purposes.
                </p>
              </AccordionContent>

              <AccordionContent></AccordionContent>
              <AccordionContent></AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex justify-center items-center md:pt-20 pb-4 mx-5">
          <StarIcon className="w-9 h-9 " color="#39b54a" />
        </div>
        <p className="text-center">19,443 Customer Rating</p>
        <div className="flex justify-center items-center pb-5">
          <div className="flex gap-1 pt-5">
            <StarIcon className="w-5 h-5 text-primary" />
            <StarIcon className="w-5 h-5 text-primary" />
            <StarIcon className="w-5 h-5 text-primary" />
            <StarIcon className="w-5 h-5 text-primary" />
            <StarIcon className="w-5 h-5 text-primary" />
          </div>
        </div>

        <div className="text-center md:pb-24 max-sm:pb-5 mx-5">
          <h2 className="md:text-5xl text-2xl font-bold  uppercase ">
            Why do over{" "}
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold  uppercase">
            <span className="text-primary">1,000,000 businesses love</span> VC
            FILING?
          </h2>
        </div>
        {/* review section  */}
        <div className="md:flex  md:py-10   gap-8 md:mx-20 mx-5  ">
          <div className="">
            <h2 className="text-2xl ">Deana A.</h2>

            <div className="flex gap-1 pt-5 pb-3">
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
            </div>
            <p className="">
              VC Filing is the best! Professional & always available to answer
              all my questions. I&apos;m so grateful.
            </p>
            <p className="font-semibold py-5">MS, UNITED STATES</p>
          </div>

          {/* part2 review */}
          <div>
            <h2 className="text-2xl ">SCOTT B.</h2>
            <div className="flex gap-1 pt-5 pb-3">
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
            </div>
            <p className="">
              VC Filing has been great to work with. Their prices are reasonable
              and they exceed expectations.
            </p>
            <p className="font-semibold py-5">MS, UNITED STATES</p>
          </div>

          {/* part 3 review  */}
          <div>
            <h2 className="text-2xl">Adam S</h2>
            <div className="flex gap-1 pt-5 pb-3">
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
            </div>
            <p className="text-wrap">
              Easy, smooth, one of the best business decisions I&apos;ve ever
              made, was to utilize VC Filing
            </p>
            <p className="font-semibold py-5">CA, UNITED STATES</p>
          </div>
        </div>
        {/* button section  */}
        <div className="md:flex md:flex-row  gap-10 items-center md:pb-28 pt-8 mx-5 max-sm:pb-10">
          <div className=" md:text-left md:w-1/2 md:px-16">
            <h2 className="font-bold">
              <span className="text-primary">ANNUAL REPORT</span>
            </h2>
            <h3 className="md:text-5xl max-sm:text-3xl font-medium pb-10 ">
              File Your Annual Report Now
            </h3>
          </div>

          <div className=" border border-gray-300  rounded-lg shadow-xl mx-6">
            <div className="relative bg-slate-300 mb-4 mx-5">
              <Image
                className="absolute right-0 mr-2 "
                src="/amendment/logo.png"
                alt="Free LLC"
                width={70}
                height={70}
              />
            </div>
            <p className="text-center text-2xl py-6 font-bold">ANNUAL REPORT</p>
            <div className="mx-5  py-5">
              <p className="text-center pt-4 py-3 pb-3 mx-5">Entity Type</p>
              <select className="py-2 pt-2 px-32  mx-1  rounded-full border-2 gap-5  ">
                <option hidden value="">
                  Select Entity Type
                </option>
                {statesInUS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <p className="pb-2 pt-3  text-center">Entity State </p>
              <select className="py-2 px-36   mx-3  rounded-full border-2 gap-5 ">
                <option hidden value="">
                  Select State
                </option>
                {statesInUS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <div className="border-4 border-gray-200 mx-2 rounded-full text-center  py-5 my-5">
                <h2 className="text-4xl font-semibold">0$</h2>
                <p>Plus $0 state Fee</p>
              </div>

              <div className="flex justify-center items-center ">
                <Link
                  className="px-9   py-5 bg-primary text-white border border-primary rounded-[30px] "
                  href="/annual-report/step-1"
                >
                  ORDER NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default Amendment;
