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
            What Makes Us <span className="text-primary">Different</span>
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
            <span className="text-primary bg-green-100 px-1 rounded-xl">
              {" "}
              Since 2004
            </span>{" "}
            with{" "}
            <span className="text-primary bg-green-100 px-1 rounded-xl">
              Over 1,000,000 Entrepreneurs
            </span>{" "}
            Served!
          </h3>
        </div>
        {/* mew section start  */}
        <div className="bg-[url('/mak-dif/bg2.webp')] md:w-full md:bg-cover max-sm:bg-cover  max-sm:mb-9 md:mb-24 md:px-8 px-2 text-white md:py-16 rounded-xl my-2  mt-16 relative">
          <div className=" my-3">
            <CurrencyDollarIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary border-2  border-green-500 rounded" />
          </div>
          <div className=" pb-96  border-l-4 border-green-300 flex justify-center items-center"></div>
          <h3 className=" text-black font-bold text-3xl uppercase">
            A One-Time Fee,
          </h3>
          <h3 className=" font-bold text-3xl uppercase">
            <span className="text-primary bg-green-50 rounded-xl px-1">
              {" "}
              No Strings Attached
            </span>
          </h3>
          <div className="md:grid md:grid-cols-2  text-black">
            <div className="md:pb-36">
              <p className="py-5">
                At VC FILING, every package comes with a single, one-time
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
            {/* part 2  */}
            <div></div>
          </div>
        </div>
        {/* new section start  */}
        <div className="md:grid md:grid-cols-2 md:mx-20">
          {/*  left div first section  */}
          <div>
            <h3 className="font-extrabold md:text-5xl max-sm:text-4xl">
              VC FILING
            </h3>
            <h3 className="font-extrabold md:text-5xl max-sm:text-4xl">
              <span className="text-primary bg-green-50 px-1">
                Stands Apart
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
                <span className="font-bold">Where it all started:</span> VC
                FILING&apos;s very first office, built on grit and big dreams.
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
              <span className="text-primary font-bold">
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
        <div className=" max-sm:mx-5 bg-[url('/about-us/bgp.webp')] md:w-full md:bg-cover max-sm:mb-9 md:mb-24 md:px-8 px-2 text-white md:py-16 rounded-xl my-2  md:mt-16">
          <div className="py-9">
            <h3 className="uppercase font-extrabold md:text-7xl max-sm:text-5xl">
              <span className="text-white">THE</span>
            </h3>
            <h3 className="md:text-7xl font-extrabold max-sm:text-5xl">
              <span className="text-primary">EVOLUTION</span>
            </h3>
          </div>
        </div>
        {/* new section  start  */}
        <div className="md:mx-40 bg-slate-200 rounded-xl mt-8 mb-10 md:py-10">
          <h3 className="font-bold uppercase text-center pt-10 pb-8 text-3xl">
            <span className="text-primary">incorporate now</span>
            <h2 className="font-extrabold md:text-5xl pt-5 max-sm:text-4xl ">
              Ready to
            </h2>
            <h2 className="font-extrabold md:text-5xl max-sm:text-4xl">
              Get Started?
            </h2>
          </h3>
          <p className="text-center max-sm:mb-5">
            Kickstart Your Dream Business with VC FILING Now.
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
                  <StarIcon className="w-5 h-5 text-primary" />
                  <StarIcon className="w-5 h-5 text-primary" />
                  <StarIcon className="w-5 h-5 text-primary" />
                  <StarIcon className="w-5 h-5 text-primary" />
                  <StarIcon className="w-5 h-5 text-primary" />
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
                  <StarIcon className="w-5 h-5 text-primary" />
                  <StarIcon className="w-5 h-5 text-primary" />
                  <StarIcon className="w-5 h-5 text-primary" />
                  <StarIcon className="w-5 h-5 text-primary" />
                  <StarIcon className="w-5 h-5 text-primary" />
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
              className="px-9 py-5 bg-primary text-white border border-primary rounded-[30px] font-bold  "
              href={"/form-a-llc/"}
            >
              START NOW
            </Link>
          </div>
        </div>

        {/* last section end  */}
      </div>
    </NavigationWrapper>
  );
};

export default TaxConsultation;
