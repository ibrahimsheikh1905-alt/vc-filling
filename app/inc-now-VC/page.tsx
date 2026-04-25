import {
  CheckBadgeIcon,
  StarIcon,
  ChevronDownIcon,
  EnvelopeIcon,
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
import { CheckIcon, ContactIcon } from "lucide-react";
import {
  ExclamationCircleIcon,
  CurrencyDollarIcon,
  FlagIcon,
  UserIcon,
  TrophyIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import NavigationWrapper from "@/components/NavigationWrapper";
import { statesInUS } from "@/data";
import { Item } from "@radix-ui/react-navigation-menu";

const TaxConsultation = () => {
  return (
    <NavigationWrapper>
      <div className="md:mx-20 relative md:pt-8 max-sm:mx-5">
        {/* new section start  */}
        <div className="text-center  mt-20">
          <h1 className="text-5xl font-bold">
            The team that&apos;s helped over
          </h1>
          <h2 className="py-1 text-5xl font-bold">
            1 million businesses launch.
          </h2>
          <p className="pt-4 text-base">
            Every business evolves — and ours is no exception. After 20 years in
          </p>
          <p className="text-base">
            business, we&apos;re reintroducing ourselves with a fresh, new name.
          </p>
        </div>

        {/* new section start  */}
        <div className="text-center font-bold text-5xl md:mt-20">
          <h2>Though our name has changed, we still</h2>
          <h2>have the same:</h2>
        </div>

        {/* new section start  */}
        {/* main div  */}
        <div className="md:grid md:grid-cols-4 gap-9 md:mx-20 pt-9 max-sm:mx-5 ">
          <div className="border rounded-xl px-2 py-10">
            <FlagIcon className="w-7 h-7 text-primary" />

            <p className="mt-6 text-xl font-bold pt-5">
              Leadership (Who are Founders Themselves)
            </p>
          </div>
          <div className="border rounded-xl px-4 py-11 max-sm:my-5">
            <UserIcon className="w-7 h-7 text-primary" />

            <p className="mt-6 text-xl font-bold pt-5">Operating Team</p>
          </div>
          <div className="border rounded-xl px-4 py-11">
            <TrophyIcon className="w-7 h-7 text-primary" />

            <p className="mt-6 text-xl font-bold pt-5">
              Commitments & Philosophies
            </p>
          </div>
          <div className="border rounded-xl px-4 py-11 max-sm:my-5">
            <StarIcon className="w-7 h-7 text-primary" />

            <p className="mt-6 text-xl font-bold pt-5">
              Diehard Belief in Business Without Barriers
            </p>
          </div>
        </div>

        {/* new section start  */}
        <div className=" flex justify-center items-center md:pt-14">
          <Image
            className=""
            src="/vcinc/inc.webp"
            alt="image"
            width={1000}
            height={700}
          />
        </div>
        {/* new faq section  start  */}
        <div className="md:my-16 md:px-10 md:pt-20 max-sm:py-10">
          <h2 className="md:text-5xl text-2xl font-bold md:text-left ">
            FAQs about VC Filling & IncFile
          </h2>

          <Accordion type="single" collapsible className="text-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Why is incfile rebranding to VC Filing
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base ">
                  For nearly two decades, Incfile has been all about efficient
                  business formations and compliance services. We know the
                  hustle; we live it as entrepreneurs. We also recognize the
                  power of solid partnerships and data-driven decisions.
                </p>
                <p className="py-4">
                  Now, with Bizee, we&apos;re not just acknowledging your
                  relentless efforts and the sometimes tough choices you face
                  every day; we&apos;re actively supporting them. We&apos;re
                  with you every step of the way, offering data-driven products
                  and content that empower your business to thrive and grow
                </p>
                <p>
                  By leveraging this data, we&apos;re shaping our products and
                  services to cater to your unique needs, helping you navigate
                  the unseen hard work that fuels your business. This rebrand is
                  our unwavering commitment to stand by your side and help you
                  define your own success.
                </p>
                <p>
                  We believe that choosing Bizee is a choice to work smarter,
                  not just harder—if you&apos;re looking for a smarter way to
                  hustle, Just Get Bizee.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What happens to incfile.com</AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base">
                  Incfile has transformed into the engine that powers Bizee. All
                  the formation and compliance products, orders, and expertise
                  are still here. Our leadership and teams are still dedicated
                  to serving you. We&apos;re now focused on providing you with
                  an even better and more comprehensive service through
                  Bizee.com
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What happens to my account and data?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base">
                  The good news is that your account has no changes, and your
                  data remains unchanged. All your orders, documents, and data
                  that were associated with Incfile still exist. Incfile has
                  simply undergone a rebrand to Bizee.
                </p>
                <p className="my-2 md:text-xl text-base">
                  Simply log in to your{" "}
                  <span className="text-primary">dashboard</span> as you always
                  would to see your business&apos;s information.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What happens to my Document ?</AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base  ">
                  Everything you had with Incfile is still accessible under our
                  new name, Bizee. There are no changes to your important
                  records or files. You can log in to your{" "}
                  <span className="text-primary"> VC Filing Dashboard</span> the
                  same way you always have.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                How does i access my client dashboard?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base">
                  We&apos;ve made this transition seamless for you. You can use
                  the same login and password that you used for Incfile to log
                  in to your{" "}
                  <span className="text-primary"> Bizee dashboard.</span>
                </p>
              </AccordionContent>

              <AccordionContent></AccordionContent>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                How does i access my client dashboard?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base">
                  We&apos;ve made this transition seamless for you. You can use
                  the same login and password that you used for Incfile to log
                  in to your{" "}
                  <span className="text-primary"> Bizee dashboard.</span>
                </p>
              </AccordionContent>

              <AccordionContent></AccordionContent>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                Will there be any charges to pricing or subscription plans?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base">
                  Your services and subscriptions stay just as they were. The
                  transition from Incfile to Bizee doesn&apos;t impact the
                  services you&apos;ve signed up for or your subscription.
                  It&apos;s all business as usual, with the same level of
                  support and commitment you&apos;ve come to expect from us.
                  Your entrepreneurial journey continues uninterrupted.
                </p>
              </AccordionContent>

              <AccordionContent></AccordionContent>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                I placed my order with incfile recently and it has not been
                processed yet . what&aos;s next?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base">
                  Your order will be processed as usual, and all updates and
                  information will now come through VC Filing . You can also
                  check the status of your order by simply signing on to the{" "}
                  <span className="text-primary">VC filing Dashboard.</span>
                </p>
              </AccordionContent>

              <AccordionContent></AccordionContent>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>
                can customer expect continued customer support and assistance
                during the transition?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base">
                  Absolutely. We&apos;re committed to providing the same high
                  level of customer support and assistance you&apos;ve always
                  enjoyed. If you have additional questions please reach out at
                  any time!{" "}
                  <span className="text-primary">Customer Service</span>
                </p>
              </AccordionContent>

              <AccordionContent></AccordionContent>
              <AccordionContent></AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* new section start  */}
        <div className="font-bold uppercase text-xl text-center">
          <h3>
            <span className="text-primary">What&apos;s to come</span>
          </h3>
        </div>
        {/* new section start  */}
        <div className="text-center">
          <h3 className="text-5xl font-bold">Tomorrow and beyond?</h3>
          <h3 className="text-5xl font-bold pb-4">Our roadmap is ambitious.</h3>
          <p className="text-2xl pb-5">
            (As fellow business owners, we know yours is, too)
          </p>
          <div className="text-2xl">
            <p className="">
              We&apos;ve got more features and entrepreneur-first add-ons
              planned.
            </p>
            <p>But, the passion that started this company will never change.</p>
            <p>We&apos;re excited for what&apos;s ahead!</p>
          </div>
        </div>
        {/* new section start  */}
        <div className="md:flex gap-7 md:pt-14 max-sm:pt-2">
          {/* div 1 */}
          <div className="md:grid grid-cols-3 gap-7 md:mx-20">
            {/* imag1 */}
            <div className="border border-gray-200 rounded-2xl px-4 my-10">
              <div>
                <Image
                  className="pt-10"
                  src="/vcinc/i1.webp"
                  alt="Free LLC"
                  width={350}
                  height={350}
                />
              </div>
              <h3 className="my-4 md:  font-medium text-xl ">
                Business Formation
              </h3>
              <p className="my-4  font-medium ">
                Start an LLC,S Crop , or nonprofit here
              </p>
              <p className="pt-6 pb-3 md:font-medium text-xl ">
                <span className="text-primary ">Learn More </span>
              </p>
            </div>
            {/* imag2 */}
            <div className="border border-gray-200 rounded-2xl px-4 my-10">
              <div>
                <Image
                  className="pt-10"
                  src="/vcinc/i1.webp"
                  alt="Free LLC"
                  width={350}
                  height={350}
                />
              </div>
              <h3 className="my-4 md:  font-medium text-xl">Annual Report</h3>
              <p className="my-4 font-medium ">
                File to keep your business compliant and in good standing with
                your state.
              </p>
              <p className="pt-6 pb-3 md:  font-medium  text-xl">
                <span className="text-primary">Learn More </span>
              </p>
            </div>
            {/* imag3 */}
            <div className="border border-gray-200 rounded-2xl px-4 my-10">
              <div>
                <Image
                  className="pt-10"
                  src="/vcinc/i3.webp"
                  alt="Free LLC"
                  width={350}
                  height={350}
                />
              </div>
              <h3 className="my-4 md:  font-medium  text-xl ">
                Virtual Address
              </h3>
              <p className="my-4  font-medium ">
                Protect your privacy . secure a street address for your biz ,
                and check your mail from anywhere .
              </p>
              <p className="pt-6 pb-3 md:  font-medium text-xl">
                <span className="text-primary">Learn More </span>
              </p>
            </div>
          </div>
          {/* div2 */}
        </div>
        {/* last section end  */}
        <div className="md:grid grid-cols-2 mx-20 pt-10">
          {/* left side div  */}
          <div className="">
            <h3 className="text-5xl font-extrabold pb-4">
              Contact <span className="text-primary">VC FILING</span>
            </h3>
            <p>VC FILING entire customer support team is fluent</p>
            <p>in both English and Spanish.</p>
            <p className="my-6 ">Monday - Friday from 9 a.m. to 6 p.m. CST</p>
            <div>
              <Image
                src="/contact/map.webp"
                alt="Free LLC"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          {/* right side div  */}
          <div className="">
            <div className="flex border-2 gap-8 p-4 rounded-xl shadow-xl md:mx-28">
              <div>
                <MapPinIcon className="w-10 h-10 text-primary" />
              </div>
              <div>
                <p className="text-lg">13750 State Highway 249,</p>
                <p className="text-lg">Suite 220,Houston Texas</p>
              </div>
            </div>
            {/* icon section 2  */}
            <div className="flex border-2 gap-8 p-4 rounded-xl shadow-xl md:mx-28 my-7">
              <div>
                <EnvelopeIcon className="w-10 h-10 text-primary" />
              </div>
              <div>
                <p className="text-lg">Fax</p>
                <p className="text-lg">877.199.32</p>
              </div>
            </div>
            {/* icon section 3  */}
            <div className="flex border-2 gap-8 p-4 rounded-xl shadow-xl md:mx-28 mb-10">
              <div>
                <PhoneIcon className="w-10 h-10 text-primary" />
              </div>
              <div>
                <p className="text-lg">Phone</p>
                <p className="text-lg">888-462-2235</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default TaxConsultation;
