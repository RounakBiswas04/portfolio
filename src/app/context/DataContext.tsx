import React, { createContext, useContext } from "react";

// Define the data structure using TypeScript interfaces
interface Education {
  degree: string;
  degree_level: string;
  specialization: string;
  institution: string;
  gpa: string;
  year: string;
  addition_info?: string;
  courses: string[];
  logo: string;
}
interface Project {
  title: string;
  description: string;
  liveDemo?: string;
  github?: string;
  details?: string;
  technologies: string[];
  image: string;
}

interface WorkExperience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills: string[];
}

interface Data {
  name: string;
  full_name: string;
  pronunciation?: string;
  experience: string;
  designation: string;
  skills: string[];
  location: string;
  resume: string;
  email: string;
  github: string;
  linkedin: string;
  hero_about: string;
  about_me: string;
  education: Education[];
  workex: WorkExperience[];
  projects: Project[];
}

// Define the initial data
const initialData: Data = {
  name: `Rounak`,
  full_name: "Rounak Biswas",
  experience: "1 year",
  designation: "Software Engineer",
  skills: [
    "React",
    "Redux",
    "JQuery",
    "Blazor",
    "MongoDB",
    "Python",
    "C#",
    ".Net",
    "Django",
  ],
  location: "Buffalo, NY",
  resume: "Rounak_Biswas_resume.pdf",
  email: "biswas.rounakofficial@gmail.com",
  github: "https://github.com/RounakBiswas04",
  linkedin: "https://www.linkedin.com/in/rounak-rbiswas/",
  hero_about: `I'm a Computer Science Graduate from the University at Buffalo.\nI'm actively looking for full-time SDE opportunities. If you have a role that I could be a good fit for, let's connect!`,
  about_me: ` Hi! I'm Rounak Biswas, a software developer with a strong passion for building robust and innovative applications. I hold a <span style="color: #00b4d8">Master’s degree in Computer Science from SUNY Buffalo</span>.\n\n My technical expertise includes <span style="color: #00b4d8"> Python, Java, SQL, JavaScript, HTML, CSS, Golang (Go), C, C++</span>. I have extensive experience with frameworks and technologies such as <span style="color: #00b4d8">React, Flask, Spring, Spring Boot, JUnit, Hadoop, PySpark, Tensorflow</span>. My proficiency in web development is complemented by my adeptness in database management, working with <span style="color: #00b4d8">PostgreSQL, MS SQL Server</span>.`,
  education: [
    {
      degree_level: "Master's",
      degree: "Master of Science in Computer Science",
      specialization: "Computer Science and Engineering",
      institution: "University at Buffalo (State University of New York)",
      gpa: "3.5/4.0",
      year: "August 2022 - July 2024",
      addition_info: "Graduate Researcher",
      courses: [
        "Analysis of Algorithms",
        "Distributed Systems",
        "Data Models Query Language",
        "Machine Learning",
        "Deep Learning",
        "Data Intensive Computing",
      ],
      logo: "/images/UB.png",
    },
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      degree_level: "Bachelor's",
      specialization: "Computer Science and Engineering",
      institution: "Asansol Engineering College",
      gpa: "3.3/4.0",
      year: "July 2016 - May 2020",
      courses: [
        "Object Oriented Programming",
        "Operating Systems",
        "Computer Networks",
        "Data Structures and Algorithms",
      ],
      logo: "/images/aec.png",
    },
  ],
  workex: [
    {
      company: "University at Buffalo, The State University of New York",
      title: "Graduate Researcher",
      startDate: "September 2023",
      endDate: "June 2024",
      description: [
        "•	Developed testing framework using Ounit for the choreographic language compiler.",
        "•	Engineered backend for IR to OCaml conversion, enabling efficient distributed communication.",
        "•	Played a vital role in pioneering the choreographic language compiler, driving breakthroughs in distributed computing research.",
      ],
      skills: ["Ocaml", "Ounit", "Functional Programming", "Git"],
    },
  ],
  projects: [
    {
      title: "Secure and Scalable MVC-Based System",
      description:
        "A a Spring Boot application with a React frontend, adhering to the MVC design pattern.",
      image: "/images/project.jpg",
      technologies: [
        "React",
        "Spring Boot",
        "SQL",
        "OpenAPI",
        "REST API",
        "Git",
        "Spring Security",
      ],
      github: "https://github.com/RounakBiswas04/SecureGradeHub--springboot",
    },
    {
      title: "Full-Stack Web Application Development",
      description: "A full-stack web application using JavaScript and React",
      image: "/images/project.jpg",
      technologies: ["JavaScript", "React", "HTML", "CSS", "Git"],
      github: "https://github.com/RounakBiswas04/React-Expedition",
    },
    {
      title: "Region-Based Memory Management",
      description:
        "A region-based memory management solution for the Ardupilot/ArduCopter drone software suite.",
      image: "/images/project.jpg",
      technologies: ["C++", "Git"],
      github: "https://github.com/RounakBiswas04/ardupilot_region-master",
    },
    {
      title: "Content Recommendation Systems",
      description:
        "Led a project on Netflix data analysis, optimizing data processing and achieving 90% recommendation accuracy with Python, Pandas, NumPy, Hadoop, and Spark.",
      image: "/images/project.jpg",
      technologies: ["Python,", "Pandas", "NumPy", "Hadoop", "PySpark", "Git"],
      github: "https://github.com/RounakBiswas04/Content-Recommendation-System",
    },
    {
      title: "Hospital Management Systems",
      description:
        "UI design with HTML/CSS and Flask-based backend for healthcare professionals",
      image: "/images/project.jpg",
      technologies: ["Flask", "PostgreSQL", "SQL", "Git"],
      github: "https://github.com/RounakBiswas04/Hospital-Management-System",
    },
  ],
};

// Create the context with a default value
const DataContext = createContext<Data | undefined>(undefined);

// Custom hook to use the data context
export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}

// DataProvider component
export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={initialData}>{children}</DataContext.Provider>
  );
};
