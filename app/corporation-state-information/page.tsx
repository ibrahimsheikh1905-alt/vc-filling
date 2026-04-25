import {
  CheckBadgeIcon,
  StarIcon,
  PlayCircleIcon,
  ExclamationCircleIcon,
  ArrowUpRightIcon,
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
      <div className="md:mx-36 max-sm:mx-5 mt-5 md:mt-10">
        {/* new section start  */}
        <div className="  mt-7 text-center">
          <h1 className="uppercase text-6xl max-sm:text-4xl font-bold">
            Want to learn more <span className="text-primary">About</span>
          </h1>
          <h2 className="font-bold uppercase text-6xl max-sm:text-4xl">
            <span className="text-primary">Corporations in Your State?</span>
          </h2>
          <p className="md:mx-32 py-5">
            With different rules and regulations for incorporation in every
            state, starting a business can be a pretty confusing process.
            That&apos;s why we&apos;ve organized all corporation requirements by
            state in one handy place — right here!
          </p>
        </div>
        {/* new section start  */}
        <div className="md:grid grid-cols-2 gap-5  md:py-20 max-sm:py-3">
          <div>
            <h3 className="font-bold text-4xl">Which State Should You</h3>
            <h3 className="text-4xl font-bold">Choose?</h3>
            <p className="">
              Remember,{" "}
              <span className="text-primary">
                you don&apos;t necessarily need to form your corporation in the
                same state you live in.
              </span>{" "}
              Some states, such as Wyoming, Nevada and Delaware, are known for
              having such business-friendly rules and cheap filing fees that a
              lot of out-of-state entrepreneurs choose to file their
              corporations there.
            </p>
            <p>
              Explore the resources below to learn more about the state-by-state
              specifics of forming a corporation.
            </p>
          </div>
          <div>
            <Image
              className="rounded-xl max-sm:py-2"
              src="/corp-info/img1.webp"
              alt="Free LLC"
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* new section start  */}
        <div className="text-center">
          <h3 className="md:text-5xl max-sm:text-4xl font-bold pb-5">
            Additional Corporation Resources
          </h3>
          <p>
            Want to learn even more about forming a corporation in your state?
            Check
          </p>
          <p>out these handy resources from VC FILING:</p>
        </div>
        {/* new section start  */}
        <div className="md:grid grid-cols-3 gap-8 md:my-14 max-sm:my-5">
          {/* main div 1 */}
          <div>
            <div>
              <Image
                className=""
                src="/corp-info/pic1.webp"
                alt="Free LLC"
                width={400}
                height={300}
              />
            </div>
            {/* text div  */}
            <div className="flex justify-between my-5">
              <p className="text-xl">Understanding Filling Fees</p>
              <ArrowUpRightIcon className="min-h-5 min-w-5 max-h-5 max-w-5 text-primary" />
            </div>
          </div>
          {/* div 2 */}
          <div>
            <div>
              <Image
                className=" "
                src="/corp-info/pic2.webp"
                alt="Free LLC"
                width={400}
                height={300}
              />
            </div>
            {/* text div  */}
            <div className="flex justify-between my-5">
              <p className="text-xl">Navigating Filing fees</p>
              <ArrowUpRightIcon className="min-h-5 min-w-5 max-h-5 max-w-5 text-primary" />
            </div>
          </div>
          {/* div 3 */}
          <div>
            <div>
              <Image
                className=""
                src="/corp-info/pic3.webp"
                alt="Free LLC"
                width={400}
                height={300}
              />
            </div>
            {/* text div  */}
            <div className="flex justify-between my-5">
              <p className="text-xl">Business Name Search</p>
              <ArrowUpRightIcon className="min-h-5 min-w-5 max-h-5 max-w-5 text-primary" />
            </div>
          </div>
        </div>
        {/* new section start  */}
        <div className="md:grid grid-cols-3 gap-8 md:my-14">
          {/* main div 1 */}
          <div>
            <div>
              <Image
                className=""
                src="/corp-info/pic4.webp"
                alt="Free LLC"
                width={400}
                height={300}
              />
            </div>
            {/* text div  */}
            <div className="flex justify-between my-5">
              <p className="text-xl">Filing Annual Reports</p>
              <ArrowUpRightIcon className="min-h-5 min-w-5 max-h-5 max-w-5 text-primary" />
            </div>
          </div>
          {/* div 2 */}
          <div>
            <div>
              <Image
                className=" "
                src="/corp-info/pic5.webp"
                alt="Free LLC"
                width={400}
                height={300}
              />
            </div>
            {/* text div  */}
            <div className="flex justify-between my-5">
              <p className="text-xl">State Filing Tips</p>
              <ArrowUpRightIcon className="min-h-5 min-w-5 max-h-5 max-w-5 text-primary" />
            </div>
          </div>
          {/* div 3 */}
          <div>
            <div>
              <Image
                className=""
                src="/corp-info/pic6.webp"
                alt="Free LLC"
                width={400}
                height={300}
              />
            </div>
            {/* text div  */}
            <div className="flex justify-between my-5">
              <p className="text-xl">File In another Country</p>
              <ArrowUpRightIcon className="min-h-5 min-w-5 max-h-5 max-w-5 text-primary" />
            </div>
          </div>
        </div>
        {/* new  faq section start  */}
        <div className="my-16    ">
          <h2 className="md:text-5xl max-sm:text-4xl font-bold text-left">
            Frequently Asked Questions
          </h2>
          <h3 className="md:text-5xl max-sm:text-4xl font-bold text-left pb-4">
            About Corporations
          </h3>

          <Accordion type="single" collapsible className="text-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Which State Has The Most Corporation-friendly Requirements?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2  ">
                  No, we do not recommend using your Arizona Virtual Address as
                  your Registered Agent address. Your AZ Registered Agent should
                  have a local street address where they can receive all legal
                  correspondence. If you need a Registered Agent in Arizona,
                  check out our{" "}
                  <span className="text-primary">RA service.</span>
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Which State is Best For Registering a Corporation?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 ">
                  The overall winner in terms of both up-front and ongoing costs
                  is Montana, and that&apos;s true for residents and foreign
                  entrepreneurs alike. Just remember that the best state to form
                  your Corporation ultimately comes down to your individual
                  preferences and goals.
                </p>{" "}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Does Every State Recognize Corporation?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2  ">
                  Yes, every state in the United States recognizes Corporations
                  and requires business owners to file official paperwork with
                  their state&apos;s government in order to form one.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* new section start  */}
        <div className="flex justify-center items-center pb-4">
          <StarIcon
            className="min-h-10 max-h-10 min-w-10 max-w-10"
            color="#39b54a"
          />
        </div>
        {/* new section start  */}
        <p className="text-center">20,168 Customer Rating</p>
        <div className="flex justify-center items-center pb-5">
          <div className="flex gap-1 ">
            <StarIcon className="w-5 h-5 text-primary" />
            <StarIcon className="w-5 h-5 text-primary" />
            <StarIcon className="w-5 h-5 text-primary" />
            <StarIcon className="w-5 h-5 text-primary" />
            <StarIcon className="w-5 h-5 text-primary" />
          </div>
        </div>
        {/* new section start  */}
        <div className="text-center md:pb-24 ">
          <h2 className="md:text-5xl font-bold text-2xl md:py-3 uppercase">
            Form your
          </h2>
          <h2>
            <span className="text-primary md:text-5xl font-bold text-2xl md:py-3 uppercase">
              Free Corporation Now
            </span>
          </h2>

          <div className="flex justify-center items-center py-5">
            <Link
              className="px-9  font-bold  py-5  bg-primary text-white border border-primary rounded-[30px] "
              href={"/form-a-llc/"}
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
