import React from "react";
import { Card, CardContent } from "./components/Card";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Checkbox } from "./components/Checkbox";
import Svg2 from "./components/Svg2";

export const Register = () => {
  // Form fields data
  const formFields = [
    { id: "fullName", placeholder: "Full name" },
    { id: "email", placeholder: "Email" },
    { id: "password", placeholder: "Password" },
    { id: "confirmPassword", placeholder: "Confirm password" },
  ];

  // Social login options
  const socialOptions = [
    { id: "facebook", name: "Facebook" },
    { id: "google", name: "Google" },
  ];

  return (
    <main className="bg-[#f8f9fb] flex flex-col lg:flex-row justify-center w-full min-h-screen">
        <div className="bg-[#f8f9fb] w-full max-w-[1440px] relative flex flex-col lg:flex-row">
            
            {/* Left side - Sign up form */}
            <section className="flex flex-col w-full lg:max-w-[700px] items-center justify-center p-6 sm:p-10 md:p-12">
            <div className="flex flex-col w-full sm:w-[451px] items-center justify-center gap-8 sm:gap-10">
                {/* Logo and brand */}
                <div className="flex flex-col w-[175px] items-center">
                <div className="inline-flex items-center gap-2.5 p-2.5">
                    <img
                    className="w-[30px] h-[43px]"
                    alt="Lantern logo"
                    src="https://c.animaapp.com/m98ic8fscwBOcl/img/lantern-logo--1--removebg-preview-1.png"
                    />
                </div>
                <div className="flex items-center justify-center gap-2.5 p-1 w-full">
                    <h1 className="w-fit [-webkit-text-stroke:0.5px_#152f56] font-['Roboto',Helvetica] font-bold text-[#152f56] text-[32px] sm:text-[40px] tracking-[2.80px]">
                    Lantern
                    </h1>
                </div>
                </div>

                {/* Form content */}
                <Card className="border-none shadow-none bg-transparent w-full">
                <CardContent className="p-0 space-y-8 sm:space-y-[30px] w-full">
                    {/* Heading */}
                    <div className="h-auto font-['Poppins',Helvetica] text-center sm:text-left">
                    <h2 className="font-semibold text-[#152f56] text-[1.375rem] lg:text-[1.45rem] leading-tight">
                        EDUCATION BEYOUND THE FOUR WALLS
                    </h2>
                    <p className="italic text-black text-base leading-[30px]">
                        "Your pathway to limitless career growth"
                    </p>
                    </div>

                    {/* Form */}
                    <div className="space-y-3 w-full">
                    <p className="font-['Poppins',Helvetica] italic text-black text-xs">
                        Welcome, Please signup for an account
                    </p>

                    <div className="space-y-5">
                        {formFields.map((field) => (
                        <Input
                            key={field.id}
                            id={field.id}
                            placeholder={field.placeholder}
                            className="w-full h-[60px] px-5 py-5 rounded-[5px] border border-solid border-[#152f56] placeholder:opacity-50 placeholder:font-['Poppins',Helvetica] placeholder:text-[#1e1e1e] placeholder:text-base"
                        />
                        ))}
                    </div>

                    {/* Terms agreement */}
                    <div className="flex items-start gap-2.5 text-xs">
                        <Checkbox
                        id="terms"
                        className="w-[17px] h-[17px] rounded-sm border-2 border-solid border-[#152f56]"
                        />
                        <label
                        htmlFor="terms"
                        className="font-['Poppins',Helvetica] text-xs leading-[22px]"
                        >
                        <span className="text-[#535353]">
                            By signing up, you agree to lantern
                            <br />
                        </span>
                        <a href="#" className="text-[#0a88ef] underline">
                            Terms of Service
                        </a>
                        <span className="text-[#535353]"> and </span>
                        <a href="#" className="text-[#0a88ef] underline">
                            Privacy Policy
                        </a>
                        </label>
                    </div>

                    {/* Sign up button */}
                    <Button className="w-full h-[50px] bg-[#152f56] rounded-[5px] font-['Poppins',Helvetica] font-semibold text-white">
                        Sign Up
                    </Button>

                    {/* Social login options */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between w-full gap-2 sm:gap-0">
                        <p className="font-['Poppins',Helvetica] text-black text-sm">
                        Or sign up with
                        </p>
                        <div className="flex items-center gap-[20px]">
                        {socialOptions.map((option) => (
                            <Button
                            key={option.id}
                            variant="link"
                            className="p-0 font-['Poppins',Helvetica] text-[#152f56] text-base hover:no-underline"
                            >
                            {option.name}
                            </Button>
                        ))}
                        </div>
                    </div>
                    </div>
                </CardContent>
                </Card>
            </div>
            </section>

            {/* Right side - Illustration */}
            <section className="w-full lg:w-[740px] h-[400px] lg:h-[900px] bg-white overflow-hidden relative hidden sm:block">
            <Svg2 />
            </section>
        </div>
    </main>

  );
};
