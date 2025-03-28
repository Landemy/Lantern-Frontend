import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement("#root");

import logo from "../../assets/logo.svg";
import openmenu from "../../assets/openmenu.svg";
import closemenu from "../../assets/closemenu.svg";
import mobilelogo from "../../assets/mobilelogo.svg";
import start from "../../assets/start.svg";
import course from "../../assets/course.svg";
import tutor from "../../assets/tutor.svg";
import becometutor from "../../assets/becometutor.svg";
import testimonial from "../../assets/testimonial.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const menuRef = useRef(null);
  const location = useLocation();

  // Set active link based on the current pathname
  useEffect(() => {
    if (location.pathname === "/pricing-plan") {
      setActiveLink("Pricing & Plan");
    } else {
      setActiveLink(""); // Reset if not on pricing page
    }
  }, [location.pathname]);

  const scrollToSection = (id, sectionName) => {
    setActiveLink(sectionName);

    if (location.pathname !== "/") {
      localStorage.setItem("scrollToSection", id);
      window.location.href = id === "price" ? `/pricing-plan` : `/#${id}`;
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

    setIsOpen(false);
  };

  useEffect(() => {
    const sectionId = localStorage.getItem("scrollToSection");
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      localStorage.removeItem("scrollToSection");
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const redirectToTelegram = () => {
    window.open("https://t.me/LANTERNCOMMUNITY", "_blank");
  };



  return (
    <>
    <nav className="fixed top-0 z-20 w-full bg-white shadow-md pb-2 md:pb-2 lg:pb-5">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto vlg:py-[0]">
        {/* Logo */}
        <Link to="/">
        <div><img src={logo} alt="" /></div>
        </Link>

        {/* Desktop Links */}
        <ul className="items-center hidden space-x-12 vlg:flex">
          <li
            className={`cursor-pointer ${activeLink === "Find a Tutor"
              ? "bg-[#DBD6F569] font-semibold px-4 py-2 rounded-[25px]"
              : "text-[#152F56] font-semibold text-[16px] hover:text-gray-800"
              }`}
            onClick={() => scrollToSection("find-tutor", "Find a Tutor")}
          >Find a Tutor</li> 
          <li
            className={`cursor-pointer ${activeLink === "Courses"
              ? "bg-[#DBD6F569] font-semibold px-4 py-2 rounded-[25px]"
              : "text-[#152F56] font-semibold text-[16px] hover:text-gray-800"
              }`}
            onClick={() => scrollToSection("courses", "Courses")}
          >Courses</li>
          <li
            className={`cursor-pointer ${activeLink === "Become a Tutor"
              ? "bg-[#DBD6F569] font-semibold px-4 py-2 rounded-[25px]"
              : "text-[#152F56] text-[16px] font-semibold hover:text-gray-800"
              }`}
            onClick={() => scrollToSection("become-tutor", "Become a Tutor")}
          >Become a Tutor</li>
          <li className={`cursor-pointer ${activeLink === "Pricing & Plan"
              ? "bg-[#DBD6F569] font-semibold px-4 py-2 rounded-[25px]"
              : "text-[#152F56] text-[16px] font-semibold hover:text-gray-800"
              }`}
              onClick={() => scrollToSection("price", "Pricing & Plan")}
              ><Link to="/pricing-plan" className="text-[#152F56] text-[16px] font-semibold hover:text-gray-800">
          Pricing & Plan
        </Link></li>
          <li className={`cursor-pointer ${activeLink === "Resources"
              ? "bg-[#DBD6F569] font-semibold px-4 py-2 rounded-[25px]"
              : "text-[#152F56] text-[16px] font-semibold hover:text-gray-800"
              }`}
              onClick={() => scrollToSection("blog", "Resources")}
              ><Link to="/resources" className="text-[#152F56] text-[16px] font-semibold hover:text-gray-800">
          Resources
        </Link></li>
          <li>
            <button onClick={redirectToTelegram} className="bg-gradient-to-b from-[#152F56] to-[#2E67BC] text-white font-bold py-2 px-6 rounded-[25px]">
              Join Community
            </button>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="flex items-center vlg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <img src={openmenu} alt="" className="w-6 h-6" /> : <img src={openmenu} alt="" className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 right-0 z-30 w-3/4 h-full transition-transform transform shadow-lg bg-gray-50"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b">
          <Link to="/"><div><img src={mobilelogo} alt="" /></div></Link>
            <button onClick={toggleMenu}>
              <img src={closemenu} alt="" className="w-6 h-6" />
            </button>
          </div>
          <ul className="flex flex-col p-6 space-y-6">
            <li
              className="text-[#152F56] text-[16px] font-semibold hover:text-gray-800 flex gap-2"
              onClick={() => scrollToSection("find-tutor", "Find a Tutor")}
            >
              <img src={tutor} alt="" />
              <span>Find a Tutor</span>
            </li>
            <li
              className="text-[#152F56] text-[16px] font-semibold hover:text-gray-800 flex gap-2"
              onClick={() => scrollToSection("courses", "Courses")}
            >
              <img src={course} alt="" />
              <span>Courses</span>
            </li>
            <li
              className="text-[#152F56] text-[16px] font-semibold hover:text-gray-800 flex gap-2"
              onClick={() => scrollToSection("become-tutor", "Become a Tutor")}
            >
              <img src={becometutor} alt="" />
              <span>Become a Tutor</span>
            </li>
            <li>
              <img src={becometutor} alt="" />
              <span><Link to="/pricing-plan" className="text-[#152F56] text-[16px] font-semibold hover:text-gray-800">
                Pricing & Plan
              </Link></span>
            </li>
            <li>
              <img src={becometutor} alt="" />
              <span><Link to="/resources" className="text-[#152F56] text-[16px] font-semibold hover:text-gray-800">
                Resources
              </Link></span>
            </li>
            <li
              className="text-[#152F56] text-[16px] font-semibold hover:text-gray-800 flex gap-2"
              onClick={() => scrollToSection("testimonials", "Testimonials")}
            >
              <img src={testimonial} alt="" />
              <span>Testimonials</span>
            </li>
            <li className="flex flex-col justify-center w-full">
              <div>
                <button onClick={redirectToTelegram} className="bg-gradient-to-b from-[#152F56] w-full to-[#2E67BC] text-white font-bold py-2 px-12 rounded-[25px]">
                  Join Community
                </button>
                
              </div>
              <span className="text-[#8594AA] text-[12px] text-center" >Chat us: 08164790661</span>
            </li>
          </ul>
        </div>

      )}
    </nav>
    </>
  );
};

export default Navbar;
