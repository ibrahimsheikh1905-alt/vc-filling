// components/CardList.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { posts } from "@/app/data"; // Update path if needed
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import NavigationWrapper from "@/components/NavigationWrapper";

const CardList = () => {
  return (
    <NavigationWrapper>
      <div className="md:mx-24 mt-9">
      <div className=" mb-12 md:flex justify-between max-sm:mx-5">
        <div>
          <p className="">
            <span className="text-primary font-bold my-4">THE VC ARTICLE</span>
            <h1 className="font-bold text-4xl max-sm:text-3xl uppercase">
              Where Business Begins.
            </h1>
            <h2 className="font-bold text-4xl max-sm:text-3xl uppercase">
              Your Resource to Grow.
            </h2>
          </p>
        </div>
        {/* right section start  */}

        <div className=" flex gap-5 my-4">
          <p>Follow VC on </p>
          <div className="">
            <Image
              className=""
              src="/article/fb.png"
              alt="Free LLC"
              width={30}
              height={30}
            />
          </div>
          <div className="">
            <Image
              src="/article/you.png"
              alt="Free LLC"
              width={30}
              height={30}
            />
          </div>
          <div className="">
            <Image
              src="/article/lin.png"
              alt="Free LLC"
              width={30}
              height={30}
            />
          </div>
          <div className="">
            <Image src="/article/x.jpg" alt="Free LLC" width={30} height={30} />
          </div>
        </div>
      </div>
      {/* new section start  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {posts.map((item) => (
          <Link href={`/post/${item.id}`} key={item.id} className="block">
            <Card className=" pt-4 shadow-lg rounded-2xl hover:shadow-xl transition-shadow duration-300 h-full">
              <CardContent className="flex flex-col items-center text-center">
                <div className="relative  mb-4 h-[180px] w-full">
                  <Image
                    src={item.image}
                    alt={item.author}
                    fill
                    className=" object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={item.id === 1}
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2">{item.heading}</h2>
                <p className="text-gray-600">By {item.author}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center mb-6 ">
        <Pagination className="">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
    </NavigationWrapper>
    
  );
};

export default CardList;
