import {
  CheckBadgeIcon,
  StarIcon,
  ChevronDownIcon,
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

const entityTypes = ["LLC", "C-Corporation", "Partnership", "Nonprofit"];

const Amendment = () => {
  return (
    <NavigationWrapper>
      <div className=" my-16 flex flex-col-reverse md:flex-row">
        <div className=" md:text-left max-sm:mx-5">
          <h1 className="text-5xl font-bold  pt-20 md:pl-20 max-sm:text-3xl">
            File Articles of
          </h1>
          <h2 className="md:text-5xl max-sm:text-3xl font-bold md:pl-20">
            Amendment
          </h2>
          <h2 className="text-xl md:pl-20 py-10 pb-24 ">
            Here&apos;s how to change your LLC&apos;s name, address or member
            information.
          </h2>
          <Link
            className="px-10 md:ml-20 py-5 font-bold bg-primary text-white border border-primary rounded-[30px] "
            href="/amendment/step-1"
          >
            ARTICLES OF AMENDMENT
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
        <div className="md:flex  md:py-10 mx-4 px-1">
          <div className=" md:text-left md:w-1/2 md:px-16 ">
            <h3 className="md:text-5xl text-3xl font-bold   ">
              What Are Articles of Amendment?
            </h3>
            <p className="md:text-xl text-base max-sm:pt-5 md:pt-5">
              Articles of Amendment are filed when a company makes a significant
              change to their{" "}
              <span className="text-primary">Articles of Incorporation</span> or
              Articles of Organization that were created when the business first
              formed.
            </p>
            <p className="md:pt-8 md:text-xl text-base  max-sm:py-3">
              As an organization, you&apos;re always evolving, shifting and
              improving. This means you&apos;ll inevitably need to change some
              of the important parameters of your business. That&apos;s where
              Articles of Amendment come in.
            </p>
          </div>
          <Image
            className="pt-10"
            src="/amendment/articles1.webp"
            alt="Free LLC"
            width={600}
            height={600}
          />
        </div>

        <div className="md:flex justify-center gap-10 items-center py-10 mx-5">
          <Image
            src="/amendment/articles2.webp"
            alt="Free LLC"
            width={600}
            height={600}
            className=""
          />
          <div className=" md:text-left md:w-1/2 md:px-16 px-1">
            <h3 className="md:text-5xl text-2xl font-bold md:py-10 max-sm:pt-5  ">
              When Do I Need to File Articles of Amendment?
            </h3>
            <p className="md:text-xl text-base max-sm:pt-5">
              You need to file Articles of Amendment with your Secretary of
              State when your LLC, C Corp, S Corp or nonprofit changes or
              modifies its:
            </p>

            <div className="md:pt-16 max-sm:pt-6 md:justify-between flex">
              <div className="px-2">
                <div className="flex py-1 gap-2">
                  <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7" />
                  Business Address
                </div>
                <div className="flex py-3 gap-2">
                  <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7" />
                  Business Name
                </div>
                <div className="flex py-3 gap-2">
                  <CheckBadgeIcon className="min-h-7 max-h-7 min-w-7 max-w-7" />
                  Stated Business Activities
                </div>
              </div>
              <div className="px-2">
                <div className="flex py-1 gap-2 text-primary ">
                  <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7" />
                  Registered Agent
                </div>
                <div className="flex py-3 gap-2 ">
                  <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7" />
                  Member Information
                </div>
                <div className="flex py-3 gap-2 ">
                  <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7" />
                  Number of authorized shares
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex    gap-10 items-center md:py-10 mx-5">
          <div className=" md:text-left md:w-1/2 md:px-16">
            <h3 className="md:text-5xl text-2xl font-bold md:py-10 ">
              Why Is It Important to File?
            </h3>
            <p className="md:text-xl text-base  max-sm:pt-5   ">
              Not keeping your business&apos;s information up-to-date may result
              in fines and penalties.
            </p>
            <p className="md:text-xl text-base   py-3 ">
              You need to let the state know things have changed so that you
              remain in good standing. Otherwise, you risk being seen as
              negligent, damaging your reputation.
            </p>
            <p className="md:text-xl text-base ">
              For practical purposes, the state needs to know who to send
              official correspondence and legal notices to. For this reason,
              keeping information updated, such as your Registered Agent, is
              key.
            </p>
          </div>
          <Image
            className="pt-5"
            src="/amendment/a3.webp"
            alt="Free LLC"
            width={500}
            height={500}
          />
        </div>

        <div className="md:pt-12 mx-5 pt-6">
          <p className="text-blue-600 font-semibold">NEW ERA OF PRIVACY</p>
          <h2 className="md:text-5xl  font-bold text-2xl ">HOW TO FILE</h2>
          <h2 className="md:text-5xl  font-bold text-2xl">
            ARTICLES <span className="text-primary"> OF </span>AMENDMENT
          </h2>
        </div>

        {/* new section start  */}
        <div className="mx-5 my-10 gap-5 md:grid md:grid-cols-2">
          {/* left section  */}
          <div>
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <p className="text-3xl bg-white p-7  rounded-lg  text-blue-400 font-semibold">
                    1
                  </p>
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    determine the{" "}
                    <span className="text-primary">correct form</span> needed
                  </h2>
                </div>

                <p className="py-7 md:text-xl text-base ">
                  This is typically provided by your state. Make sure you
                  can&apos;t file a cheaper or simpler form. For example, some
                  states have a separate form solely for changing your
                  Registered Agent that often requires a lower fee than Articles
                  of Amendment. Research your state&apos;s requirements before
                  beginning.
                </p>
              </div>
            </div>
            {/* part 2 */}
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <p className="text-3xl bg-white p-7  rounded-lg  text-blue-400 font-semibold">
                    3
                  </p>
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    submit the form to the{" "}
                    <span className="text-primary">state</span> and{" "}
                    <span className="text-primary">pay</span> the filling fee
                  </h2>
                </div>

                <p className="py-7 md:text-xl text-base text-wrap leading-normal ">
                  Depending on the state, this may be done online or delivered
                  in person. It typically costs $100-$200 — but if you&apos;re a
                  nonprofit corporation, the fee is often lower.
                </p>
              </div>
            </div>
          </div>
          {/* right section  */}
          <div className="mt-10">
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <p className="text-3xl bg-white p-7  rounded-lg  text-blue-400 font-semibold">
                    2
                  </p>
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    fill out the{" "}
                    <span className="text-primary">amendment form</span>
                  </h2>
                </div>

                <p className="py-7 md:text-xl text-base text-wrap leading-normal ">
                  A standard form includes your business name, state, date,
                  article number(s) being amended, a written statement that the
                  article is being amended, the amendment itself and a statement
                  that all other articles remain in effect. You&apos;ll also
                  need signatures from members. Failing to provide all the
                  necessary info could mean your amendment is denied.
                </p>
              </div>
            </div>
            {/* part 2  */}
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <p className="text-3xl bg-white p-7  rounded-lg  text-blue-400 font-semibold">
                    4
                  </p>
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    file{" "}
                    <span className="text-primary">restated articles </span>of
                    organization or incorporation
                  </h2>
                </div>

                <p className="py-7 md:text-xl text-base text-wrap leading-normal ">
                  Once the Articles of Amendment are submitted, you may want to
                  file restated Articles of Organization that reflect these new
                  changes. While its not a requirement, it helps consolidate
                  your documents so everything&apos;s streamlined.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row  gap-10 items-center pt-10 md:pt-24 mx-5">
          <div className=" md:text-left md:w-1/2 md:px-16">
            <h3 className="md:text-5xl text-3xl font-bold   ">
              We Make Filing
            </h3>
            <h3 className="md:text-5xl text-3xl font-bold">Easy</h3>
            <p className="md:text-xl text-base   pt-10 py-2 ">
              We get it. Running a business takes time, money and lots of mental
              energy.
            </p>
            <p className="py-2">
              VC FILING offers fast and affordable professional filing services
              so your Articles of Amendment will be out of sight and out of
              mind. Life is short — why spend it doing paperwork?
            </p>
            <p className="py-2">
              Use our form to enter your business type and state, and place an
              order. The rest is up to us.
            </p>
          </div>

          <div className=" border border-gray-300  rounded-xl shadow-xl min-w-[95%] md:min-w-[10%] md:w-[40%]">
            <div className="relative bg-slate-300 ">
              <Image
                className="absolute right-0 mr-2"
                src="/amendment/logo.png"
                alt="Free LLC"
                width={70}
                height={70}
              />
            </div>
            <p className="text-center text-2xl pt-8 pb-3 font-bold">
              AMENDMENT
            </p>
            <div className="pb-5 flex flex-col justify-center">
              <p className="text-center pt-4 py-3">Entity Type</p>
              <select className="py-2 mx-1 rounded-full border-2 text-center hover:border-red-600">
                <option hidden value="">
                  Select Entity Type
                </option>
                {entityTypes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <p className="pb-2 pt-3  text-center">Entity State </p>
              <select className="py-2 mx-1 rounded-full border-2 text-center hover:border-red-600">
                <option value="">Select State</option>
                {entityTypes.map((item) => (
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
                  className="px-9 py-5 bg-primary text-white border border-primary rounded-[30px] "
                  href="/amendment/step-1"
                >
                  ORDER NOW
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/*------------------ faq section ----------*/}
        <div className="my-16 md:px-10 md:pt-20 mx-5">
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left ">
            Common Questions About
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left pb-10">
            Filing Articles of Amendment
          </h2>
          <Accordion type="single" collapsible className="text-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How Long Does It Take To Change a Company Name?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base  ">
                  The filing time for Articles of Amendment typically takes four
                  to six weeks, depending on the governing state agency. For
                  example, in California, the process takes over eight weeks. In
                  Texas, it may take just three to five business days. Many
                  states offer expedited service for an additional fee. For the
                  purpose of federal taxes, the IRS typically takes about six to
                  eight weeks to register a change of business name.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How do i file out-of-state Articles of Amendment ?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base  ">
                  If you&apos;re filing an amendment for a business that&apos;s
                  not in your home state, you&apos;ll need to file a Foreign
                  Amendment. These will require additional documentation by your
                  state, including a Certificate of Good Standing.
                </p>{" "}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How much does it cost to file Articles of Amendment ?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base  ">
                  Our service fee to file Articles of Amendment is $99, so your
                  cost will be $99 + the fee in your state. State feels
                  typically are around $100-$200, but if you&apos;re a
                  nonprofit, the fee is often lower. To review the fee in your
                  state, select the state and entity type above. Some states
                  also offer expedited filing, which is an additional fee.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Do i need to consult a Lawyer While Filling ?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base  ">
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
                <p className="my-2 md:text-xl text-base  ">
                  You&apos;ll receive a copy of the articles once they&apos;re
                  filed. If you file with us, the governing state agency will
                  return a copy to us. Then we&apos;ll mail it to you for your
                  records.
                </p>
              </AccordionContent>

              <AccordionContent></AccordionContent>
              <AccordionContent></AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex justify-center items-center pb-4 mx-5">
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

        <div className="text-center pb-24 mx-5">
          <h2 className="md:text-5xl text-2xl font-bold md:py-3">READY TO</h2>
          <h2 className="md:text-5xl text-2xl font-bold md:py-3">
            <span className="text-primary">MAKE A</span> CHANGE ?
          </h2>
          <p className="md:text-xl text-base max-sm:pt-4">
            Save the hassle. Let us file your LLC&apos;s Articles of Amendment
            on your behalf.
          </p>
          <div className="flex justify-center items-center py-5">
            <Link
              className="md:px-10 md:py-5 py-6 px-4  bg-primary text-white border border-primary rounded-[30px] "
              href="/amendment/step-1"
            >
              FILE ARTICLES OF AMENDMENT
            </Link>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default Amendment;
