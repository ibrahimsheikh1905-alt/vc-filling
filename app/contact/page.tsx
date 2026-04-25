import {
  CheckBadgeIcon,
  HomeIcon,
  ArrowPathIcon,
  NewspaperIcon,
  ShoppingBagIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import NavigationWrapper from "@/components/NavigationWrapper";
import { LockIcon, ShieldCheck } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TaxConsultation = () => {
  return (
    <NavigationWrapper>
      <div>
        <div className="md:mx-20 md:grid grid-cols-2 gap-7 mt-9  py-10 max-sm:mx-5">
          <div className=" mx-5 pt-5">
            <div
              className="flex gap-4 justify-center items-center rounded-xl px-5 py-2
            "
            ></div>
            <h1 className="font-semibold text-5xl">Exceptional Support</h1>
            <h2 className="font-semibold text-5xl">for Your Success</h2>
            <p className="text-lg pt-5">
              No AI bots, only real people. At VC Filling, our dedicated support
              team is here to assist you in both English and Spanish, ensuring
              you get the personalized help you need. Reach out to us Monday
              through Friday, from 9 a.m. to 6 p.m. CST.
            </p>

            <div className="flex gap-6 mt-5 ">
              <PhoneIcon
                className="min-h-5 min-w-5 max-h-5 max-w-5"
                color="#39b54a"
              />
              <p>Phone:888-462-999</p>
            </div>
            <div className="flex gap-6 my-6 ">
              <EnvelopeIcon
                className="min-h-5 min-w-5 max-h-5 max-w-5"
                color="#39b54a"
              />
              <p>Phone:888-462-999</p>
            </div>
            <div className="flex gap-6 mb-5 max-sm:pb-8">
              <MapPinIcon
                className="min-h-5 min-w-5 max-h-5 max-w-5"
                color="#39b54a"
              />
              <p>Phone:888-462-999</p>
            </div>
          </div>
          {/* right side  */}
          <div className="mt-5 border-2 md:mx-20 rounded-xl  max-sm:mx-5 max-sm:mt-6">
            <div className=" flex justify-center items-center">
              <div className="grid w-full rounded-full max-w-sm  mx-5 gap-1.5 pt-3">
                <Label htmlFor="email">Name</Label>
                <Input type="name" id="name" placeholder="Name" />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="grid w-full rounded-full max-w-sm pt-3 mx-5 gap-1.5 my-5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="grid w-full rounded-full max-w-sm pt-3 mx-5 gap-1.5">
                <Label htmlFor="email">Number</Label>
                <Input type="number" id="number" placeholder="Number" />
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <div className="grid w-full mx-8 px-6 gap-1.5 mt-4">
                <Label htmlFor="message">Your message</Label>
                <Textarea placeholder="Type your message here." id="message" />
              </div>
            </div>
            <div className="items-top flex justify-center items-center space-x-2 mx-8 my-5">
              <Checkbox id="terms1" />
              <div className="grid  gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>
            </div>
            <div className=" flex justify-center items-center my-5">
              <Link
                className="px-10  py-5 font-bold bg-primary text-white border border-primary rounded-[30px] "
                href="/contact/step-1"
              >
                SUBMIT
              </Link>
            </div>
          </div>
        </div>
        {/* new section start  */}
        <div className="md:grid grid-cols-2 mx-20 pt-10">
          {/* left side div  */}
          <div className="">
            <h3 className="text-5xl font-extrabold pb-4">
              Contact <span className="text-primary">VC FILING</span>
            </h3>
            <p>VC FILING entire customer support team is fluent</p>
            <p>in both English and Spanish.</p>
            <p className="my-6 ">Monday - Friday from 9 a.m. to 6 p.m. CST</p>
            <div>
              <Image
                src="/contact/map.webp"
                alt="Free LLC"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          {/* right side div  */}
          <div className="">
            <div className="flex border-2 gap-8 p-4 rounded-xl shadow-xl md:mx-28">
              <div>
                <MapPinIcon className="w-10 h-10 text-primary" />
              </div>
              <div>
                <p className="text-lg">13750 State Highway 249,</p>
                <p className="text-lg">Suite 220,Houston Texas</p>
              </div>
            </div>
            {/* icon section 2  */}
            <div className="flex border-2 gap-8 p-4 rounded-xl shadow-xl md:mx-28 my-7">
              <div>
                <EnvelopeIcon className="w-10 h-10 text-primary" />
              </div>
              <div>
                <p className="text-lg">Fax</p>
                <p className="text-lg">877.199.32</p>
              </div>
            </div>
            {/* icon section 3  */}
            <div className="flex border-2 gap-8 p-4 rounded-xl shadow-xl md:mx-28 mb-10">
              <div>
                <PhoneIcon className="w-10 h-10 text-primary" />
              </div>
              <div>
                <p className="text-lg">Phone</p>
                <p className="text-lg">888-462-2235</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default TaxConsultation;
