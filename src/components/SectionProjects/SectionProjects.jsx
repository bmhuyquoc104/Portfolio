import React from "react";
import SectionProjectsStyled from "./SectionProjects.styled";
import Text from "../Text/Text";

function SectionProjects() {
  return (
    <SectionProjectsStyled id="projects">
      <Text color="var(--clr_primary_color)" type="h2" text="My Projects" />
    </SectionProjectsStyled>
  );
}

export default SectionProjects;
