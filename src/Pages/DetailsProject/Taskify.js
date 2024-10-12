import React from "react";

const Taskify = () => {
  const project = {
    id: 5,
    name: "Taskify",
    type: "Management",
    live: "https://taskify-app-self.vercel.app/",
    cscode: "https://github.com/sohan284/taskify-app",
    sscode: "https://github.com/sohan284/taskify-server",
    desc: [
      "● Log in and  sign up for Admin , client and team members ,",
      "●  Admin have permission for delete users , clients and  thers also can assign project ,task , can delete and update status",
      "●  Client and users can show dashboard also can assign project and task",
      "●   Real time chatting with client or user.",
    ],
    tech: [
      "● Javascript",
      "● React",
      "● NodeJS",
      "● Mongodb",
      "● Material Ui",
      "● HTML",
      "● CSS(Tailwind)",
      "● Socket io",
      "● Material",
    ],
    img: [
      "https://i.ibb.co.com/ZGtttsX/Screenshot-4.png",
      "https://i.ibb.co.com/GHNx9qY/Screenshot-5.png",
      "https://i.ibb.co.com/vDW5Vjv/Screenshot-6.png",
      "https://i.ibb.co.com/xsrbt8W/Screenshot-7.png",
      "https://i.ibb.co.com/SwZtQnc/Screenshot-8.png",
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

export default Taskify;
