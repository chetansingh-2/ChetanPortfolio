import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  html,
  css,
  reactjs,
  ubuntu,
  tailwind,
  mysql,
  linux,
  git,
  samaritans,
  oist,
  cognizant,
  gne,
  hackerrank,
  karate,
  portfolio,
  pglife,
  sortingvisualiser,
  aws,
  nodejs,
  mongodb,
  twowaits,
  chegg,
  casio,
  ncc,
  camp,
  chatapp,
  bookstore,
  cookie,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Qualifications",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Extracurricular",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Website Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Web-App Developer",
    icon: fullstack,
  },
];

const education = [
  {
    title: "Bachelor of Technology",
    company_name: "Guru Nanak Dev Engineering College, Ludhiana",
    icon: oist,
    iconBg: "#fff",
    date: "2020-2024",
    points: [
      "Courses undertaken: Data Strucutures and Algorithms, Operating Systems, Database Management Systems, Object Oriented Programming, Computer Network, Software Engineering etc",
      "CGPA: 8.22/10",
    ],
  },
  {
    title: "Senior Secondary",
    company_name: "Prayag Public School",
    icon: samaritans,
    iconBg: "#fff",
    date: "2019-2020",
    points: [
      "Courses undertaken: Physics, Chemistry and Mathematics.",
      "Percentage: 78%",
      ,
    ],
  },
  {
    title: "Secondary",
    company_name: "Prayag Public School",
    icon: samaritans,
    iconBg: "#fff",
    date: "2017-2018",
    points: [
      "Courses undertaken: Science, Social Studies, Languages and Mathematics.",
      "Percentage: 95%",
    ],
  },
];

const technologies = [
  // {
  //   name: "",
  //   icon: java,
  // },
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
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Nodejs",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  // {
  //   name: "Linux",
  //   icon: linux,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Mongodb",
    icon: mongodb,
  },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Twowaits Technologies Pvt Ltd",
    icon: twowaits,
    iconBg: "#fff",
    date: "June 2022 - Aug 2022",
    points: [
      "Developed a web application using HTML, CSS, Javascript for the client.",
      "Designed user-friendly UI/UX with responsive designs to make it easy for users to navigate through the website. ",
      "Designed various different websites with responsive designs and dynamic content. ",
    ],
  },
  {
    title: "Subject Matter Expert",
    company_name: "Chegg India Pvt Ltd",
    icon: chegg,
    iconBg: "#fff",
    date: "April 2022 - May 2023",
    points: [
      "Solved hundreds of Computer Science related doubts of the students from across the World.",
    ],
  },
  {
    title: "Marketing Intern",
    company_name: "Casio India",
    icon: casio,
    iconBg: "#4885ed",
    date: "Dec 2021 - Jan 2021",
    points: [
      "Proactively supported Casio's marketing team in executing digital marketing campaigns, conducting market research, and analyzing consumer data to contribute to brand awareness and product engagement strategies.",
    ],
  },
];

const extracurricular = [
  {
    title: "NCC Cadet",
    type: "Achievements: C Certificate  Holder",
    icon: ncc,
    iconBg: "#0077B5",
    date: "Oct 2020 - Feb 2023",
    points: ["Credential ID: PHHP&C/B CERT/ARMY/2022/0140"],
    credential:
      "https://drive.google.com/file/d/12yX7EGFifRADTCn5LRp8objnFfTGGf9o/view?usp=drive_link",
  },
  {
    title: "Member of Organizing Committee",
    type: "APEX: A College Event",
    icon: gne,
    iconBg: "#000",
    date: "April 8, 2022",
    points: ["Credential ID: APEX/OC/241"],
    credential:
      "https://drive.google.com/file/d/12zQNr08u70XrpEmEDlZrFrTCOyWHd2bQ/view?usp=drive_link",
  },
  // {
  //   title: "Web Development-Internshala",
  //   type: "Certification",
  //   icon: internshala,
  //   iconBg: "#4885ed",
  //   date: "Sept 2021",
  //   points: ["Credential ID: 281DB109-2DA8-A160-DCBC-C6C0F552B57C"],
  //   credential:
  //     "https://trainings.internshala.com/verify-certificate/?certificate_number=281DB109-2DA8-A160-DCBC-C6C0F552B57C",
  // },
  {
    title: "Attended No.4 Punjab Air Squadron Camp",
    type: "Adventure, Discipline, Combat",
    icon: camp,
    iconBg: "#d9dddc",
    date: "Dec 2021",
    points: [
      "Annual Training Camp of NCC: Parade, Drill Training, Social Works, Rifle Training, Adventurous activities.",
    ],
    credential:
      "https://drive.google.com/file/d/12zg6J7xk21Z159SNnrNDB32GlL0cRNDn/view?usp=drive_link",
  },
];

const projects = [
  {
    name: "Real Time Chat Application",
    description:
      "Designed and developed a real-time chat application using Socket.io, enabling seamless communication with instant message delivery and live updates.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "socketio",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://github.com/chetansingh-2/ChatApp",
    live_project_link: "https://chatapp-yraw.onrender.com",
  },
  {
    name: "Book Store",
    description:
      "Designed and implemented a feature-rich book store web application with full CRUD functionality, powered by secure user authentication through Auth0, showcasing proficiency in web development, database management, and user authentication systems.",
    tags: [
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: bookstore,
    source_code_link: "https://github.com/chetansingh-2/BookStore2",
    live_project_link: "https://book-frontend-rust.vercel.app/",
  },
  {
    name: "Cookie Consent Form",
    description:
      "Designed and implemented a user-friendly cookie consent form using JavaScript, enhancing website compliance with data privacy regulations. This feature effectively prompts and collects user consent before allowing access to the site, showcasing my expertise in web development, user experience, and data privacy best practices.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      // {
      //   name: "bootstrap",
      //   color: "blue-text-gradient",
      // },
    ],
    image: cookie,
    source_code_link:
      "https://github.com/chetansingh-2/my-projects--website-development",
    live_project_link: "https://polite-pastelito-1f07d7.netlify.app/",
  },
];

export {
  services,
  technologies,
  experiences,
  extracurricular,
  projects,
  education,
};
