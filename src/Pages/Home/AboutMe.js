import React from "react";

const AboutMe = () => {
  return (
    <div className="container mb-10 mx-auto">
      <div data-aos="fade-up" className="  skills shadow-xl p-3 rounded-md">
        <div className="flex justify-evenly mt-5 flex-col lg:flex-row  items-center">
          <div data-aos="zoom-in-up">
            <img
              className="rounded-lg"
              width={220}
              src="https://i.ibb.co/wdKzct8/SrPhoto.jpg"
              alt=""
            />
          </div>
          <div>
            {" "}
            <p className="text-accent text-xl m-5">
              <p
                data-aos="fade-up"
                data-aos-duration="100"
                className="font-bold text-3xl text-center"
              >
                MD.Sohanur Rahman Sohan
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="200"
                className="font-semibold text-xl text-center"
              >
                Full Stack Developer
              </p>
            </p>
          </div>
        </div>
      </div>
      <p
        data-aos="fade-up"
        data-aos-duration="500"
        className="text-md p-3 text-accent mb-5"
      >
        I am a passionate full stack developer with 1.5 years of experience,
        specializing in building dynamic and responsive web applications. I
        graduated in 2022 from Daffodil International University with a degree
        in Software Engineering. My projects showcase a blend of front-end and
        back-end technologies, demonstrating my ability to create seamless user
        experiences and robust server-side solutions. Explore my work to see my
        commitment to innovation and problem-solving in the tech space.
      </p>
      <div className="grid grid-cols-1 gap-5">
        <div className="border foot   p-3 rounded-md">
          <h1
            data-aos="fade-up"
            data-aos-duration="600"
            className="text-4xl mb-2 text-center uppercase text-accent font-semibold "
          >
            Skills
          </h1>{" "}
          <hr />
          <div className="ml-5 mt-5 flex justify-evenly flex-col lg:flex-row sm:flex-row">
            <div className="flex my-2">
              <img
                data-aos="fade-up"
                width={30}
                src="https://i.ibb.co/LYbZ6mF/732212.png"
                alt=""
              />
              <progress
                data-aos="fade-up"
                class="progress mt-3 progress-primary border h-3 ml-3 w-64"
                value="95"
                max="100"
              ></progress>
            </div>
            <div className="flex my-2">
              <img
                data-aos="fade-up"
                width={30}
                src="https://i.ibb.co/9Y3DqkV/732190.png"
                alt=""
              />
              <progress
                data-aos="fade-up"
                class="progress mt-3 progress-primary border h-3 ml-3 w-64"
                value="93"
                max="100"
              ></progress>
            </div>
          </div>
          <div className="ml-5 flex justify-evenly flex-col lg:flex-row sm:flex-row">
            <div className="flex my-2">
              <img
                data-aos="fade-up"
                width={30}
                src="https://i.ibb.co/tHVGhsN/bootstrapicon.png"
                alt=""
              />
              <progress
                data-aos="fade-up"
                class="progress mt-3 progress-primary border h-3 ml-3 w-64"
                value="87"
                max="100"
              ></progress>
            </div>
            <div className="flex my-2">
              <img
                data-aos="fade-up"
                width={30}
                src="https://i.ibb.co/F6fMZ2V/qy0ctxjhdgvvj6e4ra10.png"
                alt=""
              />
              <progress
                data-aos="fade-up"
                class="progress mt-3 progress-primary border h-3 ml-3 w-64"
                value="94"
                max="100"
              ></progress>
            </div>
          </div>
          <div className="ml-5 flex justify-evenly flex-col lg:flex-row sm:flex-row">
            <div className="flex my-2">
              <img
                data-aos="fade-up"
                width={30}
                src="https://i.ibb.co/SBrQdDX/png-transparent-react-logo-javascript-redux-vuejs-angular-angularjs-expressjs-front-and-back-ends-th.png"
                alt=""
              />
              <progress
                data-aos="fade-up"
                class="progress mt-3 progress-primary border h-3 ml-3 w-64"
                value="80"
                max="100"
              ></progress>
            </div>
            <div className="flex my-2">
              <img
                data-aos="fade-up"
                width={30}
                src="https://i.ibb.co/HKhT2Yc/kisspng-react-javascript-library-github-5af70e3c5c73d5-5239164815261404763787.png"
                alt=""
              />
              <progress
                data-aos="fade-up"
                class="progress mt-3 progress-primary border h-3 ml-3 w-64"
                value="85"
                max="100"
              ></progress>
            </div>
          </div>
          <div className="ml-5 flex justify-evenly flex-col lg:flex-row sm:flex-row">
            <div className="flex my-2">
              <img
                data-aos="fade-up"
                width={30}
                src="https://i.ibb.co/HnZkrVj/kisspng-firebase-cloud-messaging-computer-icons-google-clo-bell-notification-youtube-transparent-amp.png"
                alt=""
              />
              <progress
                data-aos="fade-up"
                class="progress mt-3 progress-primary border h-3 ml-3 w-64"
                value="50"
                max="100"
              ></progress>
            </div>
            <div data-os="zoom-in" className="flex my-2">
              <img
                data-aos="fade-up"
                width={30}
                src="https://i.ibb.co/p3bqbTZ/no6273n057-node-js-logo-nodejs-transparent-logo-google-search-removebg-preview.png"
                alt=""
              />
              <progress
                data-aos="fade-up"
                class="progress mt-3 progress-primary border h-3 ml-3 w-64"
                value="25"
                max="100"
              ></progress>
            </div>
          </div>
          <div className="ml-5 flex justify-evenly flex-col lg:flex-row sm:flex-row">
            <div className="flex my-2">
              <img
                data-aos="fade-up"
                width={30}
                src="https://i.ibb.co/H7TH3JY/kisspng-mongodb-database-clip-art-computer-icons-nosql-5b900df9c897c4-0301692015361674178216.png"
                alt=""
              />
              <progress
                data-aos="fade-up"
                class="progress mt-3 progress-primary border h-3 ml-3 w-64"
                value="30"
                max="100"
              ></progress>
            </div>
            <div className="flex my-2">
              <img
                data-aos="fade-up"
                width={30}
                className="rounded-full"
                src="https://i.ibb.co/Lk3sbNF/png-clipart-common-daisy-flower-saisy-text-logo-thumbnail.png"
                alt=""
              />
              <progress
                data-aos="fade-up"
                class="progress mt-3 progress-primary border h-3 ml-3 w-64"
                value="85"
                max="100"
              ></progress>
            </div>
          </div>
          <div className="ml-5 flex justify-evenly flex-col lg:flex-row sm:flex-row">
            <div className="flex my-2">
              <img
                data-aos="fade-up"
                width={30}
                src="https://i.ibb.co/5KH28Qq/919832.png"
                alt=""
              />
              <progress
                data-aos="fade-up"
                class="progress mt-3 progress-primary border h-3 ml-3 w-64"
                value="10"
                max="100"
              ></progress>
            </div>
            <div data-os="zoom-in" className="flex my-2">
              <img
                data-aos="fade-up"
                width={30}
                className="rounded-full"
                src="https://i.ibb.co/ckPgXCM/Rlogical-Blog-Images-thumbnail.png"
                alt=""
              />
              <progress
                data-aos="fade-up"
                class="progress mt-3 progress-primary border h-3 ml-3 w-64"
                value="5"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
