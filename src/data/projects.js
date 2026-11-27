import { imageResource } from "../assets/imageResource";

const projects = {
  web: [
    {
      id: "web-8",
      featured: 1, // 1-3: shown on the home page in this order; the rest live on /projects
      name: "Job Scout",
      description:
        "Scrapes six job boards daily into PostgreSQL and shows open jobs and visa-sponsorship stats for six countries.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "React", "AI Agents"],
      image: `${imageResource.JobScoutImage}`,
      repo: "https://github.com/bmhuyquoc104/job_scout",
      // The free-tier backend sleeps, so the demo can sit blank for ~30s on a cold start.
      demo: "https://job-scout-xi-eight.vercel.app",
    },
    {
      id: "web-6",
      name: "Invoice Management",
      description: "Manage and track all the invoices' status of a customer.",
      technologies: [
        "React",
        "TypeScript",
        "Styled Components",
        "Express",
        "MongoDB",
      ],
      image: `${imageResource.InvoiceProject}`,
      website: "https://bmhuyquoc-invoice-website.netlify.app/",
      repo: "https://github.com/bmhuyquoc104/Invoice-website",
    },
    {
      id: "web-7",
      name: "Hotel landing page",
      description: "Sample design for hotel's landing page.",
      technologies: [
        "React",
        "JavaScript",
        "Styled Components",
      ],
      image: `${imageResource.HotelAppImage}`,
      website: "https://theprincessofarenacamranhhome.netlify.app/",
      repo: "https://github.com/bmhuyquoc104/Hotel-Booking-Website",
    },
    {
      id: "web-0",
      featured: 3, // 1-3: shown on the home page in this order; the rest live on /projects
      name: "Shoppingify",
      description: "Take your shopping list wherever you go.",
      technologies: [
        "React",
        "Styled Components",
        "TypeScript",
        "Express",
        "MongoDB",
      ],
      image: `${imageResource.ShoppingifyImage}`,
      website: "https://bmhuyquoc104-shoppingify.netlify.app/",
      repo: "https://github.com/bmhuyquoc104/shoppingify",
    },
    {
      id: "web-2",
      name: "Jobs Finding",
      description: "Find you dream jobs by your strengths.",
      technologies: [
        "React",
        "Mongoose",
        "Material UI",
        "Redux Toolkit",
        "ExpressJS",
      ],
      image: `${imageResource.JobWebsiteImage}`,
      website: "https://bmhuyquoc104.github.io/client/",
      repo: "https://github.com/bmhuyquoc104/jobs-listing-website",
    },
    {
      id: "web-3",
      name: "Sneaker",
      description: "Beautiful thumbnail for display sneaker product.",
      technologies: ["React", "Styled Components"],
      image: `${imageResource.SneakerWebsiteImage}`,
      website: "https://bmhuyquoc104.github.io/e-commerce/",
      repo: "https://github.com/bmhuyquoc104/e-commerce",
    },
    {
      id: "web-4",
      name: "Bamboo Monitor Riser",
      description: "A gorgeous and expertly built monitor.",
      technologies: ["React", "Styled Components"],
      image: `${imageResource.CrowdFundWebsiteImage}`,
      website: "https://bmhuyquoc104.github.io/react-crowd-funding-website/",
      repo: "https://github.com/bmhuyquoc104/react-crowd-funding-website",
    },
    {
      id: "web-5",
      name: "Interactive Comment",
      description: "Interactive comments in social website",
      technologies: ["React", "Styled Components", "React Hook Form"],
      image: `${imageResource.InteractiveWebsiteImage}`,
      website: "https://bmhuyquoc104.github.io/react-interactive-comments/",
      repo: "https://github.com/bmhuyquoc104/react-interactive-comments",
    },
  ],
  mobile: [
    {
      id: "mobile-0",
      name: "Universal",
      description: "Find your cinema and book the ticket!",
      technologies: ["Java", "Firebase"],
      image: `${imageResource.UniversalAppImage}`,
      repo: "https://github.com/bmhuyquoc104/android_cinema_management",
    },
    {
      id: "mobile-1",
      featured: 2, // 1-3: shown on the home page in this order; the rest live on /projects
      name: "Ambrosia",
      description: "Explore all restaurants near you!",
      technologies: ["SwiftUI", "Firebase", "Swift"],
      image: `${imageResource.AmbrosiaAppImage}`,
      repo: "https://github.com/bmhuyquoc104/Ambrosia",
    },
    {
      id: "mobile-2",
      name: "Chinese Poker",
      description: "Improve your logical skill by playing chinese poker game!",
      technologies: ["SwiftUI", "Swift"],
      image: `${imageResource.ChinesePokerAppImage}`,
      repo: "https://github.com/bmhuyquoc104/ChinesePoker2",
    },
    {
      id: "mobile-3",
      name: "Daredevil's Profile",
      description: "All you to need to know about Daredevil is here! ",
      technologies: ["SwiftUI", "Swift"],
      image: `${imageResource.DaredevilAppImage}`,
      repo: "https://github.com/bmhuyquoc104/Daredevil-App",
    },
  ],
};

const withKind = (kind) => (project) => ({ ...project, kind });

const grouped = {
  web: projects.web.map(withKind("web")),
  mobile: projects.mobile.map(withKind("mobile")),
};

export const allProjects = [...grouped.web, ...grouped.mobile];
export default grouped;
