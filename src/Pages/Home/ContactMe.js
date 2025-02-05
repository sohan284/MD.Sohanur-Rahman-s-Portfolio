import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mw5ra7q",
        "template_suvcvch",
        form.current,
        "oMupwJAS1a7hnvO6w"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div 
      id="contact"
      className=" rounded-lg mb-10"
      >
      <h1 data-aos="zoom-in"
     className='text-4xl text-center my-20 uppercase font-bold mx-auto container py-2 foot text-accent border-x-8'>Contact</h1>
      <div  class="hero ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left lg:pl-10 w-1/2">
            <h1 data-aos="fade-up"
     data-aos-duration="200"  class="text-5xl text-primary font-bold">Get In Touch!</h1>
            <p  data-aos="fade-up"
     data-aos-duration="300" class="py-6 text-primary">
              Send me email if you think I can help you out with any of your web
              development related projects.
            </p>
          </div>
          <div  data-aos="fade-up"
     data-aos-duration="300" class="card flex-shrink-0 skills w-full max-w-sm shadow-2xl bg-black contact">
            <form ref={form} onSubmit={sendEmail} class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-primary font-semibold">Name</span>
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  class="input input-bordered bg-primary text-black"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-primary font-semibold">Email</span>
                </label>
                <input
                  required
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  class="input input-bordered bg-primary text-black"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-primary font-semibold">Message</span>
                </label>
                <textarea
                  className="bg-transparent bg-[#bebebe] text-black border-gray-600 border rounded"
                  required
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <div class="form-control mt-6">
                <input type="submit" className="btn" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;