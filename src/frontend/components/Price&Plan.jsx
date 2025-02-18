import { useEffect } from 'react';
import './Price&Plan.css';
import Footer from '../../layout/footer/Footer';

const PricePlan = () => {
    useEffect(() => {
        // Scroll to the "price" section if redirected with an anchor
        const sectionId = localStorage.getItem("scrollToSection");
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
            localStorage.removeItem("scrollToSection"); // Clear storage after use
        }
    }, []);

    return (
        <>
            <div className="bg-[#F3F1FC] price" id="price">
                <div className="flex flex-col md:max-w-[700px] mx-auto vlg:max-w-[1001px]">
                    <div className="pt-8 px-6 md:pt-12 md:text-center md:flex md:flex-col md:items-center">
                        <h1 className="text-darkBlue text-2xl font-bold md:text-3xl vlg:text-4xl">
                            Our Pricing and Plan
                        </h1>
                        <p className="vlg:max-w-[700px] md:text-lg text-lightBlue mt-4">
                            NB: All classes are designed to take place at max thrice and at least twice per week.
                        </p>
                        
                        {/** Pricing Tables **/}
                        <PricingSection title="School of Engineering" courses={engineeringCourses} />
                        <PricingSection title="School of Data" courses={dataCourses} />
                        <PricingSection title="School of Design" courses={designCourses} />
                        <PricingSection title="School of Business and Management" courses={businessCourses} />
                        <ExamPricingSection />

                        <p className="vlg:max-w-[700px] md:text-lg text-lightBlue mt-4 mb-5 mb"> <b>
                           <span>Our Account Details</span> <br />
                           Account Number: 8240438457 <br />
                           Bank Name: MoniePoint MFB <br />
                           Account Holder: Distance Learning ORG <br />
                           </b>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

const PricingSection = ({ title, courses }) => (
    <>
        <h2 className="text-darkBlue text-lg font-bold mt-6">{title}</h2>
        <table className="table">
            <thead>
                <tr>
                    <th>Course</th>
                    <th>Duration</th>
                    <th>Fee</th>
                </tr>
            </thead>
            <tbody>
                {courses.map(({ name, duration, fees }) => (
                    <tr key={name}>
                        <td>{name}</td>
                        <td>{duration}</td>
                        <td>
                            <ul>
                                {fees.map((fee, index) => (
                                    <li key={index}>{fee}</li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
);

const ExamPricingSection = () => (
    <>
        <h2 className="text-darkBlue text-lg font-bold mt-6">Exams</h2>
        <table className="table">
            <thead>
                <tr>
                    <th>Exam Type</th>
                    <th>Training Duration & Fee</th>
                    <th>Exam Fee</th>
                </tr>
            </thead>
            <tbody>
                {examCourses.map(({ name, duration, fee }) => (
                    <tr key={name}>
                        <td>{name}</td>
                        <td>{duration}</td>
                        <td>{fee}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
);

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

export default PricePlan;
