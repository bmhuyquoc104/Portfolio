import { useContext } from "react";
import { TabContext } from "../../hooks/useContext";
import GridContainer from "../Containers/Grid/GridContainer";
import ProjectContainer from "../Containers/ProjectContainer/ProjectContainer";
import { AnimatePresence } from "framer-motion";
import { listChildrenAnimation } from "../../style/AnimationStyled";


function Tab() {
  const { selectedTab } = useContext(TabContext);
  return (
    <GridContainer>
      <AnimatePresence>
        {selectedTab?.map((project) => (
          <ProjectContainer
            key={project.id}
            variants={listChildrenAnimation}
            about={project.about}
            repo={project.repo}
            website={project.website}
            description={project.description}
            technologies={project.technologies}
            name={project.name}
            image={project.image}
          />
        ))}
      </AnimatePresence>
    </GridContainer>
  );
}

export default Tab;
