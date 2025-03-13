
import "./FindTutorPage.css";
import TopDesign from "../../layout/header/TopDesign";
import { useState } from "react";
import Graduation from '../../assets/graduationcap.svg';
import DamiPics from "../../assets/dami.png";
import Solomon from "../../assets/solomon.jpg";
import oluPics from "../../assets/olumide.png";
import ochayiPics from "../../assets/ochayi.png";
import temiPics from "../../assets/temi.png";
import maryPics from "../../assets/mary.png";
import timiPics from "../../assets/timi.jpg";
import anuoluwapoPics from "../../assets/anuoluwapo.svg"
import ayoPics from "../../assets/ayodele.png";
import bamidelePics from "../../assets/bamidele.png";
import adesewaPics from "../../assets/adesewa.png";
import dayoPics from "../../assets/dayo.png";
import busolaPics from "../../assets/busola.png";
import natPics from "../../assets/nat.png";
import olumidePics from "../../assets/olumideIELTS.png";
import sekinatPics from "../../assets/sekinattolani.jpg";
import estherPics from "../../assets/esthernehemiah.jpg";
import StudentDetailsForm from "../auth/StudentDetailsForm";
import { submitReview } from "../api/review";


const tutors = [
  {
    heading: "Front-end Dev Tutors",
    name: "Damilare   ",
    image: DamiPics,
    students: "198",
    position: "Front-end Dev Tutor",
    rating: "5/5",
    reviews: "123",
    about:
      "I’m Damilare, I’m a front-end dev with years of experience. I mentor beginners, helping them build practical skills for real-world desktop and mobile web",
    course: "Front-end Dev",
    type: "online and physical classes",
    learn: [
      "No prior experience needed it's perfect for beginners.",
      "Master HTML, CSS, and JavaScript to build visually stunning and responsive websites.",
      "Learn to work with modern front-end frameworks like React and Vue for dynamic web applications.",
      "Get skills that can lead to jobs as a front-end developer.",
      "Earn a certificate.",
    ],
  },
  {
    heading: "Front-end Dev Tutors",
    name: "Esther Nehemiah",
    image: estherPics,
    students: "298",
    position: "Front-end Dev Tutor",
    rating: "5/5",
    reviews: "124",
    about:
      "I’m Esther, I’m a front-end dev with years of experience. I mentor beginners, helping them build practical skills for real-world desktop and mobile web",
    course: "Front-end Dev",
    type: "online and physical classes",
    learn: [
      "No prior experience needed it's perfect for beginners.",
      "Master HTML, CSS, and JavaScript to build visually stunning and responsive websites.",
      "Learn to work with modern front-end frameworks like React and Vue for dynamic web applications.",
      "Get skills that can lead to jobs as a front-end developer.",
      "Earn a certificate.",
    ],
  },
  {
    heading: "Full-Stack Web Tutor",
    name: "Solomon Zion",
    image: Solomon,
    students: "158",
    position: "Full-Stack Web Tutor",
    rating: "5/5",
    reviews: "323",
    about:
      "Hi, I'm Solomon, I'm a full stack web developer with more than 5 years of experience. I mentor beginners, intermediate, and advanced developers, helping them build practical skills in desktop and mobile applications",
    course: "Full-Stack Web Development",
    type: "online and physical classes",
    learn: [
      "Master HTML, CSS, and JavaScript to build visually stunning and responsive websites with frameworks like React...",
      "Learn about Backend Technologies of your speciality, PHP and MySQL, Django and Python, and relevant frameworks etc..",
      "Work on real time and real life projects for concrete knowledge and expertises.",
      "Earn a certificate.",
    ],
  },
  {
    heading: "Software Engineering Tutors",
    name: "Olumide     ",
    image: oluPics,
    students: "144",
    position: "Software Engineering Tutor",
    rating: "5/5",
    reviews: "113",
    about:
      "I am Olumide, a software engineer. My students have built real-world apps and its infrastructure and landed remote roles at top tech companies",
    course: "Software engineering course",
    type: "online and physical classes",
    learn: [
      "Learn how to build apps and websites from scratch.",
      "No coding experience needed we'll teach you step by step.",
      "Master popular coding languages like HTML, CSS, JavaScript and Python.",
      "Prepare for jobs like web developer or software engineer.",
      "Earn a certificate.",
    ],
  },
  {
    heading: "UX/UI Design & Copywriting Tutors",
    name: "Ochayi    ",
    image: ochayiPics,
    students: "188",
    position: "UX/UI design & Copy-Writing Tutor",
    rating: "5/5",
    reviews: "109",
    about:
      "I’m Ochayi, a creative UI/UX designer & Copywriter. My students have mastered UX/UI design and Copy-writing, leading to roles in UX/UI design and Copy writing.",
    course: "UX/UI design & Copy-Writing course",
    type: "online classes only",
    learn: [
      "No design experience needed – it’s beginner-friendly ",
      "Understand the basics of user experience (UX) and user interface (UI) design & Copywriting",
      "Master Ux research and how to create apps and website using tools like figma",
      "Get my 2025 secret tips to get jobs in UI/UX design or creative tech roles or copywriting.",
      "Earn a certificate.",
    ],
  },
  {
    heading: "Virtual Assistant Tutors",
    name: "Temitope     ",
    image: temiPics,
    students: "212",
    position: "Virtual Assistant Tutor",
    rating: "5/5",
    reviews: "179",
    about:
      "I’m Temitope,  an experienced virtual assistant working remotely for a UK company. I teach and  help my students gain remote work skills and secure international VA jobs.",
    course: "Virtual Assistant course",
    type: "online and physical classes",
    learn: [
      "Learn how to assist businesses with online tasks like scheduling and emails",
      "Master basic tools like Google Workspace and Microsoft Office.",
      "Improve your communication and organizational skills",
      "Great for remote work and freelancing opportunities.",
      "Earn a certificate.",
    ],
  },
  {
    heading: "IELTS Tutors",
    name: "Olumide     ",
    image: olumidePics,
    students: "500",
    position: "IELTS Coordinator ",
    rating: "5/5",
    reviews: "99",
    about:
      "I’m Olumide, an IELTS coach focused on helping students improve their English skills. My students have successfully scored high IELTS score 99% of the time.",
    course: "IELTS course",
    type: "online classes only",
    learn: [
      "Learn the structure of IELTS reading, writing, listening and speaking sections ",
      "Practice English skills for study, work or migration ",
      "Improve pronunciation, vocabulary and comprehension",
      "Work on realistic IELTS practice tests to prepare you for the exams",
      "Achieve your desired result.",
    ],
  },
  {
    heading: "GRE/GMAT Tutors",
    name: "Anuoluwapo     ",
    image: anuoluwapoPics,
    students: "324",
    position: "GRE/GMAT Tutor",
    rating: "5/5",
    reviews: "234",
    about:
      "I’m Anuoluwapo, a GRE/GMAT expert. I help students master GMAT exams, guiding my students to top schools worldwide ",
    course: "GMAT course",
    type: "online classes only",
    learn: [
      "Develop critical skills for solving GMAT questions",
      "Practice with GMAT mock tests to gain familiarity",
      "Receive tips to manage time and answer questions efficiently ",
      "Ideal for those interested in pursuing a degree abroad",
      "Achieve your desired result.",
    ],
  },
  {
    heading: "Back-end Tutors",
    name: "Nathaniel  ",
    image: natPics,
    students: "121",
    position: "Back-end Tutor",
    rating: "5/5",
    reviews: "99",
    about:
      "I’m Nathaniel, a backend developer who built backend infrastructure for many tech companies.",
    course: "Back-end Dev course",
    type: "online classes only",
    learn: [
      "Its beginner friendly, anyone can apply",
      "Learn server-side programming languages like Node.js, Python, and Ruby to create robust web applications.",
      "Understand databases and the fundamentals of API development, RESTful services, and connecting the front-end to back-end systems.",
      "Get unlocked strategies on how to secure back-end jobs with tech start-ups",
      "Earn a certificate.",
    ],
  },
  {
    heading: "Back-end Tutors",
    name: "Jimoh Sekinat  ",
    image: sekinatPics,
    students: "129",
    position: "Back-end Tutor",
    rating: "5/5",
    reviews: "199",
    about:
      "I’m Sekinat, a backend developer who built backend infrastructure for many tech companies.",
    course: "Back-end Dev course",
    type: "online classes only",
    learn: [
      "Its beginner friendly, anyone can apply",
      "Learn server-side programming languages like Node.js, Python, and Ruby to create robust web applications.",
      "Understand databases and the fundamentals of API development, RESTful services, and connecting the front-end to back-end systems.",
      "Get unlocked strategies on how to secure back-end jobs with tech start-ups",
      "Earn a certificate.",
    ],
  },
  {
    heading: "Data Science Tutors",
    name: "Mary    ",
    image: maryPics,
    students: "324",
    position: "Data Science Tutor",
    rating: "5/5",
    reviews: "234",
    about:
      "I’m Mary, a Data Scientist with years of experience. I help students master data science, guiding my students to getting jobs in tech companies.  ",
    course: "Data Science course",
    type: "online classes only",
    learn: [
      "Its beginner friendly, anyone can enroll.Its beginner friendly, anyone can enroll.",
      "Learn to manipulate and analyze large datasets using Python libraries like Pandas, NumPy, and Matplotlib.",
      "Develop skills in statistical analysis and hypothesis testing to draw insights from data",
      "Get my 2025 hidden strategies how to secure a job.",
      "Earn a certificate.",
    ],
  },
  {
    heading: "UI Design Tutors",
    name: "Adesewa   ",
    image: adesewaPics,
    students: "121",
    position: "UI Design Tutor",
    rating: "5/5",
    reviews: "99",
    about:
      "I’m Adesewa, a creative UI design, with years of experience. I can’t wait to have you as my student.",
    course: "UI Design course",
    type: "online classes only",
    learn: [
      "Its beginner friendly. Anyone can enroll. ",
      "Master design principles, such as layout, typography, and color theory, to create visually appealing user interfaces.",
      "Learn to use design tools like Figma, Sketch, and Adobe XD to bring your designs to life",
      "Get tips on how to get jobs as a UI Designer",
      "Earn a certificate.",
    ],
  },
  {
    heading: "Project Management Tutors",
    name: "Busola    ",
    image: busolaPics,
    students: "324",
    position: "Project Management Tutor",
    rating: "5/5",
    reviews: "234",
    about:
      "I’m Busola, a project manager with many project under my belt. My ex-students are now project managers in top companies.",
    course: "Project Management course",
    type: "online classes only",
    learn: [
      "Its beginner friendly, anyone can enroll.",
      "Master project management methodologies such as Agile, Scrum, and Waterfall to efficiently deliver projects on time and within budget",
      "Learn how to create comprehensive project plans, set clear goals, define project scope, and allocate resources effectively.",
      "Get my 2025 tips on how to get jobs.",
      "Archieve your desired result",
    ],
  },
  {
    heading: "Product Design Tutors",
    name: "Bamidele     ",
    image: bamidelePics,
    students: "121",
    position: "Product Design Tutor",
    rating: "5/5",
    reviews: "99",
    about:
      "I’m Bamidele, a creative product designer, with years of experience. I can’t wait to have you as my student.",
    course: "Product Design course",
    type: "online classes only",
    learn: [
      "I’m Bamidele, a creative product designer, with years of experience. I can’t wait to have you as my student.",
      "Master design principles, such as layout, typography, and color theory, to create visually appealing user interfaces.",
      "Learn to use design tools like Figma, Sketch, and Adobe XD to bring your designs to life",
      "Get tips on how to get jobs as a product Designer",
      "Earn a certificate.",
    ],
  },
  {
    heading: "Cybersecurity Tutors",
    name: "Ayodele    ",
    image: ayoPics,
    students: "324",
    position: "Cybersecurity Tutor",
    rating: "5/5",
    reviews: "234",
    about:
      "I’m Ayodele, cybersecurity expert with multiple certification and years of experience.",
    course: "Cybersecurity course",
    type: "online classes only",
    learn: [
      "Anyone can apply, its beginner friendly.",
      "Understand the fundamentals of cybersecurity, including risk assessment, encryption, and data protection.",
      "Learn to identify and respond to various types of cyber threats, such as malware, phishing, and hacking techniques",
      "Get mentorship for how to get jobs.",
      "Earn a certificate.",
    ],
  },
  {
    heading: "Front-end Dev Tutors",
    name: "Dayo   ",
    image: dayoPics,
    students: "198",
    position: "Front-end DevTutor",
    rating: "5/5",
    reviews: "123",
    about:
      "I’m Dayo, I’m a front-end dev with years of experience. I mentor beginners, helping them build practical skills for real-world desktop and mobile web",
    course: "Front-end Dev",
    type: "online classes only",
    learn: [
      "No prior experience needed – it’s perfect for beginners.  ",
      "Master HTML, CSS, and JavaScript to build visually stunning and responsive websites.",
      "Learn to work with modern front-end frameworks like React and Vue for dynamic web applications.",
      "Get skills that can lead to jobs as a front-end developer.",
      "Earn a certificate.",
    ],
  },
  {
    heading: "Network Engineering & Java Backend Tutors",
    name: "Timi",
    image: timiPics,
    students: "324",
    position: "Network Engineering & Java Backend Tutor",
    rating: "5/5",
    reviews: "234",
    about:
      "I’m Timi, a Network Engineer and backend Java developer with multiple certifications and years of experience managing network systems.",
    course: "Network Engineering and Java Backend course",
    type: "online and physical classes",
    learn: [
      "Perfect for beginners, anyone can enroll.",
      "Master networking concepts like IP addressing, subnets, and routing to build and maintain secure networks",
      "Gain experience in setting up and managing network protocols like TCP/IP, DNS, and DHCP",
      "Get tips how how to get jobs in 2025.",
      "Earn a certificate.",
    ],
  },
];

// const API_ENDPOINT = "https://api.lantern.academy/api/reviews";
// console.log(`Submitting review to: ${API_ENDPOINT}`); // Debugging log
// console.log("Sending review data:", JSON.stringify(reviewData, null, 2));


const FindTutorPage = () => {
  const [ratings, setRatings] = useState(() => tutors.map(() => 0));
  const [reviews, setReviews] = useState(() => tutors.map(() => "")); // Store reviews
  const [loading, setLoading] = useState(() => tutors.map(() => false)); // Loading state for each tutor
  const [messages, setMessages] = useState(() => tutors.map(() => "")); // Store success/error messages

  const [reviewModalId, setReviewModalId] = useState(null);

    const openReviewModal = (tutorIndex) => {
      setReviewModalId(tutorIndex);
    };

    const closeReviewModal = () => {
      setReviewModalId(null);
    };



  const handleStarClick = (index, tutorIndex) => {
    setRatings((prevRatings) => {
      const newRatings = [...prevRatings];
      newRatings[tutorIndex] = index + 1;
      return newRatings;
    });

    // Clear error when a rating is selected
    setMessages((prevErrors) => {
      const newErrors = [...prevErrors];
      newErrors[tutorIndex] = "";
      return newErrors;
    });
  };

  const handleReviewChange = (event, tutorIndex) => {
    setReviews((prevReviews) => {
      const newReviews = [...prevReviews];
      newReviews[tutorIndex] = event.target.value;
      return newReviews;
    });
  };

  const handleReviewSubmit = async (tutorIndex) => {
    if (ratings[tutorIndex] === 0) {
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages];
        newMessages[tutorIndex] = "Please rate the tutor before submitting.";
        return newMessages;
      });
      return;
    }

    setLoading((prevLoading) => {
      const newLoading = [...prevLoading];
      newLoading[tutorIndex] = true;
      return newLoading;
    });

    const reviewData = {
      tutor: tutors[tutorIndex].name,
      rating: ratings[tutorIndex],
      message: reviews[tutorIndex],
    };


    const API_ENDPOINT = "https://api.lantern.academy/api/reviews";
    console.log(`Submitting review to: ${API_ENDPOINT}`); // Debugging log
    console.log("Sending review data:", JSON.stringify(reviewData, null, 2));

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      setMessages((prevMessages) => {
        const newMessages = [...prevMessages];
        newMessages[tutorIndex] = "Review submitted successfully!";
        return newMessages;
      });

      console.log("Review submitted successfully!");
    } catch (error) {
      console.error("Error submitting review:", error);
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages];
        newMessages[tutorIndex] = "Failed to submit review. Please try again.";
        return newMessages;
      });
    } finally {
      setLoading((prevLoading) => {
        const newLoading = [...prevLoading];
        newLoading[tutorIndex] = false; // Reset loading
        return newLoading;
      });
    }
  };

  // StudentDetailsForm
  const [openModalId, setOpenModalId] = useState(null);

  const openModal = (id) => {
    setOpenModalId(id); // Open the modal for the specific item
  };

  const closeModal = () => {
    setOpenModalId(null); // Close all modals
  };
  const handleOverlayClick = (e) => {
    // Close modal only if the overlay itself is clicked
    if (e.target.id === "overlay") {
      closeModal();
    }
  };

  return (


<div id="find-tutor" className="find-tutor-page px-4 py-8 sm:px-6">
  <TopDesign />
  
  <div className="graduation-cap">
    <img src={Graduation} alt="graduation cap" />
  </div>

  <header className="text-center mb-8">
    <h1 className="desktop-heading">Select a Tutor and Register Here</h1>
  </header>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {tutors.map((tutor, tutorIndex) => (
      <div key={tutorIndex} className="p-6 bg-white shadow-lg rounded-xl border border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-cover bg-center rounded-full" style={{ backgroundImage: `url(${tutor.image})` }}></div>
          <div>
            <h2 className="text-lg font-semibold text-darkBlue">{tutor.name}</h2>
            <p className="text-gray-500 text-sm">{tutor.position}</p>
          </div>
        </div>

        <div className="mt-3 flex items-center space-x-2">
          <span className="text-yellow-400 text-base">
            {Array(parseInt(tutor.rating.split('/')[0])).fill(0).map((_, i) => (
              <span key={i}>&#9733;</span>
            ))}
            {Array(5 - parseInt(tutor.rating.split('/')[0])).fill(0).map((_, i) => (
              <span key={i + 5} className="text-gray-300">&#9734;</span>
            ))}
          </span>
          <span className="text-gray-500 text-sm">{tutor.rating} ({tutor.reviews} reviews)</span>
        </div>

        <div className="mt-4">
          <h3 className="text-darkBlue font-medium text-sm">{tutor.course}</h3>
          <p className="text-gray-500 text-xs">({tutor.type})</p>
        </div>

        <ul className="mt-2 text-xs text-gray-600 list-disc pl-4 space-y-1 tutor-learn">
          {tutor.learn.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <button 
          onClick={() => openModal(tutorIndex)} 
          className="mt-4 w-full bg-darkBlue text-white py-2 text-sm rounded-lg hover:bg-opacity-90 transition"
        >
          I’m Picking You
        </button>

        <button 
          onClick={(e) => { e.stopPropagation(); openReviewModal(tutorIndex); }}
          className="mt-2 w-full text-darkBlue text-sm underline"
        >
          Leave a Review
        </button>

        {openModalId === tutorIndex && (
          <div 
            id="overlay"
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={handleOverlayClick}
          >
            <div className="bg-white p-6 rounded-lg shadow-xl w-96">
              <StudentDetailsForm closeModal={closeModal} />
            </div>
          </div>
        )}

        {reviewModalId === tutorIndex && (
          <div 
            id="review-overlay"
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          >
            <div className="bg-white p-6 rounded-lg shadow-xl w-96">
              <h3 className="text-darkBlue text-lg font-semibold mb-2">Leave a Review</h3>
              <div className="flex space-x-1 mb-2">
                {Array(5).fill().map((_, index) => (
                  <span
                    key={index}
                    className={index < ratings[tutorIndex] ? "text-yellow-400" : "text-gray-300"}
                    onClick={() => handleStarClick(index, tutorIndex)}
                    style={{ cursor: "pointer" }}
                  >
                    &#9734;
                  </span>
                ))}
              </div>
              <textarea 
                className="w-full p-2 border rounded-md mb-2" 
                placeholder="Write your review here..."
                value={reviews[tutorIndex]}
                onChange={(event) => handleReviewChange(event, tutorIndex)}
              ></textarea>
              <button 
                className="w-full bg-darkBlue text-white py-2 text-sm rounded-lg hover:bg-opacity-90 transition"
                onClick={() => handleReviewSubmit(tutorIndex)}
                disabled={loading[tutorIndex]}
              >
                {loading[tutorIndex] ? "Submitting..." : "Submit"}
              </button>
              {messages[tutorIndex] && (
                <p className={`mt-1 text-sm font-medium ${messages[tutorIndex] === "Review submitted successfully!" ? "text-green-600 bg-green-100 border border-green-400 p-2 rounded-lg" : "text-red-600 bg-red-100 border border-red-400 p-2 rounded-lg"}`}>
                  {messages[tutorIndex]}
                </p>
              )}
              <button 
                className="mt-2 text-sm text-gray-600 underline"
                onClick={(e) => { e.stopPropagation(); closeReviewModal(); }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
</div>

    


  );
};

export default FindTutorPage;
