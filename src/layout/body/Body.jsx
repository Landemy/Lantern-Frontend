import BecomeTutorForm from "../../frontend/auth/BecomeTutorForm";

import FindTutorPage from "../../frontend/components/FindTutorPage";
import Fqa from "../../frontend/components/Fqa";
import ChatButton from "../../frontend/components/ChatButton";
import Homepage from "../../frontend/components/Homepage";
import Testimonials from "../../frontend/components/Testimonials";
import Footer from "../footer/Footer";
import Marque from "../../frontend/components/Marque";

const Body = () => {
  return (
    <div>
      <Marque />
      <Homepage />
      <FindTutorPage />
      <Testimonials />
      <ChatButton />
      <Fqa />
      <BecomeTutorForm />
      <Footer />

    </div>
  );
};

export default Body;
