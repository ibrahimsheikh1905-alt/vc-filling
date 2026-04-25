import {
  CheckBadgeIcon,
  HomeIcon,
  ArrowPathIcon,
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
import { LockIcon, ShieldCheck } from "lucide-react";

const TaxConsultation = () => {
  return (
    <NavigationWrapper>
      <div className=" my-16 flex flex-col-reverse md:flex-row max-sm:mx-5">
        <div className="flex-1">
          <div className="md:text-left">
            <h1 className="md:text-5xl text-3xl font-bold py-10 pt-20 md:pl-20 ">
              File an Order of Reinstatement Quickly and Easily
            </h1>
            <h2 className="md:text-xl  md:pl-20 pb-12 ">
              VC FILING can help you restore your Good Standing status with your
              state and restart operations in a fraction of the time (and
              money!) it takes to start a new company.
            </h2>
            <Link
              className="px-10 md:ml-20 py-5 font-bold bg-primary text-white border border-primary rounded-[30px] "
              href={"/form-a-llc/"}
            >
              ORDER NOW
            </Link>
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
        <div className="md:grid grid-cols-2 gap-16 md:py-10 md:mb-36 ">
          <div className="mx-5">
            <Image
              className="md:mx-5"
              src="/reinstatement/re1.webp"
              alt="image"
              width={1500}
              height={1500}
            />
          </div>
          <div className="mx-5 max-sm:pt-5">
            <h2 className="md:text-5xl text-2xl font-semibold capitalize">
              Need to Reinstate a
            </h2>
            <h2 className="md:text-5xl text-2xl font-semibold capitalize">
              Business Back to
            </h2>
            <h2 className="md:text-5xl text-2xl font-semibold capitalize">
              Good Standing?
            </h2>
            <p className="md:py-7 max-sm:pb-9 md:pt-32 md:text-xl font-normal">
              Sometimes life and business get complicated. Meeting the business
              requirements of your state means keeping on top of fees, annual
              reports and taxes — and if things fall through the cracks, your
              company can be dissolved.
            </p>
          </div>
        </div>
        {/* new section start  */}
        <div className="md:grid grid-cols-2 gap-16 md:py-10 md:pt-32  ">
          <div className="mx-5">
            <Image
              className="md:mx-5"
              src="/reinstatement/re2.webp"
              alt="image"
              width={1400}
              height={1400}
            />
          </div>
          <div className="mx-5 pt-4">
            <h2 className="md:text-5xl text-2xl font-semibold capitalize">
              VC FILING Reinstatement
            </h2>
            <h2 className="md:text-5xl text-2xl font-semibold capitalize">
              Service Is Here to Help
            </h2>
            <p className=" md:pt-32 md:text-xl font-normal">
              If your business has been dissolved because of non-compliance, you
              can restore your Good Standing and restart operations by filing an
              order of reinstatement with your state of formation.
            </p>
            <p className="md:text-xl font-normal">
              VC FILING Reinstatement service takes care of the paperwork for
              you, making sure you follow the reinstatement procedures of your
              state.
            </p>
          </div>
        </div>
        {/* new section start          */}
        <h2 className="md:text-4xl text-2xl font-bold  md:my-6 max-sm:mt-5 capitalize md:py-14 mx-5">
          Why Choose Reinstatement??
        </h2>

        {/* new section start  */}
        <div className="md:grid grid-cols-3 gap-5 md:py-10 mx-5">
          <div>
            <div className="flex gap-5 py-5">
              <div className="flex justify-center items-center">
                <LockIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
              </div>
              <div>
                <p className="md:text-xl font-normal pt-4">
                  Get Back in Business Faster
                </p>
              </div>
            </div>
            <div>
              <p className="md:text-xl font-normal md:pt-12">
                In many states, reinstatement procedures can be completed in
                less time than forming a new company, meaning you can restart
                operations sooner.
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-5 py-5">
              <div className="flex justify-center items-center">
                <ShieldCheck className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
              </div>
              <div>
                <p className="md:text-xl font-normal ">
                  Keep Your Company Name
                </p>
              </div>
            </div>
            <div>
              <p className="md:text-xl font-normal md:pt-12">
                In many states, reinstatement procedures can be completed in
                less time than forming a new company, meaning you can restart
                operations sooner.
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-5 max-sm:py-3">
              <div className="flex justify-center items-center">
                <HomeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
              </div>
              <div>
                <p className="md:text-xl font-normal pt-4">
                  Recover Historical Company Information
                </p>
              </div>
            </div>
            <div>
              <p className="md:text-xl font-normal md:pt-12  ">
                In many states, reinstatement procedures can be completed in
                less time than forming a new company, meaning you can restart
                operations sooner.
              </p>
            </div>
          </div>
        </div>
        {/* new section start  */}
        <div className="pt-8">
          <div className="md:flex gap-5 mx-5 ">
            {/* part 1 left side  */}
            <div className="">
              <div>
                <h2 className="md:text-4xl text-2xl font-bold ">
                  About the process
                </h2>
              </div>
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
                <h2 className="text-3xl font-bold">
                  What Does the Reinstatement Procedure Look Like?
                </h2>
                <p className="my-2 md:text-xl  font-normal ">
                  To get your business reinstated, you first need to look at
                  what went wrong. If you failed to submit the proper paperwork
                  to the state or failed to pay a fee, you need to do that ASAP.
                  Once you7apos;ve taken care of these compliance issues, the
                  reinstatement process typically goes like this:
                </p>
              </div>
              <div className="md:pt-14 max-sm:pt-5">
                <div className="border border-gray-300 rounded-xl p-5">
                  <div className="flex gap-2 mt-4 mx-2 ">
                    <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                    <h2 className="font-bold md:text-xl text-base uppercase">
                      Fill out any reinstatement forms required by your state.
                    </h2>
                  </div>
                </div>
                <div className="border border-gray-300 rounded-xl md:my-10 max-sm:my-5 p-5">
                  <div className="flex gap-2 mt-4 mx-2 ">
                    <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                    <h2 className="font-bold md:text-xl text-base uppercase">
                      File reinstatement forms with the proper state offices
                      like the Secretary of State or the Department of Revenue
                      or Taxation.
                    </h2>
                  </div>
                </div>
                <div className="border border-gray-300 rounded-xl p-6 md:my-10 max-sm:my-5">
                  <div className="flex gap-2 mt-4 mx-2 ">
                    <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                    <h2 className="font-bold md:text-xl text-base uppercase">
                      Pay any required fees
                    </h2>
                  </div>
                </div>
                <div className="border border-gray-300 rounded-xl p-5 md:my-10 max-sm:my-5">
                  <div className="flex gap-2 mt-4 mx-2 ">
                    <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                    <h2 className="font-bold md:text-xl text-xl uppercase">
                      Wait to hear back from your state about your reinstatement
                      status.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex gap-5 bg-slate-300 p-6 md:mx-36  rounded-xl justify-center items-center max-sm:mx-5">
            <div className="flex justify-center items-center ">
              <ArrowPathIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary " />
            </div>
            <div>
              <p className="my-2 md:text-xl  font-normal ">
                This is a process you want to get right the first time, in order
                to get back to doing business as soon as possible. VC FILING
                provides reinstatement services in most states to get your
                business entity active again
              </p>
            </div>
          </div>
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
        <div className="md:grid grid-cols-2 md:py-12 mx-5 gap-11">
          <div>
            <h2 className="md:text-4xl max-sm:text-3xl font-bold">
              What is a Certificate
            </h2>
            <h2 className="md:text-4xl max-sm:text-3xl font-bold">
              of Good Standing?
            </h2>
            <p className="py-1  font-normal pt-5">
              In certain situations, you may be required to prove that your
              business exists and complies with relevant state laws and
              regulations.
            </p>
            <p className=" pb-3 font-normal">
              <span className="text-primary">
                A Certificate of Good Standing
              </span>
              from your state serves as this proof, and you can&apos;t get one
              if you&apos;re in bad standing.
            </p>
            <p className="font-bold ">Khadijah Suleman, Aloaye Clothing LLC</p>
          </div>
          <div>
            <Image
              className="py-5"
              src="/form-c-corporation/video.webp"
              alt="Image1"
              width={700}
              height={700}
            />
          </div>
        </div>

        {/* new section start  */}

        <div className="md:pt-24  mx-5">
          <p className="text-blue-600 font-semibold">NEW ERA OF PRIVACY</p>
          <h2 className="md:text-5xl text-2xl font-bold uppercase">
            Four Risks <span className="text-primary">of Being </span>
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold uppercase">
            <span className="text-primary max-sm:mb-5">in</span> Bad Standing
          </h2>
        </div>

        {/* new section start  */}
        <div className="mx-5 md:my-10 max-sm:pt-5 gap-5 grid md:grid-cols-2">
          {/* left section  */}
          <div>
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex  items-center gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <p className="text-3xl bg-white p-7  rounded-lg  text-blue-400 font-semibold">
                    1
                  </p>
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    You Can&apos;t Obtain Financing.
                  </h2>
                </div>

                <p className="py-7 md:text-xl  ">
                  Typically, lenders or banks want proof of your business&apos;s
                  existence and business history to evaluate creditworthiness
                  for a loan or certain types of transactions. Plus, if
                  you&apos;re seeking investment from investors or other
                  partners, they&apos;ll want to make sure your business is
                  legitimate and in compliance with local laws and regulations.
                </p>
              </div>
            </div>
            {/* part 2 */}
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex justify-center items-center gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <p className="text-3xl bg-white p-7  rounded-lg  text-blue-400 font-semibold">
                    3
                  </p>
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    You Have No Proof for Licensing Agencies and Regulators.
                  </h2>
                </div>

                <p className="py-7 md:text-xl  text-wrap  ">
                  In order to renew or obtain certain permits and licenses, you
                  may need to provide a Certificate of Good Standing to
                  licensing agencies and regulators in your state.
                </p>
              </div>
            </div>
          </div>
          {/* right section  */}
          <div className="md:mt-16">
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex justify-center items-center gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <p className="text-3xl bg-white p-7  rounded-lg  text-blue-400 font-semibold">
                    2
                  </p>
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    There&apos;s No Way to Do Business in Other States.
                  </h2>
                </div>

                <p className="py-7 md:text-xl  text-wrap  ">
                  To do business in states other than your home state, your
                  business will need to apply for Foreign Qualification in the
                  new state. To do this, you must be in good standing with your
                  current state.
                </p>
              </div>
            </div>
            {/* part 2  */}
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex items-center gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <p className="text-3xl bg-white p-7  rounded-lg  text-blue-400 font-semibold">
                    4
                  </p>
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    You Can&apos;t Sell Your Business.
                  </h2>
                </div>

                <p className="py-7 md:text-xl  text-wrap  ">
                  If the day comes when you want to sell your business,
                  you&apos;ll need to show proof of its existence, history and
                  compliance to interested business brokers and buyers1.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*------------------ faq section ----------*/}
        <div className="md:my-16 md:px-10 md:pt-12 md:pb-16 mx-5">
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left  capitalize">
            Common Questions About
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left  capitalize pb-5">
            Business Reinstatement
          </h2>
          <Accordion type="single" collapsible className="text-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                When is Reinstatement Required?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl   ">
                  If your business has lost its good standing with the state and
                  been dissolved, you need to file for reinstatement if
                  you&apos;d like to keep doing business. If you do the process
                  correctly and meet all necessary requirements, your business
                  will be reinstated and you&apos;ll get back all the advantages
                  that come with being an official, legal entity.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How Much Does it Cost to Reinstate a Business ?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl  f ">
                  The cost to reinstate a business depends on which state
                  you&apos;re in. For example, in Texas,{" "}
                  <span className="text-primary">
                    the filing fee for reinstatement{" "}
                  </span>
                  after involuntary dissolution is $75, and the filing fee for
                  reinstatement following a voluntary dissolution is $15.{" "}
                  <span className="text-primary">In Massachusetts,</span> the
                  fee for filing a reinstatement application is $100. Check with
                  your Secretary of State to learn what your fee will be. You
                  will need to pay these filing fees on top of any past-due
                  taxes, penalties, fees and/or interest to get back into good
                  standing.
                </p>{" "}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How Do i Reinstate a Business Back to Good Standing?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl   ">
                  To keep your small business in good standing, you typically
                  need to be up-to-date on fees, file annual or biennial reports
                  with the Secretary of State, keep your business records up to
                  date by filing{" "}
                  <span className="text-primary">Articles of Amendment</span>{" "}
                  after major events and pay any other necessary business fees
                  or franchise taxes to state regulators every year. However,
                  that doesn&apos;t always happen. Things can sometimes slip
                  through the cracks, and if your business fails to complete
                  these tasks, it can lose its good standing. Then, your state
                  can file to{" "}
                  <span className="text-primary"> dissolve your business</span>{" "}
                  and completely revoke its LLC status. It7apos;s not an ideal
                  situation, but your business isn&apos;t gone forever if this
                  happens. Filing a reinstatement order helps restore your
                  business back to good standing.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How Long Does it take To Reinstate a Company?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl   ">
                  How long it takes to reinstate your company depends on which
                  state you live in.{" "}
                  <span className="text-primary">
                    The Minnesota Secretary of State claims
                  </span>
                  that most business filings are returned within 3-5 days.
                  <span className="text-primary">Nebraska asks</span> that
                  business owners wait about a week for their reinstatements to
                  be processed. Some states, like Nevada, allow business owners
                  to pay extra for an expedited filing. Check with your
                  Secretary of State to determine how long filing for
                  reinstatement typically takes.
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

        {/* background image section  */}
        <div className="bg-[url('/reinstatement/ins2.webp')] md:w-full md:bg-cover max-sm:mb-9 md:mb-24 md:px-8 px-2 text-white md:py-16 rounded-xl my-2 mx-5 mt-16">
          <p className="text-white font-bold py-9 capitalize">REINSTATEMENT</p>
          <h2 className="md:text-7xl text-3xl font-bold pt-12 uppercase">
            Ready to Get
          </h2>
          <h2 className="md:text-7xl text-3xl font-bold uppercase">
            Reinstated?
          </h2>

          <p className="pt-20 ">VC FILING can help you reinstate your</p>
          <p className="">dissolved business and get back</p>
          <p className=" pb-16">in good standing.</p>
          <div className="pb-12">
            <Link
              className="px-9  py-5 bg-primary text-white border border-primary rounded-[30px] "
              href={"/form-a-llc/"}
            >
              ORDER NOW
            </Link>
          </div>
        </div>
      </div>
      {/* new section start  */}
    </NavigationWrapper>
  );
};

export default TaxConsultation;
