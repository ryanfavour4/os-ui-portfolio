import React from "react";
import AnimatedItem from "./AnimatedItem";
import { MdOutlineClose } from "react-icons/md";


const Experience = ({ experience, setexperience }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 transition-opacity ${experience ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
    >
      <div className="bg-opacity-100 backdrop-blur-3xl border border-gray-400  w-[1000px] h-[500px] overflow-y-scroll p-1 rounded-lg shadow-xl  border-opacity-10">
        <div className="flex">
          <MdOutlineClose
            className="text-white text-4xl ml-auto p-1  hover:bg-red-600 rounded-tr-md rounded-br-md"
            onClick={() => {
              const audio = new Audio("click.wav");
              audio.play();
              setexperience(false);
            }}
          />
        </div>

        <div className="flex flex-col items-start justify-start p-5">
          <AnimatedItem animationConfig={{ delay: 0.1 }}>
            <div className="flex flex-col w-full">
              <h1 className="text-4xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
                Experience
              </h1>
              <section className="mt-2 text-white">
                <div className="container">
                  <div className="space-y-6">
                    {/* EcoHotels */}
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-lg font-medium">
                        October 2022 - Present
                      </h3>
                      <h4 className="text-md font-medium">
                        Techbeaver - Frontend Developer
                      </h4>
                      <p className="text-sm">
                        Improved website design to enhance the visual appeal
                        and user experience. Converted complex Figma designs
                        into functional screens. Implemented
                        conversion-focused design strategies resulting in
                        increased revenue. Optimized website performance for
                        faster loading times.
                      </p>
                    </div>

                    {/* TAFHUB */}
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-lg font-medium">November 2022 - September 2023</h3>
                      <h4 className="text-md font-medium">
                        Xplug - Frontend Developer (Lead)
                      </h4>
                      <p className="text-sm">
                        Led a team of developers, assisting in code debugging, project completion, and exposure to company's MVC
                        patterns in Frameworks.

                        Assisted in 40% of project planning and estimations, contributing to the development of project timelines.

                        Implemented conversion-focused design strategies resulting in increased revenue.
                      </p>
                    </div>

                    {/* Google Developer Students Club */}
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-lg font-medium">
                        April 2020 - January 2021
                      </h3>
                      <h4 className="text-md font-medium">
                        Uleval Technology - Frontend Developer / UI-UX Designer (Intern)
                      </h4>
                      <p className="text-sm">
                        Designed captivating user-friendly web applications using Figma.

                        Streamlined projects process by implementing Agile methodology, resulting in a 25% increase in team
                        productivity and on-time project delivery.
                      </p>
                    </div>

                    {/* ENACTUS */}
                    {/* <div className="flex flex-col space-y-2">
                      <h3 className="text-lg font-medium">
                        JANUARY 2022 - DECEMBER 2022
                      </h3>
                      <h4 className="text-md font-medium">
                        ENACTUS, In-person [Nigeria] - Technical Director
                      </h4>
                      <p className="text-sm">
                        Developed a functional website for ENACTUS Nilest
                        Team. Responsible for the maintenance, support, and
                        advice to team leader and faculty advisor about an
                        organization's systems and facilities and also
                        managing their website.
                      </p>
                    </div> */}

                    {/* Ahmadu Bello University */}
                    {/* <div className="flex flex-col space-y-2">
                      <h3 className="text-lg font-medium">
                        NOVEMBER 2018 - MARCH 2019
                      </h3>
                      <h4 className="text-md font-medium">
                        Ahmadu Bello University (ICICT), In-Person [Nigeria] -
                        I.T Intern
                      </h4>
                      <p className="text-sm">
                        Configured hardware, devices, and software to set up
                        workstations for the students learning in the
                        institute.
                      </p>
                    </div> */}

                    {/* JayWebtech */}
                    {/* <div className="flex flex-col space-y-2">
                      <h3 className="text-lg font-medium">
                        SEPTEMBER 2018 - MARCH 2020
                      </h3>
                      <h4 className="text-md font-medium">
                        JayWebtech, Remote [Nigeria] - Founder & Full Stack
                        Developer
                      </h4>
                      <p className="text-sm">
                        Founded JayWebtech and recruited 4 new core members.
                        Planned website/software development, converting
                        mockups and UI designs into usable products using the
                        appropriate tools for clients. Worked with
                        stakeholders (1000+ students) to build technical
                        solutions to real problems.
                      </p>
                    </div> */}
                  </div>
                </div>
              </section>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </div>
  )
}

export default Experience
