import React from "react";
import ContactFormContent from "../sub/ContactFormContent";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Let us talk about your next Project
      </h1>
      <div
        style={{ backgroundImage: "url(bg-3.jpg)" }}
        className="w-screen h-screen bg-cover bg-center flex items-center justify-center mt-[-200px]"
        id="contact"
      >
        <div
          style={{ backgroundImage: "url(atombg-comp.webp)" }}
          className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white"
        >
          <div className="absolute left-20 bottom-16 w-[70%] md:w-[30%] z-10">
            <ContactFormContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
