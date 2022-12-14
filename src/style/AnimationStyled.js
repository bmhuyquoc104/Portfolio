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
      staggerChildren: 0.04,
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
      delay: 2.9,
    },
  },
};

const ImageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "circIn",
      duration: 2,
    },
  },
};

const sectionAboutAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "easeIn",
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const sectionProjectAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 3,
    },
  },
};

const AbsoluteFlexContainerAnimation = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "easeIn",
      duration: 0.3,
    },
  },
  exit: {
    y: 10,
    opacity: 0,
    transition: {
      type: "easeOut",
      duration: 0.3,
    },
  },
};

const heading2Animation = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "afterChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    y: -25,
  },
};

const ScaleOutInAnimation = {
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
  hidden: {
    opacity: 0,
    scale: 0,
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
      type: "spring",
    },
  },
};

const FadeInOutAnimation = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const LinearXDirection = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    x: 100,
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.3,
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
  heading2Animation,
  sectionAboutAnimation,
  ImageAnimation,
  AbsoluteFlexContainerAnimation,
  ScaleOutInAnimation,
  FadeInOutAnimation,
  LinearXDirection,
  sectionProjectAnimation,
};
