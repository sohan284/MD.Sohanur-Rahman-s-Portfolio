import React from "react";

const Pro44 = () => {
  const project = {
    id: 6,
    name: "44pro",
    type: "E-commerce",
    live: "https://44pro.vercel.app/",
    cscode: "https://github.com/sohan284/44pro",
    sscode: "https://github.com/sohan284/44pro-server",
    desc: [
      "●  Log in and  signup with email otp",
      "●  Can Customize items different part and add to cart",
      "●  Procceed checkout and make payment by card",
      "●  See order list after login",
    ],
    tech: [
      "● Javascript",
      "● React",
      "● NodeJS",
      "● Mongodb",
      "● Material Ui",
      "● HTML",
      "● CSS(Tailwind)",
      "● Nodemailer",
      "● Material",
    ],
    img: [
      "https://i.ibb.co.com/ZWzj6YW/Screenshot-10.png",
      "https://i.ibb.co.com/LhStV8G/Screenshot-11.png",
      "https://i.ibb.co.com/vvYfxFm/Screenshot-12.png",
      "https://i.ibb.co.com/9VsQGR4/Screenshot-13.png",
    ],
  };
  return (
    <div className="flex my-10 justify-center">
      <div>
        <h1
          data-aos="fade-up"
          data-aos-duration="300"
          className="text-4xl  text-center font-bold text-primary "
        >
          {project.name}
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-duration="400"
          className="text-xl mb-3 text-center font-semibold text-primary "
        >
          {project.type}
        </h1>
        <hr />
        <div className="flex justify-evenly my-5">
          <a
            data-aos="zoom-in"
            data-aos-duration="3000"
            className="btn rounded-xl  bg-primary text-black font-bold"
            href={project.cscode}
          >
            CLIENT SITE
          </a>
          <a
            data-aos="zoom-in"
            data-aos-duration="3000"
            className="btn rounded-full bg-primary text-black font-bold"
            href={project.live}
          >
            LIVE
          </a>
          <a
            data-aos="zoom-in"
            data-aos-duration="3000"
            className="btn rounded-xl bg-primary text-black font-bold"
            href={project.sscode}
          >
            SERVER SITE
          </a>
        </div>
        <div class="h-96 carousel prjImg p-3 rounded-lx carousel-vertical rounded-box">
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            class="carousel-item h-full"
          >
            <img src={project.img[0]} />
          </div>
          <div class="carousel-item h-full">
            <img src={project.img[1]} />
          </div>
          <div class="carousel-item h-full">
            <img src={project.img[2]} />
          </div>
          <div class="carousel-item w-full h-full">
            <img src={project.img[3]} />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <hr className="mt-10" />
            <h1
              data-aos="fade-up"
              data-aos-duration="100"
              className="text-3xl px-3 font-bold text-primary my-5"
            >
              Technology:
            </h1>
            <ul className="text-primary ml-5 text-lg">
              <div className="text-md font-semibold">
                {project.tech.map((i) => (
                  <li data-aos="fade-up" data-aos-duration="200">
                    {i}
                  </li>
                ))}
              </div>
            </ul>
          </div>
          <div>
            <h1
              data-aos="fade-up"
              data-aos-duration="900"
              className="text-3xl px-3 mt-10 font-bold text-primary my-5"
            >
              Features:
            </h1>
            <ul className="text-primary ml-5 text-lg">
              <li data-aos="fade-up" data-aos-duration="1000">
                {project.desc[0]}
              </li>
              <li data-aos="fade-up" data-aos-duration="1100">
                {project.desc[1]}
              </li>
              <li data-aos="fade-up" data-aos-duration="1200">
                {project.desc[2]}
              </li>
              <li data-aos="fade-up" data-aos-duration="1300">
                {project.desc[3]}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pro44;
