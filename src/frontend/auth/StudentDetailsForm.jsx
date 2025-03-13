import { useState } from "react";
import TopDesign from "../../layout/header/TopDesign";
import becometutoricon from "../../assets/becometutoricon.svg";
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
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.location) newErrors.location = "Location/City is required.";
    if (formData.selectedCourses.length === 0) newErrors.selectedCourses = "At least one course must be selected.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("https://api.lantern.academy/api/students/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
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
        setMessage("Error submitting student details.");
      }
    } catch {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start p-4 overflow-auto">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg relative p-6 mt-5">
        <TopDesign />
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 bg-[#152F56] text-white w-8 h-8 flex items-center justify-center rounded-full"
        >
          ✖
        </button>
        <div className="text-center">
          <img className="mx-auto w-12 mb-3" src={becometutoricon} alt="Become a Tutor" />
          <h1 className="text-xl font-bold mb-3">Enter Your Details Here</h1>
          <p className="text-gray-600 mb-4">Fill out the form below to start learning</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {["fullName", "phoneNumber", "email", "location"].map((field, index) => (
              <div key={index}>
                <label className="block font-medium mb-1 capitalize text-sm">
                  {field.replace(/([A-Z])/g, " $1")} <span className="text-red-600">*</span>
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded text-sm"
                  required
                />
                {errors[field] && <p className="text-red-500 text-xs">{errors[field]}</p>}
              </div>
            ))}
          </div>

          <label className="block font-medium text-sm">Sponsor (Optional)</label>
          <select
            name="sponsor"
            value={formData.sponsor}
            onChange={handleInputChange}
            className="w-full p-2 border rounded bg-white text-sm"
          >
            <option value="">Select Sponsor</option>
            <option value="Myself">Myself</option>
            <option value="Other">Other</option>
          </select>

          <label className="block font-medium text-sm">Select a Course/Class *</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {["UI/UX Design", "Data Science/Analytics", "Frontend Development", "Backend Development", "Full Stack Development", "ATS/ICAN", "GMAT", "IELTS", "Digital Marketing", "Project Management", "Virtual Assistant", "Cyber Security", "Network Engineering", "Mathematics", "English Language", "Physics", "Chemistry", "Biology", "Financial Accounting", "Literature in English"].map((course) => (
              <label key={course} className="flex items-center text-sm">
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
          {errors.selectedCourses && <p className="text-red-500 text-xs">{errors.selectedCourses}</p>}

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-b from-[#152F56] to-[#2E67BC] text-white px-6 py-2 rounded-lg hover:bg-[#3b7ad8] transition text-sm"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>

          {message && <p className={`text-center text-xs ${message.includes("successfully") ? "text-green-500" : "text-red-500"}`}>{message}</p>}
        </form>
        {showSuccessPopup && <SuccessPopup onClose={() => { setShowSuccessPopup(false); closeModal(); }} />}
      </div>
    </div>
  );
};

export default StudentDetailsForm;
