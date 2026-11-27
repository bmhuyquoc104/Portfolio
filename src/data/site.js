import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

export const EMAIL = "huy.vo.softwareengineer@gmail.com";

export const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://www.facebook.com/bmhuyquoc104", Icon: FaFacebook },
  { name: "GitHub", href: "https://github.com/bmhuyquoc104", Icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/bmhuyquoc104/", Icon: FaLinkedinIn },
  { name: "Twitter", href: "https://twitter.com/QucHuyV8", Icon: FaTwitter },
  { name: "Instagram", href: "https://www.instagram.com/bmhuyquoc/", Icon: FaInstagram },
];

// Each name doubles as the react-scroll target (lower-cased), so it must match a section id.
export const NAV_SECTIONS = ["About", "Skills", "Experiences", "Projects", "Contact"];

export const SKILLS = [
  "FastAPI",
  "Azure Cloud Engineering",
  "Kubernetes",
  "Python",
  "AI Agents",
  "PostgreSQL",
];
