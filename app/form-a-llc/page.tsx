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
          <h1 className="md:text-5xl text-3xl font-bold  pt-20 md:pl-20 max-sm:mx-5">
            Form Your Free LLC
          </h1>
          <h2 className="md:text-5xl text-3xl font-bold  md:pl-20 max-sm:mx-5">
            and Kickstart Your
          </h2>
          <h2 className="md:text-5xl text-3xl font-bold   md:pl-20 max-sm:mx-5">
            Dream Business
          </h2>
          <h2 className="md:text-5xl text-3xl font-bold   md:pl-20 max-sm:mx-5">
            With VC Filling
          </h2>
          <h2 className=" md:pl-20 py-10 pb-24 max-sm:mx-5">
            Easy, stress free, and personalized business formation for clever
            people with big ideas.
          </h2>
          <Link
            className="px-10 md:ml-20 py-5 bg-primary text-white border border-primary rounded-[30px] max-sm:mx-5 "
            href="/form-a-llc/step-1"
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
        <div className="flex gap-4 items-center justify-center md:my-16 md:py-7 max-sm:py-9 mx-3 md:flex-row flex-col">
          <Image src="/main/vcicon.jpg" alt="image" width={200} height={200} />
          <div className="mx-5">
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
        <div className="md:flex   max-sm:flex-col-reverse   gap-10 items-center md:py-16 mx-5">
          <Image
            src="/free-llc/Save Time Money.webp"
            alt="Free LLC"
            width={600}
            height={600}
          />
          <div className=" md:text-left md:w-1/2 md:px-16">
            <h3 className="text-3xl font-medium md:py-10 ">
              Forming an LLC Can Be Daunting and Expensive
            </h3>
            <p className=" max-sm:py-3">
              There&apos;s a lot that goes into filing an LLC. With various
              state requirements, multiple steps and a lot of important
              documentation, even the smallest mistake can end up costing you.
              That&apos;s where we come in.
            </p>
          </div>
        </div>
        {/* new section start  */}
        <div className="md:flex    gap-10 items-center md:py-16 max-sm:mx-5">
          <div className=" md:text-left md:w-1/2 md:px-16">
            <h3 className="text-3xl font-medium md:py-10 max-sm:py-5">
              Save Money and Time With VC FILING $0 (+ State Fee) LLC
              Registration
            </h3>
            <p className=" ">
              <span className="font-bold">Some providers charge $150+</span> for
              LLC formation, but our streamlined processes keep costs down so
              you get the most bang for your buck. Register your LLC for $0 (+
              the state fee) and free up time to focus on other things.
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
        <div className="md:flex  max-sm:mx-5  gap-10 items-center md:py-16 mx-5">
          <div className=" md:text-left md:w-1/2 md:px-16">
            <h3 className="text-3xl font-medium md:py-10 max-sm:py-5 ">
              Discover the Benefits of Forming Your LLC With VC Filling
            </h3>
            <p className=" ">
              Since 2004, we&apos;ve helped 1,000,000+ entrepreneurs and small
              business owners form and grow their businesses. Get industry
              leading support (and a host of other amazing benefits!) to start
              your business with confidence.
            </p>
          </div>
          <div>
            <Image
              className=" py-5"
              src="/free-llc/discoverBenefits.webp"
              alt="Free LLC"
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* new section start  */}
        <div className="md:grid grid-cols-2 gap-5 md:my-16 md:py-24 max-sm:mx-5">
          {/* left side  */}
          <div className="">
            {/* writing section  */}
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Free LLC Filing, Only Pay the State Fee
                </h3>
              </div>
              <p className="md:mx-8 py-4">
                Low-cost, personalized business formation. Because when
                you&apos;re starting a business, every dollar counts.
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
                Access your complete and easy-to-use Registered Agent service
                free for a full year ($119/annually after that).
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  No Hidden Fees, No Contracts
                </h3>
              </div>
              <p className="md:mx-8 py-4">
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
              <p className="md:mx-8 py-4">
                Talk to a dedicated incorporation specialist, not a salesperson,
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
              <p className="md:mx-8 py-4">
                Your business essentials all in one place. Access everything you
                need, whenever you need it.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Save Money on Taxes With IRS Form 2553
                </h3>
              </div>
              <p className="md:mx-8 py-4">
                Choose S Corp election so that your LLC is treated as an S Corp
                for tax filing purposes.
              </p>
            </div>
          </div>
          {/* right side  */}
          <div className="">
            {/* writing section start  */}
            <div className="">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Prepare & File Your Articles of Organization
                </h3>
              </div>
              <p className="md:mx-8 py-4">
                Every VC FILING formation package includes assistance drafting,
                preparing, and filing Articles of Organization.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Entrepreneurship Made Easy
                </h3>
              </div>
              <p className="md:mx-8 py-4">
                Get a business banking account, domain name, and business email
                fast with the Premium package.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Grow Your Business With Tailored Services
                </h3>
              </div>
              <p className="md:mx-8 py-4">
                Get set up with additional business services from within your
                business dashboard, when you need them.
              </p>
            </div>
            <div className="my-5">
              <div className="flex gap-3">
                <CheckBadgeIcon className="min-w-7 max-w-7 min-h-7 max-h-7 text-primary" />
                <h3 className="font-bold text-2xl">
                  Never Miss an Important Due Date
                </h3>
              </div>
              <p className="md:mx-8 py-4">
                Get text and email notifications, order updates, and free
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
                Ensure that all your contracts, documents, and forms are
                watertight without the expense of hiring a lawyer.
              </p>
            </div>
          </div>
        </div>
        {/* new section start  */}
        <div className="md:my-16">
          <h2 className="text-5xl  max-sm:text-4xl font-bold text-center md:py-10 max-sm:py-5 md:px-20 uppercase max-sm:mx-5">
            How to File Your Free LLC <br /> Online with VC Filling in <br />
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
            <div className="text-center md:text-left md:w-1/2 md:px-16 mx-5">
              <p className="text-primary text-sm uppercase font-bold">
                first step
              </p>
              <h3 className="text-3xl font-medium pb-10 ">
                Choose a Business Name
              </h3>
              <p className=" ">
                Your business name says a lot about you and helps establish your
                presence in the marketplace. Make sure to pick a name
                that&apos;s memorable and unique. Get help finding the perfect
                name with our Business Name Generator.
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
            <div className="text-center md:text-left md:w-1/2 md:px-16 mx-5">
              <p className="text-primary text-sm uppercase font-bold">
                Second step
              </p>
              <h3 className="text-3xl font-medium pb-10 ">
                Choose the Package That Meets Your Needs
              </h3>
              <p className=" ">
                Whether you only need the basics or want more robust business
                support, VC Filling has the ideal business formation package to
                help you start and grow your business.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row  gap-10 items-center md:py-10 mx-6">
            <Image
              src="/free-llc/step-3.jpg"
              alt="Free LLC"
              width={500}
              height={500}
              className="md:w-1/2"
            />
            <div className="text-center md:text-left md:w-1/2 md:px-16">
              <p className="text-primary text-sm uppercase font-bold">
                Third step
              </p>
              <h3 className="text-3xl font-medium pb-10 mx-5 ">
                Tell Us About Your Business
              </h3>
              <p className=" ">
                Fill in the simple online order forms and provide us with the
                details of your business and the services that you need.
              </p>
            </div>
          </div>
        </div>
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
                  You&apos;ll get access to your own simple and intuitive
                  business dashboard where you can review your order details and
                  ensure everything is correct.
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
              href="/form-a-llc/step-1"
            >
              Want to Know More About Starting an LLC?
            </Link>
          </div>
        </div>
        {/* new section start  */}
        <div className="md:my-36 max-sm:my-5 max-sm:mx-5 ">
          <h2 className="text-5xl max-sm:text-3xl font-bold text-center">
            Loved by 1,000,000+
          </h2>
          <h2 className="text-5xl font-bold max-sm:text-3xl text-center">
            Entrepreneurs Across All 50 States
          </h2>
        </div>
        {/* new part start  */}

        {/* new section start   */}
        <div className="md:flex gap-12 justify-center max-sm:text-center md:my-24 max-sm:my-5 max-sm:mx-5">
          <div className="  md:text-left md:px-10 ">
            <h3 className="text-5xl max-sm:text-3xl  font-bold">
              Join the{" "}
              <span className="text-primary font-bold">1,000,000+</span>
            </h3>
            <h3 className="text-5xl max-sm:text-3xl font-bold">businesses</h3>
            <p className=" py-3">
              That trust Incfile to start, manage and grow their business
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Link
              className="md:px-12 md:py-5 max-sm:px-24 max-sm:py-2 bg-primary text-white border border-primary rounded-[30px] "
              href="/form-a-llc/step-1"
            >
              Get Started Now
            </Link>
          </div>
        </div>
        {/* new section start  */}
        <div className="max-sm:bg-slate-50 rounded-xl mx-5">
          <div className="md:grid grid-cols-2 gap-5 md:mt-36 max-sm:mx-5">
            <div className=" md:text-left  md:px-16">
              <h2 className="text-5xl max-sm:text-3xl max-sm:mx-5 font-bold md:my-8 max-sm:py-2">
                See What Our Clients Have to Say…
              </h2>
              <p className="md:my-8 max-sm:py-2">
                &quot;Having these online resources, with VC Filling, cuts out
                all the stress from having to think that I have to do that by
                myself.&quot;
              </p>
              <p className=" font-medium md:my-8 max-sm:mx-5 max-sm:pb-2">
                Ashley, Hijita Chocolate
              </p>
            </div>
            <div className="max-sm:mx-5">
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
        <div className="md:my-16 md:px-10 mx-5">
          <h2 className="text-5xl max-sm:text-3xl font-bold  md:text-left ">
            Common Questions About
          </h2>
          <h2 className="text-5xl max-sm:text-3xl font-bold  md:text-left mb-6">
            Starting an LLC
          </h2>
          <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1">
              <AccordionTrigger>Can I Get an LLC for Free?</AccordionTrigger>
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
                  Our Basic Package is $0 + state fee and includes the basics
                  needed to form your LLC.
                </p>{" "}
                <p className="my-2">
                  Our Standard Package is $199 + state fee. It&apos;s our most
                  popular option with a comprehensive feature set to get your
                  business started.
                </p>
                <p className="my-2">
                  The Premium Package is $299 + state fee. It&apos;s our best
                  value package offering a full suite of features. It includes
                  all of the Standard benefits plus Business Contract Templates,
                  Expedited Filing, and Domain Name + Business Email.
                </p>{" "}
                <p className="my-2">
                  When you register your LLC with us, our Registered Agent
                  service is free for the first year and is only $119 per year
                  after that.
                </p>
                <p className="my-2">
                  For more information on our services and prices, visit our how
                  it works page.
                </p>{" "}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Are There Specific Rules for My State?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2">
                  Each state has specific requirements regarding registered
                  agents, naming rules, business licenses etc. Learn more about
                  LLCs in your state and read our free LLC state guides here.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What&apos;s My State&apos;s Filing Fee for LLCs?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2">
                  Filing costs to form an LLC can vary from state to state. Use
                  our free filing fees tool to easily compare state fees before
                  you start your business.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Are There Any Hidden Costs?</AccordionTrigger>
              <AccordionContent>
                <p className="my-2">
                  No! We pride ourselves on transparency and there are no hidden
                  costs associated with forming your business. With our $0 LLC
                  package, you just pay the fee required by your state. This is
                  the state fee for forming an LLC that you&apos;d need to pay
                  even if you were doing the entire process on your own. Some
                  states charge online processing fees to file your paperwork,
                  but those fees come from the state, not from VC Filling. VC
                  Filling&apos;s services are entirely free if you choose the $0
                  LLC package.
                </p>
                <p className="my-2">
                  Our mission is to provide you with a superior and modern
                  experience at an unparalleled value. Think of us as your
                  business guide. We make registering a company as easy and
                  low-cost as possible, so you can focus on the important
                  things.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                How Long Does It Take to File an LLC Online?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2">
                  VC Filling&apos;s standard processing time to pass your data
                  onto the relevant state is one day.
                </p>
                <p className="my-2">
                  State filing times vary from three to twelve weeks. You can
                  pay an expedited fee for VC Filling to process your paperwork
                  faster (included in the Premium package). Sometimes your state
                  may also offer expedited processing through their systems too
                  — if so, we&apos;ll let you know it&apos;s an option. Easily
                  compare state filing times with VC Filling.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                Do You Have Any Guides or Resources for Getting Started?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2">
                  Yes, we have lots of helpful content! Download our complete
                  LLC guide or learn more about LLCs on our site. Check out our
                  Blog for in-depth information on every aspect of planning,
                  starting and growing your business.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                Do You Provide Hands-On Support?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2">
                  Absolutely! We believe in educating our customers and
                  providing a variety of guidance throughout the formation
                  process and beyond.
                </p>
                <p className="my-2">
                  If you need additional support, you can contact us via Help
                  Chat in your personalized dashboard and we do offer customer
                  service to assist with any transactional questions.
                </p>
                <p className="my-2">
                  If you&apos;d prefer to speak to an incorporation specialist
                  over the phone, get in touch at 844-830-8267 Monday - Friday
                  from 9 a.m. to 6 p.m. CST.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* new section start review   */}
        <div className="flex justify-center items-center pb-4 max-sm:pt-5">
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
            <span className="text-primary">Free LLC Now</span>
          </h2>
          <p className="md:py-4 max-sm:py-3 max-sm:mx-5 ">
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
