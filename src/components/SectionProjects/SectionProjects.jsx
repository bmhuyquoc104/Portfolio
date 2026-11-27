import React from "react";
import SectionProjectsStyled from "./SectionProjects.styled";
import Text from "../Text/Text";
import {
  FixedFlexContainer,
  FlexContainer,
} from "../Containers/Flex/FlexContainer";
import UnorderedList from "../List/UnorderedList";
import ListChildren from "../List/ListChildren/ListChildren";
import GridContainer from "../Containers/Grid/GridContainer";
import ProjectContainer from "../Containers/ProjectContainer/ProjectContainer";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  heading2Animation,
  sectionAboutAnimation,
  listParentAnimation,
} from "../../style/AnimationStyled";
import projects from "../../assets/ProjectList";
import ProjectDetailContainer from "../Containers/ProjectDetailContainer/ProjectDetailContainer";

function SectionProjects() {
  const arr = [
    {
      title: "Web Development",
      items: projects.web,
    },
    {
      title: "Mobile Development",
      items: projects.mobile,
    },
  ];
  const [selectedTab, setSelectedTab] = useState(arr[0].items);
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  return (
    <>
      <SectionProjectsStyled
        whileInView="show"
        initial="hidden"
        viewport={{ once: true }}
        variants={sectionAboutAnimation}
        id="projects"
      >
        <Text
          variants={heading2Animation}
          color="var(--clr_primary_color)"
          type="h2"
          text="My Projects"
        />
        <FlexContainer direction="column" alignItems="center">
          <UnorderedList childrenWidth="max-content">
            {arr.map((element) => (
              <ListChildren
                isActive={element.items == selectedTab ? "active" : "inactive"}
                key={element.title}
                onClick={() => {
                  setSelectedTab(element.items);
                }}
              >
                {element.title}
                {element.items == selectedTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </ListChildren>
            ))}
          </UnorderedList>
        </FlexContainer>
        <GridContainer
          className={selectedTab[0].kind === "mobile" ? "mobile" : ""}
        >
          <AnimatePresence mode="wait">
            {selectedTab.map((p) => (
              <ProjectContainer key={p.id} project={p} onLearnMore={setProject} />
            ))}
          </AnimatePresence>
        </GridContainer>
        <AnimatePresence mode="wait">
          {project && (
            <div>
              <FixedFlexContainer />
              <ProjectDetailContainer
                project={project}
                onClose={() => setProject(null)}
              />
            </div>
          )}
        </AnimatePresence>
      </SectionProjectsStyled>
    </>
  );
}

export default SectionProjects;
