import {
  CheckBadgeIcon,
  HomeIcon,
  ArrowPathIcon,
  NewspaperIcon,
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
import { LockIcon, ShieldCheck } from "lucide-react";

const TaxConsultation = () => {
  return (
    <NavigationWrapper>
      <div className=" my-16 flex flex-col-reverse md:flex-row md:text-left ">
        <div className=" md:text-left mx-5">
          <h1 className="md:text-5xl text-3xl font-bold  pt-20 md:pl-20">
            Federal Employer
          </h1>
          <h2 className="md:text-5xl text-3xl font-bold md:text-left  md:pl-20">
            Identification
          </h2>
          <h2 className="md:text-5xl text-3xl font-bold  md:pl-20">
            Number (EIN) / Tax
          </h2>
          <h2 className="md:text-5xl text-3xl font-bold  md:pl-20 md:text-left">
            ID Number
          </h2>
          <h2 className="md: pt-8  md:pl-20 pb-12">
            Understanding What, Where, When & Hows of Your Business EIN
          </h2>
          <Link
            className="px-10 md:ml-20 py-5 font-bold bg-primary text-white border border-primary rounded-[30px] "
            href={"/form-a-llc/"}
          >
            ORDER NOW
          </Link>
        </div>

        <Image
          src="/free-llc/LLC green.jpg"
          alt="Free LLC"
          width={1000}
          height={1000}
        />
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
        <div className="md:grid md:grid-cols-2 mx-5 ">
          <div>
            <h2 className="text-5xl max-sm:text-3xl font-bold">How to Get a</h2>
            <h2 className="text-5xl max-sm:text-3xl font-bold">
              Tax ID Number
            </h2>
          </div>
          <div className=" pt-3">
            <p className="md: font-normal pb-9">
              The SS4 is the IRS form required to obtain an EIN (Employer
              Identification Number, frequently called a Tax ID number). The
              EIN/Tax ID number can be thought of as a Social Security Number
              for your business. It is usually required to open a bank account
              in the name of the business and to properly pay and account for
              any wage/payroll employees of your company. VC FILING will obtain
              your federal EIN electronically and have it back to you via email
              within one business day.
            </p>
            <div className="flex  gap-5 py-10 bg-slate-300 rounded-xl p-9">
              <div>
                <NewspaperIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
              </div>
              <div>
                <h2 className="font-bold  pb-5">
                  What is an Employer Identification Number (EIN)?
                </h2>
                <div>
                  <p className="my-2 md:  font-normal">
                    Also known as a “Tax ID number,” the EIN is a business
                    federal tax ID that works like a Social Security Number for
                    your business. Your EIN helps you file tax returns for your
                    business, is typically required to open a business bank
                    account under the name of your business, helps you properly
                    pay and account for wages and payroll for your
                    company&apos;s employees, and otherwise helps establish
                    credit for your business and maintain your business&apos;s
                    official standing as a legal business entity.
                  </p>
                </div>
              </div>
            </div>
            <div className=" py-10">
              <div>
                <h2 className="font-bold  md:pb-5">
                  Do You Need a Federal EIN for Your Business Entity?
                </h2>
                <div>
                  <p className="my-2 md:  font-normal">
                    In general, unless your business is a sole proprietorship
                    with no employees and no separate legal entity for your
                    business, you need to get an EIN. Sometimes if you own an
                    LLC and it is a single-member LLC with simple accounting,
                    you can get by just using your personal Social Security
                    Number for tax purposes and for receiving payments from
                    clients. But even the simplest businesses can generally
                    benefit from using an EIN - the EIN serves as a tax ID for
                    your LLC or other corporate entity.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-2 rounded-xl">
              <h3 className="font-bold text-2xl mx-2 pt-8">
                The following business entities should get an EIN:
              </h3>
              <div className="flex gap-2 mx-5 mt-7 py-5">
                <div className="">
                  <CheckBadgeIcon className="min-h-5 min-w-5 max-h-5 max-w-5 text-primary" />
                </div>
                <div>
                  <p className=" md:  font-normal">
                    Partnerships: an EIN is required for all general
                    partnerships and limited partnerships.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mx-5 md:py-5">
                <div className="">
                  <CheckBadgeIcon className="min-h-5 min-w-5 max-h-5 max-w-5 text-primary" />
                </div>
                <div>
                  <p className=" md:  font-normal">
                    Multiple-member LLCs: This type of business entity needs an
                    EIN regardless of whether you have employees.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mx-5 py-5">
                <div className="">
                  <CheckBadgeIcon className="min-h-5 min-w-5 max-h-5 max-w-5 text-primary" />
                </div>
                <div>
                  <p className=" md:  font-normal">
                    Single-member LLCs: If you plan to hire employees within the
                    next 12 months, you will need to get an EIN. And even if
                    your single-member LLC has no employees, and even if you can
                    get by with using your own individual Social Security Number
                    for tax purposes, it&apos;s still a good idea to get an EIN
                    because many banks and lenders will prefer to use an EIN to
                    do business with you.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mx-5 md:py-5">
                <div className="">
                  <CheckBadgeIcon className="min-h-5 min-w-5 max-h-5 max-w-5 text-primary" />
                </div>
                <div>
                  <p className=" md:  font-normal">
                    LLC taxed as a Corporation: If your LLC chooses to be taxed
                    as a Corporation (for example, by electing to be treated as
                    an S-Corporation for tax purposes), you will need to get an
                    EIN.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mx-5 py-5">
                <div className="">
                  <CheckBadgeIcon className="min-h-5 min-w-5 max-h-5 max-w-5 text-primary" />
                </div>
                <div>
                  <p className=" md:  font-normal">
                    Sole proprietorship with employees: Even if you do not have
                    an LLC or any other legal entity for your business and you
                    run a simple sole proprietorship, you still need to get an
                    EIN if you have employees or plan to hire employees in the
                    next 12 months.
                  </p>
                </div>
              </div>
            </div>
            <div className=" md:py-10 max-sm:py-5">
              <div>
                <h2 className="font-bold md:pb-5   ">
                  Where & When You&apos;ll Use an EIN ?
                </h2>
                <div>
                  <p className="my-2 md:  font-normal">
                    Your EIN is necessary for several situations in running your
                    business. You will need to use your EIN for certain tax
                    forms, such as filing your tax returns for your business,
                    and filling out W9 forms for clients (if you run a service
                    business), and other forms related to managing payroll for
                    your employees. Your EIN is also necessary to set up a
                    business bank account and apply for business loans. The same
                    types of reasons for needing a Social Security Number in
                    your personal life are also the reasons to use an EIN in
                    managing your business.
                  </p>
                </div>
              </div>
            </div>
            <div className=" md:py-10 ">
              <div>
                <h2 className="font-bold  md:pb-5">
                  How Do You Get an EIN? Apply for an EIN Online
                </h2>
                <div>
                  <p className="my-2 md:  font-normal">
                    Business owners can get an EIN by filing IRS Form SS-4. VC
                    FILING offers a convenient service to help you apply for an
                    EIN online to obtain your EIN number quickly and
                    efficiently. If you&apos;re looking for a way to get an EIN,
                    whether in Texas, Florida, Michigan or anywhere in the
                    United States, VC FILING can provide one for you in one day.
                    Apply for an EIN online with VC FILING, and we&apos;ll
                    obtain your federal tax ID electronically and have your new
                    EIN back to you via email within one business day.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <Link
                className="px-9 py-5 bg-primary text-white border border-primary rounded-[30px] "
                href="/ein-form/step-1"
              >
                APPLY FOR AN EIN ONLINE TO OBTAIN YOUR EIN NUMBER QUICKLY
              </Link>
            </div>
          </div>
        </div>
        {/* new section start  */}

        {/* new section start  */}

        <div className="md:pt-24 pb-3 mx-5 max-sm:pt-5">
          <p className="text-blue-600 font-semibold">NEW ERA OF PRIVACY</p>
          <h2 className="md:text-5xl text-2xl font-bold uppercase">
            Four Risks <span className="text-primary">of Being </span>
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold uppercase">
            <span className="text-primary">in</span> Bad Standing
          </h2>
        </div>

        {/* new section start  */}

        {/* new testing part  */}
        <div className="md:grid grid-cols-2 gap-5 ">
          {/* part 1 */}
          <div className="border border-gray-200 rounded-2xl flex p-5">
            <div>
              <div className="flex  items-center gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                <p className="text-3xl bg-white p-7  rounded-lg  text-blue-400 font-semibold">
                  1
                </p>
                <h2 className="font-bold md:text-2xl  uppercase">
                  You Can&apos;t Obtain Financing.
                </h2>
              </div>

              <p className="py-3 md:  ">
                Typically, lenders or banks want proof of your business&apos;s
                existence and business history to evaluate creditworthiness for
                a loan or certain types of transactions. Plus, if you&apos;re
                seeking investment from investors or other partners,
                they&apos;ll want to make sure your business is legitimate and
                in compliance with local laws and regulations.
              </p>
            </div>
          </div>
          {/* part 2 */}
          <div className="mt-16 ">
            <div className="border border-gray-200 rounded-2xl flex p-5   ">
              <div>
                <div className="flex  items-center gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <p className="text-3xl bg-white p-7  rounded-lg  text-blue-400 font-semibold">
                    2
                  </p>
                  <h2 className="font-bold md:text-2xl  uppercase">
                    There&apos;s No Way to Do Business in Other States.
                  </h2>
                </div>

                <p className="py-3 md:  ">
                  To do business in states other than your home state, your
                  business will need to apply for Foreign Qualification in the
                  new state. To do this, you must be in good standing with your
                  current state.
                </p>
              </div>
            </div>
          </div>

          {/* part 3 */}
          <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
            <div>
              <div className="flex  items-center gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                <p className="text-3xl bg-white p-7  rounded-lg  text-blue-400 font-semibold">
                  3
                </p>
                <h2 className="font-bold md:text-2xl  uppercase">
                  You Have No Proof for Licensing Agencies and Regulators.
                </h2>
              </div>

              <p className="py-3 md:  ">
                In order to renew or obtain certain permits and licenses, you
                may need to provide a Certificate of Good Standing to licensing
                agencies and regulators in your state.
              </p>
            </div>
          </div>

          {/* part 4 */}
          <div className="md:">
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7 md:">
              <div>
                <div className="flex  items-center gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <p className="text-3xl bg-white p-7  rounded-lg  text-blue-400 font-semibold">
                    4
                  </p>
                  <h2 className="font-bold md:text-2xl  uppercase">
                    You Can&apos;t Sell Your Business.
                  </h2>
                </div>

                <p className="py-3 md:  ">
                  Typically, lenders or banks want proof of your business&apos;s
                  existence and business history to evaluate creditworthiness
                  for a loan or certain types of transactions. Plus, if
                  you&apos;re seeking investment from investors or other
                  partners, they&apos;ll want to make sure your business is
                  legitimate and in compliance with local laws and regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* new section start black bg */}
        <div className="bg-black text-white md:grid md:grid-cols-2 gap-5 md:mx-14 rounded-xl md:py-16 max-sm:py-5 md:px-20 mx-5">
          {/* part 1 div */}
          <div className="mx-3 md:py-9">
            <h2 className="md:text-5xl max-sm:text-3xl font-bold capitalize">
              Help Obtain a EIN /
            </h2>
            <h2 className="md:text-5xl max-sm:text-3xl font-bold capitalize">
              Tax ID Number
            </h2>
            <h3 className="font-bold py-4 md:text-2xl max-sm:text-lg">
              Save your time. We&apos;ll handle the paperwork
            </h3>
            <p className=" md:py-5">
              If you would like to use our services to facilitate the filing of
              your Tax ID / EIN please place the order and a representative from
              VC FILING will contact you to obtain specific information required
              to complete and file the Tax ID / EIN in your state of formation.
            </p>
          </div>
          {/* part 2 div */}
          <div className="mx-5">
            <div className=" border border-gray-300 bg-white rounded-xl shadow-xl mt-9">
              <div className="relative bg-slate-300">
                <Image
                  className="absolute right-0 mr-2"
                  src="/amendment/logo.png"
                  alt="Free LLC"
                  width={70}
                  height={70}
                />
              </div>
              <p className="text-center  py-6 font-bold mt-5 text-black">
                Tax ID / EIN
              </p>
              <div className="mx-5 py-5">
                <div className=" mx-2  text-center  py-5 ">
                  <h1 className="text-5xl font-semibold text-black">$70</h1>
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
        </div>
        {/*------------------ faq section ----------*/}
        <div className="md:my-16 md:px-10 md:pt-12 max-sm:pb-5 pt-8 md:pb-16 mx-5">
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left  my-1 capitalize">
            Common questions about
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left  my-1 capitalize">
            obtaining an EIN / Tax ID
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left  my-1 capitalize">
            Number
          </h2>
          <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                When i eed an ENI in order to obtain a business account with a
                bank?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:  font-normal ">
                  Yes, under most circumstances business entities other than
                  DBAs must present an EIN along with the filed Articles of
                  Organization or Incorporation in order for an account to be
                  opened.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What circumstance is require me to change my EIN?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:  font-normal ">
                  If you already have an EIN, and the organization or ownership
                  of your business changes, you may need to apply for a new
                  number. Some of the circumstances under which a new number is
                  required are as follows:
                </p>{" "}
                <p className="my-2 md:  font-normal">
                  An existing business is purchased or inherited by an
                  individual who will operate it as a sole proprietorship.
                </p>
                <p className="my-2 md:  font-normal">
                  A sole proprietorship changes to an LLC, corporation, or
                  partnership.
                </p>
                <p className="my-2 md:  font-normal">
                  A partnership changes to an LLC, corporation, or sole
                  proprietorship.
                </p>
                <p className="my-2 md:  font-normal">
                  A corporation changes to an LLC, partnership, or sole
                  proprietorship.
                </p>
                <p className="my-2 md:  font-normal">
                  An LLC changes to a corporation, partnership, or sole
                  proprietorship.
                </p>
                <p className="my-2 md:  font-normal">
                  An individual owner dies, and the estate takes over the
                  business.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                When will i receive my Federal Employer identification number?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:  font-normal ">
                  If it is a stand-alone order for an existing entity we can
                  obtain and email the EIN within one business day.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What is the SS4/EIN/Tax ID number?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:  font-normal ">
                  The SS4 is the IRS form required to obtain an EIN (Employer
                  Identification Number, frequently called a Tax ID number). The
                  EIN/Tax ID number can be thought of as a Social Security
                  Number for your business. It is usually required to open a
                  bank account in the name of the business and to properly pay
                  and account for any payroll employees of your company.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* new section start here */}
        <div className="text-center mx-5">
          <h2 className="font-bold md:text-5xl max-sm:text-3xl">
            Providing Everything
          </h2>
          <h2 className="font-bold text-5xl max-sm:text-3xl">
            You Need When You Need It
          </h2>
          <p className="my-1  pt-4">
            As your business grows, we&apos;ll be there every step of the way to
            make sure that you have the
          </p>
          <p className=" max-sm:pb-5 ">
            {" "}
            resources at hand to service your companies ongoing needs.
          </p>
        </div>
        {/* new section start  */}
        <div className="md:flex gap-40 justify-center items-center border-2 border-solid rounded-xl md:mx-20 mx-10 md:mt-10">
          <p className="my-1 md:  font-normal py-2 hover:border-2 border-solid rounded-xl px-3">
            Company Changes
          </p>
          <p className="my-1 md:  font-normal py-2  hover:border-2 border-solid rounded-xl px-3">
            Compliance
          </p>
          <p className="my-1 md:  font-normal py-2  hover:border-2 border-solid rounded-xl px-3">
            Registered Agent
          </p>
          <p className="my-1 md:  font-normal py-2  hover:border-2 border-solid rounded-xl px-3">
            IRS Filing
          </p>
        </div>
        {/* new section start  */}
        <div className="md:flex gap-7 md:pt-14 max-sm:pt-2">
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
        </div>
        {/* new section start  */}
        <div>
          <h2 className="text-center font-bold text-3xl md:py-8">
            Related Articles
          </h2>
        </div>
        {/* new section start  */}
        <div className=" md:grid grid-cols-3 md:pb-20 max-sm:m-5 mx-5">
          {/* image 1 */}
          <div>
            <Image
              className=" "
              src="/inpage/in1.webp"
              alt="image"
              width={400}
              height={400}
            />
            <p className="py-3 text-lg mx-3">
              If You&apos;re Not a U.S. Citizen, Can You Get an EIN for Your
              Business?
            </p>
            <p className="mx-3  pb-5">Nov 9 , 2023, Lisa Crocco</p>
          </div>
          {/* image 2 */}
          <div>
            <Image
              className=" "
              src="/inpage/in2.webp"
              alt="image"
              width={400}
              height={400}
            />
            <p className="pt-3 mx-3 capitalize">
              do you need an EIN for a trust?
            </p>
            <p className=" pb-3 mx-3 capitalize">(plus how to get one)</p>
            <p className="mx-3  pb-5">Nov 9 , 2023, Lisa Crocco</p>
          </div>
          {/* image 3 */}
          <div>
            <Image
              className=" "
              src="/inpage/in3.webp"
              alt="image"
              width={400}
              height={400}
            />
            <p className="py-3  mx-3">
              If You&apos;re Not a U.S. Citizen, Can You Get an EIN for Your
              Business?
            </p>
            <p className="mx-3 ">Nov 9 , 2023, Lisa Crocco</p>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default TaxConsultation;
