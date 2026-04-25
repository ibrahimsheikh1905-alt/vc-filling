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
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import NavigationWrapper from "@/components/NavigationWrapper";
import { statesInUS } from "@/data";
import { Item } from "@radix-ui/react-navigation-menu";

const TaxConsultation = () => {
  return (
    <NavigationWrapper>
      <div className="md:mx-20 max-sm:mx-5">
        <div className="bg-[url('/about-us/ab.webp')] md:w-full md:bg-cover max-sm:mb-9 md:mb-24 md:px-8 px-2 text-white md:py-16 rounded-xl my-2 mx-5 mt-16">
          <div className="">
            <p className="text-white font-bold py-9 uppercase pl-5">about us</p>

            <h1 className="font-bold text-6xl uppercase md:mt-80 pl-5">
              <span className="text-primary ">OUR</span>
            </h1>
            <h2 className="font-bold text-6xl pl-5 uppercase max-sm:my-3">
              story
            </h2>
          </div>
        </div>
        {/* new section start  */}
        <div className="md:flex gap-2 md:mx-40">
          {/* left side part  */}
          <div className="font-bold ">
            <h3 className="font-bold text-3xl uppercase ">Bootstrapped</h3>
            <h3 className="text-3xl uppercase">
              <span className="text-primary">Beginnings</span>
            </h3>
          </div>
          {/* right side section  */}
          <div className="md:mx-20">
            <p>
              VC FILING journey started 20 years ago in the spare bedroom of our
              co-founder Kyle Lavender&apos;s apartment. With limited resources,
              every dollar was stretched, and every task was done by hand.
            </p>
            <p className="py-6">
              Business formation orders were manually collected over the phone,
              carefully logged in a filing cabinet, and checks were handwritten
              to the state to ensure every business formation was handled with
              care and precision.
            </p>
            <div className="bg-black text-white py-8 rounded-xl">
              <h3 className="text-2xl mx-14">
                We were a small, determined team of entrepreneurs who understood
                the challenges of starting a business because we were living
                them.
              </h3>
            </div>
            <p className="py-5">
              As the company grew, we transitioned to our{" "}
              <span className="font-semibold">
                first commercial space in Houston,
              </span>{" "}
              furnishing it with Ikea furniture—an affordable, low-maintenance
              solution that allowed us to focus on what mattered most: serving
              our clients and helping them succeed.{" "}
            </p>
            <p className="py-5">
              This space has since become our global headquarters, symbolizing
              our growth{" "}
              <span className="font-semibold">
                from humble beginnings to a company that has helped over 1
                million entrepreneurs start their businesses.
              </span>
            </p>
          </div>
        </div>
        {/* new section start  */}
        <div className="bg-[url('/about-us/bgp.webp')] md:w-full md:bg-cover max-sm:mb-9 md:mb-24 md:px-8 px-2 text-white md:py-16 rounded-xl my-2 mx-5 md:mt-16">
          <div className="py-9">
            <h3 className="uppercase font-extrabold text-7xl">
              <span className="text-white">A Bold</span>
            </h3>
            <h3 className="text-7xl font-extrabold">
              <span className="text-primary">MOVE</span>
            </h3>
          </div>
        </div>
        {/* new section start  */}
        <div className="md:flex gap-2 md:mx-40">
          {/* left side part  */}
          <div className="font-bold ">
            <h3 className="font-bold text-3xl uppercase ">Redefining</h3>
            <h3 className="text-3xl uppercase">
              <span className="text-primary">the industry</span>
            </h3>
          </div>
          {/* right side section  */}
          <div className="md:mx-20 ">
            <p className="md:text-2xl ">
              In <span className="font-semibold">2019</span>, VC FILING took a{" "}
              <span className="font-semibold ">bold step</span> that would
              redefine the industry by{" "}
              <span className="text-primary font-semibold">
                becoming one of the first companies in the world to offer a $0
                LLC formation service (plus state fees)
              </span>{" "}
              without the backing of institutional investors, private equity, or
              the safety net of being a publicly traded company.
            </p>
            <p className="py-6">
              It was a huge risk, but we were driven by our commitment to
              lowering the barrier of entry for all entrepreneurs.
            </p>

            <p className="">
              This groundbreaking offer was launched just before the pandemic
              hit,{" "}
              <span className="font-semibold">
                providing a lifeline to countless new businesses during a time
                of unprecedented uncertainty
              </span>
              . Despite not having millions of dollars in funding like our
              competitors, we forged ahead and introduced this bold move to
              <span className="font-semibold">
                {" "}
                lower the barrier of entry for entrepreneurs
              </span>
              . The offer was so positively received by our customers that even
              our well-funded competitors were forced to follow our lead,
              forever changing the landscape of the industry.
            </p>
          </div>
        </div>
        {/* new section start  */}
        <div className="bg-[url('/about-us/bgp.webp')] md:w-full md:bg-cover max-sm:mb-9 md:mb-24 md:px-8 px-2 text-white md:py-16 rounded-xl my-2 mx-5 md:mt-16">
          <div className="py-9">
            <h3 className="uppercase font-extrabold md:text-7xl max-sm:text-4xl">
              <span className="text-white">THE</span>
            </h3>
            <h3 className="md:text-7xl max-sm:text-4xl font-extrabold">
              <span className="text-primary">EVOLUTION</span>
            </h3>
          </div>
        </div>

        {/* last div part  */}

        <div className="">
          <div className="md:flex gap-2 md:mx-40">
            {/* left side part  */}
            <div className="font-bold ">
              <h3 className="font-bold text-3xl uppercase ">From Incfile</h3>
              <h3 className="text-3xl uppercase">
                <span className="text-primary">to VC FILING</span>
              </h3>
            </div>
            {/* right side section  */}
            <div className="md:mx-40">
              <p>
                As we continued to grow, we realized that the{" "}
                <span className="font-semibold">
                  name Incfile no longer captured the breadth of services we
                  offered or our commitment to innovation.
                </span>{" "}
                This led to our evolution into VC FILING—a name that better
                reflects our mission and the needs of modern entrepreneurs.
              </p>
              <p className="py-7">
                VC FILING represents a new chapter in our journey, one where we
                continue to{" "}
                <span className="font-semibold">
                  provide expert-guided, transparent, and affordable services
                </span>{" "}
                while embracing new technologies and opportunities that empower
                entrepreneurs like never before.
              </p>
            </div>
          </div>
        </div>
        {/* new section start  */}
        <div>
          <div className="bg-[url('/about-us/bgp.webp')] md:w-full md:bg-cover max-sm:mb-9 md:mb-24 md:px-8 px-2 text-white md:py-16 rounded-xl my-2 mx-5 md:mt-16">
            <div className="py-9">
              <h3 className="uppercase font-extrabold md:text-9xl max-sm:text-4xl">
                <span className="text-white uppercase">Entrepre­neurial</span>
              </h3>
              <h3 className="md:text-9xl max-sm:text-4xl font-extrabold uppercase">
                <span className="text-primary">Journey</span>
              </h3>
            </div>
          </div>
        </div>
        {/* new section start  */}
        <div className="md:flex gap-2 md:mx-40">
          {/* left side part  */}
          <div className="font-bold ">
            <h3 className="font-bold text-3xl uppercase ">the vc filing</h3>
            <h3 className="text-3xl uppercase">
              <span className="text-primary">Difference</span>
            </h3>
          </div>
          {/* right side section  */}
          <div className="md:mx-20">
            <p className="pb-5">
              At VC FILING, we understand the pain points of bootstrapping a
              business because we&apos;ve been there ourselves.{" "}
              <span className="font-semibold">
                {" "}
                Our mission is to make the entrepreneurial journey as smooth as
                possible,
              </span>
              offering transparent and affordable business formation services
              designed to help you turn your vision into reality.
            </p>

            <div className="bg-black text-white py-8 rounded-xl">
              <h3 className="text-2xl mx-14">
                We were a small, determined team of entrepreneurs who understood
                the challenges of starting a business because we were living
                them.
              </h3>
            </div>
            <p className="pt-5">
              As the company grew, we transitioned to our{" "}
              <span className="font-semibold">
                first commercial space in Houston,
              </span>{" "}
              furnishing it with Ikea furniture—an affordable, low-maintenance
              solution that allowed us to focus on what mattered most: serving
              our clients and helping them succeed.{" "}
            </p>
            <p className="">
              This space has since become our global headquarters, symbolizing
              our growth{" "}
              <span className="font-semibold">
                from humble beginnings to a company that has helped over 1
                million entrepreneurs start their businesses.
              </span>
            </p>
            <p className="py-5">
              We hope you choose VC FILING as your partner in business as you
              embark on this new adventure of entrepreneurship.{" "}
              <span className="font-semibold">
                Together, we can build something incredible.
              </span>
            </p>
          </div>
        </div>
        {/* new section start  */}
        <div className="md:mx-40 bg-slate-200 rounded-xl mt-8 mb-10 py-10">
          <h3 className="font-bold uppercase text-center pt-10 pb-8 text-3xl">
            <span className="text-primary">incorporate now</span>
            <h2 className="font-extrabold md:text-5xl max-sm:text-4xl pt-5">
              Ready to
            </h2>
            <h2 className="font-extrabold md:text-5xl max-sm:text-4xl">
              Get Started?
            </h2>
          </h3>
          <p className="text-center">
            Kickstart Your Dream Business with VC FILING Now.
          </p>
          {/* new part section  */}
          <div className="md:flex gap-5 justify-center items-center py-10 max-sm:mx-2 ">
            <div
              className="flex gap-4 justify-center items-center bg-slate-100 rounded-xl px-5 py-2 max-sm:my-2
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
              className="flex gap-4 justify-center items-center  bg-slate-100 rounded-xl px-5 py-2
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
          <div className="flex justify-center items-center md:pb-16 max-sm:pb-5">
            <Link
              className="px-9 py-5 bg-primary text-white border border-primary rounded-[30px] font-bold "
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
