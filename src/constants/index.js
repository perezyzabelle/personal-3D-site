import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
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
    sunlife,
    starbucks,
    tesla,
    waterloo,
    shopify,
    carrent,
    jobit,
    hairdentity,
    tripguide,
    youtube,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React Developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Social Media Coordinator",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "TypeScript",
      icon: typescript,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Innovation Developer",
      company_name: "Sun Life",
      icon: sunlife,
      iconBg: "#383E56",
      date: "May 2023 - Present",
      points: [
        "Built full-stack security applications in Java and ReactJS using the Auth0 database, APIs, and multi-factor authentication to create more secure web platforms.",
        "Developed web applications such as a Gamification quiz using ReactJS to enrich the customer experience by 15% and adopt new customer-centric business models.",
        "Designed prototypes using Figma and UX/UI techniques to create user-friendly applications.",
        "Collaborated with 5 other co-op students and 5 full-timers within an agile environment to deliver high-quality solutions and services in a timely and efficient manner.",
      ],
    },
    {
      title: "QA Developer",
      company_name: "University of Waterloo",
      icon: waterloo,
      iconBg: "#E6DEDD",
      date: "May 2022 - Aug 2022",
      points: [
        "Performed manual and automated testing on sites using PHP, XPath, and test-driven development  to improve the quality of the Waterloo Content Management System (WCMS) by 10%.",
        "Built websites by running Pantheon scripts on Terminal to respond to site requests made by over 50 members of the university community.",
        "Executed site migration by running Pantheon scripts to upgrade the university’s content management system from WCMS 2 to WCMS 3.",
        
      ],
    },
    
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Hairdentity",
      description:
        "Hair texture-scanner web application using HTML, CSS, JavaScript, Google Cloud storage, AutoML on a 4-person team at the NSBE Hackathon to advocate the importance of hair, an integral part of Black culture",
      tags: [
        /*
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },*/
      ],
      image: hairdentity,
      source_code_link: "https://devpost.com/software/hairdentity",
    },
    {
      name: "Youtube Clone",
      description:
        "Web application that uses the same youtube functionality using Material UI, RapidAPI to access videos, in React.                                         ",
      tags: [ /*
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },*/
      ],
      image: youtube,
      source_code_link: "https://github.com/",
    },
    /*{
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },*/
  ];
  
  export { services, technologies, experiences, testimonials, projects };