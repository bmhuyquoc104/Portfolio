import React from "react";
import SectionContactStyled from "./SectionContact.styled";
import Text from "../Text/Text";

function SectionContact() {
  return (
    <SectionContactStyled id="contact">
      <Text color="var(--clr_primary_color)" type="h2" text="Contact me" />
    </SectionContactStyled>
  );
}

export default SectionContact;
