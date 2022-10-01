import { useContext } from "react";
import { TabContext } from "../../hooks/useContext";
import GridContainer from "../Containers/Grid/GridContainer";
import ProjectContainer from "../Containers/ProjectContainer/ProjectContainer";
import { AnimatePresence } from "framer-motion";

function Tab() {
  const { selectedTab } = useContext(TabContext);
  console.log(selectedTab);
  return (
    <GridContainer>
      <AnimatePresence>
        {selectedTab?.map((project) => (
          <ProjectContainer
            key={project.id}
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
