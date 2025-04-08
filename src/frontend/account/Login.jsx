import React, { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Checkbox } from "./components/Checkbox";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // Add your login logic here
  };

  const socialOptions = ["Facebook", "Google"];

  return (
    <main className="bg-[#f8f9fb] flex justify-center w-full min-h-screen p-4">
      <div className="bg-[#f8f9fb] w-full max-w-[1440px] flex flex-col lg:flex-row lg:h-[900px]">
        {/* Left side - Login form */}
        <section className="flex flex-col w-full lg:w-[50%] items-center justify-center gap-10 pt-10 lg:pt-[50px] px-4 lg:px-[60px]">
          {/* Logo and brand */}
          <div className="flex flex-col w-[175px] items-center">
            <img
              className="w-[30px] h-[43px]"
              alt="Lantern logo"
              src="https://c.animaapp.com/m97098i4TMEoYe/img/lantern-logo--1--removebg-preview-1.png"
            />
            <h1 className="font-bold text-[#152f56] text-[32px] lg:text-[40px] tracking-[2px]">
              Lantern
            </h1>
          </div>

          {/* Form content */}
          <div className="flex flex-col items-start gap-8 w-full px-8 lg:px-[60px]">
            <div className="text-xl lg:text-1xl">
              <span className="font-semibold text-[#152f56]">EDUCATION BEYOUND THE FOUR WALLS</span>
              <br />
              <span className="italic text-black text-base">
                "Your pathway to limitless career growth"
              </span>
            </div>

            <form onSubmit={handleLogin} className="flex flex-col items-end w-full">
              {/* Email input with label */}
              <div className="flex items-center w-full mb-4">
                <div className="flex items-center w-full rounded-md">
                  <label
                    htmlFor="email"
                    className="w-[126px] h-[60px] flex items-center justify-center bg-[#152f56] text-white rounded-l-md"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    className="flex-1 h-[60px] border border-[#152f56]" style={{ borderRadius: "0 0.375rem 0.375rem 0" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password input with label */}
              <div className="flex items-center w-full mb-5">
                <div className="flex items-center w-full rounded-md">
                  <label
                    htmlFor="password"
                    className="w-[126px] h-[60px] flex items-center justify-center bg-[#152f56] text-white rounded-l-md"
                  >
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    className="flex-1 h-[60px] border border-[#152f56]" style={{ borderRadius: "0 0.375rem 0.375rem 0" }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* Remember me and forgot password */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2 sm:gap-0 mt-2 mb-5">
                <div className="flex items-center gap-2.5">
                  <Checkbox id="remember" className="border border-[#152f56] border-2"/>
                  <label htmlFor="remember" className="text-sm">Remember Password</label>
                </div>
                <button type="button" className="text-black-600 hover:underline text-sm">
                  Forgot Password?
                </button>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
                <Button
                  type="submit"
                  className="w-full sm:w-auto text-lg h-[60px] border border-[#152f56]"
                >
                  Login
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  className="w-full sm:w-auto text-lg h-[60px] border border-[#152f56]"
                >
                  Sign Up
                </Button>
              </div>

              {/* Social Login */}
              <div className="flex flex-col sm:flex-row items-center justify-between w-full mt-5 gap-2 sm:gap-0">
                <p>Or Login with</p>
                <div className="flex items-center gap-[30px]">
                  {socialOptions.map((option, index) => (
                    <button
                      key={index}
                      className="text-[#152f56] font-medium hover:underline"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </form>
          </div>

        </section>

        {/* Right side - Illustration */}
        <section className="w-full lg:w-[50%] h-[300px] lg:h-auto bg-white flex items-center justify-center mt-10 lg:mt-0">
          <img
            src="https://illustrations.popsy.co/gray/student.svg"
            alt="Educational Illustration"
            className="max-w-[90%] max-h-[90%]"
          />
        </section>
      </div>
    </main>
  );
};
