import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Checkbox } from "./components/Checkbox";
import "./Login.css"; // Import your CSS file for styles
import Svg from "./components/Svg";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // Add your login logic here

   

     // You can replace this mock login with your real login logic
  const mockToken = "123456"; // This would typically come from your backend after login
  sessionStorage.setItem("lantern_token", mockToken); // Save token
  navigate("/"); // Redirect after login
  };

  const socialOptions = ["Facebook", "Google"];
  const navigate = useNavigate();


  return (
    <main className="bg-[#f8f9fb] flex justify-center w-full min-h-screen p-4">
      <div className="bg-[#f8f9fb] w-full max-w-[1440px] flex flex-col lg:flex-row lg:h-[850px]">
        {/* Left side - Login form */}
        <section className="flex flex-col w-full lg:w-[50%] items-center justify-center gap-10 pt-5 px-4 lg:px-[55px]">
          {/* Logo and brand */}
          <div className="flex flex-col w-[175px] items-center">
            <img
              className="w-[30px] h-[43px] mb-2"
              alt="Lantern logo"
              src="https://c.animaapp.com/m97098i4TMEoYe/img/lantern-logo--1--removebg-preview-1.png"
            />
            <h1 className="font-extrabold text-[#152f56] text-[30px] lg:text-[40px] tracking-[2px] lantern-logo">
              Lantern
            </h1>
          </div>

          {/* Form content */}
          <div className="flex flex-col items-start gap-4 w-full px-8 lg:px-[50px]">
            <div className="text-[1.375rem] lg:text-[1.45rem]">
              <span className="font-semibold text-[#152f56]">EDUCATION BEYOUND THE FOUR WALLS</span>
              <br />
              <span className="italic text-black text-base text-semibold"> 
                "Your pathway to limitless career growth"
              </span>
            </div>
            <span>
                <span className="font-['Poppins',Helvetica] italic text-black text-xs">Welcome back, Please login to your account</span>
              </span>
            <form onSubmit={handleLogin} className="flex flex-col items-end w-full">
              {/* Email input with label */}
              <div className="flex items-center w-full mb-4">
                <div className="flex items-center w-full rounded-md">
                  <label
                    htmlFor="email"
                    className="w-[126px] h-[60px] flex items-center justify-left bg-[#152f56] text-white rounded-l-md pl-7"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    className="flex-1 h-[60px] border border-[#152f56]" style={{ borderRadius: "0 0.375rem 0.375rem 0" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} placeholder="brainycodes@gmail.com"
                    type="email"
                  />
                </div>
              </div>

              {/* Password input with label */}
              <div className="flex items-center w-full mb-5">
                <div className="flex items-center w-full rounded-md">
                  <label
                    htmlFor="password"
                    className="w-[126px] h-[60px] flex items-center justify-left pl-6 bg-[#152f56] text-white rounded-l-md"
                  >
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    className="flex-1 h-[60px] border border-[#152f56]" style={{ borderRadius: "0 0.375rem 0.375rem 0" }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} placeholder="****************"
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
              <div className="flex flex-col sm:flex-row items-center gap-5 w-full mb-4">
                <Button
                  type="submit"
                  className="w-[100px] text-md h-[50px] bg-[#152f56] text-white border-2 border-[#152f56]"
                >
                  Login
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => navigate("/register")}
                  className="w-[100px] text-md h-[50px] border-2 border-[#152f56] text-[#152f56]"
                >
                  Sign Up
                </Button>

              </div>

              {/* Social Login */}
              <div className="flex flex-col sm:flex-row items-center justify-between w-full mt-5 gap-2 sm:gap-0">
                <p className="text-sm">Or Login with</p>
                <div className="flex items-center gap-[30px]">
                  {socialOptions.map((option, index) => (
                    <button
                      key={index}
                      className="text-[#152f56] font-medium"
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
        <Svg />
        </section>
      </div>
    </main>
  );
};
