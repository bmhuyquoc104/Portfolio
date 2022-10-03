import { useContext } from "react";
import { TabContext } from "../../hooks/useContext";
import GridContainer from "../Containers/Grid/GridContainer";
import ProjectContainer from "../Containers/ProjectContainer/ProjectContainer";
import { AnimatePresence } from "framer-motion";

function Tab() {
  const { selectedTab } = useContext(TabContext);
  return (
    <GridContainer
      className={selectedTab[0].id.includes("mobile") ? "mobile" : ""}
    >
      <AnimatePresence mode="wait">
        {selectedTab?.map((project) => (
          <ProjectContainer
            key={project.id}
            about={project.about}
            repo={project.repo}
            website={project.website}
            description={project.description}
            technologies={project.technologies}
            name={project.name}
            image={project.image}
            id={project.id}
          />
        ))}
      </AnimatePresence>
    </GridContainer>
  );
}

export default Tab;
