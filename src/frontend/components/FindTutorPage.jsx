
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
    heading: "Full-Stack Web Tutor",
    name: "Solomon   ",
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
      "Master HTML, CSS, and JavaScript to build visually stunning and responsive websites with frameworks",
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
    <div id="find-tutor" className="find-tutor-page">
      <TopDesign />
      <div className="graduation-cap">
        <img src={Graduation} alt="graduation cap" />
      </div>
      <header className="header">
        <h1 className="desktop-heading">Select a Tutor and Register Here</h1>
        <h1 className="mobile-heading">Select a Tutor</h1>

      </header>
      <div className="tutor-grid">
        {tutors.map((tutor, tutorIndex) => (
          <div key={tutorIndex} className="tutor-section">

            <div className="tutor-title-heading">{tutor.heading}</div>

            {/* Tutor Card */}
            <div className="tutor-card">

              <div className="tutor-info">
                <div
                  className="tutor-image"
                  style={{ backgroundImage: `url(${tutor.image})` }}
                ></div>
                <div className="tutor-details">
                  <div className="tutor-name-and-taught">
                    <h2>{tutor.name}</h2>
                    <p className="taught">Taught {tutor.students} students</p>
                  </div>
                  <p className="title">{tutor.position}</p>
                </div>

              </div>
              <p className="highest-rated">
                Highest rated
                <span className="rating-stars">
                  {Array(parseInt(tutor.rating.split('/')[0])).fill(0).map((_, i) => (
                    <span key={i}>&#9733;</span> // Filled stars (★)
                  ))}
                  {Array(5 - parseInt(tutor.rating.split('/')[0])).fill(0).map((_, i) => (
                    <span key={i + 5}>&#9734;</span> // Empty stars (☆)
                  ))}
                </span>
                <span className="rating-number">
                  {tutor.rating} rating ({tutor.reviews} reviews)
                </span>
              </p>
              <h3 className="aboutHeading"> About me </h3>
              <p className="about">{tutor.about}</p>
              <h3 className="course">{tutor.course}</h3>
              <p className="courseType"> ({tutor.type})</p>
              <p className="learn">What you will learn</p>
              <ul>
                {tutor.learn.map((item, idx) => (
                  <li key={idx}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="23" viewBox="0 0 14 23" fill="none">
                      <path d="M9.17279 15.2731C9.39314 15.1104 9.65258 15 9.9265 15C10.5194 15 11 15.4806 11 16.0735V20.3818C11 21.8674 9.30041 22.7118 8.11653 21.8144C7.47978 21.3318 6.59423 21.3323 5.95265 21.8085C4.73937 22.709 3 21.8564 3 20.3455V16.112C3 15.4979 3.49785 15 4.11198 15C4.34044 15 4.56294 15.0711 4.75055 15.2015C5.43357 15.6761 5.98236 16 7 16C7.81504 16 8.58117 15.71 9.17279 15.2731ZM13.926 8.277C13.977 8.424 14 8.574 14 8.722C14 9.171 13.778 9.605 13.385 9.878C12.129 10.748 12.295 10.529 11.823 11.945C11.625 12.536 11.053 12.935 10.409 12.935H10.405C8.856 12.93 9.126 12.847 7.877 13.724C7.615 13.908 7.308 14 7 14C6.692 14 6.385 13.908 6.124 13.725C4.875 12.847 5.144 12.931 3.596 12.936H3.592C2.947 12.936 2.376 12.537 2.179 11.946C1.706 10.529 1.868 10.748 0.617 9.879C0.222 9.605 0 9.171 0 8.722C0 8.574 0.0239999 8.424 0.0739999 8.278C0.557 6.867 0.558 7.139 0.0739999 5.723C0.0239999 5.576 0 5.426 0 5.278C0 4.828 0.222 4.395 0.616 4.121C1.867 3.253 1.705 3.473 2.178 2.054C2.375 1.463 2.947 1.064 3.591 1.064H3.595C5.14 1.069 4.866 1.159 6.123 0.274C6.385 0.091 6.692 0 7 0C7.308 0 7.615 0.091 7.876 0.274C9.125 1.152 8.856 1.069 10.404 1.064H10.408C11.053 1.064 11.624 1.463 11.822 2.054C12.295 3.47 12.129 3.251 13.384 4.121C13.778 4.394 14 4.828 14 5.277C14 5.425 13.977 5.576 13.926 5.722C13.443 7.132 13.441 6.861 13.926 8.277ZM9.96898 6.02009C10.263 5.72048 10.2606 5.23987 9.96367 4.94317C9.66227 4.64204 9.17293 4.6452 8.87544 4.95019L6.8713 7.00488C6.45743 7.42918 5.77951 7.44243 5.34938 7.03462L5.12754 6.82428C4.82452 6.53699 4.34777 6.54345 4.05265 6.83884C3.74878 7.14299 3.75272 7.63701 4.06139 7.93628L4.82634 8.67792C5.54484 9.37452 6.69099 9.36027 7.39195 8.64601L9.96898 6.02009Z" fill="url(#paint0_linear_161_720)" />
                      <defs>
                        <linearGradient id="paint0_linear_161_720" x1="7" y1="0" x2="7" y2="24" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#152F56" />
                          <stop offset="1" stopColor="#2E67BC" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>


              <button onClick={() => openModal(tutorIndex)} className="register-btn">I’m Picking You</button>

              {openModalId === tutorIndex && (
                <div
                  id="overlay"
                  onClick={handleOverlayClick}

                >
                  <StudentDetailsForm closeModal={closeModal} />
                </div>
              )}

              <hr />

              <div className="review-section">
                <h3><i className="fas fa-edit"></i>Reviews</h3>
                <p>We want to hear from you; how was your learning experience with{" "}
                  {tutor.name.split(" ")[0]}? </p>
                <p>Rate {tutor.name.split(" ")[0]}  </p>
                <div className="ratings-stars">
                  {Array(5).fill().map((_, index) => (
                    <span
                      key={index}
                      className={index < ratings[tutorIndex] ? "filled" : "empty"}
                      onClick={() => handleStarClick(index, tutorIndex)}
                      style={{ cursor: "pointer" }}
                    >
                      &#9734;
                    </span>
                  ))}
                </div>
                <span className="optional">(Optional)</span>
                <textarea className="review-textarea" placeholder="Write your review here..." value={reviews[tutorIndex]}
                  onChange={(event) => handleReviewChange(event, tutorIndex)}></textarea>
                <button className="register-btn submit-btn" onClick={() => handleReviewSubmit(tutorIndex)} disabled={loading[tutorIndex]}>{loading[tutorIndex] ? "Submitting..." : "Submit"}</button>
              {messages[tutorIndex] && (
                <p
                  className={`mt-1 text-sm font-medium ${messages[tutorIndex] === "Review submitted successfully!"
                      ? "text-green-600 bg-green-100 border border-green-400 p-2 rounded-lg"
                      : "text-red-600 bg-red-100 border border-red-400 p-2 rounded-lg"
                    }`}
                >
                  {messages[tutorIndex]}
                </p>
              )}
              </div>
            </div>
            {/* <div className="seeAllContainer">
<button className="seeAll"> See all {tutor.heading}
<svg xmlns="http://www.w3.org/2000/svg" width="90" height="16" viewBox="0 0 90 16" fill="none" className="arrow">
    <path d="M89.7071 8.70711C90.0976 8.31658 90.0976 7.68342 89.7071 7.29289L83.3431 0.928932C82.9526 0.538408 82.3195 0.538408 81.9289 0.928932C81.5384 1.31946 81.5384 1.95262 81.9289 2.34315L87.5858 8L81.9289 13.6569C81.5384 14.0474 81.5384 14.6805 81.9289 15.0711C82.3195 15.4616 82.9526 15.4616 83.3431 15.0711L89.7071 8.70711ZM0 9H89V7H0V9Z" fill="#305FCD"/>
  </svg>
</button>
</div> */}
          </div>
        ))}
      </div>

    </div>
  );
};

export default FindTutorPage;
