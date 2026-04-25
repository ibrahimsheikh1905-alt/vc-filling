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
import { ArrowDown, CheckIcon } from "lucide-react";
import NavigationWrapper from "@/components/NavigationWrapper";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";

import { ShieldCheck } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { DocumentCheckIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { statesInUS } from "@/data";
import { Item } from "@radix-ui/react-navigation-menu";

const TaxConsultation = () => {
  return (
    <NavigationWrapper>
      <div className=" my-16 flex flex-col-reverse md:flex-row">
        <div className="flex-1">
          <div className=" md:text-left max-sm:mx-5">
            <h1 className="md:text-5xl text-3xl font-bold py-10 pt-20 md:pl-20">
              Register a Trademark
            </h1>
            <h2 className="md:  md:pl-20 pb-12">Only $299 + Filing Fee*</h2>
            <Link
              className="px-10 md:ml-20 py-5 font-bold bg-primary text-white border border-primary rounded-[30px] "
              href="/trademark/step-1"
            >
              GET STARTED
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
        <div className="md:grid grid-cols-2 gap-5 md:mb-24 mx-5">
          <div className="text-left">
            <h2 className="capitalize md:text-4xl max-sm:text-3xl font-bold">
              Protect Your Business Name With a Trademark
            </h2>
          </div>
          <div className="">
            <p className="py-3 md:  ">
              Protecting your trademark can really pay dividends. Not only is it
              a valuable property asset, but it&apos;s also your brand, your
              reputation. The reputation you have established is associated with
              these different brand elements - your name, logo, and tagline -
              and the reason why people buy from you.
            </p>
            <div className="flex gap-5 bg-slate-200 p-9 rounded-xl md:mt-9 max-sm:mt-5">
              <div className="flex justify-center items-center p-2">
                <ShieldCheck className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary" />
              </div>
              <div>
                <p className="py-3   ">
                  It&apos;s important to take steps to protect these company
                  assets. Our partnered attorneys will do the research to make
                  sure the mark isn&apos;t already taken, ensure the filing gets
                  accepted by the government office, and provide sound legal
                  advice throughout the entire process.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* new section start  */}
        <div className="md:flex  justify-center gap-10 items-center md:py-10 mx-5 ">
          <div className=" md:text-left md:w-1/2 md:px-16 px-1">
            <h3 className="md:text-5xl text-3xl font-bold py-10  ">
              What&apos;s included in the package?
            </h3>
            <p className=" font-bold md:mx-5">
              What&apos;s included in the package?
            </p>

            <div className="py-5 md:justify-between">
              <div className="px-3">
                <div className="flex py-1 gap-2  ">
                  <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                  Legal counsel from an experienced trademark attorney
                </div>
                <div className="flex py-1 gap-2  ">
                  <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                  A thorough search of existing trademarks
                </div>
                <div className="flex py-1 gap-2  ">
                  <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                  The preparing and filing of a trademark application
                </div>
              </div>
            </div>
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
            <p className="text-center text-xl  py-6 font-bold mt-5">
              REGISTER A TRADEMARK
            </p>
            <div className="mx-5 py-5">
              <div className=" mx-2  text-center  py-5 ">
                <h1 className="text-5xl font-semibold">299$</h1>
                <p className="py-5">+ Filing Fee*</p>
              </div>

              <div className="flex justify-center items-center">
                <Link
                  className="px-20  py-5 bg-primary text-white border border-primary rounded-[30px] "
                  href={"/form-a-llc/"}
                >
                  ORDER NOW
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* new section start          */}
        <h2 className="md:text-5xl text-2xl font-bold text-center my-6 capitalize md:py-14 max-sm:pt-9">
          How to Get Access to Affordable Accounting & Bookkeeping
        </h2>

        {/* new section start  */}
        <div className="bg-black rounded-xl mx-5">
          <div className=" md:relative">
            <Image
              className="md:absolute top-0 right-0 hidden"
              src="/trademark/shape.webp"
              alt="image"
              width={280}
              height={280}
            />
          </div>
          <h2 className="md:text-4xl text-2xl font-bold py-3 uppercase text-center">
            <span className="text-primary">
              {" "}
              Trademark Searches & REGISTRATION:
            </span>
          </h2>
          <h2 className="md:text-4xl text-2xl font-bold py-3 uppercase text-center text-white">
            How it works
          </h2>
          {/* new div black section start here  */}
          <div className="md:flex text-white px-3 md:pt-32 md:pb-24 max-sm:pb-9 gap-8">
            {/* div 1 */}
            <div className="border-4 border-gray-50 rounded-xl max-sm:mb-5 ">
              <div className="p-4  py-4 pt-10 ">
                <ChatBubbleLeftIcon className="min-h-12 min-w-12 max-h-12 max-w-12 text-primary " />
              </div>
              <h2 className="md:text-2xl text-2xl uppercase font-bold py-2 text-center  ">
                Tell us what you need
              </h2>
              <p className="my-2 md:   pb-2 text-center px-4 pt-5 ">
                A trademark attorney will follow up with you to get a better
                understanding of your needs and provide guidance on how the
                process works.
              </p>
            </div>
            {/* arrow section  */}
            <div className="max-sm:hidden flex justify-center items-center ">
              <div className=" py-5 max-sm:hidden">
                <ArrowRight className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary " />
              </div>
            </div>
            {/* div 2 */}
            <div className="border-4 border-gray-50 rounded-xl max-sm:my-5 ">
              <div className="p-4  py-4 pt-10">
                <MagnifyingGlassIcon className="min-h-12 min-w-12 max-h-12 max-w-12 text-primary " />
              </div>
              <h2 className="md:text-2xl text-2xl uppercase font-bold py-2 text-center  ">
                We get to work
              </h2>
              <p className="my-2 md:   pb-2 text-center pt-10 px-4">
                The trademark attorney will conduct a trademark search to ensure
                the availability, then provide the search results along with a
                plan of action.
              </p>
            </div>

            <div className="max-sm:hidden flex justify-center items-center max-sm:pb-4 ">
              <div className=" py-5 max-sm:hidden">
                <ArrowRight className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary " />
              </div>
            </div>

            {/* div 3 */}
            <div className="border-4 border-gray-50 rounded-xl ">
              <div className="p-4  py-4 pt-10">
                <DocumentCheckIcon className="min-h-12 min-w-12 max-h-12 max-w-12 text-primary " />
              </div>
              <h2 className="md:text-2xl text-2xl uppercase font-bold py-2 text-center  ">
                We will file your trademark with the Patent and Trademark office
              </h2>
              <p className="my-2 md:   pb-2 text-center px-4">
                The attorney will file the trademark with the US Patent and
                Trademark office and deliver the approved trademark
                documentation.
              </p>
            </div>
          </div>
        </div>

        {/* new section start  */}
        <div className="md:pt-20 mx-5 max-sm:pt-5">
          <h2 className="md:text-4xl text-2xl font-bold  uppercase text-center">
            Providing Everything
          </h2>
          <h2 className="md:text-4xl text-2xl font-bold pb-3 uppercase text-center">
            You Need When You Need It
          </h2>
          <p className="md:my-2    text-center">
            As your business grows we&apos;ll be there every step of the way to
            make sure that you have the
          </p>
          <p className="md:my-2    text-center pb-10">
            resources at hand to service your companies ongoing needs.
          </p>
        </div>

        {/* new section start  */}
        <div className="md:flex gap-40 justify-center items-center border-2 border-solid rounded-xl md:mx-20 mx-5">
          <p className="my-1 md:   py-2 hover:border-2 border-solid rounded-xl px-3">
            Company Changes
          </p>
          <p className="my-1 md:   py-2  hover:border-2 border-solid rounded-xl px-3">
            Compliance
          </p>
          <p className="my-1 md:   py-2  hover:border-2 border-solid rounded-xl px-3">
            Registered Agent
          </p>
          <p className="my-1 md:   py-2  hover:border-2 border-solid rounded-xl px-3">
            IRS Filing
          </p>
        </div>
        {/* image section start  */}
        <div className="md:flex gap-7">
          {/* div 1 */}
          <div className="md:w-1/3 mx-5">
            {/* imag1 */}
            <div className="border border-gray-200 rounded-2xl px-4 my-10">
              <div>
                <Image
                  className="pt-10"
                  src="/foreign-qualification/pic1.webp"
                  alt="Free LLC"
                  width={350}
                  height={350}
                />
              </div>
              <h3 className="my-4 md:  font-medium ">Dissolution</h3>
              <p className="my-4 text-lg font-medium ">
                used to formally terminate the existence of an entity.
              </p>
              <p className="pt-6 pb-3 md:  font-medium ">
                <span className="text-primary">Learn More </span>
              </p>
            </div>
            {/* imag2 */}
            <div className="border border-gray-200 rounded-2xl px-4  my-10">
              <div>
                <Image
                  className="pt-10"
                  src="/trademark/trade1.webp"
                  alt="Free LLC"
                  width={350}
                  height={350}
                />
              </div>
              <h3 className="my-4 md:  font-medium ">Foreign Qualification</h3>
              <p className="my-4 text-lg font-medium ">
                field when you need to expand your entity to new states.
              </p>
              <p className="pt-6 pb-3 md:  font-medium ">
                <span className="text-primary">Learn More </span>
              </p>
            </div>
            {/* imag3 */}
            <div className="border border-gray-200 rounded-2xl px-4  my-10">
              <div>
                <Image
                  className="pt-10"
                  src="/trademark/trade2.webp"
                  alt="Free LLC"
                  width={350}
                  height={350}
                />
              </div>
              <h3 className="my-4 md:  font-medium ">Amendment</h3>
              <p className="my-4 text-lg font-medium ">
                File if your company requires changes to membership , addresses
                , or company name.
              </p>
              <p className="pt-6 pb-3 md:  font-medium ">
                <span className="text-primary">Learn More </span>
              </p>
            </div>
          </div>
          {/* div2 */}
          <div className="md:w-1/3 mx-5">
            {/* imag1 */}
            <div className="border border-gray-200 rounded-2xl px-4 my-10">
              <div>
                <Image
                  className="pt-10"
                  src="/trademark/trade4.webp"
                  alt="Free LLC"
                  width={350}
                  height={250}
                />
              </div>
              <h3 className="my-4 md:  font-medium ">Business Formation</h3>
              <p className="my-4 text-lg font-medium ">
                Start an LLC,&spos;s Crop , C CROP , or non-profit here.
              </p>
              <p className="pt-6 pb-3 md:  font-medium ">
                <span className="text-primary">Learn More </span>
              </p>
            </div>
            {/* imag2 */}
            <div className="border border-gray-200 rounded-2xl px-4  my-10">
              <div>
                <Image
                  className="pt-10"
                  src="/trademark/trade5.webp"
                  alt="Free LLC"
                  width={350}
                  height={350}
                />
              </div>
              <h3 className="my-4 md:  font-medium ">Get Registered</h3>
              <p className="my-4 text-lg font-medium ">
                Get your business back up and running after dissolution.
              </p>
              <p className="pt-6 pb-3 md:  font-medium ">
                <span className="text-primary">Learn More </span>
              </p>
            </div>
          </div>
          {/* div 3 */}
          <div className="md:w-1/3 mx-5">
            {/* image1 */}
            <div className="border border-gray-200 rounded-2xl px-4  my-10">
              <div>
                <Image
                  className="pt-10"
                  src="/trademark/trade6.webp"
                  alt="Free LLC"
                  width={350}
                  height={350}
                />
              </div>
              <h3 className="my-4 md:  font-medium ">DBA</h3>
              <p className="my-4 text-lg font-medium ">
                File if your company require an assumed business or fictitious
                name{" "}
              </p>
              <p className="pt-6 pb-3 md:  font-medium ">
                <span className="text-primary">Learn More </span>
              </p>
            </div>
            {/* image2 */}
            <div className="border border-gray-200 rounded-2xl px-4  md:my-10 ">
              <div>
                <Image
                  className="pt-10"
                  src="/trademark/trade7.webp"
                  alt="Free LLC"
                  width={350}
                  height={350}
                />
              </div>
              <h3 className="my-4 md:  font-medium ">Virtual Address</h3>
              <p className="my-4 text-lg font-medium ">
                Protect your privacy , secure a street address for your biz, and
                check your mail from anywhere .
              </p>
              <p className="pt-6 pb-3 md:  font-medium ">
                <span className="text-primary">Learn More </span>
              </p>
            </div>
          </div>
        </div>
        {/*------------------ faq section ----------*/}
        <div className="md:my-16  md:px-10 md:pt-12 pt-8 md:pb-16 mx-5">
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left  capitalize">
            Common Questions about
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left  capitalize md:pb-5">
            Registering a Trademark
          </h2>
          <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How broad is my Trademark protection?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:   ">
                  This includes filing the trademark in one series and one
                  class. Additional legal fees and filing fees will apply if you
                  decide to file a trademark in more than one class.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can i cancel my order?</AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:   ">
                  You will be contacted within 5 business days by our agents.
                  You can request a refund before this contact, or before
                  substantive work on your application has begun, whichever is
                  later.
                </p>{" "}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How long will it take for my Trademark to be filed?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:   ">
                  The preparation and filing of a Trademark Application take
                  anywhere from 3-7 days once all information, logos, and
                  specimens are received by our agents and you sign off on the
                  application. In some instances, the process may take longer
                  given the complexity of the mark.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What level of support can i expect through this process?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:   ">
                  Once you have submitted your business name or logo, an
                  attorney will conduct the initial search and discuss the
                  results via email or phone. The attorney will then prepare the
                  filing application and submit to the United States Patent and
                  Trademark Office. You will be able to track the approval
                  status and contact us with any questions you may have while
                  awaiting for the approval.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                How long will the Trademark process take?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:   ">
                  The Trademark approval times can vary based on a variety of
                  factors. The USPTO is likely to respond in 7 - 8 months from
                  the filing of the application. Despite the delayed approval
                  time, you will be able to monitor the status of the trademark
                  online as it&apos;s going through the approval process.
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

        <div className="text-center md:pb-6 mx-5">
          <h2 className="md:text-5xl text-2xl font-bold md:py-3  uppercase ">
            Protect your name{" "}
            <span className="text-primary">logo, with a U.S.</span>
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold md:py-3  uppercase ">
            <span className="text-primary"> trademark registration</span>
          </h2>

          <p className="md:my-2    max-sm:py-2">Only $299 + Filing Fee*</p>
        </div>
        <div className="flex justify-center items-center md:pb-16 max-sm:pb-8">
          <Link
            className="px-9 py-5 bg-primary text-white border border-primary rounded-[30px] "
            href={"/form-a-llc/"}
          >
            ORDER NOW
          </Link>
        </div>
        <h2 className="text-center font-bold text-4xl max-sm:text-3xl md:py-6 max-sm:pb-5">
          Related Articles
        </h2>
      </div>
      {/* new section start  */}
      <div className=" md:grid grid-cols-3 gap-5 md:pb-20 pb-8 mx-5">
        {/* image 1 */}
        <div>
          <Image
            className=""
            src="/foreign-qualification/img1.webp"
            alt="Free LLC"
            width={500}
            height={500}
          />
          <p className="py-3  mx-3">
            How to Start Selling Merchandise for Your Small Business and Be
            Profitable
          </p>
          <p className="mx-3  pb-5">Nov 9 , 2023, Lisa Crocco</p>
        </div>
        {/* image 2 */}
        <div>
          <Image
            className=""
            src="/foreign-qualification/img2.webp"
            alt="Free LLC"
            width={500}
            height={500}
          />
          <p className="pt-3 text-lg mx-3 capitalize">
            How to Start a Business in Texas and Why
          </p>

          <p className="mx-3  pb-5">Nov 9 , 2023, Lisa Crocco</p>
        </div>
        {/* image 3 */}
        <div>
          <Image
            className=""
            src="/foreign-qualification/img3.webp"
            alt="Free LLC"
            width={500}
            height={500}
          />
          <p className="py-3 text-lg mx-3">
            10 Best (and Worst) Cities for Digital Nomads in The States
          </p>
          <p className="mx-3 text-lg">Nov 9 , 2023, Lisa Crocco</p>
        </div>
      </div>

      <div className="flex gap-5 md:mx-32 mx-5 bg-slate-200 p-6 md:my-12 max-sm:mb-9 rounded-xl">
        <div className="flex justify-center items-center ">
          <CheckBadgeIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary" />
        </div>
        <div>
          <p className="my-2 md:   py-5">
            *For new trademark applications, VC FILING charges a flat “Filing
            Fee” of $350 per class in addition to other fees. Government filing
            fees for filing a trademark application range from $250 to $350 per
            class. The $250 application type requires more precision and effort
            than the $350 application type, so in situations where your attorney
            uses the $250 application type, the remaining $100 is used to cover
            the additional labor for that application type.
          </p>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default TaxConsultation;
