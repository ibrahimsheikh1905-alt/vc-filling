import {
  CheckBadgeIcon,
  HomeIcon,
  ArrowPathIcon,
  NewspaperIcon,
  ShoppingBagIcon,
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
import { statesInUS } from "@/data";

const TaxConsultation = () => {
  return (
    <NavigationWrapper>
      <div className=" my-16 flex flex-col-reverse md:flex-row">
        <div className="flex-1">
          <div className=" md:text-left max-sm:mx-5">
            <h1 className="md:text-6xl text-3xl font-bold  pt-20 md:pl-16">
              Filing Articles of
            </h1>
            <h2 className="md:text-6xl text-3xl font-bold pb-10 md:pl-16">
              Dissolution
            </h2>
            <Link
              className="px-10 md:ml-20 py-5 font-bold bg-primary text-white border border-primary rounded-[30px] "
              href="/dissolution/step-1"
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
        <div className="flex gap-4 items-center justify-center md:my-16  max-sm:pb-6 md:py-7 mx-3 md:flex-row flex-col">
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
        <div className="md:grid grid-cols-2 mx-5">
          <div>
            <h2 className="text-5xl max-sm:text-3xl font-bold">
              How to Dissolve
            </h2>
            <h2 className="text-5xl max-sm:text-3xl font-bold">an LLC</h2>
          </div>
          <div className="pt-3">
            <p className="md: font-normal md:pb-9 max-sm:pb-4">
              A corporation or LLC can come to a place of dissolution for
              several reasons. It can simply be a decision you&apos;ve made for
              your company because it is no longer successful, you are moving on
              to a new adventure or your shareholders wish to dissolve its
              assets. This will, fortunately, stop the necessary tax filings and
              other requirements that come with having a record of operation on
              file with the secretary of state. But, the emotional decision to
              dissolve your company can be tough at times, if you put your heart
              and sweat into building your own business.
            </p>
            <p className="font-normal md:pb-9 max-sm:pb-5">
              Allow VC FILING to ease the burden by doing the{" "}
              <span className="text-primary">
                dissolution paperwork for you.
              </span>
            </p>
            <h3 className="font-bold text-2xl md:py-8">
              How to Close an LLC or Corporation
            </h3>
            <p className=" py-2 pb-5 ">
              A company begins with Articles of Incorporation when it is formed,
              therefore it makes sense that Articles must be filed to dissolve a
              company that has been in operation. Without filing the proper
              paperwork, the business owner will continue to be liable for taxes
              and other state requirements. Fortunately, closing a company is
              really a matter of paperwork.
            </p>
            <div className="flex  gap-5 py-10 bg-slate-300 rounded-xl p-9  ">
              <div className="">
                <ShoppingBagIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
              </div>
              <div>
                <div>
                  <p className="my-2   font-normal">
                    In order to properly close a corporation or LLC that is no
                    longer transacting business, the company must file Articles
                    of Dissolution with the state of incorporation. Neglecting
                    to file Articles of Dissolution for a company that is no
                    longer active may expose the corporation or LLC to
                    unnecessary recurring fees or taxes.
                  </p>
                </div>
              </div>
            </div>
            <p className=" py-6">
              Business dissolution is primarily an act of filing Articles of
              Dissolution with your secretary of state. However, if a business
              is not in a sound position with the state to dissolve, other legal
              matters may complicate the process.
            </p>
            <div className=" md:py-10">
              <div>
                <h2 className="font-bold text-2xl md:pb-5">
                  Steps to Dissolving Your LLC or Corporation
                </h2>
                <div>
                  <p className="my-2 md:  font-normal">
                    There are three key steps to dissolving a company. VC FILING
                    completes these steps in a timely manner on your behalf,
                    making an otherwise cumbersome process simple and
                    stress-free.
                  </p>
                </div>
              </div>
            </div>
            {/* new part start  */}
            <div className="">
              <div className="flex gap-2 md:mx-5 mt-7 py-5 border-2 rounded-xl p-5 my-6">
                <div className="">
                  <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                </div>
                <div>
                  <p className="   font-bold">
                    Hold a meeting with the Board of Directors
                  </p>
                  <p className=" py-6">
                    In this case, you want the minutes of your meeting to
                    reflect that a vote was taken and appropriate majority (as
                    outlined in your incorporation papers) was achieved. Those
                    companies with shareholders will want a written
                    documentation of this decision signed by all company owners.
                    Some companies, such as single-member LLCs will not need to
                    complete this step.
                  </p>
                </div>
              </div>
              {/* sub part 2 */}
              <div className="flex gap-2 md:mx-5 mt-7 py-5 border-2 rounded-xl p-5 my-6">
                <div className="">
                  <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                </div>
                <div>
                  <p className=" md:  font-bold">
                    File the Articles of Dissolution
                  </p>
                  <p className=" py-6">
                    Next, your company will need an Assumed Name under which to
                    register, or you can incorporate your business and use your
                    formal name.
                  </p>
                </div>
              </div>
              {/* sub part 3 */}
              <div className="flex gap-2 md:mx-5 mt-7 py-5 border-2 rounded-xl p-5 my-6">
                <div className="">
                  <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                </div>
                <div>
                  <p className=" md:  font-bold">Notify the IRS</p>
                  <p className=" py-6">
                    Then, if you operate from home or plan to remodel a space,
                    for example, you&apos;ll need to obtain permits to do so.
                    Other permits covering serving alcohol, displaying a sign on
                    the building exterior and even parking for your business
                    might also be a requirement. A great place to research your
                    local zoning and operating laws is the nearest Small
                    Business Development Center (SBDC).
                  </p>
                </div>
              </div>
            </div>
            <div className=" md:py-10">
              <div>
                <div>
                  <p className="my-2 max-sm:mx-5   font-normal">
                    An additional step often recommended at this point is the
                    closing of all credit lines and accounts that pertain to
                    your business. Letting your creditors know that you have
                    dissolved a company will set you up for more favorable
                    circumstances should debt still be present. Finally, if you
                    have any fictitious names in other states, you&apos;ll want
                    to cancel those as well.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* new section start  */}
        <div className="flex flex-col-reverse md:flex-row  gap-10 items-center pt-10 md:pt-24 mx-5 md:pb-16 max-sm:pb-5">
          <div className=" md:text-left md:w-1/2 md:px-16">
            <h3 className="md:text-5xl text-2xl font-bold md:pt-10  ">
              Save your time.
            </h3>
            <h3 className="md:text-5xl text-2xl font-bold md:py-2  ">
              We&apos;ll handle the
            </h3>
            <h3 className="md:text-5xl text-2xl font-bold   ">paperwork.</h3>
            <h3 className="font-bold pt-4">Requirements to file Articles of</h3>
            <h3 className="font-bold  pb-4">Dissolution:</h3>

            <p className="   md:pb-12 ">
              The company must be in{" "}
              <span className="text-primary">good standing</span> with the state
              of incorporation and cannot be in arrears of franchise taxes or
              annual reporting requirements. In the event that the entity is not
              in good standing{" "}
              <span className="text-primary">reinstatement</span> would be
              required in order to proceed with the dissolution.
            </p>
          </div>

          <div className=" border border-gray-300  rounded-xl shadow-xl min-w-[95%] md:min-w-[10%] md:w-[40%]">
            <div className="relative bg-slate-300 ">
              <Image
                className="absolute right-0 mr-2"
                src="/amendment/logo.png"
                alt="Free LLC"
                width={70}
                height={70}
              />
            </div>
            <p className="text-center text-2xl pt-8 pb-3 font-bold">
              DISSOLUTION
            </p>
            <div className="pb-5 flex flex-col justify-center">
              <p className="text-center pt-4 py-3">Entity Type</p>
              <select className="py-2 mx-1 rounded-full border-2 text-center hover:border-red-600">
                <option value="">Select Entity Type</option>
                {statesInUS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <p className="pb-2 pt-3  text-center">Entity State </p>
              <select className="py-2 mx-1 rounded-full border-2 text-center hover:border-red-600">
                <option value="">Select State</option>
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
                  href="/dissolution/step-1"
                >
                  ORDER NOW
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/*------------------ faq section ----------*/}
        <div className="md:my-16 md:px-10 md:pt-12  md:pb-16 max-sm:pb-5 mx-5">
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left md:my-6 capitalize">
            Common Questions on Filing
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold  md:text-left md:my-6 capitalize">
            Dissolution
          </h2>

          <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What Are The Article of Dissolution Exactly?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:  font-normal ">
                  The articles formalize the cessation of activity as an
                  incorporated entity. They define parameters surrounding the
                  dissolution of a company. This could include the distribution
                  or sale of assets, how shareholders will be compensated and
                  responsibilities divided among management.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Hwo Much Will it Cost to File Articles Of Dissolutions?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:  font-normal ">
                  The state fee varies by state our service fee to file Articles
                  of Dissolution is $149. To review the fee in your state click
                  on the “order now” button and select the state and entity
                  type.
                </p>{" "}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What Contingencies Would Prohibit Me From Filling a Dissolution?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:  font-normal ">
                  The only stipulation that would prohibit the owners of an
                  entity from filing a dissolution is if the company owes
                  outstanding taxes or has annual reports outstanding. In this
                  event the company would need to bring the itself to good
                  standing with the state before filing the dissolution.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How Long Will it Take To Have the Articles of Dissolution Filed?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:  font-normal ">
                  The filing time is dependent on the governing state agency and
                  varies by state.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What Will i Receive When The Articles of Dissolutions Are Filed?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:  font-normal ">
                  The governing state agency will return a copy of the filed
                  articles which are then mailed to the client.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* new section start here */}
        <div className="text-center mx-5">
          <h1 className="font-bold md:text-5xl max-sm:text-3xl">
            Providing Everything You Need When You Need It
          </h1>

          <p className="my-1  pt-4">
            As your business evolves, we&apos;ll be there every step of the way
            to make sure that you have the
          </p>
          <p className="my-1  pb-4">
            resources at hand to service your companies ongoing needs.
          </p>
        </div>

        {/* new image section start  */}
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
            {/* imag1 */}
            <div className="border border-gray-200 rounded-2xl px-4 my-10">
              <div>
                <Image
                  className="pt-10"
                  src="/trademark/trade5.webp"
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
                  src="/trademark/trade6.webp"
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
        <div>
          <h2 className="text-center font-bold text-3xl md:py-10 max-sm:pb-5">
            Related Articles
          </h2>
        </div>
        {/* new section start  */}
        <div className=" md:grid grid-cols-3 gap-7 md:pb-32 max-sm:pb-9 mx-5">
          {/* image 1 */}
          <div>
            <Image
              className=" "
              src="/inpage/in1.webp"
              alt="image"
              width={400}
              height={400}
            />
            <p className="py-3  mx-3">
              If You&apos;re Not a U.S. Citizen, Can You Get an EIN for Your
              Business?
            </p>
            <p className="mx-3  py-4">Nov 9 , 2023, Lisa Crocco</p>
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
            <p className="pt-3  mx-3 capitalize">
              do you need an EIN for a trust?
            </p>
            <p className=" pb-3 mx-3 capitalize">(plus how to get one)</p>
            <p className="mx-3  py-4">Nov 9 , 2023, Lisa Crocco</p>
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
            <p className="py-3 ">
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
