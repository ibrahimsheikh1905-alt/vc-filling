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

const Amendment = () => {
  return (
    <NavigationWrapper>
      <div className=" my-16 flex flex-col-reverse md:flex-row">
        <div className="flex-1">
          <div className=" md:text-left max-sm:mx-5">
            <h1 className="text-5xl font-bold  pt-20 md:pl-20 max-sm:text-3xl">
              Stress-Free
            </h1>
            <h2 className="md:text-5xl max-sm:text-3xl font-bold md:pl-20">
              Accounting and
            </h2>
            <h2 className="md:text-5xl max-sm:text-3xl font-bold md:pl-20">
              Bookkeeping
            </h2>
            <p className="text-xl md:pl-20 pt-10">
              Business accounting and bookkeeping
            </p>
            <p className="text-xl md:pl-20">
              services at a low monthly cost so you can
            </p>
            <p className=" text-xl md:pl-20 pb-16 ">focus on what matters.</p>
            <Link
              className="px-10 md:ml-20 py-5 font-bold bg-primary text-white border border-primary rounded-[30px] "
              href={"/form-a-llc/"}
            >
              BOOK YOUR FREE CONSULT
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <Image
            src="/free-llc/LLC green.jpg"
            alt="Free LLC"
            width={1100}
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
        {/* new section start  */}
        <div className="md:flex  md:py-10 mx-4 px-1">
          <div className=" md:text-left md:w-1/2 md:px-16 ">
            <h3 className="md:text-3xl text-3xl font-bold">
              Keeping on Top of Your?
            </h3>
            <h3 className="md:text-3xl text-3xl font-bold">
              Finances Takes a Lot of
            </h3>
            <h3 className="md:text-3xl text-3xl font-bold">Effort</h3>
            <p className="md:text-xl  max-sm:pt-5 md:pt-5">
              Understanding the tax requirements of your business entity is
              complex and requires a lot of dedicated time. Trying to do
              everything yourself can be mentally draining — and financially
              draining, too when it comes to taxes and bookkeeping!
            </p>
          </div>
          <Image
            className=""
            src="/book-cons/con1.webp"
            alt="Free LLC"
            width={600}
            height={600}
          />
        </div>

        <div className="md:flex justify-center gap-10 items-center md:py-10 mx-5">
          <Image
            src="/book-cons/con2.webp"
            alt="Free LLC"
            width={600}
            height={600}
            className=""
          />
          <div className=" md:text-left md:w-1/2 md:px-16 px-1">
            <h3 className="md:text-3xl text-2xl font-bold md:pt-10 max-sm:pt-5  ">
              Take the Hassle Out of?
            </h3>
            <h3 className="md:text-3xl text-2xl font-bold">Bookkeeping and</h3>
            <h3 className="md:text-3xl text-2xl font-bold">Accounting</h3>
            <p className="md:text-xl  max-sm:pt-5 mb-5 pt-5">
              Get accountant services and solutions tailored to suit your
              business&apos;s needs. With VC FILING, there are no high fees,
              mountains of paperwork, or administrative headaches. Get expert
              knowledge, hands-on support, and peace of mind to make your life
              easier.
            </p>
          </div>
        </div>
        {/* new section start  */}
        <div className="md:pl-10">
          <div className="md:pt-24 pb-3 mx-5">
            <p className="text-blue-600 font-extrabold">NEW ERA OF PRIVACY</p>
            <h2 className="md:text-6xl text-2xl font-extrabold uppercase">
              the benefits of <span className="text-primary">VC FILING</span>
            </h2>
            <h2 className="md:text-6xl text-2xl font-extrabold uppercase">
              accounting and bookkeeping
            </h2>
            <p className="text-lg pt-6">
              Our business bookkeeping and accounting service take the worry of
            </p>
            <p className="text-lg">
              managing your tax and finances while saving you up to 50 hours and
              $2,500+ per
            </p>
            <p className="text-lg">
              year! Check out the host of other great benefits below.
            </p>
          </div>
        </div>
        {/* new section start  */}
        <div className="md:grid md:grid-cols-2 gap-6 md:mx-20 pt-8 max-sm:mx-5">
          {/* left side  */}
          <div>
            {/* part 1  */}
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <CheckBadgeIcon className="min-h-8 min-w-8 max-h-8 max-w-8 text-primary" />
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    <span className="text-primary"> Stress-Free</span> Tax
                    Filing — Yes, It Is Possible!
                  </h2>
                </div>

                <p className="py-7 md:text-xl text-base text-wrap leading-normal ">
                  Get your business and personal taxes filed for you and get
                  advice on enhancing your potential yearly savings.
                </p>
              </div>
            </div>
            {/* part 2  */}
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <CheckBadgeIcon className="min-h-8 min-w-8 max-h-8 max-w-8 text-primary" />
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    Monthly or Quarterly{" "}
                    <span className="text-primary">Bookkeeping</span>
                  </h2>
                </div>

                <p className="py-7 md:text-xl text-base text-wrap leading-normal ">
                  Monitor business performance. Turn accounting figures into
                  actionable information via your modern, intuitive dashboard.
                </p>
              </div>
            </div>
            {/* part 3  */}
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <CheckBadgeIcon className="min-h-8 min-w-8 max-h-8 max-w-8 text-primary" />
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    Link Up to{" "}
                    <span className="text-primary">Four Bank Accounts</span>
                  </h2>
                </div>

                <p className="py-7 md:text-xl text-base text-wrap leading-normal ">
                  Upload receipts to your dashboard to unlock essential business
                  insights and visual profit and loss statements..
                </p>
              </div>
            </div>
          </div>
          {/* right side  */}
          <div className="mt-10">
            {/* part 1  */}
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <CheckBadgeIcon className="min-h-8 min-w-8 max-h-8 max-w-8 text-primary" />
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    <span className="text-primary"> Compliance Assistance</span>{" "}
                    Keeps the IRS at Bay
                  </h2>
                </div>

                <p className="py-7 md:text-xl text-base text-wrap leading-normal ">
                  Entrust your bookkeeping, taxes, and accounting to dedicated
                  specialists. Minimize chances of IRS audits and fees.
                </p>
              </div>
            </div>
            {/* part 2  */}
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <CheckBadgeIcon className="min-h-8 min-w-8 max-h-8 max-w-8 text-primary" />
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    Monthly or Quarterly{" "}
                    <span className="text-primary"> Bookkeeping</span>
                  </h2>
                </div>

                <p className="py-7 md:text-xl text-base text-wrap leading-normal ">
                  Monitor business performance. Turn accounting figures into
                  actionable information via your modern, intuitive dashboard.
                </p>
              </div>
            </div>
            {/* part 3  */}
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <CheckBadgeIcon className="min-h-8 min-w-8 max-h-8 max-w-8 text-primary" />
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    Get Advice from{" "}
                    <span className="text-primary">Bookkeeping & Tax Pro</span>
                  </h2>
                </div>

                <p className="py-7 md:text-xl text-base text-wrap leading-normal ">
                  Get advice or one-on-one support from dedicated specialists
                  via email, phone, or online chat in your personalized
                  dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* new section start  */}
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
                <h2 className="font-bold md:text-xl  uppercase">
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
                <h2 className="font-bold md:text-xl  uppercase">
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
                <h2 className="font-bold md:text-xl  uppercase">
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
        <div className="text-center my-8 pt-20 md:mx-32">
          <h2 className="font-semibold text-4xl ">Chosen by 1,000,000+</h2>
          <h2 className="font-semibold text-4xl">
            entrepreneurs across all 50 states
          </h2>
        </div>
        {/* new section start  */}
        <div>
          <div className="md:grid grid-cols-2 gap-5 md:py-12 mx-5">
            <div className="pt-7">
              <h2 className="md:text-4xl max-sm:text-3xl font-bold">
                See What Our Clients
              </h2>
              <h2 className="md:text-4xl max-sm:text-3xl font-bold">
                Have to Say…
              </h2>
              <p className="md:pt-4 max-sm:py-4 ">
                “One of the things I really appreciated with VC FILING
              </p>
              <p className="md:pb-4">
                is that it took care of everything for me.”
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
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>

        {/* new section start  */}

        {/* new section start  */}
        <div className="md:flex  md:py-16 max-sm:pt-7  gap-8 md:mx-20 mx-5  ">
          <div className="border rounded-xl md:pl-5 py-2 shadow-lg p-2  ">
            <div className="max-sm:mx-5">
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
          </div>

          {/* part2 review */}
          <div className="border rounded-xl md:pl-5 py-2 shadow-lg max-sm:my-6">
            <div className="max-sm:mx-5">
              <h2 className="text-2xl ">SCOTT B.</h2>
              <div className="flex gap-1 pt-5 pb-3">
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-wrap">
                VC Filing has been great to work with. Their prices are
                reasonable and they exceed expectations.
              </p>
              <p className="font-semibold py-5">MS, UNITED STATES</p>
            </div>
          </div>

          {/* part 3 review  */}
          <div className="border rounded-xl md:pl-5 py-2 shadow-lg">
            <div className="max-sm:mx-5">
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
                made, was to utilize VC Filing .
              </p>
              <p className="font-semibold py-5">CA, UNITED STATES</p>
            </div>
          </div>
        </div>

        {/* new part  */}
        <div>
          <div className="pt-10 md:flex justify-center items-center gap-6 mx-5 ">
            <div>
              <h2 className="md:text-4xl text-2xl font-bold pb-5 uppercase">
                Join the <span className="text-primary"> 1,000,000+</span>{" "}
                businesses
              </h2>
              <p className=" md:text-xl  ">
                That trust VC FILING to start, manage and grow their business
              </p>
            </div>
            <div className="py-10 pb-9 max-sm:flex justify-center items-center">
              <Link
                className="px-9    md:ml-14 py-5 font-bold  bg-primary text-white border border-primary rounded-[30px] "
                href={"/form-a-llc/"}
              >
                GET STARTED
              </Link>
            </div>
          </div>
        </div>

        {/*------------------ faq section ----------*/}
        <div className="md:my-16 md:px-10 md:pt-20 mx-5">
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left ">
            Common Questions About
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left md:pb-10 max-sm:pb-5">
            Business Accounting
          </h2>
          <Accordion type="single" collapsible className="text-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How Much Does Your service Cost?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl   ">
                  The Starter Package costs $90 per month and includes:
                </p>
                <p className="mx-5">Quarterly bookkeeping</p>
                <p className="mx-5">Business tax return</p>
                <p className="mx-5">
                  Personal taxes (for sole proprietorships and single-member
                  LLCs only)
                </p>
                <p className="mx-5">Compliance assistance</p>
                <p className="mx-5">Financial reporting</p>
                <p className="mx-5">Online tools and resources</p>
                <p className="mx-5">Link up to two bank accounts</p>
                <p className="mx-5">
                  Accounting advice from our team of experts
                </p>
                <p className="my-5 md:text-xl ">
                  The Plus package costs $180 per month. It&apos;s a more
                  personalized service and includes the following: Monthly
                  bookkeeping
                </p>
                <p className="mx-5">Business tax return</p>
                <p className="mx-5">Personal taxes (any entity type)</p>
                <p className="mx-5">
                  Accounting advice from a dedicated bookkeeper and tax pro
                </p>
                <p className="mx-5">Compliance assistance</p>
                <p className="mx-5">Financial reporting</p>
                <p className="mx-5">Online tools and resources</p>
                <p className="mx-5">Link up to four bank accounts</p>
                <p className="mx-5">Tax planning sessions with an expert</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Are There any Hidden Cost?</AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl   ">
                  Never! We&apos;re all about transparency, and there are no
                  hidden costs associated with our business accounting and
                  bookkeeping service.
                </p>{" "}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How Long Does it take to Get Setup?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl   ">
                  Your free 30-minute tax consultation will help you choose the
                  right package and get set up within your dashboard. After the
                  consult, you&apos;re ready to go as soon as you receive your
                  username and password via email.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Do you Have any Guide or Resources to Get Started?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl   ">
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
                    differences between bookkeeping and accounting
                  </span>{" "}
                  and what{" "}
                  <span className="text-primary">
                    forms you need for LLC taxes.
                  </span>
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Do You Provide Hands-On Support ?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl   ">
                  Absolutely! If you have questions about our business
                  accounting services or need other support, contact us via your
                  personalized dashboard or use our{" "}
                  <span className="text-primary">contact</span> form. We also
                  recommend checking out our top{" "}
                  <span className="text-primary">tax filing tips</span> and what
                  <span className="text-primary">
                    forms you&apos;ll need to file your LLC taxes.
                  </span>
                </p>
                <p className="my-5 md:text-xl   ">
                  Once you&apos;ve signed up for our accounting services,
                  contact your accounting team within your personalized
                  dashboard if you need support regarding your accounting and
                  bookkeeping tools, dashboard, or any financial or tax-related
                  advice.
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
        <p className="text-center">20,669 Customer Rating</p>
        <div className="flex justify-center items-center pb-5">
          <div className="flex gap-1 pt-5">
            <StarIcon className="w-5 h-5 text-primary" />
            <StarIcon className="w-5 h-5 text-primary" />
            <StarIcon className="w-5 h-5 text-primary" />
            <StarIcon className="w-5 h-5 text-primary" />
            <StarIcon className="w-5 h-5 text-primary" />
          </div>
        </div>

        <div className="text-center md:pb-24 mx-5">
          <h2 className="md:text-5xl text-2xl font-bold md:py-3">
            STRESS FREE
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold md:py-3">
            <span className="text-primary">ACCOUNTING AND </span>
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold">
            <span className="text-primary">BOOKKEEPING</span>
          </h2>
          <p className="md:text-xl  max-sm:pt-4 md:pt-10">
            For a low monthly cost so you can focus on what matters.
          </p>
          <div className="flex justify-center items-center py-5">
            <Link
              className="md:px-10 md:py-5 py-6 px-4  font-bold bg-primary text-white border border-primary rounded-[30px] "
              href={"/form-a-llc/"}
            >
              BOOK YOUR FREE CONSULT
            </Link>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default Amendment;
