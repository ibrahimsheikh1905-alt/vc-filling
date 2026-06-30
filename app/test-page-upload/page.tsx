"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import NavigationWrapper from "@/components/NavigationWrapper";
import React from "react";
import Link from "next/link";

type Inputs = {
  firstName: string;
  exampleRequired: string;
};


const TestPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("firstName")); // watch input value by passing the name of it
  return (
    <NavigationWrapper>
      <div className="min-h-screen mt-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="test" {...register("firstName")} />

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("exampleRequired", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
           })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <Link href="/test-page-upload/step-2">Next</Link>
        </form>
      </div>
    </NavigationWrapper>
  );
};

export default TestPage;
