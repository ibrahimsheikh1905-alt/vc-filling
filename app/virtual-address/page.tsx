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
import {
  ArrowLongRightIcon,
  QrCodeIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  BellIcon,
  DevicePhoneMobileIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import { EarthIcon, WholeWordIcon } from "lucide-react";
import { statesInUS } from "@/data";

const Amendment = () => {
  return (
    <NavigationWrapper>
      <div className=" my-16 flex flex-col-reverse md:flex-row">
        <div className="flex-1">
          <div className=" md:text-left">
            <h1 className="text-5xl font-bold  pt-20 md:pl-20 max-sm:mx-5">
              VC &apos;s Virtual
            </h1>
            <h2 className="text-5xl font-bold  md:pl-20 max-sm:mx-5 mb-10">
              Address Service
            </h2>
            <h2 className="md:text-xl md:pl-20 max-sm:mx-5">
              Elevate your business with VC virtual address trustworthy and
            </h2>
            <h2 className="md:text-xl md:pl-20  pb-24 max-sm:mx-5">
              affordable Registered Agent.
            </h2>
            <Link
              className="px-10 ml-20 py-5 bg-primary text-white border border-primary rounded-[30px] max-sm:mx-5"
              href="/virtual-address/step-1"
            >
              GET STARTED
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

        <div className="mx-5">
          <h2 className="md:text-4xl text-3xl font-bold">
            Genuine Street Address and
          </h2>
          <h2 className="md:text-4xl text-3xl font-bold">
            Mailbox for Your Business
          </h2>
        </div>
        {/* new section start  */}
        <div className="flex items-center justify-center rounded-xl pt-10 mx-5">
          <Image
            className="rounded-xl"
            src="/va/va.webp"
            alt="Free LLC"
            width={900}
            height={900}
          />
        </div>
        {/* new section start  */}
        <div className="pt-24 md:grid grid-cols-2 mx-5">
          <div>
            <h2 className="md:text-5xl text-3xl font-bold text-primary">
              The way
            </h2>
            <h2 className="md:text-5xl font-bold text-3xl text-primary">
              {" "}
              WE DO
            </h2>
            <h2 className="md:text-5xl font-bold uppercase text-3xl">
              business
            </h2>
            <h2 className="md:text-5xl font-bold uppercase text-primary text-3xl">
              has
            </h2>
            <h2 className="md:text-5xl font-bold uppercase text-primary text-3xl">
              changed
            </h2>
          </div>
          <div>
            <h2 className="text-3xl mx-5 ">
              More people travel than ever before but we still need to stay in
              touch.
            </h2>
            <h2 className="text-3xl pt-5 mx-5">
              Our suppliers, customers, partners, and more expect to contact us
              and get the answers they need. Although email, instant messaging,
              and other technologies make communication easier and faster,
              sometimes there&apos;s no good substitute for traditional snail
              mail.
            </h2>
            <div className="md:flex gap-3 pt-11 mx-5">
              <div>
                <p className="font-bold text-primary">NEW ERA OF PRIVACY</p>
                <p className="text-2xl pt-6">Welcome to VC FILING</p>
                <p className="text-2xl">Virtual Address Service</p>
                <p className="pt-9">
                  It gives you access to a genuine street address for your
                  business, so you can enjoy the benefits of mail scanning and a
                  virtual mailbox wherever you are.
                </p>
                <p>
                  Our scanning services bring the world of snail mail into the
                  21st century, meaning everything is done online.
                </p>
              </div>
              {/* part 2 */}
              <div>
                <p className="font-bold text-primary capitalize">
                  Truly Virtual
                </p>
                <p className="text-2xl pt-6">What You Need to Know</p>

                <p className="pt-9">
                  Virtual addresses can accept traditional mail, letters, and
                  checks but packages will not be accepted.
                </p>
                <p>
                  We break down all the benefits of a virtual address below, but
                  it&apos;s important to note that you will not have access to
                  this location in person.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* new section start  */}
        <div className="pt-28 text-center mx-5">
          <h2 className="text-4xl font-bold text-center">
            States Where Virtual Address Service
          </h2>
          <h2 className="text-4xl font-bold text-center">Is Available</h2>
          <p className="pt-6">
            VC FILING currently provides virtual mailboxes in all states
            excluding Illinois, Oregon,
          </p>
          <p>
            and Arkansas, providing you with the flexibility you need to run
            your business in
          </p>
          <p>the location that makes the most sense for you.</p>
        </div>
        {/* new section start  */}

        {/* new section start  */}
        <div className=" pt-10 md:pt-24 flex justify-center items-center mx-5">
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
            <p className="text-center text-2xl pt-12 pb-3 font-bold">
              Get Your Virtual Address Now
            </p>
            <p className="text-center py-7">
              Set Yourself Up for Success with VC FILING
            </p>
            <div className="pb-5 flex flex-col justify-center">
              <p className="pb-2 pt-3  text-center"> State </p>
              <select className="py-2 mx-3 rounded-full border-2 text-center hover:border-red-600">
                <option value="">Select State</option>
                {statesInUS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <div className="flex justify-center items-center pt-10">
                <Link
                  className="px-9 py-5 bg-primary text-white border border-primary rounded-[30px] "
                  href="/virtual-address/step-1"
                >
                  GET STARTED
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* new background image section  start */}
        <div className="bg-[url('/va/vabg.webp')]  px-8 text-white py-16 rounded-xl my-2 mx-5 mt-16">
          <p className="text-white font-bold py-9">Incorporate now</p>
          <h2 className="text-7xl font-bold pt-12 uppercase">Launch your</h2>
          <h2 className="text-7xl font-bold uppercase">business with</h2>
          <h2 className="text-7xl font-bold uppercase">VC Filing</h2>
          <p className="pt-20 text-xl">No Contracts. No Surprise. Only</p>
          <p className="text-xl">$0 + State Fee to Launch Your</p>
          <p className="text-xl pb-16">Business.</p>
          <div className="pb-12">
            <Link
              className="px-9  py-5 bg-primary text-white border border-primary rounded-[30px] "
              href={"/form-a-llc/"}
            >
              ORDER NOW
            </Link>
          </div>
        </div>
        {/* new section start  */}
        <div className="py-24 md:grid grid-cols-2 mx-5">
          {/* part 1 */}
          <div>
            <p className="font-bold text-primary">Virtual address</p>
            <p className="text-5xl font-bold">Advantages</p>
            <Image
              className=""
              src="/va/va2.webp"
              alt="Free LLC"
              width={500}
              height={500}
            />
          </div>
          {/* part 2  */}
          <div>
            <p className="text-3xl pb-7 mt-5">
              Our Virtual Address service is easy to use, and there are several
              benefits for you and your business.
            </p>
            <div className="md:grid grid-cols-2 gap-6 mx-5">
              {/* part 1 */}
              <div>
                <div className="flex gap-3 pt-7">
                  <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                  <p className="font-bold text-xl ">
                    One Address for All Correspondence
                  </p>
                </div>
                <p className="py-5">
                  You get a single, stable street address you can give to
                  suppliers, banks, customers, government agencies, and more.
                </p>
              </div>

              {/* part 2 */}
              <div>
                <div className="flex gap-3 pt-7">
                  <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                  <p className="font-bold text-xl ">
                    Review Mail Wherever You Are
                  </p>
                </div>
                <p className="py-5">
                  All paper mail is scanned and uploaded to a secure, private
                  portal where you can read and review correspondence at your
                  convenience.
                </p>
              </div>

              {/* part 3  */}
              <div>
                <div className="flex gap-3">
                  <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                  <p className="font-bold text-xl ">
                    A Professional Image for Your Business
                  </p>
                </div>
                <p className="py-5">
                  A business address is more prestigious than a residential
                  address and could enhance your reputation and marketing.
                </p>
              </div>
              {/* part 4  */}
              <div>
                <div className="flex gap-3 ">
                  <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                  <p className="font-bold text-xl ">
                    A Low, Fixed Price Regardless of Mail Volume
                  </p>
                </div>
                <p className="py-5 ">
                  Our Virtual Address service is priced at just $29 per month.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* new section start  */}
        <div className="bg-black text-white rounded-xl md:mx-10 px-10 mx-5">
          <p className="text-primary py-7  font-bold">New Era of Privacy</p>
          <h2 className="md:text-6xl text-3xl capitalize font-bold ">
            A virtual address is
          </h2>
          <h2 className="md:text-6xl text-3xl capitalize font-bold">
            ideal for <span className="text-primary">entrepreneurs</span>
          </h2>
          <p className="px-8 pt-12 mx-5  ">
            All Corporations are required to maintain a corporate minute book
            that
          </p>
          <p className="px-8 py-1 mx-5">
            holds things like the formation paperwork, licenses, resolutions and
          </p>
          <p className="px-8 mx-5">
            meeting minutes. It is one of the first things requested when your
            company
          </p>
          <p className="pb-7 px-8">is audited or being sold.</p>
          <div className="md:grid grid-cols-3 gap-7">
            {/* div 1 */}
            <div className="pb-12">
              <div>
                <div className="flex gap-3 pt-7">
                  <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                  <p className="font-bold text-xl ">
                    Digital Nomads and Remote Work
                  </p>
                </div>
                <p className="py-5">
                  Traveling and working from other countries is an amazing
                  experience. Now you never have to worry about missing
                  important mail on the go.
                </p>
              </div>
              {/* part 2 */}
              <div>
                <div className="flex gap-3 pt-7">
                  <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                  <p className="font-bold text-xl ">Virtual Mailbox</p>
                </div>
                <p className="py-5">
                  We do not receive boxed packages; only letters and large
                  envelopes will be accepted. We will open, scan, and send a
                  notification when mail is uploaded to your dashboard. Any bank
                  checks, credit, or debits cards will be mail forwarded (via
                  USPS) to the contact address on file.
                </p>
              </div>
            </div>
            {/* div 2 */}
            <div>
              <div>
                <div className="flex gap-3 pt-7">
                  <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                  <p className="font-bold text-xl ">
                    Keep Your Real Address Private
                  </p>
                </div>
                <p className="py-5">
                  There&apos;s no need to publicize your home address for
                  business purposes.
                </p>
              </div>
              {/* part 2 */}
              <div>
                <div className="flex gap-3 pt-7">
                  <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                  <p className="font-bold text-xl ">Relocating Your Business</p>
                </div>
                <p className="py-5">
                  Don&apos;t let anything get lost in the mail if you&apos;re
                  moving offices.
                </p>
              </div>
            </div>
            {/* div 3 */}
            <div className="md:relative my-5">
              <Image
                className="md:absolute bottom-2"
                src="/va/va3.webp"
                alt="image"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
        {/* new section start  */}
        <div className="py-24 md:grid grid-cols-2 mx-5">
          {/* part 1 */}
          <div>
            <p className="font-bold text-primary">Virtual address</p>
            <p className="text-5xl font-bold">More</p>
            <p className="text-5xl font-bold">information</p>
          </div>
          {/* part 2  */}
          <div>
            <p className="text-3xl pb-7">
              Here&apos;s everything else you need to know:
            </p>
            <div className="md:grid grid-cols-2 gap-6">
              {/* part 1 */}
              <div>
                <div className="flex gap-3 pt-7">
                  <QrCodeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                  <p className="font-bold text-xl ">
                    Complete Mail Scanning of All Correspondence
                  </p>
                </div>
                <p className="py-5">
                  We digitally scan all letters and other correspondence, and
                  then upload it to your secure account within one business day.
                </p>
              </div>
              {/* part 2 */}
              <div>
                <div className="flex gap-3 pt-7">
                  <EarthIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                  <p className="font-bold text-xl ">
                    Worldwide Access Via Web Browser
                  </p>
                </div>
                <p className="py-5">
                  There&apos;s no software to install; you can read your mail
                  from anywhere and any web browser via our confidential online
                  portal — just log in.
                </p>
              </div>
              {/* part 3 */}
              <div>
                <div className="flex gap-3 pt-7">
                  <ShieldCheckIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                  <p className="font-bold text-xl ">Security and Encryption</p>
                </div>
                <p className="py-5">
                  All of your correspondence is encrypted and available only to
                  you. Physical data stays protected in our secure facilities.
                </p>
              </div>
              {/* part 4 */}
              <div>
                <div className="flex gap-3 pt-7">
                  <BellIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                  <p className="font-bold text-xl ">Email Notification</p>
                </div>
                <p className="py-5">
                  We contact you every time we scan and upload a piece of mail,
                  so you&apos;ll never miss time-sensitive information.
                </p>
              </div>
              {/* part 5 */}
              <div>
                <div className="flex gap-3 pt-7">
                  <DevicePhoneMobileIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                  <p className="font-bold text-xl ">Mobile Compatibility</p>
                </div>
                <p className="py-5">
                  View correspondence on your desktop, laptop, smartphone, or
                  tablet.
                </p>
              </div>
              {/* part 6  */}
              <div>
                <div className="flex gap-3 pt-7">
                  <UserIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                  <p className="font-bold text-xl ">No In-Person Access</p>
                </div>
                <p className="py-5">
                  While we do provide you with a physical address to receive
                  mail, this does not serve as a mail pickup location. We do not
                  provide any in-person support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* button section  */}
        <div className=" pt-10 md:pt-24 flex justify-center items-center mx-5 mb-16">
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
            <p className="text-center text-2xl pt-12 pb-3 font-bold">
              Get Your Virtual Address Now
            </p>
            <p className="text-center py-7">
              Set Yourself Up for Success with VC FILING
            </p>
            <div className="pb-5 flex flex-col justify-center">
              <p className="pb-2 pt-3  text-center"> State </p>
              <select className="py-2 mx-3 rounded-full border-2 text-center hover:border-red-600">
                <option hidden value="">
                  Select State
                </option>
                {statesInUS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <div className="flex justify-center items-center pt-10">
                <Link
                  className="px-9 py-5 bg-primary text-white border border-primary rounded-[30px] "
                  href="/virtual-address/step-1"
                >
                  GET STARTED
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default Amendment;
