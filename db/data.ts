enum POSITION_ENUM {
  FRONTEND_DEVELOPER = "Front-end Developer",
  BACKEND_DEVELOPER = "Back-end Developer",
  SOFTWARE_ENGINEER = "Software Engineer",
  FULLSTACK_DEVELOPER = "Full-stack Developer"
}

type Team = {
  name: string,
  members: number
}

type Date = {
  startDate: string,
  endDate: string,
  duration: string
}

export type Project = {
  title: string,
  description: string,
  company: string,
  team: Team,
  technologies: Array<string>,
  position: POSITION_ENUM,
  responsibilities: Array<string>,
  date: Date,
  webLink: string
}

type Percentages = {
  text: string,
  percentage: number,
  svg: string
}

export const percentages: Array<Percentages> = [
  {
    text: "HTML",
    percentage: 98,
    svg: "/HTML5.svg.png",
  },
  {
    text: "CSS",
    percentage: 88,
    svg: "/CSS.3.svg.png",
  },
  {
    text: "JavaScript",
    percentage: 89,
    svg: "/Javascript.svg.png",
  },
  {
    text: "Vue",
    percentage: 90,
    svg: "/Vue.js_Logo_2.svg.png",
  },
  {
    text: "React",
    percentage: 92,
    svg: "/React-icon.svg.png",
  },
  {
    text: "Nuxt",
    percentage: 80,
    svg: "Nuxt_logo.svg.png",
  },
  {
    text: "Next",
    percentage: 80,
    svg: "/next-js.png",
  },
  {
    text: "Node",
    percentage: 95,
    svg: "/nodejs-logo.png",
  },
  {
    text: "TypeScript",
    percentage: 80,
    svg: "/typescript.png",
  },
  {
    text: "MySql",
    percentage: 75,
    svg: "/mysql-logo.svg",
  },
  {
    text: "Postgre",
    percentage: 70,
    svg: "/Postgresql_elephant.svg.png",
  },
  {
    text: "MongoDb",
    percentage: 93,
    svg: "/mongodb.svg",
  },
];

export const projects: Array<Project> = [
  {
    title: "BAYON APP : Digital Real Estate Marketplace",
    description: "",
    company: "BIGSOFT",
    team: {
      name: "Nekko",
      members: 2,
    },
    technologies: [
      "Nuxt.js (version 3)",
      "Pinia",
      "TailwindCss",
      "TypeScript",
      "Google Map API",
    ],
    position: POSITION_ENUM.FRONTEND_DEVELOPER,
    responsibilities: [
      "Design a Figma to modify the whole website",
      "Develop modern and user familiar filters for properties",
      "Setup visitor data by his network location when visiting to the website first time",
      "Develop reusable server side pagination component to bind with API",
      "Develop responsive for every break point",
      "Fetch Data using useFetch to provide fetching the same request multiple times",
      "Develop i18n for Myanmar language",
      "Develop Google map for every single properties on the map",
      "Develop middleware for user login",
    ],
    date: {
      startDate: "1 Oct 2024",
      endDate: "30 Jan 2025",
      duration: "Around 3 months",
    },
    webLink: "https://bayon-test.vercel.app/"
  },
  {
    title: "Events And Tickets Management System",
    description: "",
    company: "Ace Data Systems",
    team: {
      name: "React Team",
      members: 8,
    },
    technologies: ["Node.js", "Express.js", "MongoDb", "Mongoose", "React", "React Query", "Redux", "Redux Toolkit"],
    position: POSITION_ENUM.SOFTWARE_ENGINEER,
    responsibilities: [
      "Planning ERD and Business logic",
      "Develop Event, Ticket Services and filters, pagination logic",
      "Design a figma of the website",
      "Develop EventList and Filter and participated in other components"
    ],
    date: {
      startDate: "3 Oct 2023",
      endDate: "18 Oct 2023",
      duration: "Around 2 weeks",
    },
    webLink: ""
  },
  {
    title: "Job Recruitment And Offering Management System",
    description: "",
    company: "Ace Inspiration",
    team: {
      name: "Joblify",
      members: 4,
    },
    technologies: ["HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "Spring boot", "Hibernate", "JPA", "Spring Security", "Thymeleaf", "STOMP", "SockJS"],
    position: POSITION_ENUM.SOFTWARE_ENGINEER,
    responsibilities: [
      "ERD design",
      "Business logic",
      "Documentation",
      "Testing",
      "All candidate view page UI / UX with HTML, CSS, Bootstrap, JavaScript, JQuery and other libraries",
      "All function for candidate actions such as other related jobs to show, advanced filter for candidate to enhance job- seeking journey and enjoyable job applying experiences",
      "All notification design and flow using STOMP and SockJS and JQuery and Izitoast.js for floating notification for every active user.Make notification text to go related link and select to delete and make as read for all notification",
      "Advanced filter logic and design by using JQuery, JavaScript, HTML, CSS and Criteria Query to fetch data from server side which contain date range picker and range bar",
      "Vacancy uploading, updating, closing and reopening for different roles with quick and understandable actions.In uploading make some field will auto complete.Make single page design for update, close and reopen vacancy by switching mode"
    ],
    date: {
      startDate: "3 july 2023",
      endDate: "1 Sep 2023",
      duration: "Around 2 months",
    },
    webLink: ""
  },
  {
    title: "Hotel Reservation, Rooms And Blogs Management System ",
    description: "",
    company: "Ace Inspiration",
    team: {
      name: "Nekko",
      members: 3,
    },
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "JSTL", "Spring MVC", "MySQL"],
    position: POSITION_ENUM.SOFTWARE_ENGINEER,
    responsibilities: [
      "ERD design",
      "Business logic",
      "Room and reviews system",
      "Account system",
      "Booking system",
      "Admin panel",
      "Blog and comments system"

    ],
    date: {
      startDate: "1 Mar 2023",
      endDate: "1 April 2023",
      duration: "Around 1 month",
    },
    webLink: ""
  },
];
