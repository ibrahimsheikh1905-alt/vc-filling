"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";
const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

const StartupCentralPromoCard = ({ image = "/startup-central-menu.webp" }: { image?: string }) => {
  return (
    <li className="list-none">
      <Link
        href="/Startup-Central"
        className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 shadow-sm transition hover:border-[#2B93C9]/40 hover:shadow-md"
      >
        <div className="flex items-center justify-between gap-2 px-4 py-3">
          <div className="min-w-0">
            <p className="text-sm font-semibold leading-none text-slate-900">
              Incorp Bay&apos;s
            </p>
            <p className={`mt-1 truncate text-xl font-bold leading-none ${LOGO_GRADIENT_TEXT}`}>
              Startup Central
            </p>
          </div>

          <ChevronRightIcon className="h-5 w-5 shrink-0 text-[#2B93C9]" />
        </div>

        <div className="relative h-32 w-full shrink-0 bg-slate-50 mt-2">
          <Image
            src="/Dissolution/Startup-central-ideas.webp"
            alt="Incorp Bay Startup Central"
            fill
            className="object-cover"
          />
        </div>
      </Link>
    </li>
  );
};

const NavigationMenuDemo = () => {
  const router = useRouter();
  const { isAuthenticated, name, Logout: handleLogout } = useAuth();

  const handleLogoutClick = async () => {
    await handleLogout();
    router.push('/login');
  };

  return (
    <Headroom style={{ zIndex: 999 }}>
      <div className="bg-white font-helvetica">
        <div className="flex justify-between container items-center bg-white py-4">
          <div className="pl-12 sm:pl-20">
            <Link
              className="flex h-full items-center select-none rounded-md no-underline outline-none"
              href="/"
            >
              <img
                className="h-9 w-auto sm:h-10"
                src="/logo.png"
                alt="Incorp Bay Logo"
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

            {/* Login/Logout Button - Desktop */}
            <div className="max-sm:hidden flex items-center gap-4">
              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-normal text-gray-600">Hi, {name}</span>
                  <button
                    onClick={handleLogoutClick}
                    className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className={`${LOGO_GRADIENT} px-4 py-2 text-sm font-semibold text-white hover:brightness-110 rounded-lg transition`}
                >
                  Login
                </Link>
              )}
            </div>
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
                    <div className="grid items-start grid-cols-3 gap-4 p-5 md:w-[64vw] lg:w-[68vw]">
                      <ul className="p-4 border-r-2 border-gray-200 space-y-1">
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
                        <StartupCentralPromoCard image="/startup-central-menu.webp" />
                      </ul>
                      <ul className="p-4 space-y-1">
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
                      <ul className="p-4 space-y-1">
                        <ListItemTiny
                          href="/annual-report/"
                          title="Submit an Annual Report"
                        >
                          Submit an Annual Report
                        </ListItemTiny>
                        <ListItemTiny
                          href="/form-2553/"
                          title="Form-2553"
                        >
                          Form-2553( S Crop Tax)
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
                    <div className="grid grid-cols-2 items-start gap-4 p-5 md:w-[56vw] lg:w-[60vw] ml-auto max-w-[760px]">
                      <ul className="p-4 space-y-1">
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
                      </ul>

                      <ul className="p-4 space-y-1">
                        <ListItemTiny href="/contact/" title="contact">
                          Contact
                        </ListItemTiny>

                        <ListItemTiny
                          href="/tax-consultation/"
                          title="Get a Free Consultation"
                        >
                          Get a Free Consultation
                        </ListItemTiny>

                        <ListItemTiny href="/article" title="Article">
                          Article
                        </ListItemTiny>

                        <StartupCentralPromoCard image="/startup-central-resource.webp" />
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about-us" legacyBehavior passHref>
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
          <div className="group-hover:text-[#2B93C9] text-xl font-semibold leading-none">
            {title}
          </div>
          <p className="line-clamp-2 text-sm font-normal leading-snug text-muted-foreground">
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
            "block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground  hover:bg-gray-100  hover:text-[#2B93C9]",
            className
          )}
          {...props}
        >
          <div className="text-base font-normal leading-none flex gap-2 flex-wrap items-center">
            <ChevronRightIcon className="size-4 text-[#2B93C9]" />
            {children}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItemTiny.displayName = "ListItemTiny";