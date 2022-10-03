import { imageResource } from "./imageResource";

const projects = {
  web: [
    {
      id: "web-6",
      name: "Invoice Management",
      description:
        "Help the business to manage and track all the invoices' status of a customer.",
      about:
        "A gorgeous and expertly website that supports the business to track the current status of invoice from the customer. This website also provides sending new invoice to the client.",
      technologies: [
        "React",
        "TypeScript",
        "Express",
        "MongoDB",
        "Framer Motion",
        "Redux",
        "React Hook Form",
        "React Query",
        "React Router",
      ],
      image: `${imageResource.InvoiceProject}`,
      website: "https://bmhuyquoc-invoice-website.netlify.app/",
      repo: "https://github.com/bmhuyquoc104/Invoice-website",
    },
    {
      id: "web-0",
      name: "Shoppingify",
      description:
        "Shoppingify allows you take your shopping list wherever you go.",
      about:
        "A gorgeous and expertly website that supports the client to buy the product and manage their history transaction. The website also helps the business to track their best-selling items by a chart and customize the supplying products. ",
      technologies: [
        "React",
        "Styled Components",
        "TypeScript",
        "Express",
        "MongoDB",
        "Framer Motion",
        "Redux Toolkit",
        "React Hook Form",
        "React Query",
        "React Router",
      ],
      image: `${imageResource.ShoppingifyImage}`,
      website: "https://bmhuyquoc104-shoppingify.netlify.app/",
      repo: "https://github.com/bmhuyquoc104/shoppingify",
    },
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
      repo: "https://github.com/bmhuyquoc104/countries-website",
    },
    {
      id: "web-2",
      name: "Software Jobs Discovery",
      description: "Find you dream jobs by your strengths.",
      about:
        "A responsive website that built to let a user find your wanted software job by filtering their skills or position.",
      technologies: [
        "React",
        "NodeJs",
        "Mongoose",
        "Material UI",
        "Redux Toolkit",
        "React Query",
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
      about:
        "An e-commerce website display a thumbnail of a sneaker product. Providing simple buying progress for user.",
      technologies: ["React", "Styled Components"],
      image: `${imageResource.SneakerWebsiteImage}`,
      website: "https://bmhuyquoc104.github.io/e-commerce/",
      repo: "https://github.com/bmhuyquoc104/e-commerce",
    },
    {
      id: "web-4",
      name: "Bamboo Monitor Riser",
      description:
        "A gorgeous and expertly built monitor stand that will ease neck and eye pain.",
      about:
        "Your screen will be raised to a more comfortable viewing height with the Bamboo Monitor Riser, a strong and fashionable base. By setting your monitor at eye level, you may find that your posture and level of comfort at work increase, which will keep you more attentive to the task at hand.The artisan-crafted simplicity of the design adds more desk space beneath your computer so that notepads, pens, and USB sticks can be kept underneath the stand.",
      technologies: ["React", "Styled Components"],
      image: `${imageResource.CrowdFundWebsiteImage}`,
      website: "https://bmhuyquoc104.github.io/react-crowd-funding-website/",
      repo: "https://github.com/bmhuyquoc104/react-crowd-funding-website",
    },
    {
      id: "web-7",
      name: "Interactive Comment",
      description:
        "Show the interactive comments from the client in social website",
      about:
        "A simple website to display the simple interact between users. This website allows the client to like, dislike, reply and add new comment to communicate with others.",
      technologies: ["React", "Styled Components", "React Hook Form"],
      image: `${imageResource.InteractiveWebsiteImage}`,
      website: "https://bmhuyquoc104.github.io/react-interactive-comments/",
      repo: "https://github.com/bmhuyquoc104/react-interactive-comments",
    },
    {
      id: "web-5",
      name: "Loopstudios",
      description: "Help the business to introduce their company and products",
      about:
        "A gorgeous and expertly landing website to display the information of the loopstudios company",
      technologies: ["React", "Styled Components", "Framer Motion"],
      image: `${imageResource.LoopsStudioWebsiteImage}`,
      website: "https://bmhuyquoc104.github.io/loopstudio-landing-page-React2/",
      repo: "https://github.com/bmhuyquoc104/loopstudio-landing-page-React2",
    },
    {
      id: "web-8",
      name: "Snap",
      description: "Help the business to introduce their company and products",
      about:
        "A gorgeous and expertly landing website to display the information of the snap company",
      technologies: ["React", "Material UI"],
      image: `${imageResource.SnapWebsiteImage}`,
      website: "https://bmhuyquoc104.github.io/dropdown-nav-website/",
      repo: "https://github.com/bmhuyquoc104/dropdown-nav-website",
    },
  ],
  mobile: [
    {
      id: "mobile-0",
      name: "Universal",
      description: "Find your cinema and book the ticket!.",
      about:
        "A gorgeous and expertly cinema management app that let the client book the movie ticket online. This app also provides a list of available cinemas in each cities. The users can receive the latest discount notification and watch the trailer of streaming and upcoming movie in the cinema.",
      technologies: ["Java", "Firebase"],
      image: `${imageResource.UniversalAppImage}`,
      repo: "https://github.com/bmhuyquoc104/android_cinema_management",
    },
    {
      id: "mobile-1",
      name: "Ambrosia",
      description: "Explore all restaurants near you!.",
      about:
        "A gorgeous and expertly restaurant discovery app that provides client various of different type of restaurants in their area.",
      technologies: ["SwiftUI", "Firebase"],
      image: `${imageResource.AmbrosiaAppImage}`,
      repo: "https://bmhuyquoc104-countries-website.netlify.app/",
    },
    {
      id: "mobile-2",
      name: "Chinese Poker",
      description: "Improve your logical skill by playing chinese poker game!",
      about:
        "A gorgeous and expertly game that let the user play chinese poker game. This game also provides a leader board and different type of modes to suit all players.",
      technologies: ["SwiftUI"],
      image: `${imageResource.ChinesePokerAppImage}`,
      repo: "https://github.com/bmhuyquoc104/ChinesePoker2",
    },
    {
      id: "mobile-3",
      name: "Daredevil's Profile",
      description: "All you to need to know about Daredevil is here! ",
      about:
        "A gorgeous app that provides all information about daredevil character in marvel. This app is designed to marvel fan to follow their favorite super hero.",
      technologies: ["SwiftUI"],
      image: `${imageResource.DaredevilAppImage}`,
      repo: "https://github.com/bmhuyquoc104/Daredevil-App",
    },
  ],
};

export default projects;
