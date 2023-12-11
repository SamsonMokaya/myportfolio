import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/househelps.png"
          title="Domestic workers website"
          description="This website was built using vanilla php. It helps connect househelps to potential employers for daily and weekly tasks."
        />
        <ProjectCard
          src="/mtoto.png"
          title="Mtoto mobile app"
          description="This mobile app was built using flutter. It helps children learn the habit of saving using mpesa."
        />
        <ProjectCard
          src="/healthassistant.png"
          title="Health voice assistant"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Projects;
