import {
  CheckBadgeIcon,
  StarIcon,
  ChevronDownIcon,
  DocumentIcon,
  UserIcon,
  ShieldCheckIcon,
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

const Amendment = () => {
  return (
    <NavigationWrapper>
      <div className=" my-16 flex flex-col-reverse md:flex-row">
        <div className="flex-1">
          <div className=" md:text-left max-sm:mx-5">
            <h1 className="text-5xl font-bold  pt-20 md:pl-20 max-sm:text-3xl">
              Have You Filed
            </h1>
            <h2 className="md:text-5xl max-sm:text-3xl font-bold md:pl-20">
              Your BOIR?
            </h2>
            <h2 className="text-base md:pl-20 pt-10 ">
              Don&apos;t miss the deadline! Stay Compliant with Federal Law.
            </h2>
            <p className="text-base md:pl-20 pb-10">
              Beneficial Ownership Information Reporting (BOIR) is now
            </p>
            <Link
              className="px-10 md:ml-20 py-5 font-bold bg-primary text-white border border-primary rounded-[30px] "
              href="/boi-repo/step-1"
            >
              FILE YOUR BOIR
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <Image
            src="/free-llc/LLC green.jpg"
            alt="Free LLC"
            width={1000}
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
        {/* new section start  */}

        <div className="md:flex  md:py-10 mx-4 px-1">
          <div className=" md:text-left md:w-1/2 md:px-16 ">
            <h3 className="md:text-5xl text-3xl font-bold pb-5  ">
              What is a BOIR ?
            </h3>
            <div className="flex gap-5">
              <div>
                <DocumentIcon className=" text-primary min-h-7 min-w-7 max-h-7 max-w-7" />
              </div>
              <div>
                <h3 className="text-lg font-semibold ">
                  Business Owners Information Report
                </h3>
                <p>
                  BOIR is a federal report that collects key information about a
                  business&apos;s owners, including names, addresses, and
                  ownership percentages.
                </p>
              </div>
            </div>
            {/* text 2  */}
            <div className="flex gap-5 pt-8">
              <div>
                <UserIcon className=" text-primary min-h-7 min-w-7 max-h-7 max-w-7" />
              </div>
              <div>
                <h3 className="text-lg font-semibold ">
                  Compliance Requirement
                </h3>
                <p>
                  We encourage our clients to file their reports promptly to
                  avoid penalties and ensure compliance with federal
                  regulations.
                </p>
              </div>
            </div>
            {/* text 3  */}
            <div className="flex gap-5 pt-8">
              <div>
                <ShieldCheckIcon className=" text-primary min-h-7 min-w-7 max-h-7 max-w-7" />
              </div>
              <div>
                <h3 className="text-lg font-semibold ">One-Time Filing</h3>
                <p>
                  BOIR is typically submitted once during the business formation
                  process, helping to ensure legal compliance and avoid
                  potential penalties.
                </p>
              </div>
            </div>
          </div>
          <Image
            className="pt-10"
            src="/boi-repo/pic1.webp"
            alt="Free LLC"
            width={600}
            height={600}
          />
        </div>

        <div className="md:flex justify-center gap-10 items-center py-10 mx-5">
          <Image
            src="/boi-repo/pic2.webp"
            alt="Free LLC"
            width={600}
            height={600}
            className=""
          />
          <div className=" md:text-left md:w-1/2 md:px-16 px-1">
            <h3 className="md:text-5xl text-2xl font-bold md:py-10 max-sm:pt-5  ">
              BOIR Understanding the Basics
            </h3>
            <p className="  max-sm:pt-5">
              BOIR is the process of filing a report with the Financial Crimes
              Enforcement Network (FinCEN), a bureau within the U.S. Department
              of the Treasury.{" "}
              <span className="font-bold">
                This report identifies the individuals who ultimately own or
                control your business—the “beneficial owners.”
              </span>
            </p>
            <p className="  max-sm:pt-5">
              {" "}
              Think of it as shedding light on the actual ownership structure
              behind a company.
            </p>
          </div>
        </div>
        {/* new section start  */}
        <div className="text-center">
          <h3 className="font-bold text-5xl">Never miss a BOIR deadline</h3>
          <p className="text-base max-sm:my-5">
            We Make It Easy with Free Lifetime Compliance Alerts.
          </p>
        </div>
        {/* new section start  */}
        <div className="md:grid grid-cols-2 gap-9 md:mx-20 md:mt-20  max-sm:mx-5 ">
          {/* div 1  */}
          <div className="border-2 p-2 rounded-xl">
            <div className="flex justify-center items-center">
              <Image
                src="/boi-repo/pic3.webp"
                alt="Free LLC"
                width={550}
                height={350}
                className=""
              />
            </div>
            <div className="mx-5">
              <h3 className="text-xl font-bold pt-5 pb-4">
                Why You Must File a BOIR
              </h3>
              <p className="">
                The BOIR is not optional. It&apos;s a federal law that applies
                to almost every business, including LLCs. It&apos;s one more
                task on your plate, but it doesn&apos;t have to be a burden.
              </p>
            </div>
          </div>
          {/* div 2  */}
          <div className="border-2 p-2 rounded-xl max-sm:mt-5">
            <div className="flex justify-center items-center">
              <Image
                src="/boi-repo/pic4.webp"
                alt="Free LLC"
                width={550}
                height={350}
                className=""
              />
            </div>
            <div className="mx-5">
              <h3 className="text-xl font-bold pt-6 pb-4">
                How Bizee Makes BOIR Filing Easy
              </h3>
              <p className="">
                We know you have better things to focus on than complicated
                paperwork. At Bizee, we make BOIR filing simple, fast, and
                stress-free. We handle the paperwork so you can stay focused on
                running your business. As a Bizee customer, your filing process
                is streamlined with us—just a few easy steps, and your BOIR is
                submitted accurately and on time.
              </p>
            </div>
          </div>
        </div>
        {/* new section start  */}
        <div className="pt-10 md:flex gap-24 ">
          <div>
            <Image
              src="/boi-repo/pic5.webp"
              alt="Free LLC"
              width={600}
              height={600}
              className=""
            />
          </div>
          <div className="max-sm:mx-5">
            <h2 className="font-bold text-3xl pb-10">Why Choose VC FILING</h2>
            {/* new inner part  */}
            <div className="">
              <div className="flex gap-2">
                <CheckBadgeIcon className="min-h-5 min-w-5 max-h-7 max-w-7 text-primary" />
                <p className="text-xl font-bold"> Unparalleled Value</p>
              </div>
              <p className="mx-4 py-3">
                No subscriptions, no recurring fees, and transparent pricing.
              </p>
            </div>
            {/* inner part 2  */}
            <div className="py-3">
              <div className="flex gap-2">
                <CheckBadgeIcon className="min-h-5 min-w-5 max-h-7 max-w-7 text-primary" />
                <p className="text-xl font-bold"> Lower Costs</p>
              </div>
              <p className="mx-4 py-3">More affordable than other providers.</p>
            </div>
            {/* inner part 3  */}
            <div className="py-3">
              <div className="flex gap-2">
                <CheckBadgeIcon className="min-h-5 min-w-5 max-h-7 max-w-7 text-primary" />
                <p className="text-xl font-bold"> Superior Support</p>
              </div>
              <p className="mx-4 py-3">
                We&apos;re here to help you stay compliant with federal
                regulations like the BOIR.
              </p>
            </div>
            {/* inner part 4  */}
            <div className="">
              <div className="flex gap-2">
                <CheckBadgeIcon className="min-h-5 min-w-5 max-h-7 max-w-7 text-primary" />
                <p className="text-xl font-bold"> Modern Experience</p>
              </div>
              <p className="mx-4 py-3">
                Intuitive user dashboard, with digital document storage
              </p>
            </div>
          </div>
        </div>
        {/* new section start  */}
        <div className=" flex flex-col-reverse md:flex-row border-2 rounded-xl mb-10 max-sm:mx-5">
          <div className=" md:text-left max-sm:mx-5">
            <h1 className="text-5xl font-bold  pt-20 md:pl-20 max-sm:text-3xl">
              Have You Filed
            </h1>
            <h2 className="md:text-5xl max-sm:text-3xl font-bold md:pl-20">
              Your BOIR?
            </h2>
            <h2 className="text-base md:pl-20 pt-10 ">
              Don&apos;t miss the deadline! Stay Compliant with Federal Law.
            </h2>
            <p className="text-base md:pl-20 pb-10">
              Beneficial Ownership Information Reporting (BOIR) is now
            </p>
            <div className="mb-9">
              <Link
                className="px-10 md:ml-20 py-5 font-bold bg-primary text-white border border-primary rounded-[30px] "
                href={"/form-a-llc/"}
              >
                FILE YOUR BOIR
              </Link>
            </div>
          </div>

          <Image
            src="/boi-repo/pic6.webp"
            alt="Free LLC"
            width={500}
            height={550}
          />
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default Amendment;
