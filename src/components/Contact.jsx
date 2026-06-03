import { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_dqdu0f2", // 🔹 Replace with your Service ID
        "template_8pb4v8o", // 🔹 Replace with your Template ID
        {
          name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "33J3VRR3BUolIUiJz" // 🔹 Replace with your Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setStatus("✅ Message Sent Successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setStatus("❌ Failed to send message. Try again.");
        }
      );
  };
const { t } = useTranslation();
  return (
    <section
      id="contact"
      className="px-6 py-20 text-center bg-gray-100 md:px-16 dark:bg-gray-900"
    >
      <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-5xl dark:text-white">
        {t("ContactHeading")}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl p-8 mx-auto space-y-6 bg-white shadow-lg dark:bg-gray-800 rounded-2xl"
      >
        <input
          type="text"
          name="name"
          placeholder=  {t("Yourname")}
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder={t("Youremail")}
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500"
            
        />

        <textarea
          name="message"
          rows="5"
          placeholder={t("Yourmessage")}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
        >
         {t("Sendmessage")}
        </button>

        {status && <p className="mt-4 text-gray-700 dark:text-gray-300">{status}</p>}
      </form>
    </section>
  );
}
