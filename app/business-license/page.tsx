import NavigationWrapper from "@/components/NavigationWrapper";
import {
  ArrowRightIcon,
  CheckBadgeIcon,
  DocumentCheckIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Amendment = () => {
  return (
    <NavigationWrapper>
      <div className=" my-16 flex  max-sm:flex-col gap-16 justify-between md:flex-row">
        <div className="max-sm:text-center text-left">
          <h1 className="text-5xl font-bold pt-20 md:pl-20">
            Business License
          </h1>
          <h2 className="text-5xl font-bold md:pl-20 ">Research Package</h2>
          <h2 className="text-xl md:pl-20 py-5 pb-24">Only $99</h2>
          <Link
            className="px-10 md:ml-20 py-5 font-bold bg-primary text-white border border-primary rounded-[30px] "
            href="/business-license/step-1"
          >
            ORDER NOW
          </Link>
        </div>

        <Image
          src="/free-llc/LLC green.jpg"
          alt="Free LLC"
          width={850}
          height={850}
        />
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

        {/* new section start  */}

        {/* new section start  */}
        <div className="pt-24 md:grid md:grid-cols-2 mx-5">
          <div className="mx-5">
            <h2 className="text-5xl  font-bold ">What is a</h2>
            <h2 className="text-5xl font-bold "> Business</h2>
            <h2 className="text-5xl font-bold uppercase">License?</h2>
          </div>
          <div>
            <h2 className=" mx-5 pt-6 ">
              As a business owner, you are responsible for making sure your
              business has the proper federal, state and local licenses and
              permits to operate legally. A business license ensures you are
              legitimately doing business in a particular locale. Every new
              business must apply for a business license. But, don&apos;t be
              fooled, your corporation or LLC may need more than one license, or
              permit, to fully operate at the state level.
            </h2>
            <h2 className=" py-6 mx-5">
              At VC FILING we take the guesswork out of how to obtain a business
              license and the necessary permits.
            </h2>
            <div className="mt-5 mx-5">
              <Link
                className="md:px-9 px-2 block py-5 bg-primary text-white border border-primary rounded-[30px] my-6 "
                href="/business-license/step-1"
              >
                GET THE BUSINESS LICENSES RESEARCH PACKAGES
              </Link>
            </div>
            <div className=" pt-11 mx-5">
              <h2 className="text-5xl font-bold">
                what is a Business License?
              </h2>
              <div className="bg-slate-200 border rounded-xl flex gap-3 p-4 my-7">
                <div>
                  {" "}
                  <DocumentCheckIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                </div>
                <div>
                  <p className="text-base font-normal">
                    A business license authorizes a company to do business in a
                    certain geographical jurisdiction. It is a certificate that
                    authenticates your company is properly registered with the
                    particular county or city in which your office(s) are
                    located.
                  </p>
                </div>
              </div>
              <p>
                When you apply for a business license, keep in mind that there
                are instances with certain types of businesses and certain
                locations that require additional paperwork for permits. We
                discuss both the types of licenses and permits below. If
                you&apos;d like to research your license and permit requirements
                yourself, you can get started with{" "}
                <span className="text-primary">
                  VC FILING Business License Search Tool,
                </span>
                which will tell you the basic requirements for your state and
                industry.
              </p>
              <h2 className="text-5xl font-bold py-6">
                What Licenses Does My Business Need?
              </h2>
              <p className="py-2">
                There are two categories of business licenses, namely federal
                and state. This is just the first step in operating legally in
                both your jurisdiction and in the country.
              </p>
              <p className="py-2">
                The federal government often requires a license to be obtained
                when you have a very specialized industry or one with a high
                level of liability. Some examples include serving alcohol,
                running a fishery, opening a gun shop, or transporting live
                animals across state lines. The state government always requires
                a license to operate within your particular locale and rules can
                differ based on whether your LLC or corporation is inside city
                limits or not.
              </p>
              <p className="py2">
                For example, you&apos;ll need to research whether you can have
                particular types of home businesses, especially when living in
                the city or a multi-family dwelling.
              </p>
              <h2 className="text-5xl py-5 font-bold">
                How Do I Know What Permits My Business Needs?
              </h2>
              <p>
                Permits are an additional requirement for many businesses and
                are needed in the following circumstances.
              </p>
              <div className="bg-slate-200 rounded-xl px-2 my-9 py-10">
                <p>A Certificate of Good Standing can also be known as:</p>
                <div className="flex py-6 gap-3 mx-4">
                  <CheckBadgeIcon className="min-h-3 min-w-3 max-h-3 max-w-3  text-primary" />
                  <p>Your LLC or corporation plans to serve alcohol or food</p>
                </div>
                <div className="flex py-6 gap-3 mx-4">
                  <CheckBadgeIcon className="min-h-3 min-w-3 max-h-3 max-w-3  text-primary" />
                  <p>
                    You will need to build or add a structure to your
                    company&apos;s building.
                  </p>
                </div>
                <div className="flex py-6 gap-3 mx-4">
                  <CheckBadgeIcon className="min-h-3 min-w-3 max-h-3 max-w-3  text-primary" />
                  <p>
                    Your business is going to construct a building or structure
                    on new land.
                  </p>
                </div>
                <div className="flex py-6 gap-3 mx-4">
                  <CheckBadgeIcon className="min-h-3 min-w-3 max-h-3 max-w-3  text-primary" />
                  <p>Your LLC plans to put up an exterior sign.</p>
                </div>
                <div className="flex gap-3 py-6 mx-4">
                  <CheckBadgeIcon className="min-h-3 min-w-3 max-h-3 max-w-3  text-primary" />
                  <p>You want to designate street parking for your business.</p>
                </div>
                <div className="flex gap-3 py-6 mx-4">
                  <CheckBadgeIcon className="min-h-3 min-w-3 max-h-3 max-w-3  text-primary" />
                  <p>Your industry is governed by a state association.</p>
                </div>
              </div>
              <p>
                This is not an exhaustive list by any means, therefore, working
                with VC FILING to identify every situation is a key factor in
                starting your business off right.
              </p>
              <div className="my-9 mb-16">
                <Link
                  className="px-9 py-5 bg-primary text-white border border-primary rounded-[30px] my-6 "
                  href="/business-license/step-1"
                >
                  HAVE VC FILING RESEARCH FOR YOU
                </Link>
              </div>
              <div className="mt-9">
                <Link
                  className="px-9 py-5 bg-primary text-white border border-primary rounded-[30px]   "
                  href="/business-license/step-1"
                >
                  DO THE RESEARCH YOURSELF
                </Link>
              </div>
              <h2 className="text-5xl font-bold py-16">
                How Do I Know What Permits My Business Needs?
              </h2>
              <p>
                Permits are an additional requirement for many businesses and
                are needed in the following circumstances.
              </p>
              {/* border section  */}
              <div>
                <div className="border border-gray-300 rounded-xl p-3 my-4">
                  <div className="flex gap-2  ">
                    <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                    <p>
                      You&apos;ll need to get a license for a small fee to
                      operate a business at the address of location.
                    </p>
                  </div>
                </div>
                <div className="border border-gray-300 rounded-xl p-3 my-4">
                  <div className="flex gap-2  ">
                    <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                    <p>
                      Next, your company will need an Assumed Name under which
                      to register, or you can{" "}
                      <span className="text-primary">
                        incorporate your business
                      </span>{" "}
                      and use your formal name.
                    </p>
                  </div>
                </div>
                <div className="border border-gray-300 rounded-xl p-3 my-4">
                  <div className="">
                    <div className="flex gap-2">
                      <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                      <p>
                        Then, if you operate from home or plan to remodel a
                        space, for example, you&apos;ll need to obtain permits
                        to do so. Other permits covering serving alcohol,
                        displaying a sign on the building exterior and even
                        parking for your business might also be a requirement. A
                        great place to research your local zoning and operating
                        laws is the nearest Small Business Development Center
                        (SBDC).
                      </p>
                    </div>
                    <p className="mx-7 pt-6">
                      <span className="text-primary ">
                        Nearest Small Business Development Center (SBDC).
                      </span>
                    </p>
                  </div>
                </div>
                <div className="border border-gray-300 rounded-xl p-3 my-4">
                  <div className="flex gap-2  ">
                    <CheckBadgeIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary" />
                    <p>
                      Finally, a business must register with the state tax
                      office and submit appropriate taxes on the schedule
                      indicated by your secretary of state.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* new section start  */}
        <div className="pt-28 text-center mx-5">
          <h2 className="text-4xl font-bold text-center">
            Business License and Permit Requirements by State
          </h2>

          <p className="pt-6 mx-16">
            Every state has different licensing needs based on the type of
            business you&apos;ve incorporated, where it&apos;s located and the
            government rules in that state. We will research your business
            license needs for you with our Business License Research Package,
            but you can also do initial research yourself with the following
            resources:
          </p>
        </div>
        {/* new section start  */}

        {/* new section start  */}
        <div className="md:grid grid-cols-2 gap-5 pt-16 mx-5">
          <div className="py-5">
            {" "}
            <h2 className="text-4xl font-bold">What&apos;s in the </h2>
            <h2 className="text-4xl font-bold">Package?</h2>
          </div>
          <div>
            <p>
              Business licensing requirements vary from state to state, county
              to county and city to city. Government agencies frequently update
              their forms and change requirements for supporting documents. To
              make it easier, our trusted licensing partner will provide you
              with fresh forms and updates you with the latest licensing
              requirements to protect your business.
            </p>
            <p className="pt-6">
              Your customized Business License Research Package will be emailed
              to you 3 - 4 weeks from your company being filed by the state.
            </p>
          </div>
        </div>
        {/* new section start  */}
        <div className="text-center my-24 pt-12 mx-5">
          <h2 className="text-5xl font-bold capitalize">
            As part of the Business{" "}
            <span className="text-primary">License</span>
          </h2>
          <h2 className="text-5xl font-bold">
            <span className="text-primary">Research Package,</span> a licensing
            expert
          </h2>
          <h2 className="text-5xl font-bold">will...</h2>
        </div>
        {/* new section start  */}
        <div className="md:flex gap-5 my-28 mx-5">
          <div className="border-4 border-gray-50 rounded-xl bg-slate-200 ">
            <div className="p-4">
              <CheckBadgeIcon className="min-h-10 min-w-10 max-h-10 max-w-10 text-primary " />
            </div>

            <p className="my-2 md:text-xl  font-normal pb-2 text-center px-4  ">
              Determine all business licenses and permits required at the
              federal, state, county and municipal level.
            </p>
          </div>
          {/* arrow section  */}
          <div className="flex items-center justify-center py-5 max-sm:hidden ">
            <ArrowRightIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary max-sm:hidden  " />
          </div>
          <div className="max-sm:visible md:hidden flex justify-center items-center pb-4"></div>
          {/* part 2 */}
          <div className="border-4 border-gray-50 rounded-xl bg-slate-200 ">
            <div className="p-4">
              <DocumentCheckIcon className="min-h-10 min-w-10 max-h-10 max-w-10 text-primary " />
            </div>

            <p className="my-2 md:text-xl  font-normal pb-2 text-center px-4  ">
              Determine all business licenses and permits required at the
              federal, state, county and municipal level.
            </p>
          </div>
          {/* arrow section start  */}
          <div className="flex items-center justify-center py-5">
            <ArrowRightIcon className="min-h-7 min-w-7 max-h-7 max-w-7 text-primary max-sm:hidden  " />
          </div>
          <div className="max-sm:visible md:hidden flex justify-center items-center pb-4"></div>
          <div className="border-4 border-gray-50 rounded-xl bg-slate-200 ">
            <div className="p-4">
              <DocumentCheckIcon className="min-h-10 min-w-10 max-h-10 max-w-10 text-primary" />
            </div>

            <p className="my-2 md:text-xl  font-normal pb-2 text-center px-4  ">
              Determine all business licenses and permits required at the
              federal, state, county and municipal level.
            </p>
          </div>
          {/* part 3 */}
        </div>
        {/* review section start  */}
        <div className="flex justify-center items-center pb-4 mx-5">
          <StarIcon className="w-9 h-9  text-primary" />
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
        {/* new section start  */}
        <div className="text-center pb-24 mx-5">
          <h2 className="md:text-5xl text-2xl font-bold py-3 uppercase ">
            vC filing Business License
          </h2>
          <h2 className="text-5xl font-bold uppercase">
            <span className="text-primary">Research Package</span>
          </h2>
          <p className="pt-5">
            With VC FILING Business License Research Package, you&apos;ll have
            everything you need to apply for your licenses
          </p>
          <p>and meet the requirements for your business.</p>
          <div className="flex justify-center items-center py-5">
            <Link
              className="md:px-10 md:py-5 py-6 px-4  bg-primary text-white border border-primary rounded-[30px] "
              href={"/form-a-llc/"}
            >
              ORDER NOW
            </Link>
          </div>
        </div>
        {/* image section start  */}
        <div className=" md:grid grid-cols-3 gap-5 md:pb-32 pb-8 mx-5 mb-24">
          {/* image 1 */}
          <div>
            <Image
              className=""
              src="/foreign-qualification/img1.webp"
              alt="Free LLC"
              width={500}
              height={500}
            />
            <p className="py-3 text-lg mx-3">
              How to Start Selling Merchandise for Your Small Business and Be
              Profitable
            </p>
            <p className="mx-3 text-lg pb-5">Nov 9 , 2023, Lisa Crocco</p>
          </div>
          {/* image 2 */}
          <div>
            <Image
              className=""
              src="/foreign-qualification/img2.webp"
              alt="Free LLC"
              width={500}
              height={500}
            />
            <p className="pt-3 text-lg mx-3 capitalize">
              How to Start a Business in Texas and Why
            </p>

            <p className="mx-3 text-lg pb-5">Nov 9 , 2023, Lisa Crocco</p>
          </div>
          {/* image 3 */}
          <div>
            <Image
              className=""
              src="/foreign-qualification/img3.webp"
              alt="Free LLC"
              width={500}
              height={500}
            />
            <p className="py-3 text-lg mx-3">
              10 Best (and Worst) Cities for Digital Nomads in The States
            </p>
            <p className="mx-3 text-lg">Nov 9 , 2023, Lisa Crocco</p>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default Amendment;
