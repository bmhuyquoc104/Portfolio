import React from "react";
import ProjectDetailContainerStyled from "./ProjectDetailContainer.styled";
import { FlexContainer } from "../Flex/FlexContainer";
import { IconStyled } from "../../../style/ConstantStyled";
import Text from "../../Text/Text";
import UnorderedList from "../../List/UnorderedList";
import ListChildren from "../../List/ListChildren/ListChildren";
import { IoArrowUndoCircle } from "react-icons/io5";
import { LinearXDirection } from "../../../style/AnimationStyled";

function ProjectDetailContainer({
  name,
  description,
  image,
  website,
  repo,
  about,
  technologies,
  setLearnMore,
}) {
  return (
    <ProjectDetailContainerStyled
      variants={LinearXDirection}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <FlexContainer
        onClick={() => setLearnMore(false)}
        cursor="pointer"
        gap="0.25em"
        justifyContent="flex-start"
        alignItems="center"
      >
        <IoArrowUndoCircle style={IconStyled} />
        <Text type="p">Back</Text>
      </FlexContainer>
      <FlexContainer direction="column" alignItems="flex-start" gap="1.2em">
        <Text type="h3" text={name} />
        <Text type="p">{description}</Text>
        <img src={image} alt={`${name} project image`} />
        <Text type="h4" text="About" />
        <Text type="p">{about}</Text>
        <Text type="h4" text="Technologies" />
        <UnorderedList
          p="0"
          gap="0.75em"
          wrap="wrap"
          width="100%"
          height="100%"
          childrenWidth="fit-content"
        >
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
        <Text type="h4" text="Websites" />

        <Text link={website} target="_blank" type="a" text={website} />
        <Text type="h4" text="Source Code" />
        <Text link={repo} target="_blank" type="a" text={repo} />
      </FlexContainer>
    </ProjectDetailContainerStyled>
  );
}

export default ProjectDetailContainer;
