import { useState } from "react";
import TopDesign from "../../layout/header/TopDesign";
import becometutoricon from "../../assets/becometutoricon.svg";
import { submitStudentDetails } from '../api/student'
import SuccessPopup from "../components/SuccessPopup";

const StudentDetailsForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    location: "",
    sponsor: "",
    selectedCourses: [],
  });

  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const selectedCourses = checked
        ? [...prev.selectedCourses, value]
        : prev.selectedCourses.filter((course) => course !== value);
      return { ...prev, selectedCourses };
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone Number is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.location) newErrors.location = "Location/City is required.";
    if (formData.selectedCourses.length === 0) {
      newErrors.selectedCourses = "At least one course must be selected.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setMessage("");

    try {
      const formDataToSend = {
        fullName: formData.fullName.trim(),
        phoneNumber: formData.phoneNumber.trim(),
        email: formData.email.trim(),
        location: formData.location.trim(),
        sponsor: formData.sponsor.trim() || null, // Ensure sponsor is always included
        selectedCourses: formData.selectedCourses, // Send as an array
      };

      console.log("Submitting Data:", formDataToSend);

      const response = await fetch("https://api.lantern.academy/api/students/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      const responseData = await response.json();
      console.log("API Response:", responseData);

      if (response.ok) {
        setMessage("Student Details submitted successfully!");
        setShowSuccessPopup(true);
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          location: "",
          sponsor: "",
          selectedCourses: [],
        });
      } else {
        setMessage(responseData.error || "Error submitting student details.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <div
        id="overlay"
        onClick={(e) => {
          if (e.target.id === "overlay") closeModal();
        }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center overflow-y-auto lg:pt-[450px] pt-[700px] text-[#152F56]"
      >
        <div className="bg-white px-10 pb-6 rounded-lg shadow-lg relative w-full max-w-3xl">
          <TopDesign />
          <span>
            <img className="mx-auto w-14 mb-3" src={becometutoricon} alt="Become a Tutor" />
          </span>
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 px-3 py-2 border border-[#152F56] rounded-[50px]"
          >
            ✖
          </button>

          <h1 className="text-2xl font-bold text-center mb-4">Enter Your Details Here</h1>
          <p className="text-center text-gray-600 mb-6">
            Kindly fill out the form below to submit your request and start learning
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {["fullName", "phoneNumber", "email", "location"].map((field, index) => (
                <div key={index}>
                  <label className="block font-medium mb-2 capitalize">
                    {field.replace(/([A-Z])/g, " $1")} <span className="text-red-600">*</span>
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-[#152F56] rounded"
                    required
                  />
                  {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center">
              <label className="block font-medium mb-2 text-left">Sponsor (Optional)</label>
              <select
                name="sponsor"
                value={formData.sponsor}
                onChange={handleInputChange}
                className="w-full lg:w-1/2 p-3 border border-[#152F56] rounded bg-white"
              >
                <option value="">Select Sponsor</option>
                <option value="Myself">Myself</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="bg-[#F1F4F9] mx-1 lg:mx-20 py-6 px-4 lg:px-0 gap-8 flex flex-col items-start lg:items-center">
              <div>
                <label className="block font-medium mb-6 text-center">
                  Select a Course/Class <span className="text-red-600">*</span>
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "Frontend Development",
                    "ATS/ICAN",
                    "GMAT",
                    "UI/UX Design",
                    "Data Science/Analytics",
                    "Backend Development",
                    "IELTS",
                    "Digital Marketing",
                    "Project Management",
                    "Virtual Assistant",
                    "Cyber Security",
                    "Network Engineering",
                  ].map((course) => (
                    <label key={course} className="flex items-center">
                      <input
                        type="checkbox"
                        value={course}
                        onChange={handleCheckboxChange}
                        checked={formData.selectedCourses.includes(course)}
                        className="mr-2"
                      />
                      {course}
                    </label>
                  ))}
                </div>
                {errors.selectedCourses && <p className="text-red-500 text-sm">{errors.selectedCourses}</p>}
              </div>

              <div className="w-full flex justify-center items-center">
                <button
                  type="submit"
                  className="w-full lg:w-8/12 bg-gradient-to-b from-[#152F56] to-[#2E67BC] text-white py-3 rounded-[16px] hover:bg-[#3b7ad8] transition text-[18px]"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
            {message && <p className={`text-center text-sm ${message.includes("successfully") ? "text-green-500" : "text-red-500"}`}>{message}</p>}
          </form>
          {showSuccessPopup && <SuccessPopup onClose={() => { setShowSuccessPopup(false); closeModal(); }} />}

        </div>
      </div>
    </div>
  );
};

export default StudentDetailsForm;
