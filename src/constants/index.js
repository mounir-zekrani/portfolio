import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    Laravel,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    php,
    bootstrap,
    git,
    gemadec1,
    freelance,
    red360,
    easy,
    LogoEPI,
    m2s,
    atda,
    jobit,
    tripguide,
    threejs,
    aca1,
    amld,
    easylearning,
    syndic,
    darla,
    redtic,
    redwan,
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Database Manager",
      icon: mobile,
    },
    {
      title: "Server Manager",
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Laravel",
      icon: Laravel,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Web Developer Intern",
      company_name: "POLYTECH SCHOOL OF COMPUTER SCIENCE AND MANAGEMENT",
      icon: LogoEPI,
      iconBg: "#E6DEDD",
      date: "June 2019 - July 2019",
      points: [
        "Developing the school's website using PHP and MySQL databases."
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "EASY CONTROL",
      icon: easy,
      iconBg: "#383E56",
      date: "July 2020 – August 2020",
      points: [
        "Developing and maintaining an E-Learning platform using the PHP LARAVEL Framework."
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "MONDIALE SOLUTION SERVICES",
      icon: m2s,
      iconBg: "#E6DEDD",
      date: "June 2022 – August 2022",
      points: [
        "Developing websites using the CMS WordPress.",
        "Developing a condominium syndicate platform using the PHP LARAVEL Framework.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "RED 360 AGENCY",
      icon: red360,
      iconBg: "#383E56",
      date: "January 2023 – December 2023",
      points: [
        "Developing websites using the CMS WordPress.",
        "Creating web applications using the PHP LARAVEL Framework.",
        "Optimizing for search engines (SEO).",
        "Hosting websites and configuring servers.",
      ],
    },
    {
      title: "Freelance Web Developer",
      company_name: "Freelance",
      icon: freelance,
      iconBg: "#E6DEDD",
      date: "January 2024 – Present",
      points: [
        "Developing websites using the CMS WordPress.",
        "Creating web applications using the PHP LARAVEL Framework.",
        "Creating web applications using the Reactjs Framework.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I had the pleasure of collaborating with Mounir Zekrani on a challenging web development project, and I couldn't be happier with the outcome.",
      name: "F.Hamza",
      designation: "Project Manager",
      company: "Confidential",
      image: "#",
    },
    {
      testimonial:
        "I've had the opportunity to collaborate with Mounir zekrani on multiple occasions, and I can't speak highly enough of their talents as a full-stack web developer.",
      name: "A.Yassine",
      designation: "Colleague",
      company: "",
      image: "",
    },
    {
      testimonial:
        "After Mounir optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "S.Abdelhakim",
      designation: "Team lead",
      company: "Confidential",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "GEMADEC",
      description:
        "Showcase website",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        
      ],
      image: gemadec1,
      source_code_link: "https://www.gemadec.com/",
    },
    {
      name: "LES ATDA",
      description:
        "Showcase website",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
       
      ],
      image: atda,
      source_code_link: "https://lesatda.com/",
    },
    {
      name: "AFRICAN CIO AWARDS",
      description:
        "Showcase website",
      tags: [
        {
          name: "WordPress",
          color: "green-text-gradient",
        },
       
      ],
      image: aca1,
      source_code_link: "https://awards.events-ciomag.com/",
    },
    {
      name: "AMLOOD",
      description:
        "Appointment Booking Website",
      tags: [
        {
          name: "WordPress",
          color: "green-text-gradient",
        },
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
      ],
      image: amld,
      source_code_link: "https://amlood.net",
    },
    {
      name: "EASY LEARNING",
      description:
        "E-Learning Platform",
      tags: [
        
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
      ],
      image: easylearning,
      source_code_link: "#",
    },
    {
      name: "SYNDIC AZ",
      description:
        "Condominium Syndicate Platform",
      tags: [
        {
          name: "WordPress",
          color: "green-text-gradient",
        },
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
      ],
      image: syndic,
      source_code_link: "https://syndicaz.com",
    },
    {
      name: "DAR LAAZOUZI",
      description:
        "Booking and Reservation Website",
      tags: [
        {
          name: "WordPress",
          color: "green-text-gradient",
        },
       
      ],
      image: darla,
      source_code_link: "https://darlaazouzi.com",
    },
    {
      name: "RED TIC",
      description:
        "Job Search Website",
      tags: [
        {
          name: "WordPress",
          color: "green-text-gradient",
        },
       
       
      ],
      image: redtic,
      source_code_link: "https://red-tic.com",
    },
    {
      name: "RED WAN",
      description:
        "Showcase website",
      tags: [
        {
          name: "WordPress",
          color: "green-text-gradient",
        },
       
      ],
      image: redwan,
      source_code_link: "https://red-wan.io",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  