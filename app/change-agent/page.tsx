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

const FreeLLC = () => {
  return (
    <NavigationWrapper>
      <div className=" my-16 flex flex-col-reverse md:flex-row">
        <div className="flex-1">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold md:text-left pt-20 md:pl-20 uppercase">
              Need to Change
            </h1>
            <h2 className="text-5xl font-bold md:text-left uppercase md:pl-20">
              Your Registered
            </h2>
            <h2 className="text-5xl font-bold md:text-left uppercase md:pl-20">
              Agent
            </h2>

            <h2 className="text-xl md:pl-16 font-bold pt-5 md:text-left mx-3">
              Changing Your Registered Agent Is Easier, Simpler, and Quicker
              with VC FILING
            </h2>
            <h2 className="text-xl md:pl-16 py-5 pb-20 md:text-left mx-3">
              Sometimes circumstances arise that require a Registered Agent
              change. Let VC FILING save you time and handle the paperwork.
            </h2>
            <Link
              className="px-10 md:ml-20 font-bold py-5 bg-primary text-white border border-primary rounded-[30px] "
              href="/change-agent/step-1"
            >
              ORDER NOW
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

        {/* on this page section start */}
        <div className="md:flex md:justify-center md:items-center gap-5 mx-5">
          <div className="py-10  sticky mx-w-[240px] ">
            <h2 className="pb-3 text-2xl">On this page</h2>
            <p className="pb-3 md:text-xl text-base font-light ">
              Does My Business Need a Registered Agent?
            </p>
            <p className="pb-3 md:text-xl text-base font-light ">
              Why Use a Registered Agent Service?
            </p>
            <p className="pb-3 md:text-xl text-base font-light ">
              Why Does VC Filing Offer a Free Registered Agent?
            </p>
            <p className="pb-3 md:text-xl text-base font-light">
              Reduce Your Workload Using a Registered Agent Service
            </p>
          </div>
          {/* div 2----------------------- */}
          <div className="">
            <div className="">
              <h2 className="md:text-3xl text-2xl font-medium pb-6">
                Does My Business Need a Registered Agent?
              </h2>
              <p className="md:text-xl text-base font-light  ">
                Yes. Every LLC, corporation and nonprofit is required to have an
                official Registered Agent (sometimes called a statutory agent,
                resident agent or agent for service of process) in each state
                where it does business.
              </p>
              <p className="md:text-xl text-base font-light  ">
                A Registered Agent serves as a permanent physical presence in
                the state, and the Registered Agent address is where the state
                government can contact you with legal and tax correspondence,
                including franchise tax forms, notices of litigation and
                required annual report forms.
              </p>
              <p className="md:text-xl text-base font-light  ">
                Learn more about Registered Agents and{" "}
                <span className="text-primary">why you need one</span> here.
              </p>
              <Image
                className="flex justify-center items-center rounded py-10"
                src="/rg-agent/agent1.webp"
                alt="Free LLC"
                width={1600}
                height={900}
              />
            </div>

            {/* section 2 ------*/}
            <div>
              <h2 className="text-3xl font-medium pb-6">
                Why Use a Registered Agent Service?
              </h2>
              <p className="md:text-xl text-base font-light  ">
                Registered Agent services like the one offered by VC Filing help
                you avoid the hassles and inconvenience of managing all of your
                own documentation from the state.They also help preserve your
                privacy by setting up a public-facing address for your business
                that is separate from your home.
              </p>
              <p className="md:text-xl text-base font-light ">
                When you use a Registered Agent service, any official legal or
                tax correspondence will be forwarded to your personal, private
                contact address. VC Filing&apos;s Registered Agent service also
                helps you stay on top of deadlines (such as required annual
                reports) to keep your business in good standing.
              </p>
              <p className="md:text-xl text-base font-light ">
                A good Registered Agent service can help you respond quickly in
                the event of a lawsuit, avoid missed deadlines, fines and
                penalties for non-compliance, and otherwise manage the details
                of paperwork so you can focus on running your business.
              </p>
            </div>

            {/* section3 */}
            <div>
              <h2 className="text-3xl font-medium py-8">
                Why Does VC Filing Offer a Free Registered Agent?
              </h2>
              <p className="md:text-xl text-base font-light">
                In addition to offering{" "}
                <span className="text-primary">free LLC</span> and other
                business formation, you&apos;ll get your first year&apos;s
                Registered Agent free too when you start a business with VC
                Filing . Unlike other business formation specialists, our
                service isn&apos;t built on finding ways to charge you for more
                products and services.
              </p>
              <p className="md:text-xl text-base font-light ">
                We believe that entrepreneurs like you are the driving force
                behind our economy&apos;s growth. Entrepreneurs create
                innovative solutions and empowering change and we&apos;re here
                for it.Radical offerings like our $0 business formation and a
                free Registered Agent with incorporation are available as a
                direct result of client loyalty.
              </p>
              <p className="md:text-xl text-base font-light ">
                That loyalty enables us to grow our business and continue making
                tech-driven process efficiencies so that we&apos;re able to
                offer you the best value.
              </p>
            </div>

            {/* section4------------------         */}

            <div>
              <h2 className="text-3xl font-medium py-8">
                Reduce Your Workload Using a Registered Agent Service
              </h2>
              <p className="md:text-xl text-base font-light ">
                Save time and stress by letting VC Filing manage your paperwork
                for you (for a lower cost than other providers).
              </p>
              <p className="md:text-xl text-base font-light">
                Avoid missed deadlines, tiresome paperwork, noncompliance and
                the associated fines or penalties. Set yourself up for success
                and free up time to focus on what matters — your business.
              </p>
            </div>
          </div>
        </div>
        {/* on this section end     */}

        {/* new era of privacy section start  */}
        <div className="bg-black rounded-xl my-24 pb-10 md:px-20 mx-5">
          <div className="md:pt-12 mx-5 pt-6">
            <p className="font-semibold text-yellow-400">NEW ERA OF PRIVACY</p>
            <h2 className="md:text-5xl text-white font-bold text-xl uppercase ">
              <span className="text-primary">Why change your</span> Registered
              agent service Provider to VC FILING?
            </h2>
          </div>
          {/* new sub-section start 1,2  */}
          <div className="md:flex gap-9 mx-5 pt-20 ">
            <div className="border border-gray-200 rounded-2xl  bg-gray-900 p-5 mb-7 md:w-1/2">
              <div className="flex gap-4  pt-9 pb-9 pl-3 bg-gray-700 rounded-xl mb-3 ">
                <CheckBadgeIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary" />
                <h2 className="font-bold md:text-2xl text-xl text-white">
                  <span className="text-primary">Only $119 Annually</span> (Less
                  Than Other Providers)
                </h2>
              </div>

              <p className="md:text-xl text-base font-light  text-white my-4">
                Efficient, low-cost Registered Agent service for only $119
                annually. No sneaky yearly subscriptions or hidden fees.
              </p>
            </div>
            {/* section 2 */}
            <div className="border border-gray-200 rounded-2xl  bg-gray-900 p-5 mb-7 md:w-1/2">
              <div className="flex gap-4  pt-9 pb-9 pl-3 bg-gray-700 rounded-xl mb-3 ">
                <CheckBadgeIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary" />
                <h2 className="font-bold md:text-2xl text-xl text-white">
                  <span className="text-primary"> Expert Handling</span> of All
                  of Your Documents
                </h2>
              </div>

              <p className="md:text-xl text-base font-light  text-white my-4">
                Always-available Registered Agents ready to receive state and
                IRS mail correspondence, documents, and legal proceedings on
                your business&apos;s behalf.
              </p>
            </div>
          </div>
          {/* sub-section part 3,4 */}
          <div className="md:flex gap-9 mx-5">
            <div className="border border-gray-200 rounded-2xl  bg-gray-900 p-5 mb-7 md:w-1/2">
              <div className="flex gap-4  pt-9 pb-9 pl-3 bg-gray-700 rounded-xl mb-3 ">
                <CheckBadgeIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary" />
                <h2 className="font-bold md:text-2xl text-xl text-white">
                  Automatic{" "}
                  <span className="text-primary">Mail Forwarding</span>
                </h2>
              </div>

              <p className="md:text-xl text-base font-light text-pretty text-white my-4">
                Get all your legal correspondence, documentation and information
                digitally uploaded to your dashboard and automatically forwarded
                on to you.
              </p>
            </div>
            {/* section 4 */}
            <div className="border border-gray-200 rounded-2xl  bg-gray-900 p-5 mb-7 md:w-1/2">
              <div className="flex gap-4  pt-9 pb-9 pl-3 bg-gray-700 rounded-xl mb-3 ">
                <CheckBadgeIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary" />
                <h2 className="font-bold md:text-2xl text-xl text-white">
                  Tailored <span className="text-primary">SMS and Email</span>{" "}
                  Notifications
                </h2>
              </div>

              <p className="md:text-xl text-base font-light  text-white my-4">
                Stay informed with email and text notifications when we receive
                documents for your business. Access, store, and retrieve
                information within your dashboard anytime.
              </p>
            </div>
          </div>
        </div>

        {/*------------------ faq section ----------*/}
        <div className="my-7 md:px-10  mx-5">
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left">
            Common Questions About
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left">
            Filing a Change of Registered
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left pb-7 max-sm:pb-5">
            Agent
          </h2>
          <Accordion type="single" collapsible className="text-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How much Does it Cost To File a Change of Agent?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light">
                  Our service fee to change the agent is $49. You&apos;ll also
                  need to pay the state fee, which varies based on where your
                  business was formed.To review the fee in your state click on
                  the “order now” button and select the state and entity type.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Are There Any Hidden Cost ?</AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light ">
                  No! We pride ourselves on transparency. There are absolutely
                  no hidden costs associated with you changing your Registered
                  Agent.
                </p>{" "}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Are There Any Specific Rules for My State ?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light">
                  You&apos;ll always need to fill out a “Change of Registered
                  Agent” form, but the processing fee and the information needed
                  varies by state - which is why it pays to work with VC FILING.
                  Check out{" "}
                  <span className="text-primary">
                    everything you need to know about Registered Agents
                  </span>
                  and make sure to explore your state&apos;s specific
                  information.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How Long Does it Take to File for a Change of Agent?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light t">
                  In some states, you can complete it in as little as an hour.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Do i Need to Explain Why i Am Changing my Registered Agent ?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light ">
                  No. Most states just require the name of the business entity,
                  the current registered agent name and address, the name and
                  address of the new Registered Agent, and the name and
                  information of the authorized person filling out the form on
                  behalf of the entity.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Are There any Guides or Resources for Getting Started ?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light ">
                  Discover everything you need to know about;{" "}
                  <span className="text-primary">
                    what Registered Agents do
                  </span>{" "}
                  and{" "}
                  <span className="text-primary">
                    VC FILLING Registered Agent Service
                  </span>
                  . Check out all of our other resources{" "}
                  <span className="text-primary">
                    related to Registered Agents
                  </span>{" "}
                  and learn all about{" "}
                  <span className="text-primary">
                    what types of entities VC FILING can be a Registered Agent
                    for.
                  </span>
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* new section start  */}

        <div className="flex justify-center items-center pb-4 pt-10">
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

        {/* 1000 entrepreneurs part  */}

        <div className="text-center md:text-5xl text-2xl mx-5 font-bold pt-5 uppercase ">
          <h2>
            Why do over <span className="text-primary">1000000</span>
          </h2>
          <h2>
            <span className="text-primary">businesses love </span>VC FILING
          </h2>
        </div>

        {/* part end */}

        {/* new part */}

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
          <h2 className="md:text-5xl font-bold text-2xl py-3 uppercase">
            Change Your
          </h2>
          <h2>
            <span className="text-primary md:text-5xl font-bold text-2xl py-3 uppercase">
              Registered Agent
            </span>
          </h2>
          <h2 className="md:text-5xl font-bold text-2xl py-3 uppercase">Now</h2>

          <div className="flex justify-center items-center py-5">
            <Link
              className="px-9   py-5  bg-primary text-white border border-primary rounded-[30px] "
              href="/change-agent/step-1"
            >
              GET STARTED NOW
            </Link>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default FreeLLC;
