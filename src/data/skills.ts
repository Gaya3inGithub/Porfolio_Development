import {
  FaJava,
  FaCode,
  FaDatabase,
  FaBrain,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";
export const skills = [
  {
    category: "Backend Development",
    icon: FaJava,
    description:
      "Building scalable backend applications using Java technologies.",
    items: [
      "Java",
      "Spring Boot",
      "JDBC",
      "REST APIs",
      "SQL",
    ],
  },

  {
    category: "Frontend Development",
    icon: FaCode,
    description:
      "Developing responsive and interactive user interfaces.",
    items: [
      "React",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
  },

  {
    category: "Database",
    icon: FaDatabase,
    description:
      "Designing and managing relational databases.",
    items: [
      "MySQL",
      "JPA",
      "Hibernate",
    ],
  },

  {
    category: "Computer Science Fundamentals",
    icon: FaBrain,
    description:
      "Applying core concepts to build efficient software solutions.",
    items: [
      "Object-Oriented Programming",
      "Collections Framework",
      "Data Structures & Algorithms",
      "Problem Solving",
    ],
  },

  {
    category: "Software Engineering",
    icon: FaLaptopCode,
    description:
      "Designing maintainable, scalable and production-ready software.",
    items: [
      "System Design",
      "Low-Level Design",
      "Clean Code",
      "REST API Design",
    ],
  },

  {
    category: "Development Tools",
    icon: FaTools,
    description:
      "Tools used throughout development, testing and version control.",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Eclipse",
      "Postman",
    ],
  },
];
