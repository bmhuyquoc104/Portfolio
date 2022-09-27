import React from "react";
import SocialContactStyled from "./SocialContact.styled";
import { SocialSectionAnimation } from "../../style/AnimationStyled";
import UnorderedList from "../List/UnorderedList";

function SocialContact() {
  return (
    <SocialContactStyled
      variants={SocialSectionAnimation}
      animate="show"
      initial="hidden"
    >
      <UnorderedList direction="column" />
    </SocialContactStyled>
  );
}

export default SocialContact;
