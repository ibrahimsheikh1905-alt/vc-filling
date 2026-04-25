"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Headroom from "react-headroom";
import { ChevronRightIcon, UserIcon } from "@heroicons/react/24/solid";
import { useAuth } from "@/contexts/auth";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
// import { UserCircleIcon } from "@heroicons/react/24/solid";

const NavigationMenuDemo = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Headroom style={{ zIndex: 999 }}>
      <div className="bg-white">
        <div className="flex justify-between container items-center bg-white">
          <div className="">
            <Link
              className="flex h-full w-full select-none flex-col justify-end rounded-md   no-underline outline-none"
              href="/"
            >
              <Image
                className="sm:h:20 sm:w:50"
                src={"/logo.png"}
                width={100}
                height={20}
                alt="VC Filling Logo"
              />
            </Link>
          </div>

          <div className="flex gap-2">
            <div className="lg:hidden pt-1">
              <Link href="/dashboard">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </Link>
            </div>
            <SidebarProvider>
              <AppSidebar />
              <div className="lg:hidden ">
                <SidebarTrigger />
              </div>
            </SidebarProvider>
          </div>

          <div className="max-sm:hidden absolute left-1/2 transform -translate-x-1/2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/makes-dif" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      How It Works
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid items-center grid-cols-3 gap-3 p-6 md:w-[70vw] lg:w-[80vw]">
                      <ul className="p-6 border-r-2 border-gray-200">
                        <ListItem href="/form-a-llc/" title="Form an LLC">
                          The most popular choice for business owners.
                        </ListItem>
                        <ListItem
                          href="/form-c-corporation/"
                          title="Form a C Corporation."
                        >
                          Big business? Opt for a C Group.
                        </ListItem>
                        <ListItem
                          href="/form-s-corporation/"
                          title="Form an S Corporation"
                        >
                          Save money on taxes as your business grows.
                        </ListItem>
                        <ListItem
                          href="/start-a-nonprofit"
                          title="Form a Nonprofit"
                        >
                          A business that makes the world a better place.
                        </ListItem>
                      </ul>
                      <ul className="p-6">
                        <ListItemTiny href="/amendment/" title="Amendment">
                          Amendment
                        </ListItemTiny>
                        {/* <ListItemTiny
                          href="/amendment/"
                          title="Company Name Change"
                        >
                          Company Name Change
                        </ListItemTiny> */}
                        <ListItemTiny
                          href="/registered-agent/"
                          title="Registered Agent"
                        >
                          Registered Agent
                        </ListItemTiny>
                        <ListItemTiny
                          href="/virtual-address/"
                          title="Virtual Address"
                        >
                          Virtual Address
                        </ListItemTiny>
                        <ListItemTiny
                          href="/cert-good-standing/"
                          title="Certificate Of Good Standing"
                        >
                          Certificate Of Good Standing
                        </ListItemTiny>
                        <ListItemTiny
                          href="/fictitious-business-name/"
                          title="Doing Business As Name (DBA)"
                        >
                          &apos;Doing Business As&apos; Name (DBA)
                        </ListItemTiny>
                        <ListItemTiny
                          href="/foreign-qualification/"
                          title="Foreign Qualification"
                        >
                          Foreign Qualification
                        </ListItemTiny>
                        <ListItemTiny
                          href="/change-agent/"
                          title="Change of Registered Agent"
                        >
                          Change of Registered Agent
                        </ListItemTiny>
                        <ListItemTiny
                          href="/business-license/"
                          title="Business License or Permit"
                        >
                          Business License or Permit
                        </ListItemTiny>
                      </ul>
                      <ul className="p-6">
                        <ListItemTiny
                          href="/annual-report/"
                          title="Submit an Annual Report"
                        >
                          Submit an Annual Report
                        </ListItemTiny>
                        <ListItemTiny
                          href="/tax-consultation/"
                          title="Get a Free Tax Consultation"
                        >
                          Get a Free Tax Consultation
                        </ListItemTiny>
                        <ListItemTiny
                          href="/trademark/"
                          title="Get a Trademark"
                        >
                          Get a Trademark
                        </ListItemTiny>
                        <ListItemTiny
                          href="/kit-info/"
                          title="Order a Corporate / LLC Kit"
                        >
                          Order a Corporate / LLC Kit
                        </ListItemTiny>
                        {/* <ListItemTiny
                          href="/#/"
                          title="Finances and Accounting"
                        >
                          Finances and Accounting
                        </ListItemTiny> */}
                        <ListItemTiny
                          href="/dissolution/"
                          title="Dissolve Your Company"
                        >
                          Dissolve Your Company
                        </ListItemTiny>
                        <ListItemTiny
                          href="/reinstatement/"
                          title="Get Reinstated"
                        >
                          Get Reinstated
                        </ListItemTiny>
                        <ListItemTiny
                          href="/ein-form/"
                          title="Get an EIN / TAX Number"
                        >
                          Get an EIN / TAX Number
                        </ListItemTiny>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resource Centre</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid items-center grid-cols-3 gap-3 p-6 md:w-[70vw] lg:w-[80vw]">
                      <ul className="p-6 border-r-2 border-gray-200">
                        <ListItem href="/form-a-llc/" title="Form an LLC">
                          The most popular choice for business owners.
                        </ListItem>
                        <ListItem
                          href="/form-c-corporation/"
                          title="Form a C Corporation."
                        >
                          Big business? Opt for a C Group.
                        </ListItem>
                        <ListItem
                          href="/form-s-corporation/"
                          title="Form an S Corporation"
                        >
                          Save money on taxes as your business grows.
                        </ListItem>
                        <ListItem
                          href="/start-a-nonprofit"
                          title="Form a Nonprofit"
                        >
                          A business that makes the world a better place.
                        </ListItem>
                      </ul>
                      <ul className="p-6">
                        <ListItemTiny
                          href="/testing/"
                          title="how to become an entrepreneur"
                        >
                          How To Become an Entrepreneur
                        </ListItemTiny>
                        <ListItemTiny
                          href="/business-structure/"
                          title="Business Structure."
                        >
                          Business Structure
                        </ListItemTiny>
                        <ListItemTiny
                          href="/name-generator/"
                          title="name generator"
                        >
                          Name Generator
                        </ListItemTiny>
                        <ListItemTiny href="/name-search" title="name-search">
                          Name Search
                        </ListItemTiny>
                        <ListItemTiny
                          href="/corporation-state-information/"
                          title="corporation-state-information"
                        >
                          Corporation State Information
                        </ListItemTiny>
                        <ListItemTiny href="/state-info/" title="state-info">
                          LLC Information By State
                        </ListItemTiny>
                        <ListItemTiny href="/form-2553/" title="Form-2553">
                          Form-2553( S Crop Tax)
                        </ListItemTiny>
                        {/* <ListItemTiny href="/about-us" title="about-us">
                          About Us
                        </ListItemTiny> */}
                        {/* <ListItemTiny href="/makes-dif" title="makes-dif">
                          What Makes Us Different
                        </ListItemTiny> */}
                      </ul>
                      <ul className="p-6">
                        <ListItemTiny href="/inc-now-VC/" title="incfile is VC">
                          incfile is now VC Filling
                        </ListItemTiny>
                        <ListItemTiny href="/contact/" title="contact">
                          Contact
                        </ListItemTiny>
                        <ListItemTiny
                          href="/book-consult/"
                          title="Bookkeeping Consultation"
                        >
                          Bookkeeping Consultation
                        </ListItemTiny>
                        <ListItemTiny href="/article" title="Article">
                          Article
                        </ListItemTiny>
                        <ListItemTiny href="/boi-repo/" title="boi-repo">
                          BOI Report
                        </ListItemTiny>
                        {/* <ListItemTiny
                          href="/form-c-corporation/"
                          title="Form a C Corporation."
                        >
                          Dissolve Your Company
                        </ListItemTiny>
                        <ListItemTiny
                          href="/form-s-corporation/"
                          title="Form an S Corporation"
                        >
                          Get Reinstated
                        </ListItemTiny>
                        <ListItemTiny
                          href="/start-a-nonprofit"
                          title="Form a Nonprofit"
                        >
                          Get an EIN / TAX Number
                        </ListItemTiny> */}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* <div className="">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="tel:1 (888) 462-3454" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                      </svg>
                      1 (888) 462-3454
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  {!isAuthenticated ? (
                    <Link href="/login" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Login
                      </NavigationMenuLink>
                    </Link>
                  ) : (
                    <Link href="/dashboard" legacyBehavior passHref>
                      <UserIcon className="size-6 cursor-pointer" />
                    </Link>
                  )}
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div> */}
        </div>
      </div>
    </Headroom>
  );
};

export default NavigationMenuDemo;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href = "/", ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-gray-100 group",
            className
          )}
          {...props}
        >
          <div className="group-hover:text-primary text-xl font-extrabold leading-none">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const ListItemTiny = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href = "/", ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground  hover:bg-gray-100  hover:text-primary",
            className
          )}
          {...props}
        >
          <div className="text-base font-normal leading-none flex gap-2 flex-wrap items-center">
            <ChevronRightIcon className="size-4 text-primary" />
            {children}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItemTiny.displayName = "ListItemTiny";
