"use client";
import AnimatedDiv from "../components/AnimatedDiv";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Link from "next/link";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

const ContactMe = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: any) {
    e.preventDefault();
    // console.log(name, email, message);

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Gautham Vanjre",
      message: message,
    };

    console.log(serviceId, templateId, publicKey);

    emailjs.send(serviceId!, templateId!, templateParams, publicKey!).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    // // e.target.reset();
  }

  return (
    <>
      <div className="px-[1.2rem] md:px-[9rem] opacity-70">
        <Link href={"../"}>
          <MdOutlineKeyboardBackspace
            className="my-[1.3rem] mt-[2rem]"
            size={25}
          />
        </Link>
      </div>
      <AnimatedDiv ClassName="px-[1.2rem] md:px-[9rem] flex flex-col justify-center items-center">
        <AnimatedDiv ClassName="max-w-[400px]  overflow-hidden flex flex-col ">
          <h2 className="text-center font-bold text-sm text-[#FF8911] uppercase tracking-wider mb-4">
            Resume
          </h2>
          <p className="text-center text-2xl sm:text-3xl mb-4 font-extrabold">
            My Resume
          </p>
          <div className="p-3 dark:bg-zinc-800 bg-zinc-100 rounded-lg">
            <div className="form-group-total">
              <form onSubmit={sendEmail} className="emailForm">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  cols={30}
                  rows={10}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit">Send Email</button>
              </form>
            </div>
          </div>
        </AnimatedDiv>
      </AnimatedDiv>
    </>
  );
};

export default ContactMe;
