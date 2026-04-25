import {
  CheckBadgeIcon,
  StarIcon,
  ChevronDownIcon,
  CheckIcon,
  ArrowLongRightIcon,
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
import { statesInUS } from "@/data";

const RegisteredAgent = () => {
  return (
    <NavigationWrapper>
      <div className=" my-16 flex flex-col-reverse md:flex-row">
        <div className="flex-1">
          <div className=" md:text-left">
            <h1 className="text-5xl font-bold py-10 pt-20 md:pl-20 max-sm:mx-5">
              Get Your Registered Agent Service for $119
            </h1>
            <h2 className="md:text-xl md:pl-20 pt-10 max-sm:mx-5">
              When You Form Your Business with VC Filling Avoid the stress of
            </h2>
            <h2 className="md:text-xl md:pl-20 max-sm:mx-5">
              managing your businesses documentation on your own by hiring a
            </h2>
            <h2 className="md:text-xl md:pl-20  pb-24 max-sm:mx-5">
              trustworthy and affordable Registered Agent.
            </h2>
            <Link
              className="px-10 md:ml-20 py-5 bg-primary text-white border border-primary rounded-[30px] max-sm:mx-5"
              href="/registered-agent/step-1"
            >
              GET STARTED
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <Image
            src="/free-llc/LLC green.jpg"
            alt="Free LLC"
            width={850}
            height={850}
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto ">
        <div className="flex gap-4 items-center justify-center my-16 py-7 mx-3 md:flex-row flex-col">
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

        {/* new era of privacy start */}

        <div className="pt-12 max-sm:mx-5">
          <p className="text-blue-600 font-semibold">NEW ERA OF PRIVACY</p>
          <h1 className="text-6xl max-sm:text-5xl font-bold">
            WHY CHOOSE VC <span className="text-primary">Filling</span>
          </h1>
          <h2 className="text-6xl max-sm:text-5xl font-bold">
            REGISTERED AGENT SERVICE?
          </h2>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-center gap-10 items-center py-10">
          <Image
            src="/amendment/articles2.webp"
            alt="Free LLC"
            width={500}
            height={500}
            className=""
          />
          <div className=" md:text-left w-1/2 md:px-16">
            <h3 className="text-5xl max-sm:text-4xl font-medium py-10 ">
              When Do I Need to File Articles of Amendment?
            </h3>
            <p className="text-xl font-light">
              You need to file Articles of Amendment with your Secretary of
              State when your LLC, C Corp, S Corp or nonprofit changes or
              modifies its:
            </p>

            <div className="pt-6 grid grid-cols-2 gap-5 px-10">
              <div>
                <div className="flex py-1">
                  <CheckBadgeIcon className="h-7 w-7" />
                  Business Address
                </div>
                <div className="flex py-3">
                  <CheckBadgeIcon className="h-7 w-7" />
                  Business Name
                </div>
                <div className="flex py-1">
                  <CheckBadgeIcon className="h-7 w-7" />
                  Stated Business Activities
                </div>
              </div>
              <div>
                <div className="flex py-1 text-primary">
                  <CheckBadgeIcon className="h-7 w-7" />
                  Registered Agent
                </div>
                <div className="flex py-3">
                  <CheckBadgeIcon className="h-7 w-7" />
                  Member Information
                </div>
                <div className="flex py-3">
                  <CheckBadgeIcon className="h-7 w-7" />
                  Number of authorized shares
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row  gap-10 items-center py-10">
          <div className=" md:text-left md:w-1/2 md:px-16">
            <h3 className="text-5xl font-medium py-10 ">
              Why Is It Important to File?
            </h3>
            <p className="text-xl font-light y ">
              Not keeping your business&apos;s information up-to-date may result
              in fines and penalties.
              <br />
              <br />
              You need to let the state know things have changed so that you
              remain in good standing. Otherwise, you risk being seen as
              negligent, damaging your reputation.
              <br />
              <br />
              For practical purposes, the state needs to know who to send
              official correspondence and legal notices to. For this reason,
              keeping information updated, such as your Registered Agent, is
              key.
            </p>
          </div>
          <Image
            src="/amendment/a3.webp"
            alt="Free LLC"
            width={500}
            height={500}
          />
        </div>

        <div className="mx-5 my-10 gap-5 grid md:grid-cols-2">
          {/* left section  */}
          <div>
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <CheckBadgeIcon className="min-h-12 min-w-12 max-h-12 max-w-12 text-primary" />
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    Get For{" "}
                    <span className="text-primary">Free registered agent</span>{" "}
                    the First Year
                  </h2>
                </div>

                <p className="py-7 md:text-xl text-base   ">
                  $0 Registered Agent service when you form your LLC, nonprofit
                  or corporation with VC FILING ($119/annually after that).
                </p>
              </div>
            </div>
            {/* part 2 */}
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <CheckBadgeIcon className="min-h-12 min-w-12 max-h-12 max-w-12 text-primary" />
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    Take Advantage of{" "}
                    <span className="text-primary">Industry-Leading</span>{" "}
                    Support
                  </h2>
                </div>

                <p className="py-7 md:text-xl text-base   ">
                  Fast and friendly customer service. Talk to a dedicated
                  specialist, not a salesperson.
                </p>
              </div>
            </div>
            {/* part 3 */}
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <CheckBadgeIcon className="min-h-12 min-w-12 max-h-12 max-w-12 text-primary" />
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    Modern, Simple and{" "}
                    <span className="text-primary">Personalized Dashboard</span>{" "}
                    Support
                  </h2>
                </div>

                <p className="py-7 md:text-xl text-base   ">
                  Your business essentials all in one place when you form your
                  business with VC FILING. Access, store & retrieve information
                  we&apos;ve received for your business anytime.
                </p>
              </div>
            </div>
          </div>
          {/* right section  */}
          <div className="mt-10">
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <CheckBadgeIcon className="min-h-12 min-w-12 max-h-12 max-w-12 text-primary" />
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    Expert Handling{" "}
                    <span className="text-primary">
                      Off all of your documents
                    </span>
                  </h2>
                </div>

                <p className="py-7 md:text-xl text-base font-light">
                  Always-available Registered Agents who&apos;ll receive state
                  and IRS mail correspondence, documents & legal proceedings on
                  your LLC&apos;s or corporation7apos;s behalf. Nobody gives you
                  more for less.
                </p>
              </div>
            </div>
            {/* part 2  */}
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <CheckBadgeIcon className="min-h-12 min-w-12 max-h-12 max-w-12 text-primary" />
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    Tailored{" "}
                    <span className="text-primary">
                      Email & SMS Notifications
                    </span>
                  </h2>
                </div>

                <p className="py-7 md:text-xl text-base my-2 font-light">
                  Get text and email notifications whenever we receive documents
                  for your business, all from inside your dashboard.
                </p>
              </div>
            </div>
            {/* part 3 */}
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <CheckBadgeIcon className="min-h-12 min-w-12 max-h-12 max-w-12 text-primary" />
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    <span className="text-primary">Never any Hidden Fees</span>{" "}
                    Or Contacts
                  </h2>
                </div>

                <p className="py-7 md:text-xl text-base my-2 font-light">
                  Your business essentials all in one place when you form your
                  business with VC FILING. Access, store & retrieve information
                  we&apos;ve received for your business anytime.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row  gap-10 items-center pb-28 pt-8 ">
          <div className=" md:text-left md:w-1/2 md:px-16">
            <h3 className="text-7xl font-medium py-10 ">We Make Filing Easy</h3>
            <p className="md:text-xl text-base font-light  ">
              We get it. Running a business takes time, money and lots of mental
              energy.
            </p>
            <p className="md:text-xl text-base font-light">
              No Contracts. No Surprise. Set Yourself Up for Success with VC
              FILING.
            </p>
            <p className="md:text-xl text-base font-light">
              {" "}
              Use our form to enter your business type and state, and place an
              order. The rest is up to us.
            </p>
          </div>

          <div className=" border border-gray-300  rounded-lg shadow-xl  ">
            <div className="relative bg-slate-300">
              <Image
                className="absolute right-0 mr-2"
                src="/amendment/logo.png"
                alt="Free LLC"
                width={70}
                height={70}
              />
            </div>
            <p className="text-center text-2xl py-6 font-bold">AMENDMENT</p>
            <div className="mx-5 py-5">
              <p className="text-center pt-4 py-3 pb-3">Entity Type</p>
              <select className="py-2 pt-2 px-32 mx-1 rounded-full border-2 gap-5 hover:border-red-600">
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
              <select className="py-2 px-36 mx-3 rounded-full border-2 gap-5 hover:border-red-600">
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
                <h1 className="text-4xl font-semibold">0$</h1>
                <p>Plus $0 state Fee</p>
              </div>

              <div className="flex justify-center items-center">
                <Link
                  className="px-20  py-5 bg-primary text-white border border-primary rounded-[30px] "
                  href="/registered-agent/step-1"
                >
                  ORDER NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* new section  */}

        {/*------------------ faq section ----------*/}
        <div className="my-7 md:px-10  mx-5">
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left  ">
            Common Questions About
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left pb-5">
            Registered Agent Services
          </h2>
          <Accordion type="single" collapsible className="text-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How much does a Registered agent cost?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light y">
                  A Registered Agent is free for the first year when you sign up
                  with VC Filing, regardless of what package you choose. The
                  cost to renew our Registered Agent Service after the first
                  year is $119 annually (with no obligation and no contract).
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Are There Any Hidden Cost ?</AccordionTrigger>
              <AccordionContent>
                <p className="my-2">
                  If you&apos;re filing an amendment for a business that&apos;s
                  not in your home state, you&apos;ll need to file a Foreign
                  Amendment. These will require additional documentation by your
                  state, including a Certificate of Good Standing.
                </p>{" "}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How Long Does It Take To Set Up A Registered Agent ?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2">
                  Our service fee to file Articles of Amendment is $99, so your
                  cost will be $99 + the fee in your state. State feels
                  typically are around $100-$200, but if you&apos;re a
                  nonprofit, the fee is often lower. <br />
                  To review the fee in your state, select the state and entity
                  type above. <br />
                  Some states also offer expedited filing, which is an
                  additional fee.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Are There Any Specific Rules ?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2">
                  An attorney isn&apos;t necessary to file an amendment. That
                  said, if you&apos;re ever faced with a confusing business
                  situation, it&apos;s never a bad idea to consult a trusted
                  legal professional to ensure you&apos;re making the most
                  educated decision you can.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What Will I Receive When Articles are Filed{" "}
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2">
                  You&apos;ll receive a copy of the articles once they&apos;re
                  filed. If you file with us, the governing state agency will
                  return a copy to us. Then we&apos;ll mail it to you for your
                  records.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* 1000 entrepreneurs part  */}

        <div className="text-center md:text-5xl text-2xl mx-5 font-bold pt-5 ">
          <h2>
            Loved by <span className="text-primary">1,000,000+</span>{" "}
          </h2>
          <h2>entrepreneurs across all 50 states</h2>
        </div>

        {/* part end */}

        {/* new part */}
        <div>
          <div className="pt-10 md:flex justify-center items-center mx-5 ">
            <div>
              <h2 className="md:text-5xl text-2xl font-bold pb-5">
                Join the <span className="text-primary"> 1,000,000+</span>{" "}
                businesses
              </h2>
              <p className=" md:text-xl text-base font-light y ">
                That trust VC FILING to start, manage and grow their business
              </p>
            </div>
            <div className="py-10 pb-9">
              <Link
                className="px-9 flex   ml-14 py-5  bg-primary text-white border border-primary rounded-[30px] "
                href={"/form-a-llc/"}
              >
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
        {/* new part end */}

        {/* review section start  */}
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
            <p className="">
              Easy, smooth, one of the best business decisions I&apos;ve ever
              made, was to utilize VC Filing
            </p>
            <p className="font-semibold py-5">CA, UNITED STATES</p>
          </div>
        </div>
        {/* review end */}

        <div className="flex justify-center items-center pb-4">
          <StarIcon
            className="min-h-10 max-h-10 min-w-10 max-w-10"
            color="#39b54a"
          />
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

        <div className="text-center pb-24 mx-5">
          <h2 className="md:text-5xl font-bold text-2xl  ">GET YOUR</h2>
          <h2 className="md:text-5xl font-bold text-2xl">
            <span className="text-primary">REGISTERED AGENT NOW </span>
          </h2>
          <p className="py-4 text-2xl">
            No Contracts. No Surprise. Set Yourself Up for Success with VC
            FILING.
          </p>
          <div className="flex justify-center items-center py-5">
            <Link
              className="px-10  py-5 bg-primary text-white border border-primary rounded-[30px] "
              href="/registered-agent/step-1"
            >
              GET STARTED NOW
            </Link>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default RegisteredAgent;
