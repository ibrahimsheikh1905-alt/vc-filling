import { CheckBadgeIcon, StarIcon } from "@heroicons/react/24/solid";
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
      <div className=" my-16 flex flex-col-reverse md:flex-row max-sm:mx-5">
        <div className=" md:text-left">
          <h1 className="md:text-5xl text-3xl font-bold pt-10 md:pl-20 max-sm:mx-5">
            Form a C
          </h1>
          <h2 className="md:text-5xl text-3xl font-bold  md:pl-20 max-sm:mx-5">
            Corporation for Free{" "}
          </h2>
          <h2 className="md:text-5xl text-3xl font-bold  md:pl-20 max-sm:mx-5">
            with VC FILING
          </h2>
          <h2 className="text-xl md:pl-20 py-10 pb-24 max-sm:mx-5">
            Stress-free, personalized C Corporation formation for businesses
            planning to sell stock.
          </h2>
          <Link
            className="px-10 md:ml-20 py-5 bg-primary text-white border border-primary rounded-[30px] "
            href="/form-c-corporation/step-1"
          >
            Form Your Free LLC Now
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
        <div className="flex gap-4 items-center justify-center md:my-16 md:py-7 mx-3 md:flex-row flex-col">
          <Image src="/main/vcicon.jpg" alt="image" width={200} height={200} />
          <div className="mx-5">
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
        <div className="md:flex  max-sm:flex-col-reverse   gap-10 items-center md:py-16 mx-5">
          <Image
            src="/free-llc/Save Time Money.webp"
            alt="Free LLC"
            width={600}
            height={600}
          />
          <div className=" md:text-left md:w-1/2 md:px-16 md:mx-5 max-sm:5">
            <h3 className="text-3xl font-medium md:py-10 max-sm:py-3 ">
              Forming a C CorporationCan Be Time-Consuming and Expensive
            </h3>
            <p className="text-xl ">
              C Corporation registration is complex. Multiple bodies, including
              the federal government, require you meet different conditions.
              There&apos;s also state-specific rules and regulations to adhere
              to. Formation is a multistep process & filing errors could result
              in costly and serious consequences.
            </p>
          </div>
        </div>
        {/* new section start  */}
        <div className="flex flex-col-reverse md:flex-row  gap-10 items-center md:py-16 md:mx-5 max-sm:mx-5">
          <div className=" md:text-left md:w-1/2 md:px-16">
            <h3 className="text-3xl font-medium md:py-10 max-sm:pb-4 ">
              Save Time & Minimize Costs with VC FILING $0 C Corp Formation
            </h3>
            <p className="text-xl ">
              <span className="font-bold">
                While some providers charge $150+ to file a C Corp,
              </span>{" "}
              streamlined processes enable us to offer truly free C Corp
              formation. You only pay the mandatory, one time state fee. File
              your C Corporation with us for free and spend your valuable time
              on other things.
            </p>
          </div>
          <Image
            src="/free-llc/Save Time Money.webp"
            alt="Free LLC"
            width={600}
            height={600}
          />
        </div>
        {/* new section start  */}
        <div className="md:flex  max-sm:mx-5  gap-10 items-center max-sm:py-4 md:py-16 mx-5">
          <div className=" md:text-left md:w-1/2 md:px-16">
            <h3 className="text-3xl font-medium md:py-10 max-sm:py-4">
              Discover the Benefits of Forming a C Corp with VC FILING
            </h3>
            <p className="text-xl">
              Since 2004, we&apos;ve helped 1,000,000+ entrepreneurs and small
              business owners form and grow their businesses. With VC FILING,
              you get industry-leading support (plus a host of other amazing
              benefits!) to kickstart your business with confidence.
            </p>
          </div>
          <Image
            className=" py-5"
            src="/free-llc/discoverBenefits.webp"
            alt="Free LLC"
            width={500}
            height={500}
          />
        </div>
        {/* new section start  */}
        <div className="md:grid grid-cols-2 gap-5 md:my-16 md:py-24 max-sm:mx-6">
          {/* left side  */}
          <div>
            {/* writing section  */}
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Free C Corp Filing, Only Pay the State Fee
                </h3>
              </div>
              <p className=" py-4">
                Low-cost, personalized business formation. Because when
                you&apos;re starting a business, every dollar counts.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Simply Develop Your Corporation Bylaws
                </h3>
              </div>
              <p className=" py-4">
                No need to hire an attorney. Create your corporation bylaws
                using our nonprofit incorporation kit.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Free Registered Agent for the First Year
                </h3>
              </div>
              <p className=" py-4">
                Access your complete & easy-to-use Registered Agent service free
                for a full year ($119/annually after that).
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  No Hidden Fees, No Contracts
                </h3>
              </div>
              <p className=" py-4">
                Get the best user experience and unparalleled value for money.
                Nobody gives you more for less.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  24/7 Fast and Friendly Customer Service
                </h3>
              </div>
              <p className=" py-4">
                Talk to a dedicated incorporation specialist, not a salesperson
                and get lifetime customer support.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Modern, Simple, Personalized Dashboard
                </h3>
              </div>
              <p className=" py-4">
                Your business essentials all in one place. Access everything you
                need, whenever you need it.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Save Money on Taxes with IRS Form 2553
                </h3>
              </div>
              <p className=" py-4">
                Choose S Corp election so that your C Corporation is treated as
                an S Corp for tax filing purposes.
              </p>
            </div>
          </div>
          {/* right side  */}
          <div>
            {/* writing section start  */}
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Get Your Free 1-Hour Tax Consultation
                </h3>
              </div>
              <p className=" py-4">
                Talk to a business tax expert, included for free in our Standard
                and Premium formation packages.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Prepare and File Articles of Incorporation
                </h3>
              </div>
              <p className=" py-4">
                Every VC FILING formation package includes assistance drafting,
                preparing & filing Articles of Incorporation.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Entrepreneurship Made Easy
                </h3>
              </div>
              <p className=" py-4">
                Get a business banking account, domain name & business email
                fast with the Premium package.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Grow Your Business with Tailored Services
                </h3>
              </div>
              <p className=" py-4">
                Get set up with additional services from within your business
                dashboard, ready when you need them.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Never Miss an Important Due Date
                </h3>
              </div>
              <p className=" py-4">
                Get text and email notifications, order updates and compliance
                alerts from inside your dashboard.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Customizable Business Contract Templates
                </h3>
              </div>
              <p className=" py-4">
                Ensure that all your contracts, documents and forms are
                watertight without the expense of hiring a lawyer.
              </p>
            </div>
          </div>
        </div>
        {/* new section start  */}
        <div className="md:my-16">
          <h2 className="text-5xl  max-sm:text-4xl font-bold text-center  md:px-20 uppercase max-sm:mx-5">
            How to form a c corpotation
          </h2>
          <h2 className="text-5xl max-sm:text-4xl font-bold text-center  uppercase max-sm:mx-5">
            with VC FILING{" "}
            <span className="text-primary">in 3 simple steps</span>
          </h2>
          <div className="flex flex-col-reverse md:flex-row  gap-10 items-center md:py-10 max-sm:pt-5">
            <Image
              src="/free-llc/step-1.webp"
              alt="Free LLC"
              width={500}
              height={500}
              className="md:w-1/2"
            />
            <div className="text-center md:text-left md:w-1/2 md:px-16 mx-5">
              <p className="text-primary text-sm uppercase font-bold">
                first step
              </p>
              <h3 className="text-4xl  md:pb-10 max-sm:pb-5 font-bold ">
                Discover the Appropriate Entity for You
              </h3>
              <p className="text-xl ">
                Choose the entity type and the state you want to incorporate in.
                Need assistance with state-specific formation details? Check out
                our C Corporation State Guides.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row-reverse  gap-10 items-center md:py-10 mx-5">
            <Image
              src="/free-llc/step-2.jpg"
              alt="Free LLC"
              width={500}
              height={500}
              className="md:w-1/2"
            />
            <div className="text-center md:text-left md:w-1/2 md:px-16 max-sm:py-4 ">
              <p className="text-primary text-sm uppercase font-bold">
                Second step
              </p>
              <h3 className="text-4xl font-bold md:pb-10 max-sm:pb-5 ">
                Choose the Package That Meets Your Needs
              </h3>
              <p className="text-xl">
                VC FILING has the perfect business formation package to help you
                start and grow your corporation. Whether you only need the
                basics ($0 + state fee) or want the more extensive support and
                benefits included in our Premium or Standard packages.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row  gap-10 items-center md:py-10 mx-5 max-sm:pt-5">
            <Image
              src="/form-c-corporation/bi.webp"
              alt="Free LLC"
              width={500}
              height={500}
              className="md:w-1/2"
            />
            <div className="text-center md:text-left md:w-1/2 md:px-16 ">
              <p className="text-primary text-sm uppercase font-bold">
                Third step
              </p>
              <h3 className="text-4xl font-bold pb-10  ">
                Tell Us About Your C Corporation
              </h3>
              <p className="text-xl ">
                Complete the online order forms and provide us with the details
                of your C Corp. C Corporation requirements mean you&apos;ll need
                to supply information on the number of directors, stock
                information, the value of shares and number of shareholders.
              </p>
            </div>
          </div>
        </div>
        {/* new section start  */}

        <h2 className="text-5xl max-sm:text-4xl font-bold text-center my-16">
          You&apos;ve Placed Your Order, Now What?
        </h2>
        <div className="md:flex flex-col gap-5 max-sm:mx-5">
          {/* left side  */}
          <div className="md:grid grid-cols-2 gap-5">
            <div className="border-2 rounded-xl p-5 my-5">
              <div className="max-sm:flex pl-6 pt-5 ">
                <CheckBadgeIcon className="w-10 h-10 text-primary  mb-3" />
              </div>
              <div>
                <h3 className="font-bold text-2xl py-4">
                  Review Your Order Details
                </h3>
                <p>
                  Access to your intuitive and easy-to-use business dashboard
                  where you can review your order details and ensure everything
                  is as it should be.
                </p>
              </div>
            </div>
            {/* right side  */}
            <div className="border-2 rounded-xl p-5 my-5">
              <div className="max-sm:flex pl-6 pt-5">
                <CheckBadgeIcon className="w-10 h-10 text-primary  mb-3" />
              </div>
              <div>
                <h3 className="font-bold text-2xl py-4">
                  Receive Your Filed Documents in Your Dashboard
                </h3>
                <p>
                  Your filed articles and any additional documents and services
                  are easily accessible from within your custom business
                  dashboard. You&apos;ll get notifications once they&apos;re
                  ready.
                </p>
              </div>
            </div>
          </div>
          {/* bottom section  */}
          <div className="flex justify-center items-center mx-5">
            <Link
              className="md:px-12 md:py-5 max-sm:text-center py-2 px-3  bg-primary mb-10 text-white border border-primary rounded-[30px] "
              href="#"
            >
              DOWNLOAD OUR WHY FORM A S CROP GUIDE NOW
            </Link>
          </div>
        </div>
        {/* new section start  */}

        <div className="md:my-36 max-sm:mx-5 ">
          <h2 className="text-5xl max-sm:text-4xl font-bold text-center">
            Loved by 1,000,000+
          </h2>
          <h2 className="text-5xl max-sm:text-4xl font-bold text-center">
            Entrepreneurs Across All 50 States
          </h2>
        </div>
        {/* new section start   */}
        <div className="md:flex gap-12 justify-center max-sm:text-center md:my-24 max-sm:py-10 max-sm:mx-5">
          <div className="  md:text-left md:px-10 ">
            <h3 className="text-5xl max-sm:text-4xl font-bold">
              Join the{" "}
              <span className="text-primary font-bold">1,000,000+</span>{" "}
              businesses
            </h3>

            <p className=" py-3">
              That trust VC FILING to start, manage and grow their business
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Link
              className="md:px-12 md:py-5 max-sm:px-20 max-sm:py-5 bg-primary text-white border border-primary rounded-[30px] "
              href="/form-c-corporation/step-1"
            >
              GET STARTED NOW
            </Link>
          </div>
        </div>
        {/* new section start  */}

        {/* customer review section start  */}
        <div className="max-sm:bg-slate-50 rounded-xl mx-5 max-sm:py-6">
          <div className="md:grid grid-cols-2 gap-5 md:mt-36 max-sm:mx-5">
            <div className=" md:text-left  md:px-16">
              <h2 className="text-5xl max-sm:text-3xl font-bold md:my-8 max-sm:py-2">
                See What Our Clients Have to Say…
              </h2>
              <p className="md:my-8 max-sm:py-2">
                “One of the things I really appreciated with VC FILING is that
                it took care of everything for me.”
              </p>
              <p className=" font-medium md:my-8  max-sm:pb-2">
                Khadijah Suleman, Aloaye Clothing LLC
              </p>
            </div>
            <div className="">
              <Image
                className=""
                src="/free-llc/seeWhat.webp"
                alt="Free LLC"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* customer review section start  */}
          <div className="md:flex   md:py-10   gap-8 md:mx-20 mx-5 max-sm:py-5 max-sm:mx-5  ">
            <div className="max-sm:mx-5 max-sm:border-4 rounded-xl px-3 py-2 my-2">
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
              <p className="font-semibold md:py-5 max-sm:py-2">
                MS, UNITED STATES
              </p>
            </div>

            {/* part2 review */}
            <div className="max-sm:mx-5 max-sm:border-4 rounded-xl px-3 py-2 my-2">
              <h2 className="text-2xl ">SCOTT B.</h2>
              <div className="flex gap-1 pt-5 pb-3">
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
              </div>
              <p className="">
                VC Filing has been great to work with. Their prices are
                reasonable and they exceed expectations.
              </p>
              <p className="font-semibold md:py-5 max-sm:py-2">
                MS, UNITED STATES
              </p>
            </div>

            {/* part 3 review  */}
            <div className="max-sm:mx-5 max-sm:border-4 rounded-xl px-3 py-2 my-2">
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
              <p className="font-semibold md:py-5 max-sm:py-2">
                CA, UNITED STATES
              </p>
            </div>
          </div>
        </div>
        {/* faq section start  */}
        <div className="my-16 md:px-10 mx-5">
          <h2 className="text-5xl max-sm:text-4xl font-bold  md:text-left ">
            Common Questions About
          </h2>
          <h2 className="text-5xl max-sm:text-4xl font-bold  md:text-left mb-6">
            Creating a Corporation
          </h2>
          <Accordion type="single" collapsible className="text-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Can I Start a CC Corporation for Free?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2">
                  Yes! With our $0 LLC package, you only pay the fees required
                  by your state. VC Filling&apos;s filing services are free.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How Much Does Your Service Cost?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2">
                  Since 2004 we&apos;ve been honing & perfecting our service.
                  Our tech-enabled process efficiencies mean that we can keep
                  the costs down and pass this incredible value on to you. The
                  result is low-cost yet personalized business formation with
                  friendly and fast service.
                </p>{" "}
                <p className="my-2">
                  The Basic Package costs $0 + state fee and includes the basics
                  needed to start a C Corporation.
                </p>
                <p className="my-2">
                  The Standard Package is $149 + state fee. It&apos;s the option
                  most clients choose and boasts a comprehensive feature set to
                  get your business started. Your EIN Business Tax number is
                  included (whilst most other incorporation services charge an
                  extra fee on top of their equivalent package price for this).
                  The Standard package also includes IRS Form 2553, Corporation
                  Bylaws, Operating Agreement, Banking Resolution, Lifetime
                  Company Alerts, Online Access Dashboard, Unlimited Phone and
                  Email Support, Business Banking Account & Business Tax
                  Consultation.
                </p>{" "}
                <p className="my-2">
                  The Premium Package is our best value package at $299 + state
                  fee and it offers a full suite of features. Premium includes
                  all of the Standard benefits plus Business Contract Templates,
                  Expedited Filing and Domain Name plus Business Email
                </p>
                <p className="my-2">
                  When you form your Nonprofit with us, our Registered Agent
                  service is free for the first year and is only $119 per year
                  after that.
                </p>{" "}
                <p className="my-2">
                  For more information on our services and prices, visit our{" "}
                  <span className="text-primary">how it works page.</span>
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Are There Specific Rules for My State?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2">
                  Each state has specific rules and requirements regarding
                  Registered Agents, naming rules, business licenses etc. Learn
                  more about C Corporations in your state and read our free C
                  Corporation state guides here.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What&apos;s My State&apos;s Filing Fee for C Corporation?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2">
                  Filing costs to form a C Corporation can vary from state to
                  state. Use{" "}
                  <span className="text-primary">our free filing fees</span>{" "}
                  chart to easily compare state fees before you start your
                  business.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Are There Any Hidden Costs?</AccordionTrigger>
              <AccordionContent>
                <p className="my-2">
                  No! We pride ourselves on transparency. There are absolutely
                  no hidden costs associated with forming your business.
                </p>
                <p className="my-2">
                  With our $0 C Corporation package, you only pay the fee
                  required by your state. This is the state fee for forming a C
                  Corp that you&apos;d need to pay even if you were doing the
                  entire process on your own. Some states charge online
                  processing fees to file your paperwork, but those fees come
                  from the state, not from VC FILING. VC FILING&apos; services
                  are entirely free if you choose the $0 C Corporation package.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                How Long Does It Take to File a C Corporation File Online?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2">
                  VC FILING&Apos;s standard processing time to send your data
                  onto the relevant state is 1 day.
                </p>
                <p className="my-2">
                  State filing times vary from three to twelve weeks. You have
                  the option to pay an expedited fee for VC FILING to process
                  your paperwork faster (included in Premium package). Sometimes
                  your chosen state may also offer expedited processing through
                  their systems too - if this is the case, we&apos;ll let you
                  know it&apos;s an option. Easily compare state filing times
                  here.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                Do You Have Any Guides or Resources for Getting Started?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2">
                  Yes, we have a lot of helpful content! Learn more about C
                  Corporations <span className="text-primary">here.</span> Check
                  out our <span className="text-primary">Resource Center</span>{" "}
                  for in depth information on every aspect of planning, starting
                  and growing your business.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                Do You Provide Hands-On Support?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2">
                  Of course! We believe in educating our customers and providing
                  a wide variety of guidance at every step in the formation
                  process and beyond.
                </p>
                <p className="my-2">
                  If you require additional support, you can contact us via Help
                  Chat in your personalized dashboard. We do also offer customer
                  service to assist with any transactional questions.
                </p>
                <p className="my-2">
                  Prefer to speak to an incorporation specialist over the phone?
                  Get in touch on 844-830-8267 Monday - Friday from 9 a.m. to 6
                  p.m. CST.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* new section start review   */}
        <div className="flex justify-center items-center pb-4">
          <StarIcon
            className="min-h-10 max-h-10 min-w-10 max-w-10"
            color="#39b54a"
          />
        </div>
        {/* n ew section  start  */}
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
        {/* new section start  */}
        <div className="text-center md:pb-24 mx-5">
          <h2 className="md:text-5xl font-bold text-2xl uppercase ">
            Form Your
          </h2>

          <h2 className="md:text-5xl font-bold text-2xl  uppercase">
            C Corporation
          </h2>
          <h2 className="md:text-5xl font-bold text-2xl  uppercase">
            <span className="text-primary">for $0</span>
          </h2>
          <p className="py-4 max-sm:mx-5 ">
            Kickstart Your Dream Business with VC FILING Now
          </p>
          <div className="flex justify-center items-center py-5">
            <Link
              className="px-10  py-5 bg-primary text-white border border-primary rounded-[30px] "
              href="/form-a-llc/step-1"
            >
              FORM YOUR FREE LLC NOW
            </Link>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default FreeLLC;
