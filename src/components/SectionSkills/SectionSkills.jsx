import React from "react";
import SectionSkillStyled from "./SectionSkills.styled";
import Text from "../Text/Text";

function SectionSkills() {
  return (
    <SectionSkillStyled id="skills">
      <Text
        color="var(--clr_primary_color)"
        type="h2"
        text="My Skills"
      />
    </SectionSkillStyled>
  );
}

export default SectionSkills;
