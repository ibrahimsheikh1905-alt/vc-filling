import { StarIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
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
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { ArrowLongRightIcon, ArrowDownIcon } from "@heroicons/react/16/solid";
import { ArrowDown } from "lucide-react";
import { statesInUS } from "@/data";

const Amendment = () => {
  return (
    <NavigationWrapper>
      <div className=" my-16 flex flex-col-reverse md:flex-row">
        <div className="flex-1">
          <div className="text-center md:text-left">
            <h1 className="md:text-5xl text-3xl font-bold md:text-left pt-20 md:pl-20">
              File a DBA Name
            </h1>
            <h2 className="md:text-5xl text-3xl font-bold md:pl-20 md:text-left">
              or Fictitious Business
            </h2>
            <h2 className="text-xl md:pl-16 py-10 pb-24 md:text-left mx-5">
              Doing business under a name other than your own? You&apos;ll
              probably need
            </h2>
            <Link
              className="md:px-10 px-3 md:ml-20 py-5 font-bold bg-primary text-white border border-primary rounded-[30px] "
              href="/fictitious-business-name/step-1"
            >
              FILE ASSUMED BUSINESS NAME
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
            <p className="md:text-xl text-base font-light">
              Entrepreneurship is booming - and we&apos;re happy to be <br />{" "}
              one of America&apos;s fastest growing companies.
            </p>
          </div>
        </div>
        {/* -----------new section --- */}
        <div className="md:flex gap-5   items-center py-10 mx-2 px-1">
          <div className=" md:text-left md:w-1/2 md:px-16 ">
            <h3 className="md:text-5xl text-3xl font-bold md:py-10">
              What Is a DBA?
            </h3>
            <p className="md:text-xl text-base font-light ">
              A DBA stands for “doing business as” and is a registered name you
              give your business (or part of your business) that is different
              from its legal registered name.
            </p>
            <p className="pt-8 md:text-xl text-base font-light">
              DBAs are typically filed with the Secretary of State or other
              entity that governs business formation in your state. If your
              business operates in multiple states, you&apos;ll likely need to
              file a DBA in every single state. Want to make the process easier
              on yourself? You can{" "}
              <span className="text-primary">file a DBA online</span> with VC
              FILING in a snap (more on that below).
            </p>
          </div>
          <Image
            className="pt-10"
            src="/fictitious-business/img1.webp"
            alt="Free LLC"
            width={600}
            height={600}
          />
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-center gap-10 items-center py-10 mx-5">
          <Image
            src="/fictitious-business/img2.webp"
            alt="Free LLC"
            width={600}
            height={600}
            className=""
          />
          <div className="text-center md:text-left md:w-1/2 md:px-16 px-1">
            <h3 className="md:text-5xl text-2xl font-bold py-10  ">
              Who Needs a DBA??
            </h3>
            <p className="md:text-xl text-base font-light">
              If you&apos;re a sole proprietorship or partnership, you&apos;ll
              likely need a DBA. That&apos;s because you&apos;re unincorporated,
              so you didn&apos;t file entity formation papers or choose a
              business name. Your legal name will be your business name unless
              you file a DBA.
            </p>
            <p className="md:text-xl text-base font-light">
              S and C corporations, LLCs and limited partnerships typically
              don&apos;t need a DBA if they&apos;re happy with their legal
              business name. On the contrary, franchise owners may want to file
              a DBA to indicate they&apos;re operating a business under the
              franchise&apos;s umbrella
            </p>
            <p className="md:text-xl text-base font-light">
              No matter what type of business you&apos;re forming, make sure you
              <span className="text-primary">check with your state</span> on the
              proper process, or sign up for our DBA package and let us handle
              the rest.
            </p>
          </div>
        </div>

        {/*-------------- new section start --------- */}

        <div>
          <h2 className="text-4xl font-bold text-center">
            Other Terms for DBA
          </h2>
          <p className="md:text-xl text-base font-light py-5 text-center mx-5">
            Whether you file a DBA yourself or work with us, you
          </p>
          <p className="md:text-xl text-base font-light text-center mx-5">
            might also see DBA listed by a few other names,
          </p>
          <p className="md:text-xl text-base font-light text-center mx-5 pb-10">
            including:
          </p>
        </div>

        {/* --------------New section start 3 written sec -------- */}

        <div className="md:flex md:gap-5 items-center  mx-5 ">
          <div className=" border border-gray-200 px-4 py-24 rounded-lg md:w-1/3 mb-5">
            <p className="font-bold uppercase text-2xl mx-4 text-center ">
              <span className="text-primary">Fictitious</span> Business Name
            </p>
          </div>
          <ArrowLongRightIcon className="min-h-7 min-w-7 max-h-7 max-w-7 max-sm:hidden text-primary " />
          <div className="flex justify-center items-center py-5">
            <ArrowDown className="min-h-7 min-w-7 max-h-7 max-w-7 md:hidden  text-primary " />
          </div>
          <div className=" border border-gray-200 px-4 py-24 rounded-lg w1/3 mb-5   ">
            <p className="font-bold uppercase text-2xl text-center">
              <span className="text-primary">Assumed</span> Business Name
            </p>
          </div>
          <ArrowLongRightIcon className="min-h-7 min-w-7 max-h-7 max-w-7 max-sm:hidden  text-primary" />
          <div className="flex justify-center items-center py-5">
            <ArrowDown className="min-h-7 min-w-7 max-h-7 max-w-7 md:hidden  text-primary " />
          </div>
          <div className=" border border-gray-200 px-4 py-24 rounded-lg md:w-1/3 mb-5">
            <p className="font-bold uppercase text-2xl mx-4 text-center ">
              <span className="text-primary">Trade</span> Name
            </p>
          </div>
        </div>

        {/* new era of privacy section */}
        <div className="bg-black rounded-3xl my-24 pb-10 md:px-20 mx-5">
          <div className="md:pt-12 mx-5 pt-6">
            <p className="font-semibold text-yellow-400">NEW ERA OF PRIVACY</p>
            <h2 className="md:text-5xl text-white font-bold text-xl ">
              Why File a DBA with VC FILING?
            </h2>
            <p className="pt-8 md:text-xl text-base font-light text-white">
              Our DBA package offers four key benefits that business owners
              should pay attention to.
            </p>
          </div>
          {/* new sub-section start 1,2  */}
          <div className="md:flex gap-9 mx-5 pt-6 ">
            <div className="border border-gray-200 rounded-2xl  p-5 mb-7 md:w-1/2">
              <div className="flex gap-4   pl-3  rounded-xl mb-2 ">
                <h2 className="font-bold md:text-2xl text-xl text-white">
                  Location-Specific Branding
                </h2>
              </div>

              <p className="md:text-xl text-base font-light  text-white pb-4">
                A DBA for each location your business operates in allows them to
                hold distinctly separate names under the same umbrella company
                (for example, “Cassidy&apos;s Cookies New York” and
                Cassidy&apos;s Cookies LA”).
              </p>
              <div className="flex gap-4  pt-20 pl-3  rounded-xl mb-2 ">
                <CheckBadgeIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary" />
                <h2 className="font-bold md:text-2xl text-xl text-white">
                  different name same branding
                </h2>
              </div>
            </div>
            {/* section 2 */}
            <div className="border border-gray-200 rounded-2xl  p-5 mb-7 md:w-1/2">
              <div className="flex gap-4   pl-3  rounded-xl mb-2 ">
                <h2 className="font-bold md:text-2xl text-xl text-white">
                  Privacy
                </h2>
              </div>

              <p className="md:text-xl text-base font-light  text-white pb-4">
                When you form a business, it automatically takes on the name of
                the business owner unless you file as a certain legal entity
                (like an LLC or S or C Corporation). A DBA allows you to legally
                separate your name from your business&apos;s name so you can
                maintain privacy.
              </p>
              <div className="flex gap-4  pt-12 pb-6 pl-3  rounded-xl mb-2 ">
                <CheckBadgeIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary" />
                <h2 className="font-bold md:text-2xl text-xl text-white">
                  protected privacy
                </h2>
              </div>
            </div>
          </div>
          {/* sub-section part 3,4 */}
          <div className="md:flex gap-9 mx-5 pt-6 ">
            <div className="border border-gray-200 rounded-2xl  p-5 mb-7 md:w-1/2 ">
              <div className="flex gap-4   pl-3  rounded-xl mb-2 ">
                <h2 className="font-bold md:text-2xl text-xl text-white">
                  Product Flexibility
                </h2>
              </div>

              <p className="md:text-xl text-base font-light  text-white pb-4">
                Say you&apos;re a jack-of-all-trades and run many businesses all
                under your name. Use multiple DBAs to clarify what your product
                offerings are (for example, “Cassidy&apos;s Cookies” and
                “Cassidy&apos;s Cakes”).
              </p>
              <div className="flex gap-4  pt-12  pl-3  rounded-xl mb-2 ">
                <CheckBadgeIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary" />
                <h2 className="font-bold md:text-2xl text-xl text-white">
                  Diverse DBA Product Offerings
                </h2>
              </div>
            </div>
            {/* section 4 */}
            <div className="border border-gray-200 rounded-2xl  p-5 mb-7 md:w-1/2">
              <div className="flex gap-4   pl-3  rounded-xl mb-2 ">
                <h2 className="font-bold md:text-2xl text-xl text-white">
                  Streamlined Rebranding
                </h2>
              </div>

              <p className="md:text-xl text-base font-light  text-white pb-4">
                Maybe you registered your LLC under a name that doesn&asop;t
                quite fit your vibe anymore. Target your audience better by
                creating a DBA that aligns more with your new branding as your
                company evolves (rather than forming a new LLC).
              </p>
              <div className="flex gap-4  pt-12  pl-3  rounded-xl mb-2 ">
                <CheckBadgeIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary" />
                <h2 className="font-bold md:text-2xl text-xl text-white">
                  Adaptive DBA Rebranding
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* new section start  */}
        <div className="md:pt-12 mx-5 pt-6">
          <p className="font-semibold text-blue-400">NEW ERA OF PRIVACY</p>
          <h2 className="md:text-5xl uppercase font-bold text-xl ">
            Get your <span className="text-primary">certificate of</span>
          </h2>
          <h2 className="md:text-5xl uppercase font-bold text-xl ">
            good standing with VC FILING
          </h2>
        </div>

        {/* new section start  1234 */}
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
        {/* --------------------new section start - */}

        {/*----------------------- new section-----------------------  */}

        <div className=" my-10 md:mx-60 mx-5 max-w-3xl ">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">How to File a DBA</h2>
            <p className="my-2 md:text-xl text-base font-light  mx-5">
              Filing a DBA is a multi-step process. While you could try to
              tackle the following yourself — why add more work to your plate?
            </p>
            <p className="my-2 md:text-xl text-base font-light mx-5">
              Let VC FILING handle DBA filing for total peace of mind.
            </p>
          </div>
          {/* new part  */}
          <div className="border border-gray-300 rounded-xl p-5">
            <div className="flex gap-2 mt-5 mx-2 ">
              <CheckBadgeIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary" />
              <h2 className="font-bold md:text-2xl text-xl uppercase">
                Find Out What Entity Controls Business Formation
              </h2>
            </div>
            <p className="my-2 md:text-xl text-base font-light  mx-3">
              Usually this is the Secretary of State. However, sometimes this is
              done at the county level. If that&apos;s the case, make sure you
              register your DBA in each county you operate in.
            </p>
          </div>
          <div className="border border-gray-300 rounded-xl my-8 p-5">
            <div className="flex gap-2 mt-5 mx-2 ">
              <CheckBadgeIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary" />
              <h2 className="font-bold md:text-2xl text-xl uppercase">
                Download, Fill Out and Send the Online Form
              </h2>
            </div>
            <p className="my-2 md:text-xl text-base font-light  mx-3">
              Visit the relevant website and find the section on DBA, trade,
              fictitious or assumed names. With any luck, you&apos;ll be able to
              do this digitally - although some systems are woefully outdated
              and require faxing or mailing.
            </p>
          </div>
          <div className="border border-gray-300 rounded-xl my-8 p-5">
            <div className="flex gap-2 mt-5 mx-2 ">
              <CheckBadgeIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary" />
              <h2 className="font-bold md:text-2xl text-xl uppercase">
                Pay the Filing Fee
              </h2>
            </div>
            <p className="my-2 md:text-xl text-base font-light  mx-3">
              Filing fees vary by state and depend on whether you&apos;re
              registering for an LLC, corporation, or other entity.
            </p>
          </div>
          <div className="border border-gray-300 rounded-xl my-8 p-5">
            <div className="flex gap-2 mt-5 mx-2 ">
              <CheckBadgeIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary" />
              <h2 className="font-bold md:text-2xl text-xl uppercase">
                Ensure Your Business Name Is Protected
              </h2>
            </div>
            <p className="my-2 md:text-xl text-base font-light  mx-3">
              A DBA by itself won&apos;t protect your business name. Forming an
              LLC or corporation is one of the best ways to secure the legal
              name of your business, but if you want to take an extra step, it
              may be worth trademarking your business name. We can help with
              that.
            </p>
            <p className="my-2 md:text-xl text-base font-light  mx-3">
              Our low-cost{" "}
              <span className="text-primary">
                Trademark Search and Registration service
              </span>{" "}
              makes it easy to protect your DBA.
            </p>
          </div>
          <div className="border border-gray-300 rounded-xl my-8 p-5">
            <div className="flex gap-2 mt-5 mx-2 ">
              <CheckBadgeIcon className="min-h-9 min-w-9 max-h-9 max-w-9 text-primary" />
              <h2 className="font-bold md:text-2xl text-xl uppercase">
                File Your Taxes
              </h2>
            </div>
            <p className="my-2 md:text-xl text-base font-light  mx-3">
              Whether or not you have a DBA, you&apos;ll need to file taxes.
              Themethod and frequency of this depend on your business structure.
            </p>
          </div>
        </div>

        {/*----------------- DNA vs LLC SECTION ------------------ */}
        <div className="text-center mx-5">
          <h2 className="md:text-5xl text-2xl font-bold py-3 uppercase">
            DBA vs. LLC
          </h2>
          <p className="my-2 md:text-xl text-base font-light ">
            The main difference between a DBA and an LLC is that an LLC is a
            legally registered business entity, while a DBA is like a formal
            nickname for an already existing business.
          </p>
        </div>
        {/* DBA VS LLC SECTION PART 2 */}
        <div className="flex items-center justify-center bg-gray-100 py-12">
          <div className="relative flex items-center max-w-6xl bg-white shadow-lg rounded-md ">
            <div className="w-1/2 p-8 relative bg-white border ml-3 my-2 rounded-l-md ">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                WHY USE AN <span className="text-orange-500">LLC</span>?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We talk a lot about{" "}
                <span className="font-semibold text-primary py-4">LLCs</span>.
                They provide legal protections for the business owner,
                separating their personal assets from the business&apos;s
                assets. LLC owners aren&apos;t required to file a DBA.
              </p>
            </div>
            VS Circle
            <div className="absolute inset-0 flex justify-center items-center z-10">
              <div className="bg-white border border-gray-300 shadow-md w-28 h-28 flex justify-center items-center rounded-full text-primary font-bold text-xl">
                VS
              </div>
            </div>
            <div className="w-1/2 p-8 relative bg-white border mr-3 my-2 rounded-l-md ">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                why use an <span className="text-primary">DBA?</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We talk a lot about{" "}
                <span className="font-semibold text-primary py-4">LLCs</span>.
                They provide legal protections for the business owner,
                separating their personal assets from the business&apos;s
                assets. LLC owners aren&apos;t required to file a DBA.
              </p>
            </div>
          </div>
        </div>
        {/* ------------------------state dba filing -------------- */}
        <div className="text-center my-14">
          <h2 className="md:text-5xl text-2xl font-bold py-3 uppercase">
            States That Allow DBA Filing
          </h2>
          <p className="my-2 md:text-xl text-base font-light  mx-5">
            Choose your state below to view specific DBA requirements, including
            fees, length of approval, forms needed and where to file. It&apos;s
            that easy.
          </p>
        </div>
        {/* state of information  */}
        <div className="border border-gray-300 text-center md:mx-56 py-5 rounded-lg mx-5">
          <p className=" pt-4 py-3 text-primary font-bold">
            State of information
          </p>
          <select className="py-2 md:px-72 px-16  rounded-full border-2 text-center hover:border-red-600">
            <option hidden value="">
              Select Entity Type
            </option>
            {statesInUS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* ----------------new section ----------- */}
        <div className="border border-gray-300 rounded-lg my-10 gap-2 md:mx-56 mx-5 grid grid-cols-2 text-center">
          {/* ---------------------section 1 --------------*/}
          <div className="mx-5 grid grid-rows-7 pt-5">
            <p className="md:my-2 md:text-xl font-bold pb-2">Referred to as</p>
            <p className="md:my-2 md:text-xl font-bold pb-2">Required</p>
            <p className="md:my-2 md:text-xl font-bold pb-2">Fee</p>
            <p className="md:my-2 md:text-xl font-bold pb-2">
              Length of approval
            </p>
            <p className="md:my-1 md:text-xl font-bold pb-2">
              Public notice required
            </p>
            <p className="md:my-2 md:text-xl font-bold pb-2">Must file with</p>
            <p className="md:my-2 md:text-xl font-bold pb-2">
              Forms available online
            </p>
          </div>
          {/* ----------------section 2 ---------- */}
          <div className="mx-5 grid grid-rows-7 pt-5">
            <p className="md:my-2 md:text-xl font-light pb-2 ">Trade name</p>
            <p className="md:my-2 md:text-xl font-light pb-2">No</p>
            <p className="md:my-2 md:text-xl font-light pb-2">$30</p>
            <p className="md:my-2 md:text-xl font-light pb-2">5 years</p>
            <p className="md:my-2 md:text-xl font-light pb-2">No</p>
            <p className="md:my-2 md:text-xl font-light pb-2">
              Office of the Secretary State
            </p>
            <p className="my-1 md:text-xl font-light text-primary pb-2">Yes</p>
          </div>
        </div>

        {/*------------------ faq section ----------*/}
        <div className="my-16 md:px-10 pt-20 mx-5">
          <h2 className="md:text-5xl text-2xl font-bold md:text-left ">
            Common Questions About
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold md:text-left pb-8">
            Filing a DBA
          </h2>
          <Accordion type="single" collapsible className="text-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>How Much Does DBA Cost?</AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light ">
                  It typically costs $25-$100 to file a DBA. This depends on
                  your state — for example, it costs $15-$25 in Texas and
                  $55-$65 in Florida. You can find this information online when
                  you go to file or by using the state search feature above.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can a DBA Become an LLC?</AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light ">
                  If you got a DBA as a sole proprietor, you can{" "}
                  <span className="text-primary">convert to an LLC</span> to
                  enjoy more legal protections. You&apos;ll first need to make
                  sure your DBA can be used for your LLC name, as it may already
                  be in use by a legally registered business.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can i Have Multiple DBA under One LLC?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light ">
                  Yes — this is the beauty of DBAs! If you have multiple
                  locations or branches of your business that all operate under
                  the same LLC, you can file multiple DBAs to help distinguish
                  them.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can Two Business Have the Same DBA?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light ">
                  Typically, states won&apos;t allow two businesses to have the
                  same DBA — even if you own them both. Your DBA application may
                  be denied to avoid confusion, especially if they&apos;re in
                  the same industry. However, your DBA could be used if you
                  haven&apos;t registered your business as a legal entity.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Do i Need an EIN for a DBA?</AccordionTrigger>
              <AccordionContent>
                <p className="my-2 md:text-xl text-base font-light ">
                  Since a DBA acts as a nickname, you won&apos;t need a separate
                  EIN for it. You do, however, need an EIN for your registered
                  business entity for tax purposes.
                </p>
              </AccordionContent>

              <AccordionContent></AccordionContent>
              <AccordionContent></AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div>
          <h2 className="text-center uppercase font-bold md:text-lg py-4">
            trustpilot reviews
          </h2>
        </div>

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

        <div className="text-center pb-24 mx-5">
          <h2 className="md:text-5xl max-sm:text-2xl font-bold py-3 uppercase ">
            need a <span className="text-primary"></span>
          </h2>
          <h2 className="md:text-5xl max-sm:text-2xl font-bold uppercase pb-5">
            <span className="text-primary">dba asap?</span>
          </h2>
          <p className="md:text-xl text-base  ">
            We&apos;ll save you time by doing the paperwork for you. Just place
            an order and presto — you&apos;ll have an assumed
          </p>
          <p className="md:text-xl text-base">business name in no time.</p>
          <div className="flex justify-center items-center py-5">
            <Link
              className="md:px-10 md:py-5 py-6 px-4  bg-primary text-white border border-primary rounded-[30px] "
              href="/fictitious-business-name/step-1"
            >
              FILE AN ASSUMED BUSINESS NAME
            </Link>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default Amendment;
