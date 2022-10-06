import { useState, useContext } from "react";
import ProjectContainerStyled from "./ProjectContainer.styled";
import { AbsoluteFlexContainer } from "../Flex/FlexContainer";
import Text from "../../Text/Text";
import UnorderedList from "../../List/UnorderedList";
import ListChildren from "../../List/ListChildren/ListChildren";
import { AnimatePresence } from "framer-motion";
import { FadeInOutAnimation } from "../../../style/AnimationStyled";
import Button from "../../Button/Button";
import { TabContext } from "../../../hooks/useContext";

function ProjectContainer({
  image,
  name,
  technologies,
  website,
  repo,
  about,
  description,
  id,
}) {

  const [isHover, setIsHover] = useState(false);
  const { setLearnMore, setProject } = useContext(TabContext);
  return (
    <ProjectContainerStyled
      layout
      style={{ height: `${id.includes("mobile") ? "550px" : ""}` }}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      animate="show"
      initial="hidden"
      exit="exit"
      variants={FadeInOutAnimation}
    >
      <img className={id.includes("mobile") ? "mobile" : ""} src={image} />
      <div className="bg"></div>
      <AnimatePresence mode="wait">
        {isHover && (
          <AbsoluteFlexContainer className={id.includes("mobile") ? "mobile" : ""}>
            <Text type="h3" color = "white" text={name} />
            <Text color = "var(--clr_header_color_dark)" type="p">{description}</Text>
            <UnorderedList
              p="0"
              gap="0.5em"
              wrap="wrap"
              childrenWidth="fit-content"
            >
              {technologies.map((technology, index) => (
                <ListChildren
                  key={index}
                  fz="0.6875rem"
                  p="0.25em 1em"
                  br="50px"
                  bg="rgb(105,104,105)"
                  color="var(--clr_header_color_dark)"
                >
                  {technology}
                </ListChildren>
              ))}
            </UnorderedList>
            <Button
              onClick={() => {
                setLearnMore(true);
                setProject({
                  image: image,
                  about: about,
                  description: description,
                  technologies: technologies,
                  name: name,
                  website: website,
                  repo: repo,
                  id:id
                });
              }}
            >
              Learn more
            </Button>
          </AbsoluteFlexContainer>
        )}
      </AnimatePresence>
    </ProjectContainerStyled>
  );
}

export default ProjectContainer;
