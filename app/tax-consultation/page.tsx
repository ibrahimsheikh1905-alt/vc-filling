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
import { CheckIcon } from "lucide-react";
import NavigationWrapper from "@/components/NavigationWrapper";
import { statesInUS } from "@/data";
import { Item } from "@radix-ui/react-navigation-menu";

const TaxConsultation = () => {
  return (
    <NavigationWrapper>
      <div className=" my-16 flex flex-col-reverse md:flex-row">
        <div className=" md:text-left mx-5">
          <h1 className="md:text-5xl text-3xl font-bold  pt-20 md:pl-20">
            Stress-Free
          </h1>
          <h2 className="md:text-5xl text-3xl font-bold   md:pl-20">
            Accounting and
          </h2>
          <h2 className="md:text-5xl text-3xl font-bold   md:pl-20 pb-10">
            Bookkeeping
          </h2>
          <h2 className="md:  md:pl-20 pb-12">
            Business accounting and bookkeeping services at a low monthly cost —
            so you can focus on what matters.
          </h2>
          <Link
            className="px-10 md:ml-20 py-5 font-bold bg-primary text-white border border-primary rounded-[30px] "
            href="/tax-consultation/step-1"
          >
            BOOK YOUR FREE CONSULT
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
            <p className="">
              Entrepreneurship is booming - and we&apos;re happy to be <br />{" "}
              one of America&apos;s fastest growing companies.
            </p>
          </div>
        </div>

        {/* new section start  */}
        <div className="md:flex  mx-5">
          <div>
            <h2 className="md:text-5xl text-2xl font-semibold capitalize">
              Keeping on Top of Your Finances Takes a Lot of Effort
            </h2>
            <p className="py-3 md: ">
              Understanding the tax requirements of your business entity is
              complex and requires a lot of dedicated time. Trying to do
              everything yourself can be mentally draining — and financially
              draining, too when it comes to taxes and bookkeeping!
            </p>
          </div>
          <div>
            <Image
              src="/form-c-corporation/salestax.webp"
              alt="image"
              width={1800}
              height={1800}
            />
          </div>
        </div>
        {/* new section start */}
        <div className="md:flex  md:pt-24 mx-5">
          <div>
            <Image
              src="/form-c-corporation/call.webp"
              alt="image"
              width={1800}
              height={1800}
            />
          </div>
          <div>
            <h2 className="md:text-5xl text-2xl font-semibold capitalize">
              Take the Hassle Out of Bookkeeping and Accounting
            </h2>
            <p className="py-3 md:  ">
              Get accountant services and solutions tailored to suit your
              business&apos;s needs. With VC FILING, there are no high fees,
              mountains of paperwork, or administrative headaches. Get expert
              knowledge, hands-on support, and peace of mind to make your life
              easier.
            </p>
          </div>
        </div>
        {/* new era of privacy  part start  */}
        <div className="md:pt-24 max-sm:pt-8 pb-3 mx-5">
          <p className="text-blue-600 font-semibold">NEW ERA OF PRIVACY</p>
          <h2 className="md:text-5xl text-2xl font-bold uppercase">
            the benefits <span className="text-primary">of VC FILING</span>{" "}
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold uppercase">
            {" "}
            accounting and bookkeeping
          </h2>
          <p className="py-3 md:  ">
            Our business bookkeeping and accounting service take the worry out
            of managing your tax and finances while saving you up to 50 hours
            and $2,500+ per year! Check out the host of other great benefits
            below.
          </p>
        </div>
        {/* new section start  */}
        <div className="mx-5 md:my-10 gap-5 grid md:grid-cols-2">
          {/* left section  */}
          <div>
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <CheckBadgeIcon className="min-h-12 min-w-12 max-h-12 max-w-12 text-primary" />
                  <h2 className="font-bold md:text-2xl  uppercase">
                    <span className="text-primary">Stress-Free</span> Tax Filing
                    — Yes, It Is Possible!
                  </h2>
                </div>

                <p className="py-3 md:   ">
                  Get your business and personal taxes filed for you and get
                  advice on enhancing your potential yearly savings.
                </p>
              </div>
            </div>
            {/* part 2 */}
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <CheckBadgeIcon className="min-h-12 min-w-12 max-h-12 max-w-12 text-primary" />
                  <h2 className="font-bold md:text-2xl  uppercase">
                    <span className="text-primary"> Financial Reporting</span>,
                    Online Tools, & Resources
                  </h2>
                </div>

                <p className="py-3 md:   ">
                  Access your mobile-friendly financial reports and tools or
                  easily contact your accountant or bookkeeper anytime,
                  anywhere.
                </p>
              </div>
            </div>
            {/* part 3 */}
            <div className="border border-gray-200 rounded-2xl flex p-5  md:mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <CheckBadgeIcon className="min-h-12 min-w-12 max-h-12 max-w-12 text-primary" />
                  <h2 className="font-bold md:text-2xl  uppercase">
                    Link Up to Four{" "}
                    <span className="text-primary">Bank Accounts</span>
                  </h2>
                </div>

                <p className="py-3 md:   ">
                  Upload receipts to your dashboard to unlock essential business
                  insights and visual profit and loss statements.
                </p>
              </div>
            </div>
          </div>
          {/* right section  */}
          <div className="md:mt-10">
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div
                  className="flex gap-4 bg-blue-50
              pt-6 pb-6 pl-3  rounded-xl mb-2 "
                >
                  <CheckBadgeIcon className="min-h-12 min-w-12 max-h-12 max-w-12 text-primary" />
                  <h2 className="font-bold md:text-2xl  uppercase">
                    <span className="text-primary">Compliance Assistance</span>{" "}
                    Keeps the IRS at Bay
                  </h2>
                </div>

                <p className="py-3 md:  ">
                  Entrust your bookkeeping, taxes, and accounting to dedicated
                  specialists. Minimize chances of IRS audits and fees.
                </p>
              </div>
            </div>
            {/* part 2  */}
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <CheckBadgeIcon className="min-h-12 min-w-12 max-h-12 max-w-12 text-primary" />
                  <h2 className="font-bold md:text-2xl  uppercase">
                    Monthly or Quarterly{" "}
                    <span className="text-primary">Bookkeeping</span>
                  </h2>
                </div>

                <p className="py-3 md:   ">
                  Monitor business performance. Turn accounting figures into
                  actionable information via your modern, intuitive dashboard.
                </p>
              </div>
            </div>
            {/* part 3 */}
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <CheckBadgeIcon className="min-h-12 min-w-12 max-h-12 max-w-12 text-primary" />
                  <h2 className="font-bold md:text-2xl  uppercase">
                    Get Advice from{" "}
                    <span className="text-primary">Bookkeeping & Tax Pros</span>
                  </h2>
                </div>

                <p className="py-3 md:  ">
                  Get advice or one-on-one support from dedicated specialists
                  via email, phone, or online chat in your personalized
                  dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* new section start          */}
        <h2 className="md:text-5xl text-2xl font-bold text-center my-6 capitalize md:py-20 mx-5">
          How to Get Access to Affordable Accounting & Bookkeeping
        </h2>

        {/* new section start  */}
        <div className="md:mx-60 ">
          <div className=" p-5">
            <div className="flex max-sm:justify-center gap-2 my-5 md:mx-2 ">
              <span className="font-bold bg-green-500 p-3 rounded-xl text-2xl">
                01
              </span>
            </div>
            <div className="md:flex">
              <div>
                {" "}
                <h2 className="font-bold md:text-2xl  uppercase">
                  Book Your Free, No Obligation Tax Consultation
                </h2>
                <p className="my-2     md:mx-3">
                  In your free 30-minute consult, a specialist accountant will
                  review your finances with you to highlight where you can save
                  money and offer practical advice.
                </p>
              </div>
              <div className="">
                <Image
                  className=""
                  src="/form-c-corporation/book1.webp"
                  alt="Image1"
                  width={850}
                  height={1500}
                />
              </div>
            </div>
          </div>
          {/* part 2  */}
          <div className=" p-5">
            <div className="flex gap-2 max-sm:justify-center my-5 mx-2 ">
              <span className="font-bold bg-green-500 p-3 rounded-xl text-2xl">
                02
              </span>
            </div>
            <div className="md:flex">
              <div>
                {" "}
                <h2 className="font-bold md:text-2xl  uppercase">
                  Choose the Package That Suits Your Needs
                </h2>
                <p className="my-2 md:    md:mx-3">
                  During your consultation, your accountant will help you
                  determine which package (Starter or Plus) best meets your
                  business&apos;s needs.
                </p>
              </div>
              <div>
                <Image
                  className=""
                  src="/form-c-corporation/book2.webp"
                  alt="Image1"
                  width={850}
                  height={1500}
                />
              </div>
            </div>
          </div>
          {/* part 3 */}
          <div className=" p-5">
            <div className="flex  max-sm:justify-center gap-2 my-5 mx-2 ">
              <span className="font-bold  bg-green-500 p-3 rounded-xl text-2xl">
                03
              </span>
            </div>
            <div className="md:flex">
              <div>
                {" "}
                <h2 className="font-bold md:text-2xl  uppercase">
                  Start Setting Up Your Dashboard
                </h2>
                <p className="my-2 md:    md:mx-3">
                  Your accountant will then guide you through the initial stages
                  of populating your dashboard. Then you&apos;ll receive your
                  login details so you can complete the setup.
                </p>
              </div>
              <div>
                <Image
                  className=""
                  src="/form-c-corporation/book3.webp"
                  alt="Image1"
                  width={850}
                  height={1500}
                />
              </div>
            </div>
          </div>
        </div>

        {/* new section start  */}
        <div className="md:py-20 py-10 md:pb-20">
          <h2 className="md:text-5xl text-2xl font-bold text-center  capitalize ">
            Loved by 1,000,000+
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold text-center  capitalize md:pb-24 ">
            entrepreneurs across all 50 states
          </h2>
        </div>
        {/* new section start  */}
        <div className="md:flex md:py-12 mx-5">
          <div>
            <h2 className="md:text-4xl max-sm:text-3xl font-bold">
              See What Our Clients
            </h2>
            <h2 className="md:text-4xl max-sm:text-3xl font-bold">
              Have to Say…
            </h2>
            <p className="md:py-10 max-sm:py-4 ">
              “One of the things I really appreciated with VC FILING is that it
              took care of everything for me.”
            </p>
            <p className="font-bold md:py-5 max-sm:pb-3">
              Khadijah Suleman, Aloaye Clothing LLC
            </p>
          </div>
          <div>
            <Image
              className=""
              src="/form-c-corporation/video.webp"
              alt="Image1"
              width={700}
              height={700}
            />
          </div>
        </div>

        {/* review section start  */}
        <div className="md:flex  md:py-16 max-sm:pt-7  gap-8 md:mx-20 mx-5  ">
          <div className="">
            <h2 className="text-2xl ">Deana A.</h2>

            <div className="flex gap-1 pt-5 pb-3">
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
            </div>
            <p className="text-wrap">
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
            <p className="text-wrap">
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

        {/* new section start  */}
        <div className="md:flex justify-center items-center gap-16 mx-5">
          <div>
            <h2 className="md:text-4xl text-2xl font-bold py-3 uppercase">
              Join the <span className="text-primary">1,000,000+</span>{" "}
              businesses
            </h2>
            <p className="my-2 md:pb-10 max-sm:pb-8">
              That trust VC FILING to start, manage, and grow their business
            </p>
          </div>
          <div>
            <Link
              className="px-9 py-5 bg-primary text-white border border-primary rounded-[30px] "
              href={"/form-a-llc/"}
            >
              GET STARTED
            </Link>
          </div>
        </div>

        {/*------------------ faq section ----------*/}
        <div className="md:my-16 max-sm:pt-10 md:px-10 md:pt-12 pt-8 max-sm:pb-5 md:pb-16 mx-5">
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left  capitalize">
            Common Questions About
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left  capitalize md:pb-14">
            Business Accounting
          </h2>
          <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How much does your service cost?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:   ">
                  The Starter Package costs $90 per month and includes:
                </p>
                <p className="my-2 md:  ">Quarterly bookkeeping</p>
                <p className="my-2 md:  ">Business tax return</p>
                <p className="my-2 md:  ">
                  Personal taxes (for sole proprietorships and single-member
                  LLCs only)
                </p>
                <p className="my-2 md:  ">Compliance assistance</p>
                <p className="my-2 md:  ">Financial reporting</p>
                <p className="my-2 md:  ">Online tools and resources</p>
                <p className="my-2 md:  ">Link up to two bank accounts</p>
                <p className="my-2 md:  ">
                  Accounting advice from our team of experts
                </p>
                <p className="my-2 py-5 md:  ">
                  The Plus package costs $180 per month. It&apos;s a more
                  personalized service and includes the following: Monthly
                  bookkeeping
                </p>
                <p className="my-2 md:  ">Business tax return</p>
                <p className="my-2 md:  ">Personal taxes (any entity type)</p>
                <p className="my-2 md:  ">
                  Accounting advice from a dedicated bookkeeper and tax pro
                </p>
                <p className="my-2 md:  ">Compliance assistance</p>
                <p className="my-2 md:  ">Financial reporting</p>
                <p className="my-2 md:  ">Online tools and resources</p>
                <p className="my-2 md:  ">Link up to four bank accounts</p>
                <p className="my-2 md:  ">
                  Tax planning sessions with an expert
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Are there any hidden cost ?</AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:   ">
                  Never! We&apos;re all about transparency, and there are no
                  hidden costs associated with our business accounting and
                  bookkeeping service.
                </p>{" "}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How long does it take to get setup?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:   ">
                  Your free 30-minute tax consultation will help you choose the
                  right package and get set up within your dashboard. After the
                  consult, you&apos;re ready to go as soon as you receive your
                  username and password via email.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Do you have any guides or resources for getting started ?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:   ">
                  Yes! Get detailed information on{" "}
                  <span className="text-primary">
                    filing your business taxes
                  </span>
                  and{" "}
                  <span className="text-primary">
                    finding the right small business accountant.
                  </span>{" "}
                  Learn all about the{" "}
                  <span className="text-primary">
                    differences between bookkeeping and accounting{" "}
                  </span>
                  and what{" "}
                  <span className="text-primary">
                    forms you need for LLC taxes.
                  </span>
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Do you provide hands on support?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:   ">
                  Absolutely! If you have questions about our business
                  accounting services or need other support,{" "}
                  <span className="text-primary">contact</span> us via your
                  personalized dashboard or use our contact form. We also
                  recommend checking out our top{" "}
                  <span className="text-primary">tax filing tips</span> and what
                  <span className="text-primary">
                    {" "}
                    forms you&apos;ll need to file your LLC taxes.
                  </span>
                </p>
                <p className="my-2 md:  ">
                  Once you&apos;ve signed up for our accounting services,
                  contact your accounting team within your personalized
                  dashboard if you need support regarding your accounting and
                  bookkeeping tools, dashboard, or any financial or tax-related
                  advice
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* ----------------------new part ---------------------- */}

        {/* review and customer section  */}
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

        <div className="text-center pb-6 mx-5">
          <h2 className="md:text-5xl text-2xl font-bold   uppercase ">
            stress free
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold   uppercase ">
            <span className="text-primary">accounting and</span>
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold   uppercase ">
            <span className="text-primary">bookkeeping</span>
          </h2>
          <p className="my-2 md:py-5">
            For a low monthly cost so you can focus on what matters.
          </p>
        </div>
        <div className="flex justify-center items-center md:pb-16 max-sm:pb-5">
          <Link
            className="px-9 py-5 bg-primary text-white border border-primary rounded-[30px] "
            href="/tax-consultation/step-1"
          >
            BOOK YOUR FREE CONSULT
          </Link>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default TaxConsultation;
