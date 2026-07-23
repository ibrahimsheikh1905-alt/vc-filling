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
import {
  ExclamationCircleIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import NavigationWrapper from "@/components/NavigationWrapper";
import { statesInUS } from "@/data";
import { Item } from "@radix-ui/react-navigation-menu";

const TaxConsultation = () => {
  return (
    <NavigationWrapper>
      <div className="md:mx-20 relative pt-8 max-sm:mx-5">
        {/* new section start  */}
        <div className="flex gap-3 justify-center items-center ">
          <h3 className="">
            <span className="font-bold">Excellent</span>
          </h3>
          <p className="">
            <span className="font-bold">4.7</span> out of 5
          </p>
          <Image
            className=""
            src="/ab/sa.png"
            alt="image"
            width={100}
            height={100}
          />
        </div>

        {/* new section start  */}
        <div className="text-center pt-5">
          <h1 className="font-bold md:text-6xl max-sm:text-4xl uppercase">
            What Makes Us <span className="bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent">Different</span>
          </h1>
          <p className="pt-4">
            We&apos;re built by entrepreneurs, for entrepreneurs. No hidden
            fees, no misleading practices — just honest
          </p>
          <p className="md:pb-16 max-sm:pb-5">service that puts you first.</p>
        </div>
        {/* new section start  */}
        <div className="border-t-2 border-b-2 text-center text-xl font-bold">
          <h3 className="py-3">
            Bootstrapped, Founder Led, Independently Owned{" "}
            <span className="bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent bg-slate-100 px-1 rounded-xl">
              {" "}
              Since 2004
            </span>{" "}
            with{" "}
            <span className="bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent bg-slate-100 px-1 rounded-xl">
              Over 1,000,000 Entrepreneurs
            </span>{" "}
            Served!
          </h3>
        </div>
        {/* mew section start  */}
        <div className="md:w-full max-sm:mb-9 md:mb-24 md:px-8 px-2 md:py-16 py-8 rounded-xl my-2 mt-16 bg-slate-50 md:grid md:grid-cols-2 md:gap-10 items-center">
          <div>
            <div className=" my-3">
              <CurrencyDollarIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-[#2B93C9] border-2 border-[#2B93C9] rounded" />
            </div>
            <h3 className=" text-black font-bold text-3xl uppercase">
              A One-Time Fee,
            </h3>
            <h3 className=" font-bold text-3xl uppercase">
              <span className="bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent bg-slate-100 rounded-xl px-1">
                {" "}
                No Strings Attached
              </span>
            </h3>
            <p className="py-5 text-black">
              At Incorp Bay, every package comes with a single, one-time
              service fee.{" "}
              <span className="font-bold">
                Unlike many competitors who disguise their fees as
                subscriptions that renew year after year, we believe in clear,
                upfront pricing.
              </span>{" "}
              No surprises, no perpetual charges—just the service you need,
              when you need it.
            </p>
          </div>
          <div className="flex justify-center max-sm:mt-6">
            <Image
              className="w-full h-auto max-w-md"
              src="/mak-dif/bg2.webp"
              alt="One-time fee pricing breakdown"
              width={1460}
              height={996}
            />
          </div>
        </div>
        {/* new section start  */}
        <div className="md:grid md:grid-cols-2 md:mx-20">
          {/*  left div first section  */}
          <div>
            <h3 className="font-bold md:text-5xl max-sm:text-4xl">
              Incorp Bay
            </h3>
            <h3 className="font-bold md:text-5xl max-sm:text-4xl">
              <span className="bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent px-1">
                Built Different
              </span>
            </h3>
            {/* second section  */}
            <div className="py-9">
              <Image
                className=""
                src="/mak-dif/pic.webp"
                alt="image"
                width={350}
                height={350}
              />
            </div>
            {/* 3rd section  */}
            <div className="mr-16">
              <p className="text-sm">
                <span className="font-bold">Where it all started:</span> Incorp
                Bay&apos;s very first office, built on grit and big dreams.
                Our bootstrapped roots drive our commitment to empowering
                entrepreneurs every step of the way.
              </p>
            </div>
          </div>
          {/* right div section  */}
          <div className="md:text-3xl max-sm:text-sm">
            <p>
              Being privately held and 100% bootstrapped means we&apos;re free
              to do things differently.{" "}
              <span className="bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent font-bold">
                We&apos;re not beholden to private equity, investors, or
                aggressive growth metrics.
              </span>
            </p>
            <p className="py-5">
              Our mission has always been simple: to do right by our clients by
              providing exceptional service at fair, honest prices.
            </p>
            <p className="pb-5">
              Our success over the past 20 years speaks for itself. While others
              build their business on the assumption that customers won&apos;t
              notice the fine print, we&apos;ve built ours on the belief that
              you deserve better.
            </p>
          </div>
        </div>
        {/* new section start  */}

        {/* new section start  */}
        <div className="relative max-sm:mx-5 bg-[url('/about-us/bgp.webp')] md:w-full md:bg-cover max-sm:mb-9 md:mb-24 md:px-8 px-2 text-white md:py-16 rounded-xl my-2  md:mt-16 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
          <div className="relative py-9">
            <h3 className="uppercase font-bold md:text-7xl max-sm:text-5xl">
              <span className="text-white">THE</span>
            </h3>
            <h3 className="md:text-7xl font-bold max-sm:text-5xl">
              <span className="bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent">OUR JOURNEY</span>
            </h3>
          </div>
        </div>
        {/* new section  start  */}
        <div className="md:mx-40 bg-slate-200 rounded-xl mt-8 mb-10 md:py-10">
          <h3 className="font-bold uppercase text-center pt-10 pb-8 text-3xl">
            <span className="bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent">START YOUR BUSINESS TODAY</span>
            <h2 className="font-bold md:text-5xl pt-5 max-sm:text-4xl ">
              Ready to
            </h2>
            <h2 className="font-bold md:text-5xl max-sm:text-4xl">
              Get Started?
            </h2>
          </h3>
          <p className="text-center max-sm:mb-5">
            Kickstart Your Dream Business with Incorp Bay Now.
          </p>
          {/* new part section  */}
          <div className="md:flex gap-5 justify-center items-center md:py-10 max-sm:mx-5 max-sm:gap-5 ">
            <div
              className="flex gap-4 justify-center items-center bg-slate-100 rounded-xl px-5 py-2
            "
            >
              <div>
                <p>117,616 ratings</p>
              </div>
              <div>
                <div className="flex gap-1 ">
                  <StarIcon className="w-5 h-5 text-[#2B93C9]" />
                  <StarIcon className="w-5 h-5 text-[#2B93C9]" />
                  <StarIcon className="w-5 h-5 text-[#2B93C9]" />
                  <StarIcon className="w-5 h-5 text-[#2B93C9]" />
                  <StarIcon className="w-5 h-5 text-[#2B93C9]" />
                </div>
              </div>
              <div>
                <div>
                  <Image
                    className=""
                    src="/ab/sa.png"
                    alt="image"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
            {/* part 2  */}
            <div
              className="flex gap-4 justify-center items-center  bg-slate-100 rounded-xl px-5 py-2 max-sm:my-3
            "
            >
              <div>
                <p>117,616 ratings</p>
              </div>
              <div>
                <div className="flex gap-1 ">
                  <StarIcon className="w-5 h-5 text-[#2B93C9]" />
                  <StarIcon className="w-5 h-5 text-[#2B93C9]" />
                  <StarIcon className="w-5 h-5 text-[#2B93C9]" />
                  <StarIcon className="w-5 h-5 text-[#2B93C9]" />
                  <StarIcon className="w-5 h-5 text-[#2B93C9]" />
                </div>
              </div>
              <div>
                <div>
                  <Image
                    className=""
                    src="/ab/sa.png"
                    alt="image"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center md:pb-16 max-sm:pb-5 max-sm:mt-7">
            <Link
              className="px-9 py-5 bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] text-white border border-[#2B93C9] rounded-[30px] font-bold shadow-lg transition-all duration-300 hover:brightness-110 hover:scale-[1.03] hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)]"
              href={"/form-a-llc/"}
            >
              GET STARTED
            </Link>
          </div>
        </div>

        {/* last section end  */}
      </div>
    </NavigationWrapper>
  );
};

export default TaxConsultation;
