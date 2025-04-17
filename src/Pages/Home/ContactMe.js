import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const particlesRef = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    <div className="background-effect">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      <div className="grid-overlay"></div>

      {/* Particles container with ref */}
      <div className="particles" ref={particlesRef}></div>
    </div>;
    // Make sure to replace these with your actual EmailJS credentials
    emailjs
      .sendForm(
        "service_mw5ra7q",
        "template_suvcvch",
        form.current,
        "oMupwJAS1a7hnvO6w"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSubmitStatus({
            success: true,
            message: "Message sent successfully!",
          });
          form.current.reset();
          setTimeout(() => setSubmitStatus(null), 5000); // Clear status after 5 seconds
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setSubmitStatus({
            success: false,
            message: "Failed to send message. Please try again.",
          });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-16 px-4 ">
      <h2
        data-aos="zoom-in"
        className="text-4xl text-center mb-16 uppercase font-bold mx-auto container py-2 text-accent border-x-4 border-accent"
      >
        Contact Me
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h3
            data-aos="fade-up"
            data-aos-duration="300"
            className="text-5xl font-bold text-primary mb-6"
          >
            Let's Connect
          </h3>
          <p
            data-aos="fade-up"
            data-aos-duration="400"
            className="text-lg text-gray-300 mb-8 max-w-lg"
          >
            Have a project in mind? Need a custom web solution? I'd love to hear
            from you! Fill out the form and I'll get back to you as soon as
            possible.
          </p>

          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-gray-300"
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>sr.sohan088@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span>+880 1788175088</span>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="600"
          className="lg:w-1/2 w-full max-w-md"
        >
          <div className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  className="block text-primary font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label
                  className="block text-primary font-medium mb-2"
                  htmlFor="user_email"
                >
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="user_email"
                  id="user_email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label
                  className="block text-primary font-medium mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                ></textarea>
              </div>

              {submitStatus && (
                <div
                  className={`p-3 rounded-lg text-center ${
                    submitStatus.success
                      ? "bg-green-800 text-green-100"
                      : "bg-red-800 text-red-100"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-6 rounded-lg bg-accent hover:bg-accent-dark text-white font-medium transition-colors duration-300 flex items-center justify-center ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
