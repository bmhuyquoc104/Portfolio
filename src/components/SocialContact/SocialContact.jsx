import React from "react";
import SocialContactStyled from "./SocialContact.styled";
import { SocialSectionAnimation } from "../../style/AnimationStyled";
import UnorderedList from "../List/UnorderedList";
import Link from "../Link/Link"
import ListChildren from "../List/ListChildren/ListChildren"
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { SocialIconStyled } from "../../style/ConstantStyled";

function SocialContact() {
  return (
    <SocialContactStyled
      variants={SocialSectionAnimation}
      animate="show"
      initial="hidden"
    >
      <UnorderedList direction="column">
        <ListChildren
          children={<Link children={<FaFacebook style={SocialIconStyled} />} />}
        />
        <ListChildren
          children={<Link children={<FaGithub style={SocialIconStyled} />} />}
        />
        <ListChildren
          children={
            <Link children={<FaLinkedinIn style={SocialIconStyled} />} />
          }
        />
        <ListChildren
          children={<Link children={<FaTwitter style={SocialIconStyled} />} />}
        />
        <ListChildren
          children={
            <Link children={<FaInstagram style={SocialIconStyled} />} />
          }
        />
      </UnorderedList>
    </SocialContactStyled>
  );
}

export default SocialContact;
