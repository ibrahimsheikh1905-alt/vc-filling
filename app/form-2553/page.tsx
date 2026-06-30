import {
  CheckBadgeIcon,
  HomeIcon,
  ArrowPathIcon,
  LightBulbIcon,
  StarIcon,
  ArrowUpRightIcon,
  DocumentIcon,
  CurrencyDollarIcon,
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
import { DollarSignIcon, LockIcon, ShieldCheck } from "lucide-react";

const TaxConsultation = () => {
  return (
    <NavigationWrapper>
      <div className=" my-16 flex flex-col-reverse md:flex-row max-sm:mx-5">
        <div className="flex-1">
          <div className="md:text-left">
            <h1 className="md:text-5xl text-3xl font-bold  pt-20 md:pl-20 ">
              Prepare and File an
            </h1>
            <h2 className="md:text-5xl text-3xl font-bold   md:pl-20">
              S Corporation Tax
            </h2>
            <h2 className="md:text-5xl text-3xl font-bold md:pl-20">
              Election With Form
            </h2>
            <h2 className="md:text-5xl text-3xl font-bold   md:pl-20">2553</h2>
            <p className="py-7     md:pl-20">
              Reduce the Tax You Pay by Having Your LLC Treated as an S Corp for
              Tax Purposes.
            </p>
            <div className="mt-8">
              <Link
                className="px-10 md:ml-20 py-5 font-bold bg-primary text-white border border-primary rounded-[30px] "
                href="/form-2553/step-1"
              >
                FILE S CROP ELECTION
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <Image
            src="/free-llc/LLC green.jpg"
            alt="Free LLC"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto ">
        <div className="flex gap-4 items-center justify-center md:my-16 md:py-7 max-sm:pb-9 mx-3 md:flex-row flex-col">
          <Image src="/main/vcicon.jpg" alt="image" width={200} height={200} />
          <div>
            <h3 className="md:text-5xl text-3xl font-bold py-2 uppercase">
              Join <span className="text-primary">1,000,000+</span>
              <br /> Entrepreneurs <br />
              like you
            </h3>
            <p className="text-xl">
              Entrepreneurship is booming - and we&apos;re happy to be <br />{" "}
              one of America&apos;s fastest growing companies.
            </p>
          </div>
        </div>

        {/* new section start  */}

        {/* new section start  */}

        {/* new section start  */}
        <div className="pt-8">
          <div className="md:flex gap-5 mx-5 ">
            {/* part 1 left side  */}
            <div className="">
              <div>
                <Image
                  className="md:mx-5"
                  src="/reinstatement/re3.webp"
                  alt="image"
                  width={2000}
                  height={2000}
                />
              </div>
            </div>
            {/* right side started  */}
            <div className="md:mx-32 py-10">
              <div>
                <p className="my-2 md:text-xl   ">
                  If you want to reduce the amount of tax you pay on your LLC
                  earnings, an S Corporation Tax Election (form 2553) is a
                  necessity. This tax election tells the Internal Revenue
                  Service to tax your LLC business as an S Corporation, which
                  could reduce the amount of income on which you need to pay
                  self-employment tax (including Social Security, Medicare and
                  FICA). This can substantially reduce your tax bill with only a
                  slight increase in administrative overhead for you and your
                  accountant.
                </p>
                <p className="py-8  md:text-xl">How LLCs Are Normally Taxed</p>
                <p className="md:text-xl">
                  When it comes to the amount of tax you owe the federal and
                  state government, your income from an LLC is normally taxed
                  similarly to that of sole proprietorship businesses. For a
                  small, one-person LLC, this typically works as follows.
                </p>
              </div>

              <div className="md:pt-14 max-sm:pt-5">
                <div className="border border-gray-300 rounded-xl p-5 my-3">
                  <div className="flex gap-5 mt-4 mx-2 ">
                    <span className="font-bold bg-green-500 p-2 rounded-xl text-2xl">
                      01
                    </span>
                    <div className="flex justify-center items-center">
                      <h2 className="font-bold md:text-xl text-base uppercase">
                        Your business earns revenue
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-300 rounded-xl p-5 my-3">
                  <div className="flex gap-5 mt-4 mx-2 ">
                    <span className="font-bold bg-green-500 p-2 rounded-xl text-2xl">
                      02
                    </span>
                    <div className="flex justify-center items-center">
                      <h2 className="font-bold md:text-xl text-base uppercase">
                        You deduct any allowable business expenses
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-300 rounded-xl p-5 my-3">
                  <div className="flex gap-5 mt-4 mx-2 ">
                    <span className="font-bold bg-green-500 p-2 rounded-xl text-2xl">
                      03
                    </span>
                    <div className="flex justify-center items-center">
                      <h2 className="font-bold md:text-xl text-base uppercase">
                        The amount remaining is your business profit, which you
                        pay to yourself
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-300 rounded-xl p-5 my-3">
                  <div className="flex gap-5 mt-4 mx-2 ">
                    <span className="font-bold bg-green-500 p-2 rounded-xl text-2xl">
                      04
                    </span>
                    <div className="flex justify-center items-center">
                      <h2 className="font-bold md:text-xl text-base uppercase">
                        You pay self-employment tax of around 15 percent on any
                        profits
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-300 rounded-xl p-5 my-3">
                  <div className="flex gap-5 mt-4 mx-2 ">
                    <span className="font-bold bg-green-500 p-2 rounded-xl text-2xl">
                      05
                    </span>
                    <div className="flex justify-center items-center">
                      <h2 className="font-bold md:text-xl text-base uppercase">
                        You pay federal tax at various income bands on any
                        profits
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-300 rounded-xl p-5 my-3">
                  <div className="flex gap-5 mt-4 mx-2 ">
                    <span className="font-bold bg-green-500 p-2 rounded-xl text-2xl">
                      06
                    </span>
                    <div className="flex justify-center items-center">
                      <h2 className="font-bold md:text-xl text-base uppercase">
                        You pay state tax on any profits
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="md:flex gap-5  p-6 border border-gray-300   rounded-xl justify-center items-center max-sm:mx-5">
                  <div className="flex justify-center items-center ">
                    <LightBulbIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary " />
                  </div>
                  <div>
                    <p className="my-2 md:text-xl  font-normal ">
                      An S Corporation Tax Election{" "}
                      <span className="text-primary">
                        {" "}
                        reduces the amount of tax you pay in step 4,
                      </span>{" "}
                      self-employment tax. It has no impact on any other taxes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* new section start  */}
          <div></div>

          <div className="flex justify-center items-center py-5 pt-9">
            <Link
              className="md:px-10 md:py-5 py-6 px-4  bg-primary text-white border border-primary rounded-[30px] "
              href="/reinstatement/step-1"
            >
              FILE YOUR REINSTATEMENT
            </Link>
          </div>
        </div>
        {/* new section start  */}
        <div className="grid grid-cols-2 gap-7">
          <div>
            <p className="pb-5 text-lg">Self-Employment Tax as an LLC</p>
            <p>
              Under a standard LLC tax arrangement where the income “flows
              through” to your 1040 tax return and business schedule C, you
              would pay self-employment tax on all of that $90,000. At
              approximately 15%, the tax on that money would be $13,500. You
              would still pay standard federal and state taxes on any earnings.
            </p>
            <p className="py-6 text-lg">Payroll Tax as an S Corporation</p>
            <p>
              If you choose to be taxed as an S Corporation, you could say that
              your salary is $50,000 and take the other $40,000 out of your
              business as a distribution. You would pay standard payroll tax on
              that $50,000 for a total of around $7,500. You would not pay any
              payroll or self-employment tax on the $40,000 distribution, saving
              you around $6,000. You would still pay standard federal and state
              taxes on both your salary and your distribution.
            </p>
          </div>
          <div>
            <Image
              className="rounded-xl max-sm:py-2"
              src="/form-25/img1.webp"
              alt="Free LLC"
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* new section start  */}
        <div className="grid grid-cols-2 gap-7 mt-20">
          <div>
            <Image
              className="rounded-xl max-sm:py-2"
              src="/form-25/picx.webp"
              alt="Free LLC"
              width={500}
              height={500}
            />
          </div>
          <div className="mt-48">
            <p className="text-lg">Check the Savings Yourself With Our S</p>
            <p className="text-lg pb-5">Corporation Tax Calculator</p>
            <p>
              The S Corporation tax calculator lets you choose how much to
              withdraw from your business each year, and how much of it you will
              take as salary (with the rest being taken as a distribution). It
              will then show you how much money you can save in taxes.
            </p>
            <p className="py-6 text-lg font-bold">
              Use our S Corporation Tax Calculator to view your potential tax
              savings.
            </p>
            <div className="flex justify-center items-center py-5">
              <Link
                className="px-9  font-bold  py-5  bg-primary text-white border border-primary rounded-[30px] "
                href="/form-2553/step-1"
              >
                GO TO S CROP TAX CALCULATOR
              </Link>
            </div>
          </div>
        </div>
        {/* new section start  */}
        <div className="my-10 grid grid-cols-2 gap-6">
          <div>
            <p className="text-lg my-12 mx-28">Assigning a Fair Salary</p>
            <p className="mx-28">
              One important part of the S Corporation Tax Election is that you
              must pay yourself a fair salary, which the IRS defines as
              “reasonable compensation.” If you do not, the IRS could audit you
              and levy taxes and penalties. For example, you cannot pay yourself
              a salary of $10,000 and take $80,000 in distributions. When it
              comes to setting a fair salary, look at what full-time roles
              similar to yours are paying someone with similar expertise and
              experience, and use that as a baseline. Speak with your accountant
              or attorney for more information.
            </p>
          </div>
          <div>
            <Image
              className="rounded-xl max-sm:py-2"
              src="/form-25/img2.webp"
              alt="Free LLC"
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* new section start  */}
        <div className="text-center text-lg my-20">
          <p className=" py-8">
            Administrative Overhead Of the S Corporation Election
          </p>
          <p>
            Because it can reduce your tax burden by such a substantial amount,
            the S Corporation Tax Election is a good idea for most LLC owners.
            But it&apos;s important to understand the additional overhead this
            might create for you, your business and your accountant.
          </p>
        </div>
        {/* new section start  */}
        <div className="grid grid-cols-2 gap-6 mx-28">
          {/* part 1 div left side  */}
          <div className="border-2 rounded-xl">
            <div className="mx-10">
              <div className="my-5">
                <DocumentIcon className="min-h-5 min-w-7 max-h-7 max-w-7 text-primary" />
              </div>
            </div>
            <div className="mx-10">
              <h2 className="font-bold text-4xl uppercase">
                Setting up monthly payroll
              </h2>
              <p className="py-9">
                You will need to set up a monthly payroll where you pay yourself
                and submit your payroll taxes.
              </p>
            </div>
          </div>
          {/* part 2 div right side  */}
          <div className="border-2 rounded-xl bg-slate-100">
            <div className="mx-10">
              <div className="my-5 flex items-center justify-center w-12 h-12 bg-blue-100 rounded ">
                <DollarSignIcon className="min-h-8 min-w-8 max-h-8 max-w-8 text-primary" />
              </div>
            </div>
            <div className="mx-10">
              <h2 className="font-bold text-4xl uppercase">
                Setting up monthly payroll
              </h2>
              <p className="py-9">
                You will need to set up a monthly payroll where you pay yourself
                and submit your payroll taxes.
              </p>
            </div>
          </div>
        </div>
        {/* new section start  */}
        <div className="text-center mt-14">
          <h2 className="text-6xl font-bold uppercase">
            How to File Your <span className="text-primary">S</span>
          </h2>
          <h2 className="text-6xl uppercase font-bold mb-8">
            <span className="text-primary">Corp Tax Election</span>
          </h2>
          <p>
            There are a couple of ways you can file form 2553.{" "}
            <span className="font-bold">File Form 2553, S</span>
          </p>
          <p>
            <span className="font-bold">Corporation Tax Election</span> If you
            want to complete the filing process
          </p>
          <p className="mb-8">
            yourself, here are the steps you need to follow:
          </p>
        </div>
        {/* new section start  */}
        <div className="mx-60">
          <div className=" flex gap-5 border-2 rounded-xl my-4 ">
            <div className="flex max-sm:justify-center gap-2 my-5 mx-2 ">
              <span className="font-bold bg-green-500 p-3 rounded-xl text-2xl">
                01
              </span>
            </div>
            <div className=" flex justify-center items-center">
              <p className="font-bold">
                Go to the Internal Revenue Service website.
              </p>
            </div>
          </div>
          {/* 2nd div */}
          <div className=" flex gap-5 border-2 rounded-xl my-4 ">
            <div className="flex max-sm:justify-center gap-2 my-5 mx-2 ">
              <span className="font-bold bg-green-500 p-3 rounded-xl text-2xl">
                02
              </span>
            </div>
            <div className=" flex justify-center items-center">
              <p className="font-bold">
                Find the section on S Corporation Tax Elections
              </p>
            </div>
          </div>
          {/* 3rd div */}
          <div className=" flex gap-5 border-2 rounded-xl my-4 ">
            <div className="flex max-sm:justify-center gap-2 my-5 mx-2 ">
              <span className="font-bold bg-green-500 p-3 rounded-xl text-2xl">
                03
              </span>
            </div>
            <div className=" flex justify-center items-center">
              <p className="font-bold">Download form 2553</p>
            </div>
          </div>
          {/* 4th div  */}
          <div className=" flex gap-5 border-2 rounded-xl my-4 ">
            <div className="flex max-sm:justify-center gap-2 my-5 mx-2 ">
              <span className="font-bold bg-green-500 p-3 rounded-xl text-2xl">
                04
              </span>
            </div>
            <div className=" flex justify-center items-center">
              <p className="font-bold">
                Gather the required information for form 2553 and fill it in
              </p>
            </div>
          </div>
          {/* 5th div  */}
          <div className=" flex gap-5 border-2 rounded-xl my-4 ">
            <div className="flex max-sm:justify-center gap-2 my-5 mx-2 ">
              <span className="font-bold bg-green-500 p-3 rounded-xl text-2xl">
                05
              </span>
            </div>
            <div className=" flex justify-center items-center">
              <p className="font-bold">
                Send the form back to the IRS, typically by mail or fax
              </p>
            </div>
          </div>
          {/* 6th div  */}
          <div className=" flex gap-5 border-2 rounded-xl my-4 ">
            <div className="flex max-sm:justify-center gap-2 my-5 mx-2 ">
              <span className="font-bold bg-green-500 p-3 rounded-xl text-2xl">
                06
              </span>
            </div>
            <div className=" flex justify-center items-center">
              <p className="font-bold">
                6 Wait for notification of acceptance of your tax election
              </p>
            </div>
          </div>
        </div>
        {/* new section start  */}
        <div className="mt-3">
          <p className="text-center font-bold text-sm py-3 uppercase">
            Trustpilot Reviews
          </p>
          <div className="flex justify-center items-center">
            {" "}
            <StarIcon className="w-10 h-10 text-primary" />
          </div>
          <p className="text-center">20,168 Customer Rating</p>
          <div className="flex justify-center items-center pb-5">
            <div className="flex gap-1 ">
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>
        {/* new section start  */}
        <div className="text-center">
          <h3 className="font-bold text-5xl uppercase">
            Help File my LLC s{" "}
            <span className="text-primary">Corporation tax</span>
          </h3>
          <h3 className="text-5xl font-bold uppercase">
            <span className="text-primary">election</span>
          </h3>
          <p className="py-5">
            No Contracts. No Surprise. Save your time, we&apos;ll handle the
            paperwork.
          </p>
          <p>
            We provide a complete S Corporation Tax Election service to register
            and file your LLC tax status with the IRS
          </p>
          <p>
            on your behalf. Just place an order and we&apos;ll collect the right
            information to guide you through the process,
          </p>
          <p>and the IRS will notify you of your updated tax status.</p>
          <div className="flex justify-center items-center py-5">
            <Link
              className="px-9  font-bold  py-5  bg-primary text-white border border-primary rounded-[30px] "
              href="/form-2553/step-1"
            >
              FILE NOW
            </Link>
          </div>
        </div>

        {/*------------------ faq section ----------*/}
        <div className="md:my-16 md:px-10 md:pt-12 md:pb-16 mx-5">
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left  capitalize">
            Common Questions About
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left  capitalize">
            Filing Your S Corporation Tax
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left  capitalize pb-5">
            Election
          </h2>
          <Accordion type="single" collapsible className="text-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Does Filing Form 235Remove Any LLC Protections?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl   ">
                  No. You still get the same limited liability protections as
                  with a regular limited liability company.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How Much Could I Save by Being Treated as an S Corporation For
                Tax Purpose?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl  f ">
                  You could save yourself thousands of dollars a year.
                  We&apos;ve got a{" "}
                  <span className="text-primary">handy calculator</span> that
                  shows you exactly how much you could reduce your
                  self-employment tax burden.
                </p>{" "}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Do I Have To File My S Corporation Tax Election at a Certain
                Time?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl   ">
                  Yes. There are certain limitations on when you can file form
                  2553.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can I File an S Corporation Tax Election if There Are More
                Owners in The Business?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl   ">
                  Yes. S Corporation Tax Elections are available for most LLCs.
                  For more information, speak to your accountant or attorney.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What Does Restored Good Standing Mean?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl   ">
                  Being in good standing means that your business is up-to-date
                  on filing your annual report, biennial report, other required
                  forms, compliance paperwork and any other requirements from
                  your company&apos;s home state. To get an official Certificate
                  of Good Standing, you&apos;ll need to file the appropriate
                  form with your state, or you can have VC FILING file for you.
                  The Certificate of Good Standing helps you prove that your
                  business exists and complies with the rules. It helps you
                  appear trustworthy and credible to potential partners,
                  investors and lenders.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* new section start  */}
        <div className="md:grid grid-cols-3 gap-8 md:my-14 max-sm:my-5">
          {/* main div 1 */}
          <div>
            <div>
              <Image
                className=""
                src="/form-25/im1.webp"
                alt="Free LLC"
                width={400}
                height={400}
              />
            </div>
            {/* text div  */}
            <div className="flex justify-between my-5">
              <p className="text-xl">Understanding Filling Fees</p>
              <ArrowUpRightIcon className="min-h-5 min-w-5 max-h-5 max-w-5 text-primary" />
            </div>
          </div>
          {/* div 2 */}
          <div>
            <div>
              <Image
                className=" "
                src="/form-25/im3.webp"
                alt="Free LLC"
                width={400}
                height={400}
              />
            </div>
            {/* text div  */}
            <div className="flex justify-between my-5">
              <p className="text-xl">Navigating Filing fees</p>
              <ArrowUpRightIcon className="min-h-5 min-w-5 max-h-5 max-w-5 text-primary" />
            </div>
          </div>
          {/* div 3 */}
          <div>
            <div>
              <Image
                className=""
                src="/form-25/im3.webp"
                alt="Free LLC"
                width={400}
                height={400}
              />
            </div>
            {/* text div  */}
            <div className="flex justify-between my-5">
              <p className="text-xl">Business Name Search</p>
              <ArrowUpRightIcon className="min-h-5 min-w-5 max-h-5 max-w-5 text-primary" />
            </div>
          </div>
        </div>
      </div>
      {/* new section start  */}
    </NavigationWrapper>
  );
};

export default TaxConsultation;
