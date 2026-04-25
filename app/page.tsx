import Image from "next/image";
import HomeCard from "../components/HomeCard";
import tagIcon from "../public/tag.svg";
import Carousel from "../components/Carousel";
import {
  BoltIcon,
  TagIcon,
  BellIcon,
  BriefcaseIcon,
  MapPinIcon,
  FolderIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import NavigationWrapper from "@/components/NavigationWrapper";

export default function Home() {
  return (
    <NavigationWrapper>
      <div className="flex items-center justify-center mx-5">
        <div className=" flex flex-col items-center justify-center py-24 px-36 bg-[url('/vabg.webp')] bg-cover bg-no-repeat bg-fixed bg-center rounded-3xl h-fit max-w-full">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-100 py-8">
              START YOUR BUSINESS <br />
            </h1>
            <h1 className="text-primary text-6xl font-bold ">
              for $0 + State Fee
            </h1>
            <p className="text-gray-200 py-10 text-wrap">
              Over 20 years and 1,000,000+ customers, our rallying cry remains
              the same: Business without barriers.
            </p>
            <Link
              href={"/form-a-llc/"}
              className="px-8 py-4 bg-primary text-white border border-primary rounded-[30px] "
            >
              Start Now
            </Link>
            <p className="py-8 text-gray-100">from $0 plus state fees</p>
          </div>
        </div>
      </div>
      <div className="py-10 max-sm:mx-5">
        <div className="text-center">
          <p className="text-3xl font-extrabold">What&apos;s vcfiling?</p>
          <p className="text-xl font-medium text-wrap">
            From business formations to tips, tools, and services, we stand firm
            in these promises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 py-10 lg:px-24 mx-3 md:px-16">
          <HomeCard
            imageUrl="/main/one.png"
            title="A Destination for Your Business Journey"
            description="From first forming your business to navigating bumps and question marks along the way, vcfiling is here to help."
            linkText="Start an LLC"
            linkUrl="/form-a-llc/"
          />
          <HomeCard
            imageUrl="/main/two.png"
            title="For Entrepreneurs by Entrepreneurs"
            description="We know what it's like to chart our own course — and we've helped more than a million people do the same."
            linkText="About VC Filling"
            linkUrl="/form-a-llc/"
          />
          <HomeCard
            imageUrl="/main/one.png"
            title="No Gimmicks or Gotchas to Get Started"
            description="Whether it's day 1 or decade 5, running a business is hard enough. That's why we offer simple tools and prices."
            linkText="See How It Works"
            linkUrl="/form-a-llc/"
          />
        </div>
      </div>
      <div className="py-10 mx-3">
        <div className="text-center">
          <p className="text-3xl font-extrabold py-1">
            Simple Pricing with No Hidden Fees
          </p>
          <p className="text-xl font-medium text-wrap py-2">
            Forming a business through VC filing is free — only pay a state fee.
            You can choose to add on any additional services that satisfy your
            business needs.
          </p>
          <div className="flex justify-center border-[#f1f1f1] border-[2px] rounded-3xl gap-10 py-5 lg:mx-24 md:mx-16  flex-wrap md:flex-nowrap">
            <div className="flex flex-col justify-center align-middle items-center">
              <p className="py-4 text-5xl font-bold">Silver</p>
              <p className="py-4 text-md font-medium text-gray-500">
                Our core features for the lowest price
              </p>
              <Image
                src="/main/silver.png"
                width={100}
                height={100}
                alt="image"
              ></Image>
            </div>
            <div className="flex flex-col justify-center align-middle items-center">
              <p className="py-4 text-5xl font-bold">Gold</p>
              <p className="py-4 text-md font-medium text-gray-500">
                Comprehensive features to get your business started
              </p>
              <Image
                src="/main/gold.png"
                width={100}
                height={100}
                alt="image"
              ></Image>
            </div>
            <div className="flex flex-col justify-center align-middle items-center">
              <p className="py-4 text-5xl font-bold">Platinum</p>
              <p className="py-4 text-md font-medium text-gray-500">
                Full service features at the best value
              </p>
              <Image
                src="/main/platinum.png"
                width={100}
                height={100}
                alt="image"
              ></Image>
            </div>
          </div>
          <button className="px-8 py-4 my-6 bg-primary text-white border border-primary rounded-[30px] ">
            View Formation Packages
          </button>
        </div>
        <div className="flex justify-center md:px-14 gap-12 flex-wrap md:flex-nowrap pt-8">
          <div className="flex flex-col justify-center align-middle items-center px-3">
            <TagIcon className="w-10 h-10 my-3 text-primary" />
            <p>100% FREE Formation</p>
          </div>
          <div className="flex flex-col justify-center align-middle items-center px-3">
            <BoltIcon className="w-10 h-10 my-3 text-primary" />
            <p>Super Fast Filing Speeds</p>
          </div>
          <div className="flex flex-col justify-center align-middle items-center px-3">
            <BriefcaseIcon className="w-10 h-10 my-3 text-primary" />
            <p>First Year FREE Registered Agent</p>
          </div>
          <div className="flex flex-col justify-center align-middle items-center px-3">
            <BellIcon className="w-10 h-10 my-3 text-primary" />
            <p>Free Compliance Reminders</p>
          </div>
        </div>
      </div>
      <div className="py-10 bg-black rounded-[30px] h-fit  text-white mx-3 text-center my-1">
        <div>
          <p className="text-xl text-primary font-medium text-wrap py-3 w-[60%] mx-auto">
            A Destination for Your Journey
          </p>
          <h2 className="md:text-7xl lg:text-7xl text-4xl font-extrabold py-4 uppercase w-[60%] mx-auto">
            What Else Can vcfiling Do for Your Business?
          </h2>
        </div>
        <div className="flex gap-8 py-5 lg:mx-14 px-8 md:mx-8 justify-evenly flex-wrap md:flex-nowrap">
          <div className="flex flex-col justify-center align-top items-start bg-gray-100 rounded-3xl px-3 py-5">
            <BriefcaseIcon className="w-10 h-10 my-3 text-primary" />
            <p className="py-3 text-black">Obtain a Registered ...</p>
          </div>
          <div className="flex flex-col justify-center align-top items-start bg-gray-100 rounded-3xl px-3 py-5">
            <ChatBubbleLeftIcon className="w-10 h-10 my-3 text-primary" />
            <p className="py-3 text-black">Get Help with Taxes</p>
          </div>
          <div className="flex flex-col justify-center align-top items-start bg-gray-100 rounded-3xl px-3 py-5">
            <MapPinIcon className="w-10 h-10 my-3 text-primary" />
            <p className="py-3 text-black">Secure a Virtual Address</p>
          </div>
          <div className="flex flex-col justify-center align-top items-start bg-gray-100 rounded-3xl px-3 py-5">
            <FolderIcon className="w-10 h-10 my-3 text-primary" />
            <p className="py-3 text-black">File Your Annual Report</p>
          </div>
        </div>
        <Link href="/form-a-llc/">
          <button className="px-8 py-4 my-6 bg-primary text-white border border-primary rounded-[30px] ">
            EXPLORE ALL SERVICES
          </button>
        </Link>
        
        <p className="text-2xl px-2 font-medium py-3">
          Build Your Personalized vcfiling Business Hub
        </p>
        <p className="text-lg px-2 py-3">
          Your business essentials all in one place - from information to
          reminders, alerts, and additional services.
        </p>
      </div>
      <div className="py-10 mx-3">
        <Carousel
          className=" mx-auto"
          slideClassName="px-4"
          arrowClassName="bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
          dotClassName="hover:bg-blue-300"
        >
          <div className="flex flex-col items-center justify-center py-8 border rounded-2xl mb-10">
            <div>
              <Image
                src="/main/user.png"
                alt="image"
                width={100}
                height={100}
                className="rounded-full contain-size object-cover"
              />
            </div>
            <div className="text-center px-2">
              <p className="py-2 text-xl">Chad</p>
              <p className="text-lg">
                Founder of VC <br /> Lousiana, USA
              </p>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                dolor dolorum dicta molestiae quas accusantium voluptas
                perspiciatis eius quibusdam nisi debitis adipisci in cupiditate,
                autem numquam magni odit consectetur aspernatur?
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-8 border rounded-2xl mb-10">
            <div>
              <Image
                src="/main/user.png"
                alt="image"
                width={100}
                height={100}
                className="rounded-full contain-size object-cover"
              />
            </div>
            <div className="text-center px-2">
              <p className="py-2 text-xl">Chad</p>
              <p className="text-lg">
                Founder of VC <br /> Lousiana, USA
              </p>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                dolor dolorum dicta molestiae quas accusantium voluptas
                perspiciatis eius quibusdam nisi debitis adipisci in cupiditate,
                autem numquam magni odit consectetur aspernatur?
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-8 border rounded-2xl mb-10">
            <div>
              <Image
                src="/main/user.png"
                alt="image"
                width={100}
                height={100}
                className="rounded-full contain-size object-cover"
              />
            </div>
            <div className="text-center px-2">
              <p className="py-2 text-xl">Chad</p>
              <p className="text-lg">
                Founder of VC <br /> Lousiana, USA
              </p>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                dolor dolorum dicta molestiae quas accusantium voluptas
                perspiciatis eius quibusdam nisi debitis adipisci in cupiditate,
                autem numquam magni odit consectetur aspernatur?
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-8 border rounded-2xl mb-10">
            <div>
              <Image
                src="/main/user.png"
                alt="image"
                width={100}
                height={100}
                className="rounded-full contain-size object-cover"
              />
            </div>
            <div className="text-center px-2">
              <p className="py-2 text-xl">Chad</p>
              <p className="text-lg">
                Founder of VC <br /> Lousiana, USA
              </p>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                dolor dolorum dicta molestiae quas accusantium voluptas
                perspiciatis eius quibusdam nisi debitis adipisci in cupiditate,
                autem numquam magni odit consectetur aspernatur?
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-8 border rounded-2xl mb-10">
            <div>
              <Image
                src="/main/user.png"
                alt="image"
                width={100}
                height={100}
                className="rounded-full contain-size object-cover"
              />
            </div>
            <div className="text-center px-2">
              <p className="py-2 text-xl">Chad</p>
              <p className="text-lg">
                Founder of VC <br /> Lousiana, USA
              </p>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                dolor dolorum dicta molestiae quas accusantium voluptas
                perspiciatis eius quibusdam nisi debitis adipisci in cupiditate,
                autem numquam magni odit consectetur aspernatur?
              </p>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="flex gap-4 items-center justify-center py-7 mx-3 md:flex-row flex-col">
        <Image src="/main/vcicon.jpg" alt="image" width={200} height={200} />
        <div>
          <h3 className="md:text-5xl text-3xl font-bold py-2 uppercase">
            Join <span className="text-primary">1,000,000+</span>
            <br /> Entrepreneurs <br />
            like you
          </h3>
          <p className="text-xl">
            Entrepreneurship is booming - and we&apos;re happy to be <br /> one
            of America&apos;s fastest growing companies.
          </p>
        </div>
      </div>

      <div className="md:px-36 max-sm:mx-5">
        <div className="bg-[url('/reinstatement/ins2.webp')] md:w-full md:bg-cover max-sm:mb-9 md:mb-24 md:px-8 px-2 text-white md:py-16 rounded-xl my-2 mx-5 mt-16">
          <h2 className="text-6xl max-sm:text-5xl font-bold text-gray-100 py-8">
            START YOUR BUSINESS <br />
          </h2>

          <h2 className="text-primary text-6xl font-bold ">
            for $0 + State Fee
          </h2>

          <div className="pb-12 my-32">
            <Link
              className="px-9  py-5 bg-primary text-white border border-primary rounded-[30px] "
              href={"/form-a-llc/"}
            >
              ORDER NOW
            </Link>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
}
