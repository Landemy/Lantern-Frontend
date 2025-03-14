import { useState } from "react";
import becometutoricon from "../../assets/becometutoricon.svg";
import upload from "../../assets/upload.svg";

const BecomeTutorForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    course: "",
    portfolio: "",
    duration: "",
    fee: "",
    uniqueInfo: "",
    syllabusFile: null,
    cvFile: null,
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleRemoveFile = (fieldName) => {
    setFormData({ ...formData, [fieldName]: null });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, fieldName) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFormData({ ...formData, [fieldName]: file });
  };

  const handleClickUpload = (fieldName) => {
    document.getElementById(fieldName).click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setMessage("Application submitted successfully!");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto my-16 p-8 bg-white shadow-lg rounded-xl border border-gray-200">
      <div className="text-center">
        <img src={becometutoricon} alt="Become Tutor" className="w-20 mx-auto" />
        <h1 className="text-3xl font-bold text-gray-800 mt-4">Become a Tutor</h1>
        <p className="text-gray-600 mt-2">Join us and share your knowledge!</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" name="fullName" placeholder="Full Name *" className="input-style" onChange={handleInputChange} required />
          <input type="tel" name="phoneNumber" placeholder="Phone Number *" className="input-style" onChange={handleInputChange} required />
          <input type="email" name="email" placeholder="Email Address *" className="input-style" onChange={handleInputChange} required />
          <input type="text" name="course" placeholder="Course You Want to Teach *" className="input-style" onChange={handleInputChange} required />
        </div>
        <input type="url" name="portfolio" placeholder="Link of Your Portfolio (Optional)" className="input-style" onChange={handleInputChange} />
        <input type="text" name="duration" placeholder="Course/Class Duration *" className="input-style" onChange={handleInputChange} required />
        <input type="text" name="fee" placeholder="Proposed Course Fee (Amount in Naira) *" className="input-style" onChange={handleInputChange} required />
        <textarea name="uniqueInfo" placeholder="Tell Us Something Unique About You *" className="input-style" rows="4" onChange={handleInputChange} required></textarea>

        <div className="file-upload" onClick={() => handleClickUpload('syllabusFile')} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'syllabusFile')}>
          <input type="file" id="syllabusFile" name="syllabusFile" className="hidden" onChange={handleFileChange} required />
          <label className="mr-5">{formData.syllabusFile ? formData.syllabusFile.name : "Upload Course Outline/Syllabus (.pdf)"}</label>
          {formData.syllabusFile && <button className="text-sm text-red-600" type="button" onClick={() => handleRemoveFile('syllabusFile')}>Remove</button>}
        </div>
        
        <div className="file-upload" onClick={() => handleClickUpload('cvFile')} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'cvFile')}>
          <input type="file" id="cvFile" name="cvFile" className="hidden" onChange={handleFileChange} required />
          <label className="mr-5">{formData.cvFile ? formData.cvFile.name : "Upload CV (.pdf)"}</label>
          {formData.cvFile && <button className="text-sm text-red-600" type="button" onClick={() => handleRemoveFile('cvFile')}>Remove</button>}
        </div>

        <div className="flex justify-center">
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </div>

        {message && <p className="text-center text-green-500 mt-4">{message}</p>}
      </form>
      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 16px;
        }
        .file-upload {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f9fafb;
          padding: 16px;
          border: 2px dashed #ccc;
          border-radius: 8px;
          text-align: center;
          cursor: pointer;
        }
        .file-label {
          font-size: 16px;
          color: #333;
        }
        .submit-button {
          width: 100%;
          padding: 12px;
          background: linear-gradient(45deg, #152F56, #2E67BC);
          color: white;
          font-size: 18px;
          font-weight: bold;
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .submit-button:hover {
          background: linear-gradient(45deg, #2E67BC, #152F56);
        }
      `}</style>
    </div>
  );
};

export default BecomeTutorForm;