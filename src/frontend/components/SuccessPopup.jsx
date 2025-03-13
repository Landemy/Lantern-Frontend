import congratlationicon from "../../assets/congratulation.svg";

const SuccessPopup = ({ onClose }) => {
  const redirectToTelegram = () => {
    const telegramLink = "https://t.me/LANTERNCOMMUNITY"; // Replace with actual Telegram link
    window.open(telegramLink, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl text-center max-w-md w-full mx-4">
        <img src={congratlationicon} alt="Success" className="mx-auto w-16 mb-4" />
        
        <h2 className="text-[#152F56] font-semibold text-lg">Success!</h2>
        
        <p className="text-[#152F56] text-sm mt-2">
          Thank you for trusting us to get you a top coach on your endeavor!
        </p>
        
        <p className="text-[#152F56] text-sm my-4">
          Your pick has been registered. Click the link below to join our community.
        </p>

        <p className="text-[#152F56] font-bold text-sm my-4">
          You will receive an email, and our Customer Support Rep will reach out to you soon.
        </p>

        <button
          onClick={redirectToTelegram}
          className="mt-4 px-6 py-2 bg-[#E3EDFD] text-[#152F56] hover:bg-[#152F56] hover:text-white transition-all rounded-lg w-full font-semibold"
        >
          🎉 Congratulations!
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
