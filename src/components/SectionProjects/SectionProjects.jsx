import React from "react";
import SectionProjectsStyled from "./SectionProjects.styled";
import Text from "../Text/Text";
import {
  FixedFlexContainer,
  FlexContainer,
} from "../Containers/Flex/FlexContainer";
import UnorderedList from "../List/UnorderedList";
import ListChildren from "../List/ListChildren/ListChildren";
import Tab from "../Tab/Tab";
import { TabContext } from "../../hooks/useContext";
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
  const [project, setProject] = useState({});
  const [learnMore, setLearnMore] = useState(false);

  useEffect(() => {
    if (learnMore) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [learnMore]);

  return (
    <TabContext.Provider
      value={{
        selectedTab,
        setSelectedTab,
        project,
        setProject,
        learnMore,
        setLearnMore,
      }}
    >
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
        <Tab></Tab>
        <AnimatePresence mode="wait">
          {learnMore && (
            <div>
              <FixedFlexContainer />
              <ProjectDetailContainer
                website={project.website}
                image={project.image}
                repo={project.repo}
                name={project.name}
                about={project.about}
                technologies={project.technologies}
                description={project.description}
                id = {project.id}
                setLearnMore={setLearnMore}
              />
            </div>
          )}
        </AnimatePresence>
      </SectionProjectsStyled>
    </TabContext.Provider>
  );
}

export default SectionProjects;
