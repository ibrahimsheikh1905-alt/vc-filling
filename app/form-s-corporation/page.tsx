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
      <div className=" my-16 flex flex-col-reverse md:flex-row">
        <div className=" md:text-left">
          <h1 className="md:text-5xl text-3xl font-bold pt-10 md:pl-20 max-sm:mx-5">
            Form An S Corp For
          </h1>
          <h2 className="md:text-5xl text-3xl font-bold  md:pl-20 max-sm:mx-5">
            Free And Kickstart
          </h2>
          <h2 className="md:text-5xl text-3xl font-bold  md:pl-20 max-sm:mx-5">
            Your Business with
          </h2>
          <h2 className="md:text-5xl text-3xl font-bold  md:pl-20 max-sm:mx-5">
            VC FILING
          </h2>
          <h2 className="text-xl md:pl-20 py-10 pb-24 max-sm:mx-5">
            Stress-free S Corp formation to save money on your taxes as your
            business grows.
          </h2>
          <Link
            className="px-10 md:ml-20 py-5 bg-primary text-white border border-primary rounded-[30px] max-sm:mx-5"
            href="/form-s-corporation/step-1"
          >
            START NOW
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
        <div className="md:flex max-sm:flex-col-reverse  gap-10 items-center md:py-16 mx-5">
          <Image
            src="/form-s-corporation/fi1.webp"
            alt="Free LLC"
            width={600}
            height={600}
          />
          <div className=" md:text-left md:w-1/2 md:px-16">
            <h3 className="text-4xl font-medium md:py-10">
              Forming an S Corp Can Be Complicated and Expensive
            </h3>
            <p className="text-xl max-sm:py-3 ">
              S Corp registration is a complex process as federal and state
              governments require you to meet various conditions, rules and
              regulations. And all it takes is one simple mistake for your
              request to be rejected.
            </p>
          </div>
        </div>
        {/* new section start  */}
        <div className="flex flex-col-reverse md:flex-row  gap-10 items-center max-sm:pb-9 md:py-16 max-sm:mx-5">
          <div className=" md:text-left md:w-1/2 md:px-16">
            <h3 className="text-4xl font-medium md:py-10 max-sm:py-5 ">
              Save Money & Time With VC FILING&apos; Free S Corp Formation
            </h3>
            <p className="text-xl ">
              <span className="font-bold">
                While some providers charge $149+
              </span>{" "}
              we don&apos;t charge a thing. Streamlined processes keep our costs
              down, so we can pass the savings back to you. Form your S Corp
              with us for free and spend your valuable time and money on what
              really matters - growing your business.
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
        <div className="md:flex  max-sm:mx-5  gap-10 items-center md:py-16 mx-5 ">
          <div className=" md:text-left md:w-1/2 md:px-16">
            <h3 className="text-4xl font-medium md:py-10  max-sm:py-5">
              Discover the Benefits of Forming Your S Corp with VC FILING
            </h3>
            <p className="text-xl ">
              Since 2004, we&apos;ve helped 1 000,000+ entrepreneurs and small
              business owners form and grow their businesses. Get industry
              leading support (and a host of other amazing benefits!) to start
              your business with confidence.
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
        <div className="md:grid grid-cols-2 gap-5 md:my-16 md:py-24 max-sm:mx-5 max-sm:pt-5">
          {/* left side  */}
          <div>
            {/* writing section  */}
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Get Your EIN Business Tax Number Fast
                </h3>
              </div>
              <p className="md:mx-8 py-4">
                Included free in our Standard and Premium formation packages;
                Get your EIN within 1 business day.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Claim Your Free 1-Hour Tax Consultation
                </h3>
              </div>
              <p className="md:mx-8 py-4">
                Talk to a business tax expert for free with our Standard and
                Premium formation packages.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Prepare & File Your Articles of Incorporation
                </h3>
              </div>
              <p className="md:mx-8 py-4">
                Every VC FILING formation package includes help drafting,
                preparing and filing Articles of Incorporation.on.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Experience Entrepreneurship Made Easy
                </h3>
              </div>
              <p className="md:mx-8 py-4">
                Get a business banking account, domain name and email fast with
                the Premium package.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Grow Your Business with Tailored Services
                </h3>
              </div>
              <p className="md:mx-8 py-4">
                Choose any additional S Corp services from within your business
                dashboard if and when you need them.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Stay on Top of Important Due Dates
                </h3>
              </div>
              <p className="md:mx-8 py-4">
                Receive email & text notifications, order updates and free
                lifetime compliance alerts within your dashboard.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Customizable Business Contract Templates
                </h3>
              </div>
              <p className="md:mx-8 py-4">
                Ensure that all your contracts, documents and forms are
                watertight, without the cost of hiring a lawyer.
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
                  Free S Corp Filing, Only Pay the State Fee
                </h3>
              </div>
              <p className="md:mx-8 py-4">
                Get economical, personalized S Corp formation. When you&apos;re
                starting a business, every dollar counts.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Easily Devise Your Corporation Bylaws
                </h3>
              </div>
              <p className="md:mx-8 py-4">
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
              <p className="md:mx-8 py-4">
                Get access to your easy-to-use Registered Agent service free for
                a full year ($119/annually after that).
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  No Hidden Fees, No Contracts, Ever
                </h3>
              </div>
              <p className="md:mx-8 py-4">
                Nobody gives you more for less. Get unprecedented value for your
                money and the best user experience.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Fast and Friendly Customer Service, 24/7
                </h3>
              </div>
              <p className="md:mx-8 py-4">
                Benefit from lifetime customer support. Talk to dedicated
                incorporation specialists, not salespeople.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Modern & Simple Personalized Dashboard
                </h3>
              </div>
              <p className="md:mx-8 py-4">
                All your business essentials, all in one place. Access
                everything you need, whenever you need it.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Save Money on Taxes with IRS Form 2553
                </h3>
              </div>
              <p className="md:mx-8 py-4">
                Choose S Corp election and benefit from savings on your
                businesses taxes.
              </p>
            </div>
          </div>
        </div>
        {/* new section start  */}
        <div className="md:my-16">
          <h2 className="text-5xl max-sm:text-4xl font-bold text-center  md:px-20 uppercase max-sm:mx-5">
            How to form a S corpotation
          </h2>
          <h2 className="text-5xl max-sm:text-4xl font-bold text-center  uppercase max-sm:mx-5">
            with VC FILING in{" "}
            <span className="text-primary">3 simple steps</span>
          </h2>
          <div className="flex flex-col-reverse md:flex-row  gap-10 items-center py-10">
            <Image
              src="/free-llc/step-1.webp"
              alt="Free LLC"
              width={500}
              height={500}
              className="md:w-1/2"
            />
            <div className=" md:text-left md:w-1/2 md:px-16 mx-5">
              <p className="text-primary text-sm uppercase font-bold">
                first step
              </p>
              <h3 className="text-4xl  md:pb-10 max-sm:pb-3 font-bold ">
                Choose Your Incorporation State
              </h3>
              <p className="text-xl ">
                Rules and regulations vary by state, so make sure you know what
                state you want your business to be in to meet your needs. You
                don&apos;t have to choose the state you live in, either!
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row-reverse  gap-10 items-center py-10 mx-5">
            <Image
              src="/free-llc/step-2.jpg"
              alt="Free LLC"
              width={500}
              height={500}
              className="md:w-1/2"
            />
            <div className=" md:text-left md:w-1/2 md:px-16 max-sm:pb-2">
              <p className="text-primary text-sm uppercase font-bold">
                Second step
              </p>
              <h3 className="text-4xl font-bold md:pb-10 max-sm:pb-3 ">
                Choose Ideal Package for Your Situation
              </h3>
              <p className="text-xl ">
                Whether you only need the basics or want more extensive business
                support, VC FILING has the ideal business formation package to
                help you start and grow your corporation.
              </p>
            </div>
          </div>
          {/* third step */}
          <div className="flex flex-col-reverse md:flex-row  gap-10 items-center py-10 mx-5">
            <Image
              src="/form-c-corporation/bi.webp"
              alt="Free LLC"
              width={500}
              height={500}
              className="md:w-1/2"
            />
            <div className=" md:text-left md:w-1/2 md:px-16">
              <p className="text-primary text-sm uppercase font-bold py-3">
                Third step
              </p>
              <h3 className="text-4xl font-bold md:pb-10 max-sm:pb-3  ">
                Tell Us About Your S Corporation
              </h3>
              <p className="text-xl ">
                Whether you only need the basics or want more extensive business
                support, VC FILING has the ideal business formation package to
                help you start and grow your corporation.
              </p>
            </div>
          </div>
        </div>
        {/* new section start  */}
        <h3 className="text-5xl max-sm:text-4xl font-bold text-center mx-5 md:py-5 max-sm:py-5">
          You&apos;ve placed your order, now what?
        </h3>
        {/* new section start  */}
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
        <div className="md:flex gap-12 justify-center max-sm:text-center max-sm:py-8 md:my-24 max-sm:mx-5">
          <div className="  md:text-left md:px-10 ">
            <h3 className="text-5xl max-sm:text-4xl  font-bold">
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
              className="md:px-12 md:py-5 max-sm:px-10 py-2  bg-primary text-white border border-primary rounded-[30px] "
              href="/form-c-corporation/step-1"
            >
              Get Started Now
            </Link>
          </div>
        </div>
        {/* new section start  */}
        <div className="md:flex gap-5 md:mt-36 max-sm:mx-5">
          <div className=" md:text-left  md:px-16">
            <h2 className="text-5xl max-sm:text-4xl  font-bold">
              See What Our Clients
            </h2>
            <h2 className="text-5xl max-sm:text-4xl  font-bold ">
              Have to Say…
            </h2>
            <p className="text-xl  md:my-8 max-sm:py-4">
              “One of the things I really appreciated with Bizee is that it took
              care of everything for me.”
            </p>
            <p className="text-xl font-medium md:my-8">
              Khadijah Suleman, Aloaye Clothing LLC
            </p>
          </div>
          <Image
            className=""
            src="/form-c-corporation/video.webp"
            alt="Free LLC"
            width={500}
            height={500}
          />
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
              They literally do almost everything for you, including state
              annual filing. SO easy to use for first-time business owners.
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
              Always easy, always fantastic. Used this company for over 5 years.
              Thanks for a great company.
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
              Was able to create my business in less than 30 minutes! Incredibly
              easy, intuitive and straight forward. Amazing!
            </p>
            <p className="font-semibold md:py-5 max-sm:py-2">
              CA, UNITED STATES
            </p>
          </div>
        </div>
        {/* faq section start  */}
        <div className="my-16 md:px-10 mx-5">
          <h2 className="text-5xl max-sm:text-4xl font-bold  md:text-left ">
            Common Questions About
          </h2>
          <h2 className="text-5xl max-sm:text-4xl font-bold  md:text-left mb-6">
            Forming an S Corp
          </h2>
          <Accordion type="single" collapsible className="text-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Can I Start an S Crop for Free?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2">
                  Yes! With our $0 S Corp formation package, you only pay the
                  fees required by your state. VC FILING&apos; filing services
                  are free.
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
                  Registered Agents, naming rules, business licenses, etc. Find
                  out more about S Corps in your state and review our{" "}
                  <span className="text-primary">
                    business entity comparison
                  </span>{" "}
                  chart to learn about liability protection, business fees and
                  tax.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What&apos;s My State&apos;s Filling Fee For S Crops?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2">
                  Filing costs to form an S Corp can vary from state to state.
                  Use our{" "}
                  <span className="text-primary">free filing fees chart</span>{" "}
                  to easily compare state fees before you start your business.
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
            S Corporation
          </h2>
          <h2 className="md:text-5xl font-bold text-2xl  uppercase">
            <span className="text-primary">for free (+ State Fees)</span>
          </h2>
          <p className="md:py-4 max-sm:py-3 max-sm:mx-5 ">
            Kickstart Your Dream Business with VC FILING Now
          </p>
          <div className="flex justify-center items-center py-5">
            <Link
              className="px-10  py-5 bg-primary text-white border border-primary rounded-[30px] "
              href="/form-c-corporation/step-1"
            >
              START NOW
            </Link>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default FreeLLC;
