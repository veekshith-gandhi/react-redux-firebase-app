import React from "react";

import ProjectSummary from "./ProjectSummary";
import { useSelector } from "react-redux";

export default function ProjectList() {
  const { projects } = useSelector((state) => state.project);

  return (
    <div>
      {projects &&
        projects.map((project) => {
          return <ProjectSummary project={project} key={project.id} />;
        })}
    </div>
  );
}
