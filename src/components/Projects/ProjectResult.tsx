import React from "react";

interface ProjectDetailsResultProps {
  filteredProjectData: any;
}

const ProjectResult = (props: ProjectDetailsResultProps) => {
  const { filteredProjectData } = props;
  return (
    <section className="lg:w-[70%] w-[90%] mt-[5vh] h-fit py-5 bg-transparent">
      <h2 className="w-full xl:mx-[25vh] lg:mx-[15vh] mx-5 xl:text-[70px] md:text-[50px] text-[40px] text-[#defb81] font-bold">
        Result
      </h2>

      {filteredProjectData.map((data: any) => (
        <p
          className="w-full xl:mx-[25vh] lg:mx-[15vh] mx-5 text-[15px] mt-5 md:text-[20px] text-[#e7d3ff] font-[400]"
          key={data.result}
        >
          {data.result}
        </p>
      ))}
    </section>
  );
};

export default ProjectResult;
