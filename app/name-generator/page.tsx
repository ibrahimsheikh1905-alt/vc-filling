import {
  CheckBadgeIcon,
  StarIcon,
  PlayCircleIcon,
  ExclamationCircleIcon,
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
import { CircleAlert } from "lucide-react";

const FreeLLC = () => {
  return (
    <NavigationWrapper>
      <div className="md:mx-36 max-sm:mx-5">
        {/* new section start  */}
        <div className="border-2 mx-10 rounded-xl">
          <div className="flex justify-center items-center gap-2">
            <div>
              <h2>
                <span className="font-bold">Excellent </span> 4.7 out of 5
              </h2>
            </div>
            <div>
              <StarIcon className="w-4 h-4 " color="#39b54a" />
            </div>
          </div>
          {/* new section start  */}
          <h1 className="text-5xl max-sm:text-3xl font-bold text-center pt-5">
            Picking the Perfect
          </h1>
          <h2 className="text-5xl max-sm:text-3xl font-bold text-center">
            Business Name
          </h2>
          <p className="text-center">
            Tell us about your business, industry, and brand personality, and
            we&apos;ll generate options to help find your perfect fit.
          </p>
          <div className="flex gap-14 justify-center items-center">
            <Image
              className="rounded-xl"
              src="/nam-gen/forbes.svg"
              alt="Free LLC"
              width={80}
              height={80}
            />
            <Image
              className="rounded-xl"
              src="/nam-gen/inc.svg"
              alt="Free LLC"
              width={80}
              height={80}
            />
            <Image
              className="rounded-xl"
              src="/nam-gen/cnn.svg"
              alt="Free LLC"
              width={80}
              height={80}
            />
          </div>
        </div>

        {/* new section start  */}
        <div className="md:grid grid-cols-2 my-20 gap-10">
          <div>
            <h3 className="text-primary font-bold uppercase">
              your choice matters
            </h3>
            <h3 className="font-bold text-4xl">Importance of a Great</h3>
            <h3 className="text-4xl font-bold">Business Name</h3>
            <p className="py-8">
              Your business name significantly impacts how customers perceive
              your brand. A short, fitting, and distinctive name demonstrates
              confidence, defines your business, and generates buzz. It is the
              foundation for your entire brand.
            </p>
          </div>
          <div>
            <Image
              className="rounded-xl"
              src="/nam-gen/pic1.webp"
              alt="Free LLC"
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* new section start  */}
        <div className="border-2">
          <div className="text-center uppercase font-bold">
            <h2 className="text-5xl">Tips for choosing</h2>
            <h2 className="text-5xl">
              <span className="text-primary">a Business name</span>
            </h2>
          </div>
          {/* new part  start  */}
          <div className="md:grid grid-cols-2 gap-2 my-10">
            {/* part left side  */}
            <div className="border-2 p-5 mx-5 rounded-xl">
              <div className="flex justify-center items-center">
                <CheckBadgeIcon
                  className="min-h-9 min-w-9 max-h-9 max-w-9 "
                  color="#39b54a"
                />
              </div>
              <h3 className="font-bold text-3xl my-3">USE</h3>
              <div className="flex gap-3 py-3">
                <CheckBadgeIcon
                  className="min-h-5 min-w-5 max-h-5 max-w-5"
                  color="#39b54a"
                />
                Simple and distinctive words
              </div>
              <div className="flex gap-3 py-3">
                <CheckBadgeIcon
                  className="min-h-5 min-w-5 max-h-5 max-w-5"
                  color="#39b54a"
                />
                Meaningful and emotional words
              </div>
              <div className="flex gap-3 py-3">
                <CheckBadgeIcon
                  className="min-h-5 min-w-5 max-h-5 max-w-5"
                  color="#39b54a"
                />
                Words that create a verbal or sound association
              </div>
              <div className="flex py-3 gap-3">
                <CheckBadgeIcon
                  className="min-h-5 min-w-5 max-h-5 max-w-5"
                  color="#39b54a"
                />
                Techniques like alliteration, assonance and rhythm
              </div>
            </div>
            {/* part right side  */}
            <div className="border-2 p-5 mx-5 rounded-xl">
              <div className="flex justify-center items-center">
                <ExclamationCircleIcon
                  className="min-h-9 min-w-9 max-h-9 max-w-9 "
                  color="#39b54a"
                />
              </div>
              <h3 className="font-bold text-3xl my-3">AVOID</h3>
              <div className="flex gap-3 py-3">
                <ExclamationCircleIcon
                  className="min-h-5 min-w-5 max-h-5 max-w-5"
                  color="#39b54a"
                />
                Names that are long and cumbersome
              </div>
              <div className="flex gap-3 py-3">
                <ExclamationCircleIcon
                  className="min-h-5 min-w-5 max-h-5 max-w-5"
                  color="#39b54a"
                />
                Names that are hard to pronounce or remember
              </div>
              <div className="flex gap-3 py-3">
                <ExclamationCircleIcon
                  className="min-h-5 min-w-5 max-h-5 max-w-5"
                  color="#39b54a"
                />
                Any name that is already in use by another business in your
                state
              </div>
              <div className="flex py-3 gap-3">
                <ExclamationCircleIcon
                  className="min-h-5 min-w-5 max-h-5 max-w-5"
                  color="#39b54a"
                />
                Names that are trademarked or otherwise protected
              </div>
              <div className="flex py-3 gap-3">
                <ExclamationCircleIcon
                  className="min-h-5 min-w-5 max-h-5 max-w-5"
                  color="#39b54a"
                />
                A name that may be offensive in a different language
              </div>
              <div className="flex py-3 gap-3">
                <ExclamationCircleIcon
                  className="min-h-5 min-w-5 max-h-5 max-w-5"
                  color="#39b54a"
                />
                Names where you can&apos;t get naming rights on various social
                media platforms
              </div>
              <div className="flex py-3 gap-3">
                <ExclamationCircleIcon
                  className="min-h-5 min-w-5 max-h-5 max-w-5"
                  color="#39b54a"
                />
                Names where the website domain isn&apos;t available
              </div>
            </div>
          </div>
        </div>
        {/* new section start  */}
        <div className="text-center py-10">
          <h2 className="text-4xl">Business Name and Branding Stats</h2>
          <p>
            People are bombarded with products and services all day, every day,
            in real life and across many devices. A good business name and brand
            is vital to standing out — just check out these stats!
          </p>
        </div>

        {/* new section start  */}
        <div className="grid grid-cols-2 gap-6 ">
          {/* left section  */}
          <div>
            <Image
              className="rounded-xl"
              src="/nam-gen/pc2.webp"
              alt="Free LLC"
              width={600}
              height={700}
            />
          </div>
          {/* right section start  */}
          <div className="py-2">
            <div className="flex items-center bg-white shadow-md rounded-lg p-4 w-full max-w-md my-3 border-2">
              <div className="bg-orange-100 text-orange-500 text-xl font-bold rounded-md w-20 h-20 flex items-center justify-center mr-4">
                72%
              </div>

              <p className="text-gray-700 text-sm">
                72% of the best brand names are made-up words or acronyms.
              </p>
            </div>
            <div className="flex items-center bg-white shadow-md rounded-lg p-4 w-full max-w-md my-3 border-2">
              <div className="bg-orange-100 text-orange-500 text-xl font-bold rounded-md w-20 h-20 flex items-center justify-center mr-4">
                77%
              </div>

              <p className="text-gray-700 text-sm">
                77% of consumers make purchase decisions based entirely on a
                brand name.
              </p>
            </div>
            <div className="flex items-center bg-white shadow-md rounded-lg p-4 w-full max-w-md my-3 border-2">
              <div className="bg-orange-100 text-orange-500 text-xl font-bold rounded-md w-20 h-20 flex items-center justify-center mr-4">
                7 SEC
              </div>

              <p className="text-gray-700 text-sm">
                Your brand has 7 seconds to make a good first impression.
              </p>
            </div>
            <div className="flex items-center bg-white shadow-md rounded-lg p-4 w-full max-w-md my-3 border-2">
              <div className="bg-orange-100 text-orange-500 text-xl font-bold rounded-md w-20 h-20 flex items-center justify-center mr-4">
                55%
              </div>

              <p className="text-gray-700 text-sm">
                55% of a first impression is made because of visual stimuli like
                a logo or brand colors.
              </p>
            </div>
            <div className="flex items-center bg-white shadow-md rounded-lg p-4 w-full max-w-md my-3 border-2">
              <div className="bg-orange-100 text-orange-500 text-xl font-bold rounded-md w-20 h-20 flex items-center justify-center mr-4">
                42%
              </div>

              <p className="text-gray-700 text-sm">
                42% of people say a logo can tell them about a brand&apos;s
                personality.
              </p>
            </div>
          </div>
        </div>
        {/* new section start  */}
        <div className="text-center">
          <p className="text-primary font-bold uppercase">taking action</p>
          <h3 className="text-4xl font-bold">
            Steps After Finding Your Perfect Name
          </h3>
        </div>

        {/* new section start  */}
        <div className="grid grid-cols-2 border-2 p-3 my-10 rounded-xl">
          <div className="py-5">
            <div className="flex gap-3">
              <span className="text-primary font-bold text-3xl">1.</span>
              <h3 className="text-3xl">Check Name Availability</h3>
            </div>
            <p className="py-7">
              To be legally available, a name must not be in use or trademarked.
              Use VC FILING free Business Name Search Tool to check your
              state&apos;s business registry.
            </p>
          </div>
          <Image
            className="rounded-xl border-4"
            src="/nam-gen/im1.webp"
            alt="Free LLC"
            width={600}
            height={200}
          />
        </div>
        {/* part 2 start  */}
        <div className="grid grid-cols-2 border-2 p-3 my-10 gap-5 rounded-xl">
          <Image
            className="rounded-xl border-4"
            src="/nam-gen/im2.webp"
            alt="Free LLC"
            width={600}
            height={200}
          />
          <div className="py-5">
            <div className="flex gap-3">
              <span className="text-primary font-bold text-3xl">2.</span>
              <h3 className="text-3xl">Select Your State</h3>
            </div>
            <p className="py-7">
              Evaluate which state offers the best environment for your startup,
              considering factors like fees, regulations, and tax implications.
            </p>
          </div>
        </div>
        {/* part 3 start  */}
        <div className="grid grid-cols-2 border-2 p-3 my-10 rounded-xl">
          <div className="py-5">
            <div className="flex gap-3">
              <span className="text-primary font-bold text-3xl">3.</span>
              <h3 className="text-3xl">Select Your State</h3>
            </div>
            <p className="py-7">
              Evaluate which state offers the best environment for your startup,
              considering factors like fees, regulations, and tax implications.
            </p>
          </div>
          <Image
            className="rounded-xl border-4"
            src="/nam-gen/im3.webp"
            alt="Free LLC"
            width={600}
            height={200}
          />
        </div>
        {/* new faq section start  */}
        <div className="my-16 md:px-10 pt-20 mx-5">
          <h2 className="md:text-5xl text-2xl font-bold text-left">FAQ</h2>

          <Accordion type="single" collapsible className="text-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is The Best Business Name Generator?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2  ">
                  Some of the best business name generators include VC FILING
                  Business Name Generator, NameSnack, Shopify Business Name
                  Generator, and Zyro. Some things to look out for in a good
                  business name generator include:
                </p>
                <p>Search and filter features</p>
                <p>
                  Results that are displayed in a variety of colors and fonts to
                  inspire logo and branding
                </p>
                <p>
                  The ability to check business name availability in your state
                </p>
                <p>An option to see what relevant domains are available</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What Are the Types of Brand Names?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 ">
                  There are several different types of brand names:
                </p>{" "}
                <p>
                  Descriptive names explain what a business does - Bank of
                  America and Hotels.com
                </p>
                <p>Origin or founder names - Kellogg&apos;s and Calvin Klein</p>
                <p>
                  Emotive names inspire an emotional response - Uber and Zoom
                </p>
                <p>Names using acronyms or abbreviations - H&M and BMW</p>
                <p>
                  Abstract names are often more readily available - Nintendo and
                  Spotify
                </p>
                <p>
                  Playful names are fun and therefore memorable - Monster and
                  Chipotle
                </p>
                <p>
                  Metaphorical names play on a visual element - Amazon and Apple
                </p>
                <p>
                  Compound names combine two or more words Facebook and PayPal
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What is a Business Name Example?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2  ">
                  Popular business names include Apple, Tesla, Google,
                  Caterpillar, and Twitter, but the term business name can mean
                  several things.A business&apos;s legal name often depends on
                  the type of business structure.Sole proprietorships and
                  general partnerships include your full name or last name. LLCs
                  and corporations don&apos;t need to include an owner&apos;s
                  name.As a business owner, if you want to operate under a
                  different name than your company&apos;s legal name, you can
                  file for a{" "}
                  <span className="text-primary">fictitious or DBA name.</span>
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How do i register Business Name?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2  ">
                  The best way to register your business name and protect
                  yourself is by forming an{" "}
                  <span className="text-primary">LLC</span> or incorporating
                  your business as a corporation. Check out{" "}
                  <span className="text-primary">
                    state-by-state business name restrictions:{" "}
                  </span>
                  what you cannot have in your company name,{" "}
                  <span className="text-primary">
                    how to file and register a trademark
                  </span>{" "}
                  for small businesses, how to register and file a DBA, our easy
                  guide to buying and registering a domain name, and all our
                  other business name-related resources.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Can i Change My Business Name?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes, you can. When you file to become a legal business entity,
                  you create Articles of Incorporation or Articles of
                  Organization, which include the name of your business. If you
                  find that your business name doesn&apos;t fit the services you
                  provide anymore as your business evolves, you can file an
                  <span className="text-primary">
                    {" "}
                    Articles of Amendment
                  </span>{" "}
                  with your Secretary of State to change your business name.
                  Alternatively, you could{" "}
                  <span className="text-primary">
                    register and file a DBA
                  </span>{" "}
                  or fictitious business name, which allows you to do business
                  under a different name from your business&apos;s official
                  legal name.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* new section start  */}
        <div className="bg-black mx-32 py-8 rounded-xl mb-10">
          <h3 className="text-primary font-bold  uppercase text-center py-10">
            join the family
          </h3>
          <h2 className="text-center text-white font-bold text-2xl">
            More than 1,000,000 Businesses have chosen{" "}
            <span className="text-primary">VC FILING</span>
          </h2>
          <p className="text-center text-white mx-36 py-9">
            With VC FILING, you&apos;re not just picking a name; you&apos;re
            laying the foundation for your brand&apos;s future success. Start
            your journey with us today and take the first step towards building
            a thriving business.
          </p>
          <div className="grid grid-cols-2 mx-56 gap-2">
            {/* left side part  */}
            <div className="border-2 rounded-xl p-2">
              <div className="flex gap-2 justify-center items-center">
                <StarIcon
                  className="min-h-5 min-w-5 max-h-5 max-w-5"
                  color="#39b54a"
                />
                <h3 className="text-white">
                  {" "}
                  <span className="text-primary">Shopper</span> Approved
                </h3>
              </div>
              <p className="text-white text-center">113,620 Customer Review</p>
              <div className="flex gap-1 pt-5 pb-3 justify-center items-center">
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
              </div>
            </div>
            {/* right side part  */}
            <div className="border-2 rounded-xl p-2">
              <div className="flex gap-2 justify-center items-center">
                <StarIcon
                  className="min-h-5 min-w-5 max-h-5 max-w-5"
                  color="#39b54a"
                />
                <h3 className="text-white">
                  {" "}
                  <span className="text-primary">Trustpilot</span>
                </h3>
              </div>
              <p className="text-white text-center">20,130 Customer Review</p>
              <div className="flex gap-1 pt-5 pb-3 justify-center items-center">
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center md:pb-16 max-sm:pb-5 my-5 pt-8">
            <Link
              className="px-9 py-5 bg-primary text-white border border-primary rounded-[30px] "
              href={"/form-a-llc/"}
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
