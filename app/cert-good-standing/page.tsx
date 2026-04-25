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
import NavigationWrapper from "@/components/NavigationWrapper";
import { statesInUS } from "@/data";
import { Item } from "@radix-ui/react-navigation-menu";

const CertificateOfGoodStanding = () => {
  return (
    <NavigationWrapper>
      <div className=" my-16 flex flex-col-reverse md:flex-row">
        <div className="flex-1">
          <div className="text-center md:text-left">
            <h1 className="md:text-5xl text-3xl font-bold md:text-left pt-20 md:pl-20">
              Get Your
            </h1>
            <h2 className="md:text-5xl text-3xl font-bold md:text-left md:pl-20">
              Certificate of Good
            </h2>
            <h2 className="md:text-5xl text-3xl font-bold md:text-left md:pl-20">
              Standing
            </h2>
            <h2 className="md:text-xl text-base md:text-left md:pl-16 pt-10 pb-24 mx-5">
              Prove the Status of Your Business Stress-free, simple and
              efficient filing to get your Certificate of Good Standing when you
              need it.
            </h2>

            <Link
              className="px-10 md:ml-20 py-5 font-bold bg-primary text-white border border-primary rounded-[30px] "
              href="/cert-good-standing/step-1"
            >
              ORDER NOW
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <Image
            src="/free-llc/LLC green.jpg"
            alt="Free LLC"
            width={850}
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

        {/* What Is a Certificate of Good Standing? started */}
        <div className="md:grid grid-cols-2 gap-5 mx-5">
          {/* Left side div - Sticky */}
          <div className="md:sticky md:top-20 h-max">
            <p className="pt-8 md:text-xl text-base font-light">
              What Is a Certificate of Good Standing?
            </p>
            <p className="pt-8 md:text-xl text-base font-light">
              Do I Need a Certificate of Good Standing?
            </p>
            <p className="pt-8 md:text-xl text-base font-light">
              How Do I Get a Certificate of Good Standing?
            </p>
            <p className="pt-8 md:text-xl text-base font-light">
              Help to Obtain a Certificate of Good Standing
            </p>
          </div>
          {/* Left side div end */}

          {/* Right side div start */}
          <div>
            {/* Section 1 */}
            <div>
              <h2 className="md:text-3xl text-2xl font-bold pb-2">
                What Is a Certificate of Good Standing?
              </h2>
              <p className="md:text-xl text-base font-light">
                A{" "}
                <span className="text-primary">
                  Certificate of Good Standing
                </span>{" "}
                is an official document issued by your state&apos;s Secretary of
                State office to verify that your business is compliant within
                the state of incorporation and therefore is in “good standing.”
                Just like having a driver&apos;s license or other forms of
                personal ID, a Certificate of Good Standing proves that your LLC
                or corporation is officially registered and authorized to
                operate in your home state.
              </p>
              <div className="border border-gray-200 rounded-2xl bg-blue-200 my-5 p-3">
                <h3>A Certificate of Good Standing can also be known as:</h3>
                <p className="md:text-xl text-base font-light py-5 ">
                  Your business name and address
                </p>
                <p className="md:text-xl text-base font-light py-5 ">
                  Details of your Registered Agent
                </p>
                <p className="md:text-xl text-base font-light py-5">
                  Purpose of your business
                </p>
              </div>
              <Image
                className="pt-10"
                src="/cert-good-stand/good-standing.webp"
                alt="Free LLC"
                width={600}
                height={600}
              />
            </div>
            {/* Section 1 End */}

            {/* Section 2 */}
            <div className="py-5">
              <h2 className="md:text-5xl text-3xl font-bold">
                Do I Need a Certificate of Good Standing?
              </h2>
              <p className="pt-8 md:text-xl text-base font-light">
                In certain situations, you may be required to prove that your
                business exists and is in compliance with relevant laws and
                regulations. A Certificate of Good Standing from your state
                serves as this proof.
              </p>
              <p className="pt-8 md:text-xl text-base font-light">
                Different authorities may require a Certificate of Good
                Standing, including:
              </p>

              {/* Icon Section */}
              <div>
                {/* Part 1 */}
                <div className="flex gap-4 py-4">
                  <CheckBadgeIcon
                    className="min-h-9 min-w-9 max-h-9 max-w-9"
                    color="#39b54a"
                  />
                  <div>
                    <h3 className="md:text-2xl text-base text-wrap leading-normal">
                      Other state governments
                    </h3>
                    <p className="md:text-xl text-base font-light py-5">
                      as part of the process of applying for{" "}
                      <span className="text-primary">
                        Foreign Qualification
                      </span>{" "}
                      for your business to register to do business in states
                      other than your home state
                    </p>
                  </div>
                </div>

                {/* Part 2 */}
                <div className="flex gap-4 py-4">
                  <CheckBadgeIcon
                    className="min-h-9 min-w-9 max-h-9 max-w-9"
                    color="#39b54a"
                  />
                  <div>
                    <h3 className="md:text-2xl text-base text-wrap leading-normal">
                      Lenders or banks
                    </h3>
                    <p className="md:text-xl text-base font-light py-5">
                      that want to get proof of your business&apos;s existence
                      and business history as part of evaluating your
                      creditworthiness for a loan or when carrying out certain
                      types of transactions
                    </p>
                  </div>
                </div>

                {/* Part 3 */}
                <div className="flex gap-4 py-4">
                  <CheckBadgeIcon
                    className="min-h-9 min-w-9 max-h-9 max-w-9"
                    color="#39b54a"
                  />
                  <div>
                    <h3 className="md:text-2xl text-base text-wrap leading-normal">
                      Investors or business partners
                    </h3>
                    <p className="md:text-xl text-base font-light py-5">
                      who want to make sure your business is legitimate and in
                      compliance with laws and regulations
                    </p>
                  </div>
                </div>

                {/* Part 4 */}
                <div className="flex gap-4 py-4">
                  <CheckBadgeIcon
                    className="min-h-9 min-w-9 max-h-9 max-w-9"
                    color="#39b54a"
                  />
                  <div>
                    <h3 className="md:text-2xl text-base text-wrap leading-normal">
                      More capital
                    </h3>
                    <p className="md:text-xl text-base font-light py-5">
                      C Corps are typically much more attractive to potential
                      investors, like venture capitalists and shareholders,
                      because this type of business structure allows for wider
                      ownership of the corporation.
                    </p>
                  </div>
                </div>
              </div>
              {/* Icon Section End */}

              <p className="pt-8 md:text-xl text-base font-light">
                Simply put, the Certificate of Good Standing helps you prove
                that you are a law-abiding business owner who complies with the
                rules. It helps enhance your trustworthiness and credibility
                with potential partners, investors, and lenders.
              </p>
              <p className="pt-8 md:text-xl text-base font-light">
                Obtaining a Certificate of Good Standing is a simple but
                sometimes necessary step in maintaining your business&apos;s
                good reputation and branching out your business operations into
                new areas.
              </p>
            </div>
          </div>
          {/* Right side div end */}
        </div>
        {/* part end  */}

        {/* new era of privacy  part start  */}
        <div className="pt-24 pb-3 mx-5">
          <p className="text-blue-600 font-semibold">NEW ERA OF PRIVACY</p>
          <h2 className="md:text-5xl text-2xl font-bold uppercase">
            Get your <span className="text-primary">certificate of</span>{" "}
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold uppercase">
            good standing with VC FILING
          </h2>
        </div>
        {/* new part end  */}

        {/* new section start  */}
        <div className="mx-5 my-10 gap-5 grid md:grid-cols-2">
          {/* left section  */}
          <div>
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <CheckBadgeIcon className="min-h-12 min-w-12 max-h-12 max-w-12 text-primary" />
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    Get <span className="text-primary">Unparalleled Value</span>{" "}
                    for Your Money
                  </h2>
                </div>

                <p className="py-7 md:text-xl text-base text-wrap leading-normal ">
                  No subscriptions, no recurring fees. No hidden costs and
                  clear, transparent pricing — always.
                </p>
              </div>
            </div>
            {/* part 2 */}
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <CheckBadgeIcon className="min-h-12 min-w-12 max-h-12 max-w-12 text-primary" />
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    Take Advantage of{" "}
                    <span className="text-primary">Industry-Leading</span>{" "}
                    Support
                  </h2>
                </div>

                <p className="py-7 md:text-xl text-base text-wrap leading-normal ">
                  Fast and friendly customer service. Talk to a dedicated
                  specialist, not a salesperson.
                </p>
              </div>
            </div>
          </div>
          {/* right section  */}
          <div className="mt-10">
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <CheckBadgeIcon className="min-h-12 min-w-12 max-h-12 max-w-12 text-primary" />
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    Pay Lower Costs Than with Other Providers
                  </h2>
                </div>

                <p className="py-7 md:text-xl text-base text-wrap leading-normal ">
                  VC FILING will file your Certificate of Good Standing at a
                  lower cost than other providers. Nobody gives you more for
                  less.
                </p>
              </div>
            </div>
            {/* part 2  */}
            <div className="border border-gray-200 rounded-2xl flex p-5  mb-7">
              <div>
                <div className="flex gap-4 bg-blue-50 pt-6 pb-6 pl-3  rounded-xl mb-2 ">
                  <CheckBadgeIcon className="min-h-12 min-w-12 max-h-12 max-w-12 text-primary" />
                  <h2 className="font-bold md:text-2xl text-xl uppercase">
                    Benefit from{" "}
                    <span className="text-primary">Superior & Modern</span>{" "}
                    Experience
                  </h2>
                </div>

                <p className="py-7 md:text-xl text-base text-wrap leading-normal ">
                  Simple, intuitive and modern. The best user experience makes
                  entrepreneurship easy.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*------------------ faq section ----------*/}
        <div className="my-16 md:px-10 pt-20 mx-5">
          <h2 className="md:text-5xl text-2xl font-bold text-left">
            Common Questions About
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold text-left">
            Obtaining a Certificate
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold text-left pb-5">
            Good Standing
          </h2>
          <Accordion type="single" collapsible className="text-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How much does a certificate of good standing cost ?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light ">
                  Whether you need a Certificate of Good Standing for your LLC,
                  Corporation or Nonprofit, the cost is $49 + the fees required
                  by your state. State fees vary from $0 to $60.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Are there any hidden cost ?</AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light ">
                  No! We pride ourselves on transparency. There are absolutely
                  no hidden costs associated with you obtaining a Certificate of
                  Good Standing.
                </p>{" "}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How long does a certificate of good standing take ?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light ">
                  <span className="text-primary">
                    How long it takes to get a Certificate of Good Standing
                  </span>{" "}
                  depends on a number of variables, but you should expect it to
                  take anywhere from several days to several weeks.The filing
                  time depends on the governing state agency and varies by
                  state.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Are there any guides or resources for getting started ?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light ">
                  You can find resources related to Certificate of Good Standing{" "}
                  <span className="text-primary">here</span>
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* review start  */}
        <div className="md:flex  md:py-10   gap-8 md:mx-20 mx-5  ">
          <div className="">
            <h2 className="text-2xl ">Deana A.</h2>

            <div className="flex gap-1 pt-5 pb-3">
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
            </div>
            <p className="text-wrap">
              VC Filing is the best! Professional & always available to answer
              all my questions. I&apos;m so grateful.
            </p>
            <p className="font-semibold py-5">MS, UNITED STATES</p>
          </div>

          {/* part2 review */}
          <div>
            <h2 className="text-2xl ">SCOTT B.</h2>
            <div className="flex gap-1 pt-5 pb-3">
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
            </div>
            <p className="text-wrap">
              VC Filing has been great to work with. Their prices are reasonable
              and they exceed expectations.
            </p>
            <p className="font-semibold py-5">MS, UNITED STATES</p>
          </div>

          {/* part 3 review  */}
          <div>
            <h2 className="text-2xl">Adam S</h2>
            <div className="flex gap-1 pt-5 pb-3">
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
              <StarIcon className="w-5 h-5 text-primary" />
            </div>
            <p className="text-wrap">
              Easy, smooth, one of the best business decisions I&apos;ve ever
              made, was to utilize VC Filing
            </p>
            <p className="font-semibold py-5">CA, UNITED STATES</p>
          </div>
        </div>
        {/* review end  */}

        {/* ----------------------new part ---------------------- */}
        <div className="md:flex  md:flex-row  gap-10 items-center pt-10 md:pt-24 mx-5 md:pb-24">
          <div className="text-center md:text-left md:w-1/2 md:px-16">
            <h3 className="md:text-5xl text-2xl font-bold md:text-left">
              Get Your
            </h3>
            <h3 className="md:text-5xl text-2xl font-bold md:text-left">
              Certificate of
            </h3>
            <h3 className="md:text-5xl text-2xl font-bold md:text-left pb-10">
              Good Standing
            </h3>
          </div>

          <div className=" border border-gray-300  rounded-xl shadow-xl min-w-[95%] md:min-w-[10%] md:w-[40%]">
            <div className="relative bg-slate-300 ">
              <Image
                className="absolute right-0 mr-2"
                src="/logo.png"
                alt="Free LLC"
                width={70}
                height={70}
              />
            </div>
            <p className="text-center text-2xl pt-8 pb-3 font-bold">
              Certificate of Good Standing
            </p>
            <div className="pb-5 flex flex-col justify-center">
              <p className="text-center pt-4 py-3">Entity Type</p>
              <select className="py-2 mx-1 rounded-full border-2 text-center hover:border-red-600">
                <option hidden value="">
                  Select State
                </option>
                {statesInUS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <p className="pb-2 pt-3  text-center">Entity State </p>
              <select className="py-2 mx-1 rounded-full border-2 text-center hover:border-red-600">
                <option hidden value="">
                  Select State
                </option>
                {statesInUS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <div className="border-4 border-gray-200 mx-2 rounded-full text-center  py-5 my-5">
                <h2 className="text-4xl font-semibold">0$</h2>
                <p>Plus $0 state Fee</p>
              </div>

              <div className="flex justify-center items-center">
                <Link
                  className="px-9 py-5 bg-primary text-white border border-primary rounded-[30px] "
                  href="/cert-good-standing/step-1"
                >
                  ORDER NOW
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* review and customer section  */}
        <div className="flex justify-center items-center pb-4 mx- 5 pt-14">
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
          <h2 className="md:text-5xl text-2xl font-bold py-3 uppercase ">
            WHY DO OVER{" "}
            <span className="text-primary">1,000,000 businesses love </span> VC
            filing
          </h2>
        </div>
        <div className="flex justify-center items-center pb-16 mx-5">
          <Link
            className="px-9 py-5 bg-primary text-white border border-primary rounded-[30px] "
            href="/cert-good-standing/step-1"
          >
            GET YOUR CERTIFICATE OF GOOD STANDING NOW
          </Link>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default CertificateOfGoodStanding;
