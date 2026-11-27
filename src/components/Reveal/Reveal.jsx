import { m } from "motion/react";

// Fades an element up once as it enters the viewport. `as` picks the tag (h1, p, div...).
function Reveal({ as = "div", delay = 0, children, ...rest }) {
  const Tag = m[as];
  return (
    <Tag
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
