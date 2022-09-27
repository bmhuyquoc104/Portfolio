const DropDownAnimation = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

const listChildrenAnimation = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

const listParentAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const homeAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 1.2,
      type: "tween",
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const LogoAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "easeIn",
      duration: 1,
    },
  },
};

const SectionAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "easeIn",
      delay: 1.25,
    },
  },
};

const SocialSectionAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "easeIn",
      delay: 2.5,
    },
  },
};

export {
  DropDownAnimation,
  listParentAnimation,
  listChildrenAnimation,
  LogoAnimation,
  homeAnimation,
  SectionAnimation,
  SocialSectionAnimation,
};