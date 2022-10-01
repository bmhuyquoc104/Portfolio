import React from "react";
import SectionProjectsStyled from "./SectionProjects.styled";
import Text from "../Text/Text";
import { FlexContainer } from "../Containers/Flex/FlexContainer";
import UnorderedList from "../List/UnorderedList";
import ListChildren from "../List/ListChildren/ListChildren";
import Tab from "../Tab/Tab";
import { TabContext } from "../../hooks/useContext";
import { useState } from "react";
import { motion } from "framer-motion";
import { heading2Animation,sectionAboutAnimation } from "../../style/AnimationStyled";
import projectsArr from "../../assets/ProjectList";
function SectionProjects() {
  const arr = [
    {
      title: "All",
      items: projectsArr.all,
    },
    {
      title: "Web Development",
      items: projectsArr.web,
    },
    {
      title: "Mobile Development",
      items: projectsArr.mobile,
    },
  ];
  const [selectedTab, setSelectedTab] = useState(arr[0].items);

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
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
            {/* <ListChildren
              isActive={isActive}
              onClick={() => {
                setSelectedTab(all);
                setIsActive(true);
              }}
            >
              All
            </ListChildren>
            <ListChildren
              isActive={isActive}
              onClick={() => {
                setSelectedTab(projects.web);
                setIsActive(true);
              }}
            >
              Web Development
            </ListChildren>
            <ListChildren
              isActive={isActive}
              onClick={() => {
                setSelectedTab(projects.mobile);
                setIsActive(true);
              }}
            >
              Mobile Development
            </ListChildren> */}
          </UnorderedList>
        </FlexContainer>
        <Tab></Tab>
      </SectionProjectsStyled>
    </TabContext.Provider>
  );
}

export default SectionProjects;
