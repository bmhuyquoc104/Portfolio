import { imageResource } from "./imageResource";

const projects = {
  web: [
    {
      id: "web-1",
      name: "Countries Discovery",
      description: "Explore all countries' information from your website.",
      about:
        "A responsive website that built to let a user research and gain knowledge of all countries'data on the world. The product provides customize search and filter option for user to get access to any countries ",
      technologies: [
        "React",
        "Styled Components",
        "React Query",
        "React Router",
      ],
      image: `${imageResource.CountryWebsite}`,
      website: "https://bmhuyquoc104-countries-website.netlify.app/",
    },
  
  ],
  mobile: [
    {
      id: "mobile-1",
      name: "Countries",
      description: "Explore all countries' information from your website.",
      about:
        "A responsive website that built to let a user research and gain knowledge of all countries'data on the world. The product provides customize search and filter option for user to get access to any countries ",
      technologies: [
        "React",
        "Styled Components",
        "React Query",
        "React Router",
      ],
      image: `${imageResource.CountryWebsite}`,
      website: "https://bmhuyquoc104-countries-website.netlify.app/",
    },
    {
      id: "mobile-2",
      name: "Countries Sir",
      description: "Explore all countries' information from your website.",
      about:
        "A responsive website that built to let a user research and gain knowledge of all countries'data on the world. The product provides customize search and filter option for user to get access to any countries ",
      technologies: [
        "React",
        "Styled Components",
        "React Query",
        "React Router",
      ],
      image: `${imageResource.CountryWebsite}`,
      website: "https://bmhuyquoc104-countries-website.netlify.app/",
    },
   
  ],
};

export const { web: web } = projects;

const { mobile: mobile } = projects;

const all = [...web, ...mobile];

const projectsArr = { ...projects, all: all };

export default projectsArr;
