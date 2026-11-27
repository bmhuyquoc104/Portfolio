import SocialContactStyled from "./SocialContact.styled";
import { SocialSectionAnimation } from "../../style/AnimationStyled";
import UnorderedList from "../List/UnorderedList";
import Link from "../Link/Link";
import ListChildren from "../List/ListChildren/ListChildren";
import { SocialIconStyled } from "../../style/ConstantStyled";
import { SOCIAL_LINKS } from "../../data/site";

function SocialContact() {
  return (
    <SocialContactStyled
      variants={SocialSectionAnimation}
      animate="show"
      initial="hidden"
    >
      <UnorderedList direction="column">
        {SOCIAL_LINKS.map(({ name, href, Icon }) => (
          <ListChildren key={name}>
            <Link target="_blank" href={href} label={name}>
              <Icon style={SocialIconStyled} />
            </Link>
          </ListChildren>
        ))}
      </UnorderedList>
    </SocialContactStyled>
  );
}

export default SocialContact;
