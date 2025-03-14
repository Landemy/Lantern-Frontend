import { useState } from "react";
import TopDesign from "../../layout/header/TopDesign";
import fqaicon from "../../assets/fqaicon.svg";
import fqaopen from "../../assets/fqaopen.svg";
import fqacall from "../../assets/fqacall.svg";
import fqamail from "../../assets/fqamail.svg";

const Fqa = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "What does Lantern stand for?",
      answer: "An EdTech company that provides innovative educational solutions for students, teachers, and institutions.",
    },
    {
      question: "What services do you offer?",
      answer: "We offer a range of services, including online courses, educational software, and tutoring services.",
    },
    {
      question: "Who is your target audience?",
      answer: "Our target audience includes students, teachers, schools, and educational institutions.",
    },
    {
      question: "What types of courses do you offer?",
      answer: "We offer courses in Tech, Management, International exams, and Local exams.",
    },
    {
      question: "What is the cost of your courses?",
      answer: "Our course prices vary depending on the specific course and package. Please visit our website for more information.",
    },
    {
      question: "What are the system requirements for your platform?",
      answer: "Our platform is accessible on desktop, tablet, and mobile devices with a stable internet connection.",
    },
    {
      question: "How do I troubleshoot technical issues?",
      answer: "Please contact our support team via call or email for assistance with technical issues.",
    },
  ];
  

  return (
    <div className="my-16 px-4">
      <TopDesign />

      {/* FAQ Header */}
      <div className="max-w-4xl mx-auto text-center text-[#152F56]">
        <img className="mx-auto mb-6 w-14" src={fqaicon} alt="FAQ Icon" />
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Got questions? Here are the answers!
        </h2>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-[#DFE5FB] rounded-xl p-5 shadow-md">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <h3 className="font-medium text-lg text-darkBlue">{faq.question}</h3>
              <button
                className={`transition-transform duration-300 ${
                  openQuestion === index ? "rotate-45" : "rotate-0"
                }`}
              >
                <img src={fqaopen} alt="Toggle FAQ" className="w-5 h-5" />
              </button>
            </div>
            {openQuestion === index && (
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto mt-12 p-6 border border-[#DFE5FB] rounded-xl shadow-md text-center text-[#152F56]">
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-left">
          Can’t find answers to your questions?
        </h3>
        <div className="flex flex-col items-start space-y-4 text-sm">
          <div className="flex items-center space-x-2">
            <img src={fqacall} alt="Call Icon" className="w-5 h-5" />
            <p>Chat us: <span className="font-medium">08154336976</span></p>
          </div>
          <div className="flex items-center space-x-2">
            <img src={fqamail} alt="Mail Icon" className="w-5 h-5" />
            <p>Email us: <span className="font-medium">info@lantern.academy</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fqa;
