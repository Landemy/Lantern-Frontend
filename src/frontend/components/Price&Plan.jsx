// import { useEffect } from 'react';
// import './Price&Plan.css';
// import Footer from '../../layout/footer/Footer';

// const PricePlan = () => {
//     useEffect(() => {
//         // Scroll to the "price" section if redirected with an anchor
//         const sectionId = localStorage.getItem("scrollToSection");
//         if (sectionId) {
//             const section = document.getElementById(sectionId);
//             if (section) {
//                 section.scrollIntoView({ behavior: "smooth" });
//             }
//             localStorage.removeItem("scrollToSection"); // Clear storage after use
//         }
//     }, []);

//     return (
//         <>
//             <div className="bg-[#F3F1FC] price" id="price">
//                 <div className="flex flex-col md:max-w-[700px] mx-auto vlg:max-w-[1001px]">
//                     <div className="pt-8 px-6 md:pt-12 md:text-center md:flex md:flex-col md:items-center">
//                         <h1 className="text-darkBlue text-2xl font-bold md:text-3xl vlg:text-4xl">
//                             Our Pricing and Plan
//                         </h1>
//                         <p className="vlg:max-w-[700px] md:text-lg text-lightBlue mt-4">
//                             NB: All classes are designed to take place at max thrice and at least twice per week.
//                         </p>
                        
//                         {/** Pricing Tables **/}
//                         <PricingSection title="School of Engineering" courses={engineeringCourses} />
//                         <PricingSection title="School of Data" courses={dataCourses} />
//                         <PricingSection title="School of Design" courses={designCourses} />
//                         <PricingSection title="School of Business and Management" courses={businessCourses} />
//                         <ExamPricingSection />
//                         <LocalExamSection />

//                         <p className="vlg:max-w-[700px] md:text-lg text-lightBlue mt-4 mb-5 mb"> 
//                            <span>Our Account Details</span> <br />
//                            Account Number: 8240438457 <br />
//                            Bank Name: MoniePoint MFB <br />
//                            Account Holder: Distance Learning ORG <br />
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// const PricingSection = ({ title, courses }) => (
//     <>
//         <h2 className="text-darkBlue text-lg font-bold mt-6">{title}</h2>
//         <table className="table">
//             <thead>
//                 <tr>
//                     <th>Course</th>
//                     <th>Duration</th>
//                     <th>Fee</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {courses.map(({ name, duration, fees }) => (
//                     <tr key={name}>
//                         <td>{name}</td>
//                         <td>{duration}</td>
//                         <td>
//                             <ul>
//                                 {fees.map((fee, index) => (
//                                     <li key={index}>{fee}</li>
//                                 ))}
//                             </ul>
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     </>
// );

// const ExamPricingSection = () => (
//     <>
//         <h2 className="text-darkBlue text-lg font-bold mt-6">International Exams</h2>
//         <table className="table">
//             <thead>
//                 <tr>
//                     <th>Exam Type</th>
//                     <th>Training Duration & Fee</th>
//                     <th>Exam Fee</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {examCourses.map(({ name, duration, fee }) => (
//                     <tr key={name}>
//                         <td>{name}</td>
//                         <td>{duration}</td>
//                         <td>{fee}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     </>
// );
// const LocalExamSection = () => (
//     <>
//         <h2 className="text-darkBlue text-lg font-bold mt-6">Local Exams</h2>
//         <table className="table">
//             <thead>
//                 <tr>
//                     <th>Subject</th>
//                     <th>Duration</th>
//                     <th>Fee</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {examCourses.map(({ name, duration, fee }) => (
//                     <tr key={name}>
//                         <td>{name}</td>
//                         <td>{duration}</td>
//                         <td>{fee}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     </>
// );

// // Course Data
// const engineeringCourses = [
//     { name: "Frontend Engineering", duration: "20 weeks + 2 weeks project", fees: ["Upfront - $150 or ₦150,000", "Installment (2) - $155 or ₦155,000", "Monthly - $32 or ₦32,000"] },
//     { name: "Backend Engineering", duration: "20 weeks + 2 weeks project", fees: ["Upfront - $150 or ₦150,000", "Installment (2) - $155 or ₦155,000", "Monthly - $32 or ₦32,000"] },
//     { name: "Full Stack Engineering", duration: "24 weeks + 2 weeks project", fees: ["Upfront - $250 or ₦250,000", "Installment (2) - $255 or ₦255,000", "Monthly - $45 or ₦45,000"] },
//     { name: "Cyber Security", duration: "20 weeks + 2 weeks project", fees: ["Upfront - $150 or ₦150,000", "Installment (2) - $155 or ₦155,000", "Monthly - $32 or ₦32,000"] }
// ];

// const dataCourses = [
//     { name: "Data Analysis", duration: "16 weeks + 2 weeks project", fees: ["Upfront - $120 or ₦120,000", "Installment (2) - $125 or ₦125,000", "Monthly - $32 or ₦32,000"] },
//     { name: "Data Science", duration: "16 weeks + 2 weeks project", fees: ["Upfront - $120 or ₦120,000", "Installment (2) - $125 or ₦125,000", "Monthly - $32 or ₦32,000"] }
// ];

// const designCourses = [
//     { name: "Product Design UI/UX", duration: "16 weeks + 2 weeks project", fees: ["Upfront - $120 or ₦120,000", "Installment (2) - $125 or ₦125,000", "Monthly - $32 or ₦32,000"] }
// ];

// const businessCourses = [
//     { name: "Digital and Product Marketing", duration: "12 weeks + 2 weeks project", fees: ["Upfront - $100 or ₦100,000", "Installment (2) - $105 or ₦105,000", "Monthly - $30 or ₦30,000"] },
//     { name: "Virtual Assistant", duration: "12 weeks + 2 weeks project", fees: ["Upfront - $150 or ₦150,000", "Installment (2) - $170 or ₦170,000", "Monthly - $35 or ₦35,000"] },
//     { name: "Project and Product Management", duration: "16 weeks + 2 weeks project", fees: ["Upfront - $120 or ₦120,000", "Installment (2) - $125 or ₦125,000", "Monthly - $32 or ₦32,000"] }
// ];

// const examCourses = [
//     { name: "Microsoft Azure Certification", duration: "Available on request", fee: "Available on request" },
//     { name: "IELTS", duration: "6 weeks - ₦50,000", fee: "Available on request" },
//     { name: "TOEFL", duration: "4 weeks - ₦70,000", fee: "Available on request" },
//     { name: "GMAT", duration: "4 weeks - ₦90,000 | 8 weeks - ₦140,000", fee: "Available on request" },
//     { name: "GRE", duration: "4 weeks - ₦90,000 | 8 weeks - ₦140,000", fee: "Available on request" },
//     { name: "SAT", duration: "4 weeks - ₦70,000 | 8 weeks - ₦100,000 | 12 weeks - ₦130,000", fee: "Available on request" }
// ];
// const localCourses = [
//     { name: "Mathematics", duration: "4 weeks", fee: "₦10,000 per month" },
//     { name: "English Language", duration: "4 weeks", fee: "₦10,000 per month" },
//     { name: "Physics", duration: "4 weeks", fee: "₦10,000 per month" },
//     { name: "Chemistry", duration: "4 weeks", fee: "₦10,000 per month" },
//     { name: "Biology", duration: "4 weeks", fee: "₦10,000 per month" },
//     { name: "Financial Accounting", duration: "4 weeks", fee: "₦10,000 per month" },
//     { name: "Literature in English", duration: "4 weeks", fee: "₦10,000 per month" },
// ];

// export default PricePlan;

import { useEffect, useState } from 'react';
import "./Price&Plan.css";
import Footer from '../../layout/footer/Footer';

const PricePlan = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const sectionId = localStorage.getItem("scrollToSection");
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
            localStorage.removeItem("scrollToSection");
        }
    }, []);

    return (
        <>
            <div className="bg-[#F3F1FC] py-10 price" id="price">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-darkBlue text-[3rem] font-bold">Our Pricing and Plan</h1>
                        <p className="text-lightBlue mt-4 text-lg">NB: All classes are designed to take place at most thrice and at least twice per week.</p>
                    </div>
                    
                    <PricingSection title="School of Engineering" courses={engineeringCourses} setShowModal={setShowModal} />
                    <PricingSection title="School of Data" courses={dataCourses} setShowModal={setShowModal} />
                    <PricingSection title="School of Design" courses={designCourses} setShowModal={setShowModal} />
                    <PricingSection title="School of Business and Management" courses={businessCourses} setShowModal={setShowModal} />
                    
                    <ExamPricingSection title="International Exams" courses={examCourses} setShowModal={setShowModal} />
                    <ExamPricingSection title="Local Exams" courses={localCourses} setShowModal={setShowModal} />
                </div>
            </div>
            <Footer />
            
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
                        <h3 className="font-semibold text-lg text-lightBlue">Our Account Details</h3>
                        <p>Account Number: 8240438457</p>
                        <p>Bank Name: MoniePoint MFB</p>
                        <p>Account Holder: Distance Learning ORG</p>
                        <button className="mt-4 bg-darkBlue text-white py-2 px-6 rounded-full hover:bg-[#1E3A8A] transition" onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

const PricingSection = ({ title, courses, setShowModal }) => (
    <div className="mt-8">
        <h2 className="text-darkBlue text-[2rem] font-bold mb-4 text-center">{title}</h2>
        <p className='text-[1rem] font-light mb-5 text-center'>Courses under {title} are listed below</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-3">
            {courses.map(({ name, duration, fees }) => (
                <div key={name} className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center border border-gray-200">
                    <h3 className="font-semibold text-xl text-darkBlue">{name}</h3>
                    <p className="text-sm text-gray-600 mt-2">{duration}</p>
                    <ul className="mt-4 text-sm text-gray-700 space-y-2">
                        {fees.map((fee, index) => (
                            <li key={index}>{fee}</li>
                        ))}
                    </ul>
                    <button 
                        className="mt-6 bg-darkBlue text-white py-2 px-6 rounded-full font-semibold hover:bg-[#1E3A8A] transition" 
                        onClick={() => setShowModal(true)}
                    >
                        Enroll
                    </button>
                </div>
            ))}
        </div>
    </div>
);

const ExamPricingSection = ({ title, courses, setShowModal }) => (
    <div className="mt-10">
        <h2 className="text-darkBlue text-[2rem] font-bold mb-4 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map(({ name, duration, fee }) => (
                <div key={name} className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center border border-gray-200">
                    <h3 className="font-semibold text-xl text-darkBlue">{name}</h3>
                    <p className="text-sm text-gray-600 mt-2">{duration}</p>
                    <p className="text-sm text-gray-700 mt-2">{fee}</p>
                    <button 
                        className="mt-6 bg-darkBlue text-white py-2 px-6 rounded-full font-semibold hover:bg-[#1E3A8A] transition" 
                        onClick={() => setShowModal(true)}
                    >
                        Enroll
                    </button>
                </div>
            ))}
        </div>
    </div>
);

export default PricePlan;


// Course Data
const engineeringCourses = [
    { name: "Frontend Engineering", duration: "20 weeks + 2 weeks project", fees: ["Upfront - $150 or ₦150,000", "Installment (2) - $155 or ₦155,000", "Monthly - $32 or ₦32,000"] },
    { name: "Backend Engineering", duration: "20 weeks + 2 weeks project", fees: ["Upfront - $150 or ₦150,000", "Installment (2) - $155 or ₦155,000", "Monthly - $32 or ₦32,000"] },
    { name: "Full Stack Engineering", duration: "24 weeks + 2 weeks project", fees: ["Upfront - $250 or ₦250,000", "Installment (2) - $255 or ₦255,000", "Monthly - $45 or ₦45,000"] },
    { name: "Cyber Security", duration: "20 weeks + 2 weeks project", fees: ["Upfront - $150 or ₦150,000", "Installment (2) - $155 or ₦155,000", "Monthly - $32 or ₦32,000"] }
];

const dataCourses = [
    { name: "Data Analysis", duration: "16 weeks + 2 weeks project", fees: ["Upfront - $120 or ₦120,000", "Installment (2) - $125 or ₦125,000", "Monthly - $32 or ₦32,000"] },
    { name: "Data Science", duration: "16 weeks + 2 weeks project", fees: ["Upfront - $120 or ₦120,000", "Installment (2) - $125 or ₦125,000", "Monthly - $32 or ₦32,000"] }
];

const designCourses = [
    { name: "Product Design UI/UX", duration: "16 weeks + 2 weeks project", fees: ["Upfront - $120 or ₦120,000", "Installment (2) - $125 or ₦125,000", "Monthly - $32 or ₦32,000"] }
];

const businessCourses = [
    { name: "Digital and Product Marketing", duration: "12 weeks + 2 weeks project", fees: ["Upfront - $100 or ₦100,000", "Installment (2) - $105 or ₦105,000", "Monthly - $30 or ₦30,000"] },
    { name: "Virtual Assistant", duration: "12 weeks + 2 weeks project", fees: ["Upfront - $150 or ₦150,000", "Installment (2) - $170 or ₦170,000", "Monthly - $35 or ₦35,000"] },
    { name: "Project and Product Management", duration: "16 weeks + 2 weeks project", fees: ["Upfront - $120 or ₦120,000", "Installment (2) - $125 or ₦125,000", "Monthly - $32 or ₦32,000"] }
];

const examCourses = [
    { name: "Microsoft Azure Certification", duration: "Available on request", fee: "Available on request" },
    { name: "IELTS", duration: "6 weeks - ₦50,000", fee: "Available on request" },
    { name: "TOEFL", duration: "4 weeks - ₦70,000", fee: "Available on request" },
    { name: "GMAT", duration: "4 weeks - ₦90,000 | 8 weeks - ₦140,000", fee: "Available on request" },
    { name: "GRE", duration: "4 weeks - ₦90,000 | 8 weeks - ₦140,000", fee: "Available on request" },
    { name: "SAT", duration: "4 weeks - ₦70,000 | 8 weeks - ₦100,000 | 12 weeks - ₦130,000", fee: "Available on request" }
];
const localCourses = [
    { name: "Mathematics", duration: "4 weeks", fee: "₦10,000 per month" },
    { name: "English Language", duration: "4 weeks", fee: "₦10,000 per month" },
    { name: "Physics", duration: "4 weeks", fee: "₦10,000 per month" },
    { name: "Chemistry", duration: "4 weeks", fee: "₦10,000 per month" },
    { name: "Biology", duration: "4 weeks", fee: "₦10,000 per month" },
    { name: "Financial Accounting", duration: "4 weeks", fee: "₦10,000 per month" },
    { name: "Literature in English", duration: "4 weeks", fee: "₦10,000 per month" },
];
