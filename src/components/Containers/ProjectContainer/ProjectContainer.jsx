import { useState } from "react";
import ProjectContainerStyled from "./ProjectContainer.styled";
import { AbsoluteFlexContainer } from "../Flex/FlexContainer";
import Text from "../../Text/Text";
import UnorderedList from "../../List/UnorderedList";
import ListChildren from "../../List/ListChildren/ListChildren";
import { AnimatePresence } from "framer-motion";
import { FadeInOutAnimation } from "../../../style/AnimationStyled";

function ProjectContainer({ image, name, technologies, description }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <ProjectContainerStyled
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      animate="show"
      initial="hidden"
      exit="exit"
      variants = {FadeInOutAnimation}
      layout
    >
      <img src={image} />
      <div className="bg"></div>
      <AnimatePresence mode="wait">
        {isHover && (
          <AbsoluteFlexContainer>
            <Text type="h3" text={name} />
            <Text type="p">{description}</Text>
            <UnorderedList gap="0.5em" wrap="wrap" childrenWidth="fit-content">
              {technologies.map((technology, index) => (
                <ListChildren
                  key={index}
                  fz="0.6875rem"
                  p="0.25em 1em"
                  br="50px"
                  bg="rgb(105,104,105)"
                  color="white"
                >
                  {technology}
                </ListChildren>
              ))}
            </UnorderedList>
          </AbsoluteFlexContainer>
        )}
      </AnimatePresence>
    </ProjectContainerStyled>
  );
}

export default ProjectContainer;
