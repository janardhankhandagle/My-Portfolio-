import mocker from "../assets/mocker.png";
import fort from "../assets/fort.png";
import organic from "../assets/organic.png";
import Spotify from "../assets/Spotify.png";
import soil from "../assets/soil.jpg";



export const Bio = {
  name: "Janardhan Khandagle",
  roles: [
    "Full Stack Developer",
  ],
  instagram: "https://www.instagram.com/jk_.patil/",
  linkedin: "https://www.linkedin.com/in/janardhan-khandagle/",
  description:
    "As a dedicated Full Stack Developer, I specialize in creating seamless, user-focused solutions by integrating innovative design with robust, scalable functionality. With expertise in both front-end and back-end technologies, I am adept at solving complex problems and delivering high-performance systems tailored to business needs. My proactive approach to continuous learning ensures I remain at the forefront of advancements in the dynamic tech landscape, enabling me to build impactful and future-ready digital experiences.",
  github: "https://github.com/janardhankhandagle",
  gmail: "khandaglejanardhan@gmail.com",
  resume:
    "https://drive.google.com/file/d/1PpO5MNWZz3AG5E9atyK14Ic28nZVh5Ie/view?usp=sharing",
 

};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },

      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },

      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Tailwind CSS",
        image: " https://raw.githubusercontent.com/anshita005/My-Portfolio/main/tailwind-css-logo-png_seeklogo-354675.png",
      },
      {
        name:
          "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },

    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "data:image/png;base64,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",
      },



      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },

      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
     
    ],
  },

  {
    title: "Others",
    skills: [
      {
        name: "C",
        image:
          "https://raw.githubusercontent.com/anshita005/My-Portfolio/main/c-logo-png_seeklogo-272951.png",
      },
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Postman",
        image:
          "https://voyager.postman.com/logo/postman-logo-icon-orange.svg",
      },
      {
        name: "java",
        image: "data:image/png;base64,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",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },

    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://www.softgridinfo.in/sg.png",
    role: "MERN Stack Developer Intern",
    company: "Softgrid Info Pvt Ltd",
    date: "Feb 2024 - Present",
    desc: `Built a scalable, responsive, and efficient platform for technical aspirants, featuring practice modules, skill-building 
sessions, and expert consultation integrationImplemented secure user authentication using Google OAuth, ensuring 100% compliance with security best practices.
 • Integrated Google Calendar API, enabling seamless scheduling and event tracking, and increasing user convenience 
and productivity.`,
    skills: [
      "ReactJS",
      "HTML",
      "CSS",
      "JavaScript",
      "API Integration",
      "Bootstrap",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Google OAuth",
      "Google Calendar",
    ],
    doc: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Screenshot%20from%202024-01-25%2022-38-31.png?alt=media&token=2785903f-1a4e-41f5-afd2-6adcfe56d058",
  },
  {
    id: 5,
    img: "https://www.affworld.io/assets/images/avatars/favicon%20(2).ico",
    role: "Full Stack Developer Intern",
    company: "Affworld Technology Pvt Ltd",
    date: "Jan 2024 - Mar 2024",
    desc: `Created a dynamic and user-friendly website for an organic farm to promote fresh, sustainably grown organic products. 
The platform showcased product details and enabled direct sales, fostering a strong farm-to-table connection between 
farms and consumers.`,
    skills: [
      "ReactJS",
      "HTML",
      "CSS",
      "JavaScript",
      "API Integration",
      "Bootstrap",
      "MongoDB",
      "Node.js",
      "Express.js"
    ],
  },

];

export const education = [
  {
    id: 0,
    img: "https://dbatu.ac.in/wp-content/uploads/2016/12/logo.png",
    school: "Hi-Tech Institute Of Technology",
    date: "2022 -  2024",
    grade: " 8.03 CGPA",
    desc: "I have completed 4 years and have a CGPA of 8.03 . I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
    degree: "Bachelor of Technology - BTech, Computer Science",
  },
  {
    id: 0,
    img: "https://www.mahahsscboard.in/boardlogo.svg",
    school: "Padmavati College of Arts & Science",
    date: "2019 - 2020",
    grade: " 72%",
    degree: "Higher Secondary School Certificate (HSC)",
  },
];

export const projects = [
  {
    id: 11,
    title: "Job Portal Website",
    description: ` Built a scalable, responsive, and efficient platform for technical aspirants, featuring practice modules, skill-building 
      sessions, and expert consultation integration
 • Implemented secure user authentication using Google OAuth, ensuring 100% compliance with security best practices
 • Integrated Google Calendar API, enabling seamless scheduling and event tracking, and increasing user convenience 
    and productivity
 • Utilized React, Node.js, and Express.js to build a scalable platform with real-time database interaction using MongoDB, 
   resulting in a 30% reduction in database
 • Leverage UI frameworks like Bootstrap and Material-UI to improve platform usability and accessibility across devices, 
resulting in a 20% increase in user engagement.` ,
    image:
      mocker,
    tags: [
      "React Js",
      "Tailwind CSS",
      "Javascript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google OAuth",
      "Google Calendar",
      "HTML5",
      "CSS3",
      "Bootstrap"
    ],
    category: "web app",
    // github: "https://github.com/anshita005/Job-Portal",
    // webapp: "https://github.com/anshita005",
  },
  {
    id: 12,
    title: "Maharashtra Fort Tourism Website ",
    description:
      ` Developed a tourism website dedicated to showcasing the forts of Maharashtra, featuring an interactive map, detailed 
information about each fort, and a curated list of nearby hotels to enhance user experience and simplify travel planning
 • The platform includes historical facts, tourist tips, and comprehensive options for accommodation booking, providing 
a one-stop solution for travelers exploring Maharashtra's rich heritage.`,
 image:
     fort,
    tags: [

      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Javascript",
      "SQL",

    ],
    category: "web app",
    github: "https://github.com/janardhankhandagle/maharashtra-fort",
    webapp: "https://github.com/janardhankhandagle/maharashtra-fort",
  },
  {
    id: 9,
    title: "Organic Farm Website",
    description:
      ` Created a dynamic and user-friendly website for an organic farm to promote fresh, sustainably grown organic products. 
The platform showcased product details and enabled direct sales, fostering a strong farm-to-table connection between 
farms and consumers.`,
    image:
      organic,
    tags: [
      "React Js",
      "Tailwind CSS",
      "Javascript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "HTML5",
      "CSS3",
      "Bootstrap"

    ],
    category: "web app",
    github: "https://github.com/anshita005/SpendWise",
    webapp: "https://github.com/anshita005/SpendWise",
  },
  {
    id: 0,
    title: "Soil Moisturization System  ",
    description:
    "Designed a smart farming system to help farmers monitor their farms remotely. Included features like registration, login, and real-time data tracking.",
    image:
    soil,
    tags: ["HTML", "PHP", "Javascript", "GeminiAPI", "CSS3", "MySQL"],
    category: "web app",
    // github: "https://github.com/anshita005/Gemini-Clone-Project",
    // webapp: "https://github.com/anshita005/Gemini-Clone-Project",
  },
  {
    id: 13,
    title: "Spotify Clone",
    description:
      `The Spotify Clone project is a web or mobile application designed to replicate the core functionalities of Spotify, 
      the popular music streaming platform. This project is an excellent opportunity to practice building a dynamic, user-friendly 
      application while implementing advanced 
      features like audio streaming, playlist management, and user authentication.`,
       image:
    Spotify,
    tags: ["Javascript", "HTML5", "CSS3"],
    category: "web app",
    github: "https://github.com/janardhankhandagle/mp3musicplayer",
    webapp: "https://github.com/janardhankhandagle/mp3musicplayer",
  },

];

