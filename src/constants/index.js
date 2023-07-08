import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  cpp,
  mysql,
  materialUI,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  DAV,
  ChitkaraUni,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  omnifood,
  natours,
} from "../assets";

// import { cpp } from "../assets/tech";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "CPP",
    icon: cpp,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Material UI",
    icon: materialUI,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "Express",
  //   icon: express,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "B.E CSE",
    company_name: "Chitkara University",
    grade: "CGPA : 9.95",
    icon: ChitkaraUni,
    // iconBg: "#383E56",
    iconBg: "#E6DEDD",

    width: "150%",
    height: "150%",
    date: "Aug 2020 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "12th",
    company_name: "DAV Public School",
    grade: "Percentage : 82%",
    width: "85%",
    height: "80%",
    icon: DAV,
    iconBg: "#E6DEDD",
    date: "April 2019 - Mar 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "10th",
    company_name: "DAV Public School",
    grade: "Percentage : 81%",
    width: "85%",
    height: "80%",
    icon: DAV,
    iconBg: "#E6DEDD",
    date: "April 2017 - Mar 2018",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Natours",
    description:
      "A comprehensive travel booking platform that allows users to book tours and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "NodeJs|Express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "mongoose",
        color: "pink-text-gradient",
      },
      {
        name: "pug",
        color: "orange-text-gradient",
      },
    ],
    image: natours,
    project_link: "https://natours-chiragginotra.vercel.app/",
    source_code_link: "https://github.com/ChiragGinotra/natours",
  },

  {
    name: "Omnifood",
    description:
      "A Restaurant based food deliver web page that allows users to select the varieties of mouth-watering dishes and also buy a food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "orange-text-gradient",
      },
    ],
    image: omnifood,
    project_link: "https://chiragginotra.github.io/Restaurant-Omnifood-/",
    source_code_link: "https://github.com/ChiragGinotra/Restaurant-Omnifood-",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, projects };
