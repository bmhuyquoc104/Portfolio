import React from "react";
import UnorderedListStyled from "./UnorderedList.styled";
import ListChildren from "./ListChildren/ListChildren";
import Link from "../Link/Link";
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { SocialIconStyled } from "../../style/ConstantStyled";

function UnorderedList({direction}) {
  return (
    <UnorderedListStyled direction = {direction}>
      <ListChildren
        children={<Link children={<FaFacebook style={SocialIconStyled} />} />}
      />
      <ListChildren
        children={<Link children={<FaGithub style={SocialIconStyled} />} />}
      />
      <ListChildren
        children={<Link children={<FaLinkedinIn style={SocialIconStyled} />} />}
      />
      <ListChildren
        children={<Link children={<FaTwitter style={SocialIconStyled} />} />}
      />
      <ListChildren
        children={<Link children={<FaInstagram style={SocialIconStyled} />} />}
      />
    </UnorderedListStyled>
  );
}

export default UnorderedList;
