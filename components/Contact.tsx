import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { TiInfo } from "react-icons/ti";
// import {strapi_end_point} from '../config';
// import {validateEmail} from '../utils/input-validation';
const Contact: NextPage = () => {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userContact, setUserContact] = useState<string>("");
  const [userProfession, setUserProfession] = useState("Student");
  const [subject, setSubject] = useState<string>("");
  const [userMessage, setUserMessage] = useState("");
  const [userEmailError, setUserEmailError] = useState<string>("");
  const [subjectError, setSubjectError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [formSent, setFormSent] = useState<boolean>(false);

  const handleContact = async () => {
    if (userEmail.length == 0) {
      return setUserEmailError("Email is required");
    } else if (userEmail.length > 0) {
      {
        /* && !validateEmail(userEmail) */
      }
      return setUserEmailError("Please enter a valid email address");
    } else {
      setUserEmailError("");
    }

    const clearForm = () => {
      setUserName("");
      setUserEmail("");
      setUserContact("");
      setUserProfession("Student");
      setSubject("");
      setUserMessage("");
    };

    if (subject.length == 0) {
      return setSubjectError("Please enter contact subject!");
    } else {
      setSubjectError("");
    }

    try {
      setLoading(true);
      // const response = await axios.post(`${strapi_end_point}/api/contacts`, {
      // 	data: {
      // 		name: userName,
      // 		email: userEmail,
      // 		contact: userContact,
      // 		profession: userProfession,
      // 		subject: subject,
      // 		message: userMessage,
      // 	},
      // });
      setLoading(false);
      setFormSent(true);
      clearForm();
      setTimeout(() => {
        setFormSent(false);
      }, 5000);
    } catch (error) {
      setLoading(true);
      if (axios.isAxiosError(error)) {
        if (error.response?.data.error.message.toLowerCase().includes("email"))
          return setUserEmailError(error.response?.data.error.message);
      }
      setLoading(false);
    }
  };

  return (
    <>
      <section className="pt-[60px] pb-[60px] sm:pt-[80px] sm:pb-[80px] lg:pt-[120px] lg:pb-[120px] px-4">
        <div className="innerDiv max-w-screen-xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="bg-primary py-28 lg:px-14 px-6 lg:mb-0 mb-6 rounded-xl">
              <h3 className="text-black md:text-4xl text-2xl font-medium mb-3">
                How can we help?
              </h3>
              <p className="text-black">
                Have questions or need to report an issue with a Gurucool
                product or service? We&#39;ve got you covered.
              </p>
              <ul className="mt-6 ">
                <li className="mb-4">
                  <a
                    href="mailto:admissions@gurucool.xyz"
                    className="flex items-center"
                  >
                    <span className="flex items-center justify-center bg-black md:h-12 md:w-12 w-9 h-9 rounded-full md:text-xl text-sm">
                      <i className="fas fa-envelope text-primary"></i>
                    </span>
                    <span className="ml-3 md:text-lg text-base font-medium">
                      contact@gurucool.xyz
                    </span>
                  </a>
                </li>
                <li className="mb-4">
                  <a className="flex items-center">
                    <span className="flex items-center justify-center bg-black md:h-12 md:w-12 w-9 h-9 rounded-full md:text-xl text-sm">
                      <i className="far fa-phone text-primary"></i>
                    </span>
                    <span className="ml-3 md:text-lg text-base font-medium">
                      9953644971
                    </span>
                  </a>
                </li>
                <li className="mb-4">
                  <a href="tel:8147354051" className="flex items-center">
                    <span className="flex items-center justify-center bg-black md:h-12 md:w-12 w-9 h-9 rounded-full md:text-xl text-sm">
                      <i className="far fa-phone text-primary"></i>
                    </span>
                    <span className="ml-3 md:text-lg text-base  font-medium">
                      9119145922
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <p className="text-[#444444] text-lg font-medium mb-4">
                Have questions or need to report an issue with a Gurucool
                product or service? We&#39;ve got you covered.
              </p>
              <div className="mb-3">
                <input
                  className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12"
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12"
                  placeholder="Email ID"
                  type="email"
                  id="email"
                  name="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <span className="text-[#E63946] mt-1 ml-3 text-xs flex align-center">
                  {userEmailError.length > 0 && (
                    <>
                      <TiInfo className="text-sm mr-1" />
                      {userEmailError}
                    </>
                  )}
                </span>
              </div>
              <div className="mb-3">
                <input
                  className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12"
                  placeholder="Phone Number"
                  type="text"
                  id="contact"
                  name="contact"
                  value={userContact}
                  onChange={(e) =>
                    setUserContact(e.target.value.replace(/[^\d]+/g, ""))
                  }
                />
              </div>
              <div className="mb-3">
                <select
                  className="appearance-none placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12"
                  name="profession"
                  id="profession"
                  value={userProfession}
                  onChange={(e) => setUserProfession(e.target.value)}
                >
                  <option>You are </option>
                  <option value="Student">Student</option>
                  <option value="Educator">Educator</option>
                </select>
              </div>
              <div className="mb-3">
                <input
                  className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12"
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <span className="text-[#E63946] mt-1 ml-3 text-xs flex align-center">
                  {subjectError.length > 0 && (
                    <>
                      <TiInfo className="text-sm mr-1" />
                      {subjectError}
                    </>
                  )}
                </span>
              </div>
              <div className="mb-3">
                <textarea
                  className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12"
                  id="message"
                  placeholder="Your Message"
                  name="message"
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                ></textarea>
              </div>
              <span className="text-yellow block my-6 text-base">
                {formSent && (
                  <>
                    You&#39;re response has been saved! Our team will reach out to
                    you soon.
                  </>
                )}
              </span>
              <div className="text-center mb-3">
                <button
                  type="submit"
                  className="bg-primary px-12 rounded-full py-3 flex items-center justify-center mx-auto"
                  onClick={handleContact}
                  disabled={loading}
                >
                  {loading && <span className="spinner-loader mr-2"></span>}
                  Submit
                </button>
              </div>
              <p>
                By tapping submit, you agree to the{" "}
                <Link href="/termsofservice" className="underline">
                  Terms of Service
                </Link>
               {" "} and{" "}
                <Link href="/privacypolicy" className="underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
