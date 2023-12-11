import React from "react";

const ContactFormContent = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      <p className="mb-3 text-gray-200">
        Feel free to reach out to me through the following channels:
      </p>
      <ul className="list-disc list-inside text-gray-200">
        <li>
          Email:{" "}
          <a href="mailto:mokayasamson950@gmail.com">
            mokayasamson950@gmail.com
          </a>
        </li>
        <li>
          Phone: <a href="tel:+254794251657">+254794251657</a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/samson-mokaya-95016a1a4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Samson Mokaya
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/SamsonMokaya"
            target="_blank"
            rel="noopener noreferrer"
          >
            SamsonMokaya
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactFormContent;
