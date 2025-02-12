import congratlationicon from "../../assets/congratulation.svg";

const SuccessPopup = ({ onClose }) => {

    const redirectToTelegram = () => {
        const telegramLink = "https://t.me/LANTERNCOMMUNITY"; // Replace with your actual Telegram group link
        window.open(telegramLink, "_blank"); // Open in a new tab
        onClose(); // Close the popup
      };


  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
        <img src={congratlationicon} alt="Success" className="mx-auto w-14 mb-4" />
        <p className="text-[#152F56] text-[12px] mt-2">Thank you for trusting us to get you a top coach on your endeavor!
        </p>
        <p className="text-[#152F56] text-[18px] my-6">Your pick has been registered,click on the link”congratulations” to join our community</p>
        <p className="text-[#152F56] font-bold text-[18px] my-6">However you’ll get a mail and our Customer  Support Rep  will reach out to you to proceed 
        </p>
        <button
          onClick={redirectToTelegram}
          className="mt-4 px-6 py-2 bg-[#E3EDFD] text-[#152F56] hover:bg-[#152F56] hover:text-[#fff] w-full"
        >
          Congratulations 🎉
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
