import {
  CheckBadgeIcon,
  StarIcon,
  PlayCircleIcon,
  ExclamationCircleIcon,
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
      <div className="md:mx-36 max-sm:mx-5">
        {/* new section start  */}
        <div className="text-center border-t border-b mt-5 ">
          <p className="font-bold text-xl py-3">
            Bootstrapped, Founder Led, Independently Owned{" "}
            <span className="text-primary">Since 2004</span> with{" "}
            <span className="text-primary">Over 1,000,000 Entrepreneurs</span>{" "}
            Served!
          </p>
        </div>
        {/* new section start  */}
        <div className="md:grid grid-cols-2 my-20 gap-10 ">
          <div>
            <h3 className="text-primary font-bold uppercase">
              your choice matters
            </h3>
            <h3 className="font-bold text-4xl">Importance of a Great</h3>
            <h3 className="text-4xl font-bold">Business Name</h3>
            <p className="py-8">
              Your business name significantly impacts how customers perceive
              your brand. A short, fitting, and distinctive name demonstrates
              confidence, defines your business, and generates buzz. It is the
              foundation for your entire brand.
            </p>
          </div>
          <div>
            <Image
              className="rounded-xl"
              src="/nam-gen/pic1.webp"
              alt="Free LLC"
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* new section start  */}

        {/* new  faq section start  */}
        <div className="my-16 md:px-10  md:mx-5 ">
          <h2 className="md:text-5xl max-sm:text-4xl font-bold text-left">
            FAQs
          </h2>

          <Accordion type="single" collapsible className="text-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Do i Need to Have a Distinctive Name for My Business?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2  ">
                  A distinctive business name helps your brand stand out,
                  enhances recognition, and minimizes the risk of legal
                  conflicts with similar names in your industry.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Are There Rules on What Makes a Business Name Unique?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2 ">
                  Yes, there are guidelines for creating a unique business name:
                </p>{" "}
                <p>It should not be too similar to existing business names.</p>
                <p>Avoid using common industry terms.</p>
                <p>It must not infringe on trademarks.</p>
                <p>Follow specific naming rules for your state or country.</p>
                <p>Ensure the name stands out to prevent customer confusion.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How do i Lookup My Proposed LLC or Corporation Name?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2  ">
                  It’s easy: just use the Business Name Search Tool and enter
                  your proposed LLC or corporation name. We&apos;ll search the
                  business name registry for your desired state and tell you if
                  there are any matches. If not, good news — you can form a
                  business with that name, and{" "}
                  <span className="text-primary">
                    we&apos;ll help you get started.
                  </span>
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What Happened If i Don&apos;t Want To Do Business Under My Legal
                Entity Name?
              </AccordionTrigger>
              <AccordionContent>
                <p className="my-2  ">
                  Most states allow you to conduct business under a different
                  name. Depending on your state&apos;s rules, this could be
                  known as an “assumed name,” “fictitious name,” “doing business
                  as name” or “trade name.” We can file your{" "}
                  <span className="text-primary">Fictitious Business Name</span>{" "}
                  with your state on your behalf.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                How Can i Change My Legal Business Name?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  You can file an amendment to your Articles of Incorporation or
                  Articles of Organization with your state. We can take care of
                  this and{" "}
                  <span className="text-primary">
                    file the amendment on your behalf
                  </span>{" "}
                  to change the name of your LLC or corporation.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Can i Protect the Name of My LLC or Corporation?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Once you have filed and formed your business legally, nobody
                  else can form a business with the same name in that state. If
                  you want extra protection, you could consider{" "}
                  <span className="text-primary">
                    registering your business name as a trademark.
                  </span>{" "}
                  Note that filing a fictitious or doing business as (DBA) name
                  will not be sufficient to protect your business name.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* new section start  */}
        <div className="md:grid grid-cols-2 md:my-16">
          <div>
            <h3 className="font-bold text-4xl">We&apos;ll Take Care of the</h3>
            <h3 className="font-bold text-4xl">Entity Search</h3>
            <p className="py-4">
              We&apos;ll tell you if your business name is available in your
              state
            </p>
            <div className=" md:pb-16 max-sm:pb-5 my-5 pt-8">
              <Link
                className="px-9 py-5 bg-primary text-white border border-primary rounded-[30px]  font-bold "
                href="/name-search/step-1"
              >
                SEARCH NAME AVAILABILITY
              </Link>
            </div>
          </div>
          <div>
            <Image
              className="rounded-xl"
              src="/name-search/map.webp"
              alt="Free LLC"
              width={700}
              height={900}
            />
          </div>
        </div>

        {/* new section start  */}
        <div className="bg-black md:mx-32 py-8 rounded-xl mb-10">
          <h3 className="text-primary font-bold  uppercase text-center text-2xl py-10">
            join the family
          </h3>
          <h2 className="text-center text-white font-bold md:text-6xl max-sm:text-4xl uppercase">
            join <span className="text-primary">1,000,000+</span>
          </h2>
          <h2 className="text-center text-white font-bold md:text-6xl max-sm:text-4xl uppercase">
            entrepreneurs
          </h2>
          <p className="text-center text-white md:mx-36 py-9 max-sm:mx-5">
            Entrepreneurship is booming, and we&apos;re proud to be one of
            America&apos;s fastest-growing companies. Join over a million
            entrepreneurs who trust VC FILING to help start and grow their
            businesses.
          </p>
          <div className="md:grid grid-cols-2 md:mx-56 max-sm:mx-20  gap-2">
            {/* left side part  */}
            <div className="border-2 rounded-xl p-2">
              <div className="flex gap-2 justify-center items-center">
                <StarIcon
                  className="min-h-5 min-w-5 max-h-5 max-w-5"
                  color="#39b54a"
                />
                <h3 className="text-white">
                  {" "}
                  <span className="text-primary">Shopper</span> Approved
                </h3>
              </div>
              <p className="text-white text-center">113,620 Customer Review</p>
              <div className="flex gap-1 pt-5 pb-3 justify-center items-center">
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
              </div>
            </div>
            {/* right side part  */}
            <div className="border-2 rounded-xl p-2 max-sm:mt-5">
              <div className="flex gap-2 justify-center items-center">
                <StarIcon
                  className="min-h-5 min-w-5 max-h-5 max-w-5"
                  color="#39b54a"
                />
                <h3 className="text-white">
                  {" "}
                  <span className="text-primary">Trustpilot</span>
                </h3>
              </div>
              <p className="text-white text-center">20,130 Customer Review</p>
              <div className="flex gap-1 pt-5 pb-3 justify-center items-center">
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
                <StarIcon className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center md:pb-16 max-sm:pb-5 my-5 pt-8">
            <Link
              className="px-9 py-5 bg-primary text-white border border-primary rounded-[30px] "
              href={"/form-a-llc/"}
            >
              START NOW
            </Link>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default FreeLLC;
