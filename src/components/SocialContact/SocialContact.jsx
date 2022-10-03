import React from "react";
import SocialContactStyled from "./SocialContact.styled";
import { SocialSectionAnimation } from "../../style/AnimationStyled";
import UnorderedList from "../List/UnorderedList";
import Link from "../Link/Link";
import ListChildren from "../List/ListChildren/ListChildren";
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
          children={
            <Link
              target="_blank"
              href="https://www.facebook.com/bmhuyquoc104"
              children={<FaFacebook style={SocialIconStyled} />}
            />
          }
        />
        <ListChildren
          children={
            <Link
              target="_blank"
              href="https://github.com/bmhuyquoc104"
              children={<FaGithub style={SocialIconStyled} />}
            />
          }
        />
        <ListChildren
          children={
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/qu%E1%BB%91c-huy-v%C3%B5-5a2630234/"
              children={<FaLinkedinIn style={SocialIconStyled} />}
            />
          }
        />
        <ListChildren
          children={
            <Link
              target="_blank"
              href="https://twitter.com/QucHuyV8"
              children={<FaTwitter style={SocialIconStyled} />}
            />
          }
        />
        <ListChildren
          children={
            <Link
              target="_blank"
              href="https://www.instagram.com/bmhuyquoc/"
              children={<FaInstagram style={SocialIconStyled} />}
            />
          }
        />
      </UnorderedList>
    </SocialContactStyled>
  );
}

export default SocialContact;
