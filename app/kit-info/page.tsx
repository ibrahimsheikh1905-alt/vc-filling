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
      <div className=" my-16 flex flex-col-reverse md:flex-row">
        <div className="flex-1">
          <div className=" md:text-left max-sm:mx-5">
            <h1 className="md:text-5xl text-3xl font-bold py-10 pt-20 md:pl-20">
              Get Established with VC FILING&apos;s Corporate Kit
            </h1>
            <h2 className="md:  md:pl-20 pb-12">
              Easily create and manage your business. Keep your documents neat
              and organized using VC FILING&apos;s business formation kit.
            </h2>
            <Link
              className="px-10 md:ml-20 py-5 font-bold bg-primary text-white border border-primary rounded-[30px] "
              href="/kit-info/step-1"
            >
              ORDER YOUR LLC KIT NOW
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
        <div className="md:flex gap-5">
          <div className="mx-5">
            <Image
              className="md:mx-5"
              src="/kit-info/kit1.webp"
              alt="image"
              width={1500}
              height={1500}
            />
          </div>
          <div className="mx-5">
            <h1 className="md:text-5xl text-2xl font-semibold capitalize py-3">
              Starting and Managing a Business Involves a Lot of Paperwork
            </h1>
            <p className="pb-3   ">
              When you run your own business, there are so many things to do
              that paperwork often gets pushed down to the bottom of the to-do
              list. But as a business owner, you&apos;re legally obliged to keep
              complete and accurate records.
            </p>
            <p className="md:py-3 md:  font-normal">
              Your records must contain formation paperwork, shareholder
              information, resolutions, meeting minutes and licenses, as well as
              other important and formal documents.
            </p>
            <p className="md:pt-3   font-normal">
              It&apos;s vital to keep these documents safe and well organized to
              avoid risking legal problems, fines or compliance issues
            </p>
          </div>
        </div>
        {/* new section start */}
        <div className="md:flex md:pt-24 pt-7 mx-5">
          <div className="md:mt-16">
            <h2 className="md:text-5xl text-2xl font-semibold capitalize">
              Make Your Life Easier with VC FILING&apos;s LLC Corporate Kit
            </h2>
            <p className="py-3 md:  font-normal">
              VC FILING&apos;s LLC corporate kit is made up of a binder of
              forms, certificates, papers and other items beautifully produced
              and personalized for your business.
            </p>
          </div>
          <div className="md:mx-5">
            <Image
              className=""
              src="/kit-info/kit2.webp"
              alt="image"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        {/* new section start  */}
        <div className="bg-black rounded-xl md:my-24 max-sm:my-7 pb-10 md:px-20 mx-5">
          <div className="md:pt-12 mx-5 pt-6">
            <h2 className="md:text-5xl text-white font-bold  uppercase ">
              Discover the Benefits of
            </h2>
            <h2 className="md:text-5xl text-white font-bold  uppercase ">
              <span className="text-primary">vc filing Business</span> Formation
            </h2>
            <h2 className="md:text-5xl text-white font-bold  uppercase ">
              kit
            </h2>
            <p className="my-2 md:  font-normal text-white py-6 mx-3">
              Our business formation kit frees up your valuable time, so you can
              focus on what matters.
            </p>
          </div>
          {/* new div section start  */}
          <div className="md:flex gap-5 md:pt-10">
            <div>
              {/* part 1 */}
              <div className="border border-gray-200 rounded-2xl  bg-gray-900 p-5 mb-7 mx-5">
                <div className="flex gap-4  pt-9 pb-9 pl-3 bg-gray-700 rounded-xl mb-3 ">
                  <CheckBadgeIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary" />
                  <h2 className="font-bold md:text-2xl  text-white">
                    Get Your Own Personalized{" "}
                    <span className="text-primary">Corporate Binder</span>
                  </h2>
                </div>

                <p className="md:  font-light  text-white my-4">
                  A handcrafted kit you can display in your office while keeping
                  your important documents together.
                </p>
              </div>
              {/* part 2  */}
              <div className="border border-gray-200 rounded-2xl  bg-gray-900 p-5 mb-7 mx-5">
                <div className="flex gap-4  pt-9 pb-9 pl-3 bg-gray-700 rounded-xl mb-3 ">
                  <CheckBadgeIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary" />
                  <h2 className="font-bold md:text-2xl  text-white">
                    <span className="text-primary">Certificates</span> to
                    Formalize Business Ownership
                  </h2>
                </div>

                <p className="md:  font-light  text-white my-4">
                  Get 20 security certificates for LLC members or corporate
                  stockholders to formalize your business ownership.
                </p>
              </div>
              {/* part 3  */}
              <div className="border border-gray-200 rounded-2xl  bg-gray-900 p-5 mb-7 mx-5">
                <div className="flex gap-4  pt-9 pb-9 pl-3 bg-gray-700 rounded-xl mb-3 ">
                  <CheckBadgeIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary" />
                  <h2 className="font-bold md:text-2xl  text-white">
                    Always Find the{" "}
                    <span className="text-primary">Information You Need</span>
                  </h2>
                </div>

                <p className="md:  font-light  text-white my-4">
                  Find what you need fast with tabbed separators, to stay
                  organized throughout the life of your business.
                </p>
              </div>
            </div>
            {/* right div section  */}
            <div className="md:mt-32">
              {/* part 1  */}
              <div className="border border-gray-200 rounded-2xl  bg-gray-900 p-5 mb-7 mx-5">
                <div className="flex gap-4  pt-9 pb-9 pl-3 bg-gray-700 rounded-xl mb-3 ">
                  <CheckBadgeIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary" />
                  <h2 className="font-bold md:text-2xl  text-white">
                    Keep Accurate Records with a{" "}
                    <span className="text-primary">Transfer Ledger</span>
                  </h2>
                </div>

                <p className="md:  font-light  text-white my-4">
                  Record corporation stock transactions, including anything
                  that&apos;s purchased, issued, sold or transferred.
                </p>
              </div>
              {/* part 2  */}
              <div className="border border-gray-200 rounded-2xl  bg-gray-900 p-5 mb-7 mx-5">
                <div className="flex gap-4  pt-9 pb-9 pl-3 bg-gray-700 rounded-xl mb-3 ">
                  <CheckBadgeIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary" />
                  <h2 className="font-bold md:text-2xl  text-white">
                    Get Your Customized Company{" "}
                    <span className="text-primary">Seal & Embosser</span>
                  </h2>
                </div>

                <p className="md:  font-light  text-white my-4">
                  Seal important business documents with a custom embosser of
                  your company name, state and date of formation.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* new section start          */}
        <h2 className="md:text-5xl text-2xl font-bold text-center  capitalize md:pt-20  mx-5">
          How to Get Your Corporate Kit and Seal in
        </h2>
        <h2 className="md:text-5xl text-2xl font-bold text-center  capitalize md:pb-20  mx-5">
          Three Easy Steps
        </h2>

        {/* new section start  */}

        {/* new section start  */}
        <div className="md:mx-60 mx-5">
          <div className=" p-5 max-sm:pb-5">
            <div className="flex max-sm:justify-center gap-2 my-5 mx-2 ">
              <span className="font-bold bg-green-500 p-3 rounded-xl text-2xl">
                01
              </span>
            </div>
            <div className="md:flex">
              <div>
                {" "}
                <h2 className="font-bold md:text-2xl  uppercase">
                  Discover the Right Entity for You
                </h2>
                <p className="my-2 md:  font-normal  mx-3">
                  Choose your entity type and your state of formation. Supply us
                  with your contact details and company information.
                </p>
              </div>
              <div>
                <Image
                  className=""
                  src="/kit-info/ig1.webp"
                  alt="Image1"
                  width={850}
                  height={1500}
                />
              </div>
            </div>
          </div>
          {/* part 2  */}
          <div className=" p-5">
            <div className="flex max-sm:justify-center gap-2 my-5 mx-2 ">
              <span className="font-bold bg-green-500 p-3 rounded-xl text-2xl">
                02
              </span>
            </div>
            <div className="md:flex">
              <div>
                {" "}
                <h2 className="font-bold md:text-2xl  uppercase">
                  Complete the Online Order Form
                </h2>
                <p className="my-2 md:  font-normal  mx-3">
                  Fill in our simple, short online order form and pay the $99
                  business kit fee quickly and securely.
                </p>
              </div>
              <div>
                <Image
                  className=""
                  src="/kit-info/ig2.webp"
                  alt="Image1"
                  width={850}
                  height={1500}
                />
              </div>
            </div>
          </div>
          {/* part 3 */}
          <div className=" p-5">
            <div className="flex max-sm:justify-center gap-2 my-5 mx-2 ">
              <span className="font-bold bg-green-500 p-3 rounded-xl text-2xl">
                03
              </span>
            </div>
            <div className="md:flex">
              <div>
                {" "}
                <h2 className="font-bold md:text-2xl  uppercase">
                  Your Corporate Kit and Seal Arrives
                </h2>
                <p className="my-2 md:  font-normal  mx-3">
                  Your documents are delivered in a professional kit, complete
                  with your company name stamped on the spine of the book.
                </p>
              </div>
              <div>
                <Image
                  className=""
                  src="/kit-info/ig3.webp"
                  alt="Image1"
                  width={850}
                  height={1500}
                />
              </div>
            </div>
          </div>
        </div>

        {/*------------------ faq section ----------*/}
        <div className="md:my-16 md:px-10 md:pt-12 md:pb-16 mx-5">
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left  capitalize">
            Common Questions About
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left md:pb-5 capitalize">
            Corporate Kits
          </h2>
          <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How much does your corporate kit service cost?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:  font-normal ">
                  Our corporate kit service costs $99. It is the best value LLC
                  business starter kit and it&apos;s delivered to you for free.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Are there any hidden cost ?</AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:  font-normal ">
                  Absolutely not! We take pride in our complete transparency.
                  There are no hidden costs involved in getting your corporate
                  kit.
                </p>{" "}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How long does it take to receive my kit?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:  font-normal ">
                  We mail all kits the next day using FedEx ground shipping and
                  kits destined for the continental United States usually arrive
                  within 3 to 4 business days.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Do you have any guides or resources?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:  font-normal ">
                  Learn all about our{" "}
                  <span className="text-primary">
                    customized corporate/LLC kit
                  </span>{" "}
                  and find out more about how to use VC FILING&apos;s Corporate
                  kit.
                </p>
                <p className="my-2 md:  font-normal ">
                  Check out the complete{" "}
                  <span className="text-primary">
                    start your business checklist
                  </span>{" "}
                  to learn how to start your business the right way or get the
                  resources you need to{" "}
                  <span className="text-primary">manage your company.</span>
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

        <div className="text-center pb-6 mx-5">
          <h2 className="md:text-5xl text-2xl font-bold  uppercase ">
            Get Your
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold  uppercase ">
            <span className="text-primary">Business Formation Kit</span>
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold  uppercase ">
            <span className="text-primary">Today</span>
          </h2>

          <p className="my-2 md:  font-normal md:py-5">
            Get established and stay organized with VC FILING&apos;s Corporate
            Kit.
          </p>
        </div>
        <div className="flex justify-center items-center md:pb-16 max-sm:pb-5">
          <Link
            className="px-9 py-5 bg-primary text-white border border-primary rounded-[30px] "
            href={"/form-a-llc/"}
          >
            ORDER NOW
          </Link>
        </div>
        {/* new section start  */}
      </div>
    </NavigationWrapper>
  );
};

export default TaxConsultation;
